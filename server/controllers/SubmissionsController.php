<?php
class SubmissionsController extends BaseRestController {
    protected function create(array $body) {
        $service = new SubmissionsService();
        $service->create($body);

        // At this point, do nothing.
        $this->outputObject(null);
    }

    protected function delete(int $id) {
        // At this point, do nothing.
        $this->outputObject(null);
    }

    protected function read(int $id) {
        echo 1; exit;

        $this->outputObject(null);
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