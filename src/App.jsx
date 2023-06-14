import React, { useState } from "react";
import "./index.css";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addToList() {
    if (newTask.trim() !== "") {
      setTask([...task, newTask.trim()]);
      setNewTask("");
    }
  }
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  function removeFromList(index) {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  }

  return (
    <div className="App">
      <h1>To-Do List Managment</h1>
      <input
        type="text"
        name="task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button className="add-button" onClick={addToList}>
        Add
      </button>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="remove-button"
              onClick={() => removeFromList(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
