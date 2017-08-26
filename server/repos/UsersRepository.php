<?php
class UsersRepository {
    public function create(User $user): int {
        DB::query('
            INSERT INTO users SET
                user_first_name = :fn,
                user_last_name = :ln,
                user_email_address = :eml,
                user_church = :ch,
                user_date_added = NOW(),
                user_date_updated = NOW()
        ', [
            ':fn' => $user->getFirstName(),
            ':ln' => $user->getLastName(),
            ':eml' => $user->getEmailAddress(),
            ':ch' => $user->getChurch()
        ]);

        return DB::get()->lastInsertId();
    }

    private function map(\stdClass $object): User {
        $user = new User();
        $user->setId($object->user_id);
        $user->setFirstName($object->user_first_name);
        $user->setLastName($object->user_last_name);
        $user->setEmailAddress($object->user_email_address);
        $user->setChurch($object->user_church);
        $user->setDateAdded($object->user_date_added);
        $user->setDateUpdated($object->user_date_updated);
        return $user;
    }

    public function read(int $userId): User {
        $result = DB::query('SELECT * FROM users WHERE user_id = :id', [
            ':id' => $userId
        ]);

        if ($result === false || !isset($result[0]->user_id) || !isset($result[0]->user_first_name) || !isset($result[0]->user_last_name) ||
            !isset($result[0]->user_email_address) || !isset($result[0]->user_church) || !isset($result[0]->user_date_added) || 
            !isset($result[0]->user_date_updated)) {
            return null;
        }

        return $this->map($result[0]);
    }

    public function update(User $user): int {
        DB::query('
            UPDATE users SET
                user_first_name = :fn,
                user_last_name = :ln,
                user_email_address = :eml,
                user_church = :ch,
                user_date_updated = NOW()
            WHERE user_id = :id
        ', [
            ':fn' => $user->getFirstName(),
            ':ln' => $user->getLastName(),
            ':eml' => $user->getEmailAddress(),
            ':ch' => $user->getChurch(),
            ':id' => $user->getId()
        ]);

        return DB::get()->lastInsertId();
    }
}