import "./to-do.css";
import { React, useEffect, useState } from "react";
const ToDoHeader = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(timeSpent + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h3 className="header">
        You have sepnt <em style={{ color: "green" }}>{timeSpent}</em> seconds
        on this web page
      </h3>
    </div>
  );
};
export default ToDoHeader;
