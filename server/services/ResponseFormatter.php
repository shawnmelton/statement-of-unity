<?php
class ResponseFormatter {
    public static function formatSubmissionResponse(Submission $submission): \stdClass {
        $object = new \stdClass();
        $object->id = $submission->getId();
        $object->userId = $submission->getUserId();
        $object->approved = $submission->getApproved();
        $object->rejected = $submission->getRejected();
        $object->dateUpdated = date('n/j/Y g:i A', strtotime($submission->getDateAdded()));
        $object->dateAdded = date('n/j/Y g:i A', strtotime($submission->getDateUpdated()));
        return $object;
    }

    public static function formatSubmissionUserResponse(Submission $submission, User $user): \stdClass {
        return (object) array_merge((array) self::formatSubmissionResponse($submission),
            (array) self::formatUserResponse($user));
    }

    public static function formatUserResponse(User $user): \stdClass {
        $object = new \stdClass();
        $object->id = $user->getId();
        $object->firstName = $user->getFirstName();
        $object->lastName = $user->getLastName();
        $object->emailAddress = $user->getEmailAddress();
        $object->church = $user->getChurch();
        $object->dateUpdated = date('n/j/Y g:i A', strtotime($user->getDateAdded()));
        $object->dateAdded = date('n/j/Y g:i A', strtotime($user->getDateUpdated()));
        return $object;
    }
}