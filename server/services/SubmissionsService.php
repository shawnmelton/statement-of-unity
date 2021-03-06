<?php
class SubmissionsService {
    private $submissionsRepo;
    private $usersRepo;

    public function __construct() {
        $this->submissionsRepo = new SubmissionsRepository();
        $this->usersRepo = new UsersRepository();
    }

    public function create(array $body): Submission {
        if ($this->isValidCreation($body)) {
            $user = new User();
            $user->setFirstName($body['firstName']);
            $user->setLastName($body['lastName']);
            $user->setChurch($body['church']);
            $user->setEmailAddress($body['emailAddress']);
            $userId = $this->usersRepo->create($user);

            if ($userId > 0) {
                $user = $this->usersRepo->read($userId);

                $submission = new Submission();
                $submission->setUserId($userId);
                $submissionId = $this->submissionsRepo->create($submission);

                if ($submissionId > 0) {
                    $submission = $this->submissionsRepo->read($submissionId);
                }

                return $submission;
            }
        }

        return new Submission();
    }

    private function emailIsValid(string $value): bool {
        return preg_match('/^(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){255,})(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){65,}@)(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22))(?:\\.(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\\]))$/iD', $value);
    }

    public function getApprovedList(): array {
        $options = new \stdClass();
        $options->approved = 1;
        return $this->submissionsRepo->search($options);
    }

    public function getById(int $id): Submission {
        if (is_numeric($id) && $id > 0) {
            return $this->submissionsRepo->read($id);
        }

        return new Submission();
    }

    public function getList(): array {
        $options = new \stdClass();
        return $this->submissionsRepo->search($options);
    }

    public function getUnapprovedList(): array {
        $options = new \stdClass();
        $options->approved = 0;
        $options->rejected = 0;
        return $this->submissionsRepo->search($options);
    }

    private function isValidCreation(array $body): bool {
        return (isset($body['firstName']) && isset($body['lastName']) && isset($body['church']) && isset($body['emailAddress']) &&
            preg_match('/^[a-z]+/i', $body['firstName']) && preg_match('/^[a-z]+/i', $body['lastName']) && $body['church'] !== '' &&
            $this->emailIsValid($body['emailAddress']));
    }

    private function isValidUpdate(array $body): bool {
        return (isset($body['id']) && isset($body['approved']) && isset($body['rejected']) && is_numeric($body['id']) && $body['id'] > 0 &&
            is_numeric($body['approved']) && $body['approved'] >= 0 && $body['approved'] <= 1 && is_numeric($body['rejected']) && 
            $body['rejected'] >= 0 && $body['rejected'] <= 1);
    }

    public function update(array $body): Submission {
        if ($this->isValidUpdate($body)) {
            $submission = new Submission();
            $submission->setId($body['id']);
            $submission->setApproved($body['approved']);
            $submission->setRejected($body['rejected']);
            $this->submissionsRepo->update($submission);

            $submission = $this->submissionsRepo->read($body['id']);
            return $submission;
        }

        return new Submission();
    }
}