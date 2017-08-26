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

    public function update(Submission $submission) {
        DB::query('
            UPDATE submissions SET
                user_id = :uid,
                submission_approved = :app,
                submission_rejected = :rej,
                submission_date_updated = NOW()
            WHERE submission_id = :id
        ', [
            ':uid' => $submission->getUserId(),
            ':app' => $submission->getApproved(),
            ':rej' => $submission->getRejected(),
            ':id' => $submission->getId()
        ]);
    }
}