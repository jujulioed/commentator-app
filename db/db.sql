CREATE DATABASE commentator_app_db;

USE commentator_app_db;

CREATE TABLE users (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(63) NOT NULL,
  `nickname` VARCHAR(63) NOT NULL,
  `birthday` TIMESTAMP,
  `email` VARCHAR(127) NOT NULL,
  `password` VARCHAR(127) NOT NULL,
  `gender` CHAR(1) NOT NULL,
  `activated` BOOLEAN NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`));

CREATE TABLE commentator_app_db.posts (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `owner-id` INT UNSIGNED NOT NULL,
    `text` TINYTEXT NOT NULL,
    `likes` INT DEFAULT 0,
    `dislikes` INT DEFAULT 0,
    `reference-post` INT,
    `awnser-post` INT,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`),
    FOREIGN KEY(`owner-id`) REFERENCES commentator_app_db.users(`id`)
);