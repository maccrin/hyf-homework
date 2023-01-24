CREATE DATABASE IF NOT EXISTS `meal_sharing` default character set utf8;
use `meal_sharing`;
#Get all reservations
select * from reservation;
#Add a new reservation
insert into `reservation` (`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phone_number`,`contact_name`,`contact_email`) values(2,3,3
,'2023-01-20','52707986','maddy','maccrin@gmail.com');
#Get a reservation with any id, fx 1
select * from reservation where id=1;
#Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set `contact_phone_number`='567689' where id=1;
#Delete a reservation with any id, fx 1
delete from reservation where id=2;