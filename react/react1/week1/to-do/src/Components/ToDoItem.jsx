import React from "react";
function ToDoItem (value) {
    return (
        <li className="list">
            <p>Title: {value.task}</p>
            <p className="deadline">DeadLine: {value.deadline}</p>
        </li>
    )
}
export default ToDoItem;