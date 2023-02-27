import { React } from "react";
import "./to-do.css";
import { useState } from "react";
const TodoItem = (value) => {
  const { taskItem } = value;
  const [checked, setChecked] = useState(false);
  const ChkBoxStatusChng = (id, e) => {
    console.log(checked);
    setChecked(e.target.checked);
    if (taskItem.id === id) taskItem.done = e.target.checked;
  };
  return (
    <p
      className="item"
      style={{ textDecoration: checked ? "line-through" : "none" }}
    >
      <input
        type="checkbox"
        onChange={(e) => ChkBoxStatusChng(taskItem.id, e)}
      ></input>
      {taskItem.description}
    </p>
  );
};

export default TodoItem;
