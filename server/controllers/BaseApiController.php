<?php
abstract class BaseApiController {
    private $data;
    private $appResponse;

    public function __construct() {
        $this->appResponse = new ApplicationResponse();
    }

    protected function format(): string {
        $object = new \stdClass();
        $object->status = $this->getStatus();
        $object->result = $this->getResult();
        $object->url = $_SERVER['REQUEST_URI'];

        $this->sendHttpHeader();

        return json_encode($object);
    }

    protected function getResult(): \stdClass {
        $object = new \stdClass();
        if($this->data !== null) {
            $object->data = $this->data;
        } else {
            $object->valid = 'false';
        }

        return $object;
    }

    protected function getStatus(): \stdClass {
        $object = new \stdClass();
        if($this->data !== null) {
            $object->error_code = $this->appResponse->getCode();
            $object->error_message = $this->appResponse->getMessage();
        } else {
            $this->appResponse
                ->setCode('1')
                ->setMessage('An unknown error occurred.')
                ->setStatus('520 Unknown Error');

            $object->error_code = $this->appResponse->getCode();
            $object->error_message = $this->appResponse->getMessage();
        }

        return $object;
    }

    protected function output() {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST,GET,OPTIONS,PUT');
        header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
        header('Cache-Control: no-store, no-cache, must-revalidate');
        header('Cache-Control: post-check=0, pre-check=0', false);
        header('Pragma: no-cache');
        header('Content-Type: application/json');
        echo $this->format();
        exit;
    }

    protected function outputArray(array $array) {
        $this->data = $array;
        $this->output();
    }

    protected function outputObject(\stdClass $object) {
        $this->data = $object;
        $this->output();
    }

    /*!
     * @desc Output an error message through the REST API.
     * @param $code <string>
     * @param $status <string>
     * @param $message <string>
     */
    protected function sendErrorResponse(string $code, string $status, string $message) {
        $response = new ApplicationResponse();
        $response->setCode($code);
        $response->setStatus($status);
        $response->setMessage($message);
        $this->setResponse($response);

        $object = new \stdClass();
        $object->valid = false;
        $this->outputObject($object);
    }

    protected function sendHttpHeader() {
        header('HTTP/1.1 '. $this->appResponse->getStatus());
    }

    public function setResponse(ApplicationResponse $appResponse) {
        $this->appResponse = $appResponse;
    }
}