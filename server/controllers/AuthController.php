<?php
class AuthController extends BaseApiController {
    private function parsePost(): array {
        $headers = array_change_key_case(apache_request_headers(), CASE_LOWER);

        if (isset($headers['content-type']) && $headers['content-type'] === 'application/json') {
            $body = json_decode(file_get_contents('php://input'), true);
        } else {
            $body = $_POST;
        }

        return $body;
    }

    public function validate() {
        $response = new \stdClass();
        $response->result = false;

        $body = $this->parsePost();

        if (isset($body['username']) && isset($body['password']) && $body['username'] === ADMIN_USER && 
            $body['password'] === ADMIN_PASS) {
            $response->result = true;
        }

        $this->outputObject($response);
    }

    public function index($verb) {
        $this->$verb();
    }
}