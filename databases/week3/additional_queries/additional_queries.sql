CREATE DATABASE IF NOT EXISTS `meal_sharing` default character set utf8;
use `meal_sharing`;
select * from meal;
select * from review;
insert into meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) values(4,'rice_pudding','pudding from jasmine rice'
,'copenhagen','2023-01-23 18:00:00',6,300.55,'2023-01-24');
insert into meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) values(5,'avocado_sandwitch','avocado with mozilla and corn bread'
,'copenhagen','2023-01-23 20:00:00',3,70,'2023-01-24');
insert into meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) values(6,'tomato_soup',' '
,'copenhagen','2023-01-23 20:00:00',9,70,'2023-01-24');
INSERT INTO review (`id`,`title`,`meal_id`,`stars`,`created_date`)values
(4,'not_good',5,2,'2023-01-24');
INSERT INTO review (`id`,`title`,`meal_id`,`stars`,`created_date`)values
(5,'good',6,4,'2023-01-24');
#Get meals that has a price smaller than a specific price fx 90
select * from meal where price< 200;
#Get meals that still has available reservations;

#Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from meal where title like'%paneer%';
#Get meals that has been created between two dates
select * from meal where created_date  BETWEEN '2023-01-20' AND '2023-01-30';
#Get only specific number of meals fx return only 5 meals
select * from meal limit 3;
#Get the meals that have good reviews
select  meal.title,review.title ,review.stars from meal join review on meal.id=review.meal_id
where review.stars>3 ;
#Get reservations for a specific meal sorted by created_date
select * from reservation where meal_id=1 order by created_date DESC;
#Sort all meals by average number of stars in the reviews
select meal.title, avg(review.stars)as `AVG NUMBER` from review
join meal on meal.id=review.meal_id group by review.meal_id order by 'Average No Of stars' ASC;

