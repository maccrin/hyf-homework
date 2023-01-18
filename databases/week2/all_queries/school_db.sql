use  school_db;
##Create a new database containing the following tables:
#Class: with the columns: id, name, begins (date), ends (date)
#Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `class` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`begins` DATETIME NOT NULL,
`ends` DATETIME NULL DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE `student` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`phone` varchar(255) NOT NULL,
`class_id` int(10) unsigned NOT NULL,
CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#If you are done with the above tasks, you can continue with these advanced tasks:
#Create an index on the name column of the student table.
CREATE INDEX index_name ON student (name);
#Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status ENUM('not-started', 'ongoing', 'finished')NOT NULL;
