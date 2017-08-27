<?php
class UsersService {
    private $usersRepo;

    public function __construct() {
        $this->usersRepo = new UsersRepository();
    }

    public function getById(int $id): User {
        if (is_numeric($id) && $id > 0) {
            return $this->usersRepo->read($id);
        }

        return new User();
    }
}