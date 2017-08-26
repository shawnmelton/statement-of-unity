<?php
class Router {
    static function error(string $message) {
        if (DEBUG) {
            throw new \Exception($message);
        } else {
            header('HTTP/1.0 404 Not Found');
            exit;
        }
    }

    static function parseControllerName(string $bit): string {
        return preg_replace('/\W/', '',
            ucwords(
                str_replace('-', ' ', $bit)
            )
        );
    }

    static function run(string $url = null) {
        if ($url === null) {
            $bits = explode('/', str_replace($_SERVER['QUERY_STRING'], '', $_SERVER['REQUEST_URI']));
        } else {
            $bits = explode('/', $url);
        }

        array_shift($bits); // First bit is always empty.

        $controller = 'IndexController';

        // Determine controller
        if (isset($bits[1]) && ($bits[1] = self::parseControllerName($bits[1])) != '') {
            if (file_exists(dirname(dirname(__FILE__)) .'/controllers/'. $bits[1] .'Controller.php')) {
                $controller = $bits[1] .'Controller';
            }
        }
        
        $controller = new $controller();

        // Determine parameter to the action method
        $action = 'index';
        if (isset($bits[2]) && is_string($bits[2]) && ($bits[2] = strtolower(preg_replace('/\W/', '', $bits[2]))) != '') {
            $controller->$action(strtolower($bits[2]));   
        } else {
            $controller->$action();
        }
    }
}