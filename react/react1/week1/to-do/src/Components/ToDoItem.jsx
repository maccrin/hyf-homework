import React from "react";
function ToDoItem (value) {
    console.log(value)
    const {taskItem}=value
    return (
        <li className="list">
            <p>Title: {taskItem.task}</p>
            <p className="deadline">DeadLine: {taskItem.deadLine}</p>
        </li>
    )
}
export default ToDoItem;