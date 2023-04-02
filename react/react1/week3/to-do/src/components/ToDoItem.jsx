import React from "react";
import { useState } from "react";
import "./to-do.css";
import MyChildren from "./MyChildren";
const ToDoItem = (props) => {
  console.log(props.taskItem.isEdit);
  const [checked, setChecked] = useState(false);
  const [desc, setDesc] = useState(props.taskItem.description);

  const ChkBoxStatusChng = (id, e) => {
    setChecked(e.target.checked);
    if (props.taskItem.id === id) props.taskItem.done = e.target.checked;
  };

  const editDesc = (e) => {
    setDesc(e.target.value);
  };

  const formatDeadLine = (date) => {
    console.log(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month}-${day}`;
  };

  return (
    <MyChildren>
      <p
        className="item"
        style={{ textDecoration: checked ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          onChange={(e) => ChkBoxStatusChng(props.taskItem.id, e)}
        ></input>
        {props.taskItem.isEdit ? (
          <input
            type="text"
            onChange={(e) => editDesc(e)}
            onBlur={() => {
              props.handleDesc(desc, props.taskItem.id);
            }}
          />
        ) : (
          <>
            {props.taskItem.description}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {props.taskItem.id > 3
              ? formatDeadLine(props.taskItem.deadline)
              : props.taskItem.deadline}
          </>
        )}
      </p>
    </MyChildren>
  );
};

export default ToDoItem;
