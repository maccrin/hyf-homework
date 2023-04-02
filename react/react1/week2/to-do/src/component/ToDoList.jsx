import { React } from "react";
import { useState } from "react";
import ToDoDb from "./ToDoDb.js";
import ToDoHeader from "./Header";
import TodoItem from "./TodoItem";
const ToDo = () => {
  const [todos, setToDos] = useState(ToDoDb);
  const [newToDo, setNewToDo] = useState({});
  const NewToDo = (description) => {
    setNewToDo({
      id: Math.floor(Math.random() * (100 - 4 + 1) + 4),
      description: description,
      done: false,
    });
  };
  const AddToDo = () => {
    setToDos((previous) => [...previous, newToDo]);
  };
  const DeleteToDo = (id) => {
    setToDos(todos.filter((eachToDo) => eachToDo.id !== id));
  };
  return (
    <div>
      <ToDoHeader />
      <div className="add">
        <input
          type="text"
          onChange={(e) => NewToDo(e.target.value)}
          placeholder="Enter the To-do you want to add"
        ></input>
        <button className="button" onClick={AddToDo}>
          Add To Do
        </button>
      </div>
      <p className="header">To Do List</p>
      {todos.length === 0 ? (
        <p>No Items in ToDo list</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li className="list" key={todo.id}>
              <TodoItem taskItem={todo} />
              <button className="button" onClick={() => DeleteToDo(todo.id)}>
                Press To Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDo;
