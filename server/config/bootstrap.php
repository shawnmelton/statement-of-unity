<?php
define('DEBUG', true);
define('SHOW_SQL_QUERIES', false);

if (DEBUG === false) {
    ob_start('ob_gzhandler');
} else {
    ini_set('display_errors', 1);
    error_reporting(-1);
}

date_default_timezone_set('America/New_York');
putenv('TZ=US/Eastern');

function __autoload (string $className) {
    foreach (array('controllers', 'models', 'services', 'repos') as $folder) {
        $class = dirname(dirname(__FILE__)) .'/'. $folder .'/'. $className .'.php';
        if (file_exists($class)) {
            require_once($class);
            return;
        }
    }

    if (DEBUG) {
        throw new Exception('Cannot find '. $className .'.php in library folder.', E_USER_ERROR);
    }
}