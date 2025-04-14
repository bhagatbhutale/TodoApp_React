
import "./TodoItem.css"
import { useState } from "react";

const ToDoItem = ({ task, onDelete, check, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      onEdit(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="btns">
        <button onClick={handleEdit}>
          {isEditing ? " ✏️Save" : "✏️ Edit"}
        </button>
        <button onClick={() => check(task.id)}>
          {task.completed ? "🗑️Undo" : "✅ Done"}
        </button>
        <button onClick={() => onDelete(task.id)}>✖ Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;