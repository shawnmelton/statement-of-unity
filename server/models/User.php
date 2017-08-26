<?php
class User {
    private $church;
    private $dateAdded;
    private $dateUpdated;
    private $emailAddress;
    private $firstName;
    private $id;
    private $lastName;

    public function getChurch(): string {
        return $this->church;
    }

    public function getDateAdded(): string {
        return $this->dateAdded;
    }

    public function getDateUpdated(): string {
        return $this->dateUpdated;
    }

    public function getEmailAddress(): string {
        return $this->emailAddress;
    }

    public function getFirstName(): string {
        return $this->firstName;
    }

    public function getId(): int {
        return $this->id;
    }

    public function getLastName(): string {
        return $this->lastName;
    }

    public function setChurch(string $value) {
        $this->church = $value;
    }

    public function setDateAdded(string $value) {
        $this->dateAdded = $value;
    }

    public function setDateUpdated(string $value) {
        $this->dateUpdated = $value;
    }

    public function setEmailAddress(string $value) {
        $this->emailAddress = $value;
    }

    public function setFirstName(string $value) {
        $this->firstName = $value;
    }

    public function setId(int $value) {
        $this->id = $value;
    }

    public function setLastName(string $value) {
        $this->lastName = $value;
    }
}