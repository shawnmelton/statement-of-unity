<?php
class ResponseFormatter {
    public static function formatSubmissionResponse(Submission $submission): \stdClass {
        $object = new \stdClass();
        $object->id = $submission->getId();
        $object->userId = $submission->getUserId();
        $object->approved = $submission->getApproved();
        $object->rejected = $submission->getRejected();
        $object->dateUpdated = $submission->getDateAdded();
        $object->dateAdded = $submission->getDateUpdated();
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
        $object->dateUpdated = $user->getDateAdded();
        $object->dateAdded = $user->getDateUpdated();
        return $object;
    }
}