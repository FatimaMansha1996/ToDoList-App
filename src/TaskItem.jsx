import React, { useState } from "react";
import "./TaskItem.css";

function TaskItem({ task }) {
  // Local state
  const [completed, setCompleted] = useState(task.completed || false);
  const [deleted, setDeleted] = useState(false);

  // Toggle completed
  const handleToggle = () => {
    setCompleted(!completed);
  };

  // Delete item
  const handleDelete = () => {
    setDeleted(true);
  };

  // Don’t render deleted items
  if (deleted) return null;

  return (
    <li className={`taskItem ${completed ? "completed" : ""}`}>
      <strong>{task.taskName}</strong> <br />
      Deadline: {task.deadline} <br />
      Priority: {task.priority} <br />

      <div className="buttonContainer">
        <button
          className={`toggleButton ${completed ? "done" : ""}`}
          onClick={handleToggle}
        >
          {completed ? "Completed" : "Mark as Complete"}
        </button>

        <button className="deleteButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
