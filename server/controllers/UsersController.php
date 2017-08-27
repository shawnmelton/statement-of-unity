<?php
class UsersController extends BaseRestController {
    protected function create(array $body) {
        // At this point, do nothing.
        $this->outputObject(null);
    }

    protected function delete(int $id) {
        // At this point, do nothing.
        $this->outputObject(null);
    }    

    protected function read(int $id) {
        $service = new UsersService();
        $user = $service->getById($id);

        if ($user->getId() === 0) {
            $this->sendErrorResponse('404', 'Not Found', 'User was not found.');
        }

        $this->outputObject(ResponseFormatter::formatUserResponse($user));
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