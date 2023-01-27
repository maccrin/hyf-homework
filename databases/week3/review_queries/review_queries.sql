CREATE DATABASE IF NOT EXISTS `meal_sharing` default character set utf8;
use `meal_sharing`;
#Get all reviews
select * from review;
#Add a new review
INSERT INTO review (`id`,`title`,`meal_id`,`stars`,`created_date`)values
(2,'good',1,5,'2022-01-24');
#Get a review with any id, fx 1
select * from review where id=1;
#Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review set stars=1 where id=1;
#Delete a review with any id, fx 1
delete from review where id=2;
