import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";
import TodoItem from "./ToDoItem";
import DatePicker from "react-datepicker";
const FetchData = () => {
  const [todos, setToDos] = useState([]);
  const [edit, setEEdit] = useState(false);
  const [newToDo, setNewToDo] = useState({});
  const [deadLine, setDeadLine] = useState(new Date());
  const NewToDo = (description) => {
    setNewToDo({
      id: Math.floor(Math.random() * (100 - 4 + 1) + 4),
      description: description,
      deadline: deadLine,
      done: false,
    });
  };
  const AddToDo = () => {
    setToDos((previous) => [...previous, newToDo]);
  };
  const DeleteToDo = (id) => {
    setToDos(todos.filter((eachToDo) => eachToDo.id !== id));
  };
  const editMode = (id) => {
    setEEdit(!edit);
    const index = todos.indexOf(todos.find((eachTodo) => eachTodo.id === id));
    if (index !== -1) todos[index].isEdit = !todos[index].isEdit;
    setToDos(todos);
  };
  const handleDesc = (desc, id) => {
    todos.forEach((todo) =>
      todo.id === id ? (todo.description = desc) : todo.description
    );
    const index = todos.indexOf(todos.find((eachTodo) => eachTodo.id === id));
    if (index !== -1) todos[index].isEdit = !todos[index].isEdit;
    setToDos(todos);
    setEEdit(!edit);
  };
  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      );
      const result = await data.json();
      console.log(result);
      setToDos(result);
    })();
  }, []);

  return (
    <div>
      <Header />
      <div className="add">
        <label className="label"> To Do Description:</label>
        <input
          type="text"
          onChange={(e) => NewToDo(e.target.value)}
          placeholder="Enter the To-do you want to add"
        ></input>
        <br />
        <label className="label">Deadline:</label>
        <DatePicker
          showIcon
          dateFormat="yyyy/MM/dd"
          selected={deadLine}
          onChange={(date) => {
            date < new Date() ? alert("Invalid deadline!") : setDeadLine(date);
            setDeadLine(date);
          }}
        />
      </div>
      <div className="add-button">
        <button onClick={AddToDo}>Add To Do</button>
      </div>
      <p className="header">To Do List</p>
      {todos.length === 0 ? (
        <p>No Items in ToDo list</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li className="list" key={todo.id}>
              <TodoItem
                taskItem={todo}
                handleDesc={(desc, id) => handleDesc(desc, id)}
              />
              {todo.isEdit ? (
                <button className="button">Update</button>
              ) : (
                <button className="button" onClick={() => editMode(todo.id)}>
                  Edit
                </button>
              )}
              <button className="button" onClick={() => DeleteToDo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FetchData;
