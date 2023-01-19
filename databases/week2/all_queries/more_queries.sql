use  hyf_class2023;
#1Get all the tasks assigned to users whose email ends in @spotify.com
SELECT name,email,  task.title ,task.id from user join user_task on user.id=user_task.user_id
join task on task.id=user_task.task_id WHERE user.email LIKE '%@spotify.com';
#Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user_task.task_id ,task.title FROM user_task JOIN user ON user.id=user_task.user_id
JOIN task ON task.id= user_task.task_id JOIN status on status.id= task.status_id
WHERE user.name ="Donald Duck" AND status.name ="Not started";
#Get all the tasks for 'Maryrose Meadows' that were created in september
select task.title , task.id,task.created as Month, name from user join user_task on user.id=user_task.user_id
join task on task.id=user_task.task_id where user.name='Maryrose Meadows' and month(created)=9;
#Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
select count(id) as total_task , month(created) as Month from task group by Month;
