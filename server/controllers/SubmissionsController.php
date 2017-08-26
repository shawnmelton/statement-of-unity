<?php
class SubmissionsController extends BaseRestController {
    protected function create(array $body) {
        $service = new SubmissionsService();
        $submission = $service->create($body);
        $this->outputObject($this->formatSubmissionResponse($submission));
    }

    protected function delete(int $id) {
        // At this point, do nothing.
        $this->outputObject(null);
    }

    private function formatSubmissionResponse(Submission $submission): \stdClass {
        if ($submission->getId() === 0) {
            $this->sendErrorResponse('404', 'Not Found', 'Submission was not found.');
        }

        $object = new \stdClass();
        $object->id = $submission->getId();
        $object->userId = $submission->getUserId();
        $object->approved = $submission->getApproved();
        $object->rejected = $submission->getRejected();
        $object->dateUpdated = $submission->getDateAdded();
        $object->dateAdded = $submission->getDateUpdated();
        return $object;
    }

    protected function read(int $id) {
        $service = new SubmissionsService();
        $submission = $service->getById($id);
        $this->outputObject($this->formatSubmissionResponse($submission));
    }

    protected function search(array $body) {
        // At this point, do nothing.
        $this->outputObject(null);
    }

    protected function update(int $id, array $body) {
        // At this point, do nothing.
        $this->outputObject(null);
    }
}