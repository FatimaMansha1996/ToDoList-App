import React, { useState } from "react";
import "./TaskItem.css";

// Component for a single task
function TaskItem({ task }) {
  // -----------------------------
  // LOCAL STATE
  // -----------------------------
  // Tracks if the task is completed
  const [completed, setCompleted] = useState(task.completed || false);
  // Tracks if the task is deleted
  const [deleted, setDeleted] = useState(false);

  // -----------------------------
  // EVENT HANDLERS
  // -----------------------------
  // Toggle the completed state
  const handleToggle = () => {
    setCompleted(!completed);
  };

  // Mark the task as deleted
  const handleDelete = () => {
    setDeleted(true);
  };

  // -----------------------------
  // CONDITIONAL RENDERING
  // -----------------------------
  // Don’t show the task if it’s deleted
  if (deleted) return null;

  // -----------------------------
  // JSX OUTPUT
  // -----------------------------
  return (
    // Dynamic class: adds "completed" if the task is done
    <li className={"taskItem" + (completed ? " completed" : "")}>
      {/* Task details */}
      <strong>{task.taskName}</strong> <br />
      Deadline: {task.deadline} <br />
      Priority: {task.priority} <br />

      {/* Buttons for completing and deleting the task */}
      <div className="buttonContainer">
        <button
          className={`toggleButton ${completed ? "done" : ""}`} // Change style if completed
          onClick={handleToggle} // Toggle completed state
        >
          {completed ? "Completed" : "Mark as Complete"} 
        </button>

        <button
          className="deleteButton"
          onClick={handleDelete} // Delete the task
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
