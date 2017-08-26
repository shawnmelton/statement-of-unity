-- SQL Definition file for statement_of_unity database --

-- Database: statement_of_unity --

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL,
    user_first_name VARCHAR(75) NOT NULL DEFAULT "",
    user_last_name VARCHAR(75) NOT NULL DEFAULT "",
    user_email_address VARCHAR(255) NOT NULL DEFAULT "",
    user_church VARCHAR(255) NOT NULL DEFAULT "",
    user_date_added DATETIME NOT NULL DEFAULT 0,
    user_date_updated DATETIME NOT NULL DEFAULT 0,
    PRIMARY KEY(user_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS submissions (
    submission_id SERIAL,
    user_id BIGINT UNSIGNED,
    submission_date_added DATETIME NOT NULL DEFAULT 0,
    submission_date_updated DATETIME NOT NULL DEFAULT 0,
    PRIMARY KEY(submission_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
) ENGINE=InnoDB;