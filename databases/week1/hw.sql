USE `hyf_class2023`;
select count(*) from task;
select count(*) from task WHERE due_date IS NULL; 
select task.id as `TASK_ID`, task.title as `TITLE`, task.description  as `Description`,
status.name as`STATUS_NAME` from task join status on status.id=task.status_id where status.name='Done';
select task.id as `TASK_ID`, task.title as `TITLE`, task.description  as `Description`,
status.name as`STATUS_NAME` from task join status on status.id=task.status_id where status.name!='Done';
select * from task order by created ASC;
SELECT  *   from task where created in (select MAX(created) as `Recently Created task`from task);
# I am getting a row null value also not sure why please rectify

select concat (task.title,'-',status.name) as `TEXT`from task join status on status.id=task.status_id;

select status.name as `Status-Name` ,count(status.id)as `No Of Task`  from status  join task on status.id=task.status_id group by task.status_id;
select status.name as `STATUS_NAME`, count(task.status_id) as `No Of Task`from status join task on status.id=task.status_id group by task.status_id order by `No Of TasK` DESC

