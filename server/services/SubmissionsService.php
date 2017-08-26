<?php
class SubmissionsService {
    private $submissionsRepo;
    private $usersRepo;

    public function __construct() {
        $this->submissionsRepo = new SubmissionsRepository();
        $this->usersRepo = new UsersRepository();
    }

    public function create(array $body): Submission {
        if ($this->isValid($body)) {
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

    public function getById(int $id): Submission {
        if (is_numeric($id) && $id > 0) {
            return $this->submissionsRepo->read($id);
        }

        return new Submission();
    }

    private function isValid(array $body): bool {
        return (isset($body['firstName']) && isset($body['lastName']) && isset($body['church']) && isset($body['emailAddress']) &&
            preg_match('/^[a-z]+/i', $body['firstName']) && preg_match('/^[a-z]+/i', $body['lastName']) && $body['church'] !== '' &&
            $this->emailIsValid($body['emailAddress']));
    }
}