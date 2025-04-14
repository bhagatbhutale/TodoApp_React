import React from 'react'
import ToDoItem from './ToDoItem'
import "./TodoList.css"
const ToDoList = ({tasks, onDelete, check, onEdit}) => {
  return (
    <div className="todo_list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          check={check}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList
