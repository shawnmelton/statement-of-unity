<?php
class Submission {
    private $approved;
    private $dateAdded;
    private $dateUpdated;
    private $id;
    private $rejected;
    private $userId;

    public function __construct() {
        $this->id = 0;
        $this->approved = 0;
        $this->rejected = 0;
    }

    public function getApproved(): int {
        return $this->approved;
    }

    public function getDateAdded(): string {
        return $this->dateAdded;
    }

    public function getDateUpdated(): string {
        return $this->dateUpdated;
    }

    public function getId(): int {
        return $this->id;
    }

    public function getRejected(): int {
        return $this->rejected;
    }

    public function getUserId(): int {
        return $this->userId;
    }

    public function setApproved(int $value) {
        $this->approved = $value;
    }

    public function setDateAdded(string $value) {
        $this->dateAdded = $value;
    }

    public function setDateUpdated(string $value) {
        $this->dateUpdated = $value;
    }

    public function setId(int $value) {
        $this->id = $value;
    }

    public function setRejected(int $value) {
        $this->rejected = $value;
    }

    public function setUserId(int $value) {
        $this->userId = $value;
    }
}