USE `hyf_class2023`;

#Find out how many tasks are in the task table
select count(id) from task;

#Find out how many tasks in the task table do not have a valid due date
select task.id,task.title,task.due_date from task WHERE due_date IS NULL; 

#Find all the tasks that are marked as done
SELECT task.id,title,due_date,status.name 
FROM task JOIN status ON task.status_id=status.id WHERE status.name="Done";
#Find all the tasks that are not marked as done
SELECT task.id,title,due_date,status.name 
FROM task JOIN status ON task.status_id=status.id WHERE status.name!="Done";
#Get all the tasks, sorted with the most recently created first
select * from task order by created ASC;
#Get the single most recently created task
SELECT  *   from task where created in (select MAX(created) as `Recently Created task`from task);

#Get the title and due date of all tasks where the title or description contains database
select title, due_date,description from task where `title` like '%database%' OR `description` like '%database%';

#Get the title and status (as text) of all tasks
SELECT title,status.name as TEXT FROM task
JOIN status ON task.status_id=status.id ORDER BY status.name;
#Get the name of each status, along with a count of how many tasks have that status
select status.name as `Status-Name` ,count(status.id)as `No Of Task`  from status  join task on status.id=task.status_id group by task.status_id;

#Get the names of all statuses, sorted by the status with most tasks first
select status.name as `STATUS_NAME`, count(task.status_id) as `No Of Task`from status join task on status.id=task.status_id group by task.status_id order by `No Of TasK` DESC



