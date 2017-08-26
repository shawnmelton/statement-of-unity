<?php
class ApplicationResponse {
    private $code;
    private $status;
    private $message;

    public function __construct() {
        $this->code = '0';
        $this->status = '200 OK';
        $this->message = 'Request was successfully processed.';
    }

    public function getCode() {
        return $this->code;
    }

    public function getMessage() {
        return $this->message;
    }

    public function getStatus() {
        return $this->status;
    }

    public function setCode(string $code): ApplicationResponse {
        $this->code = $code;
        return $this;
    }

    public function setMessage(string $message): ApplicationResponse {
        $this->message = $message;
        return $this;
    }

    public function setStatus(string $status): ApplicationResponse {
        $this->status = $status;
        return $this;
    }
}