
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title`  varchar(255)  NULL,
  `description`  varchar(255)  NULL,
  `location`  varchar(255)  NULL,
  `when`  DATETIME NULL,
 `max_reservations` int(10) unsigned NULL,
 `price` DECIMAL(10,2) NULL,
 `created_date` DATE NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` INT UNSIGNED NULL,
  `meal_id` INT UNSIGNED NULL,
  `created_date` DATE NULL,
  `contact_phone_number` VARCHAR(20) NULL,
  `contact_name` VARCHAR(100) NULL,
  `contact_email` VARCHAR(100) NULL,
  CONSTRAINT `fk_reservation_meal`
    FOREIGN KEY (`meal_id`)
    REFERENCES `meal` (`id`)ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE  `review` (
  `id` INT (10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(100) NOT NULL,
  `description` TEXT(500) NULL,
  `meal_id` INT UNSIGNED NOT NULL,
  `stars` INT UNSIGNED NULL,
  `created_date` DATE NULL,
  CONSTRAINT `fk_review_meal`
    FOREIGN KEY (`meal_id`)  REFERENCES `meal` (`id`)ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;