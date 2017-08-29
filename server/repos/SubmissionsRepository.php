<?php
class SubmissionsRepository {
    public function create(Submission $submission): int {
        DB::query('
            INSERT INTO submissions SET
                user_id = :uid,
                submission_date_added = NOW(),
                submission_date_updated = NOW()
        ', [
            ':uid' => $submission->getUserId()
        ]);

        return DB::get()->lastInsertId();
    }

    private function generateWhereClause(\stdClass $options): string {
        $clauses = [];

        if (isset($options->approved) && is_numeric($options->approved) && $options->approved >= 0 && $options->approved <= 1) {
            $clauses[] = 'submission_approved = '. intval(($options->approved));
        }

        if (isset($options->rejected) && is_numeric($options->rejected) && $options->rejected >= 0 && $options->rejected <= 1) {
            $clauses[] = 'submission_rejected = '. intval(($options->rejected));
        }

        if (count($clauses)) {
            return 'WHERE '. join(' AND ', $clauses);
        }

        return '';
    }

    private function map(\stdClass $object): Submission {
        $submission = new Submission();
        $submission->setId($object->submission_id);
        $submission->setUserId($object->user_id);
        $submission->setApproved($object->submission_approved);
        $submission->setRejected($object->submission_rejected);
        $submission->setDateAdded($object->submission_date_added);
        $submission->setDateUpdated($object->submission_date_updated);
        return $submission;
    }

    public function read(int $submissionId): Submission {
        $result = DB::query('SELECT * FROM submissions WHERE submission_id = :id', [
            ':id' => $submissionId
        ]);

        if ($result === false || !isset($result[0]->submission_id) || !isset($result[0]->submission_approved) || !isset($result[0]->user_id) ||
            !isset($result[0]->submission_rejected) || !isset($result[0]->submission_date_added) || !isset($result[0]->submission_date_updated)) {
            return new Submission();
        }

        return $this->map($result[0]);
    }

    public function search(\stdClass $options): array {
        $submissions = [];
        $whereClause = $this->generateWhereClause($options);
        $results = DB::query('SELECT * FROM submissions '. $whereClause .' ORDER BY submission_date_updated ASC', []);
        if ($results !== false) {
            foreach ($results as $result) {
                if (isset($result->submission_id) && isset($result->submission_approved) && isset($result->user_id) &&
                    isset($result->submission_rejected) && isset($result->submission_date_added) && isset($result->submission_date_updated)) {
                    $submissions[] = $this->map($result);
                }
            }
        }

        return $submissions;
    }

    public function update(Submission $submission) {
        DB::query('
            UPDATE submissions SET
                submission_approved = :app,
                submission_rejected = :rej,
                submission_date_updated = NOW()
            WHERE submission_id = :id
        ', [
            ':app' => $submission->getApproved(),
            ':rej' => $submission->getRejected(),
            ':id' => $submission->getId()
        ]);
    }
}