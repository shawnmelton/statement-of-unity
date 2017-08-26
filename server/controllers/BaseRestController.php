<?php
abstract class BaseRestController extends BaseApiController {
    private function formBoundaryExists(): bool {
        return (isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'boundary=') !== false);
    }

    /*!
     * @desc Parse the form boundary from the submission.
     * @return <string>
     */
    private function parseFormBoundary(): string {
        $parts = explode('boundary=', $_SERVER['CONTENT_TYPE']);
        return $parts[1];
    }

    /*!
     * @desc Parse parameters from a PUT request.
     * @param $params <array>
     * @return <array>
     */
    private function parseParams(array $params): array {
        $body = array();
        foreach ($params as $param) {
            if (strpos($param, 'Content') !== false) {
                $keyValuePair = ltrim(trim(str_replace("\n", '', str_replace('Content-Disposition: form-data; name=', '', $param))), '"');
                $keyValuePair = explode('"', $keyValuePair);
                $body[$keyValuePair[0]] = trim(str_replace('--', '', $keyValuePair[1]));
            }
        }

        return $body;
    }

    private function performVerb(int $param) {
        if (isset($_SERVER['REQUEST_METHOD'])) {
            switch(strtolower($_SERVER['REQUEST_METHOD'])) {
                case 'delete':
                    if ($param > 0) {
                        $this->delete($param);
                    }
                    break;

                case 'get':
                    if ($param > 0) {
                        $this->read($param);
                    } else {
                        $this->search($_GET);
                    }
                    break;

                case 'post':
                    $headers = array_change_key_case(apache_request_headers(), CASE_LOWER);

                    if (isset($headers['content-type']) && $headers['content-type'] === 'application/json') {
                        $body = json_decode(file_get_contents('php://input'), true);
                    } else {
                        $body = $_POST;
                    }

                    $this->create($body);
                    break;

                case 'put':
                    if ($param > 0) {
                        $input = file_get_contents('php://input');
                        if ($this->formBoundaryExists()) {
                            $params = $this->parseParams(explode($this->parseFormBoundary(), $input));
                        } else if (preg_match('/^\{/', $input)) {
                            try {
                                $params = (array) json_decode($input);
                            } catch (\Exception $e) {
                                $params = [];
                            }
                        } else {
                            $params = [];
                        }

                        if (is_array($params) && count($params) > 0) {
                            $this->update($param, $params);
                        }
                    }
                    break;
            }
        }

        if (DEBUG) {
            throw new \Exception('Unable to determine what action to perform.');
        } else {
            $this->outputObject(null);
        }
    }

    public function index(int $param = null) {
        if ($param === null) {
            $this->performVerb(0);
        } else {
            $this->performVerb($param);
        }
    }

    protected abstract function create(array $body);
    protected abstract function delete(int $id);
    protected abstract function read(int $id);
    protected abstract function search(array $body);
    protected abstract function update(int $id, array $body);
}