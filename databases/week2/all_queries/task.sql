use  hyf_class2023;

#TASK Queries

#Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES
('DB_HOMEWORK', 'Database homework for lesson2','2023-01-16','2023-01-17','2022-08-25',1,11);

#Change the title of a task
update task set title='updated-title' where id=2;
#Change a task due date
update task set due_date='2023-01-16' where id=2;
#Change a task status
update task set status_id=(select id from status where id=3) where id=2;
#Mark a task as complete
update task set status_id=(select id from status where id=3) where id=34;
#Delete a task
delete from task where id=31;
