<?php
class SubmissionsController extends BaseRestController {
    protected function create(array $body) {
        $service = new SubmissionsService();
        $submission = $service->create($body);
        $this->outputObject(ResponseFormatter::formatSubmissionResponse($submission));
    }

    protected function delete(int $id) {
        // At this point, do nothing.
        $this->outputObject(null);
    }

    protected function read(int $id) {
        $service = new SubmissionsService();
        $submission = $service->getById($id);

        if ($submission->getId() === 0) {
            $this->sendErrorResponse('404', 'Not Found', 'Submission was not found.');
        }

        $this->outputObject(ResponseFormatter::formatSubmissionResponse($submission));
    }

    protected function search(array $body) {
        $submissionsService = new SubmissionsService();
        $usersService = new UsersService();

        if (isset($body['approved']) && $body['approved'] === '1') {
            $submissions = $submissionsService->getApprovedList();
        } else if (isset($body['unapproved']) && $body['unapproved'] === '1') {
            $submissions = $submissionsService->getUnapprovedList();
        } else {
            $submissions = $submissionsService->getList();
        }

        $output = [];
        foreach ($submissions as $submission) {
            $user = $usersService->getById($submission->getUserId());
            $output[] = ResponseFormatter::formatSubmissionUserResponse($submission, $user);
        }

        $this->outputArray($output);
    }

    protected function update(int $id, array $body) {
        $service = new SubmissionsService();
        $submission = $service->update($body);
        $this->outputObject(ResponseFormatter::formatSubmissionResponse($submission));
    }
}