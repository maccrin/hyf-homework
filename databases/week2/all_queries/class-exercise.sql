use  hyf_class2023;

#class exercise

#Get all the tasks assigned to Pavel
SELECT name, task.title
    FROM user
     JOIN user_task ON user_task.user_id=user.id
     JOIN task ON user_task.task_id = task.id
    WHERE name like '%Pavel%';

#Find how many tasks each user is responsible for;
select name,count(user_task.user_id) as No_Of_Task from user join user_task on
user.id=user_task.user_id join task on task.id=user_task.task_id
group by user.name;

#Find how many tasks with a status=Done each user is responsible for;
select user.name,count(user_task.user_id) as No_Of_Task,status.name as Status_Done from user join user_task on
user.id=user_task.user_id join task on task.id=user_task.task_id join status on status.id=task.status_id where status.id=3
 group by user.name;
