CREATE DATABASE IF NOT EXISTS `meal_sharing` default character set utf8;
use `meal_sharing`;
insert into `meal` (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) values(1,'paneer_korma','deliciuos fresh paneer with tomato gravy'
,'copenhagen','2023-01-23 18:00:00',3,100.55,'2023-01-24');
insert into `meal` (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) values(2,'chicken_korma','deliciuos fresh chicken with tomato gravy'
,'fredriksberg','2023-01-23 19:00:00',9,200.55,'2023-01-24');

#Get all meals
select * from meal;
#Add a new meal
insert into `meal` (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) values(3,'grilled_salmon','atlantic salmon in oven grilled'
,'copenhagen','2023-01-23 18:00:00',3,100.55,'2023-01-24');
#Get a meal with any id, fx 1
select * from meal where id=1;
#Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update  meal set title='chicken_manchurian' where id=2;
#Delete a meal with any id, fx 1
delete from meal where id=2;

