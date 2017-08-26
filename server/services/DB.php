<?php
class DB {
    static protected $_instance = false;

    static public function get(): \PDO {
        if (self::$_instance === false) {
            self::$_instance = new \PDO(self::getDSN(), DB_USER, DB_PASS);
        }
    
        return self::$_instance;
    }

    static public function getDSN(): string {
        return 'mysql:dbname='. DB_NAME .';host='. DB_HOST;
    }

    static public function query(string $sql, array $params) {
        $sth = self::get()->prepare($sql);
        $success = $sth->execute($params);

        if ((($errorCode = self::get()->errorCode()) !== '00000' || $success === false) && DEBUG) {
            throw new \Exception('There was a database error "'. $errorCode .'" with the following query: '. $sql);
        }

        if (SHOW_SQL_QUERIES) {
            $sth->debugDumpParams();
        }

        if (strpos($sql, 'SELECT') !== false) {
            return $sth->fetchAll(\PDO::FETCH_OBJ);
        }
    }
}