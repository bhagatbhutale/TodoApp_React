import { useState } from "react";
import ToDoList from "./ToDoList";
import "./TodoApp.css"

function TodoApp() {
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");

// add task
const addTask = () => {
  if(input.trim() !== "") {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        complete: false,
      },
    ]);
    setInput("");
  } else {
    alert("Please Enter valid Task !")
  }
  
}

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
}

// task complete or not check
const taskCheck = (id) => {
  setTasks(tasks.map(task => 
    task.id === id ? {...task, completed: !task.completed} : task
  ))
}

// edit task
const editTask = (id, newText) => {
  setTasks(
    tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
  );
};

  return (
    <>
      <div className="toto_app">
        <div className="input_div">
          <input
            type="text"
            value={input}
            placeholder="Enter a Task"
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <ToDoList
          tasks={tasks}
          onDelete={deleteTask}
          check={taskCheck}
          onEdit={editTask}
        />
      </div>
    </>
  );
}

export default TodoApp;
