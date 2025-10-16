import { useState } from 'react';
import './AddTaskForm.css'; // Import external CSS file for styling

// Component for adding a new task
function AddTaskForm({ onAddTask }) {

  // -----------------------------
  // STATE VARIABLES
  // -----------------------------
  // Store user inputs for task details
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");

  // -----------------------------
  // EVENT HANDLERS
  // -----------------------------

  // Handle text input for task name
  const handleTaskChange = (e) => {
    setTaskName(e.target.value);
  };

  // Handle text input for deadline
  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  // Handle the Add button click (form submission)
  const handleSubmitButton = (e) => {
    e.preventDefault(); // Prevent page from refreshing

    // Basic input validation
    if (!taskName || !deadline || !priority) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a task object with all values
    const newTask = { taskName, deadline, priority };

    // Call the parent component function to add the new task
    onAddTask(newTask);

    // Reset input fields after submission
    setTaskName("");
    setDeadline("");
    setPriority("");
  };

  // -----------------------------
  // JSX TEMPLATE (UI STRUCTURE)
  // -----------------------------
  return (
    <div className="AddTask">
      <h1>ADD A TASK</h1>

      {/* Task Name Input */}
      <h2>Task Name</h2>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskChange}
        placeholder="Type the task"
      />

      {/* Deadline Input */}
      <h2>Task Deadline</h2>
      <input
        type="text"
        value={deadline}
        onChange={handleDeadlineChange}
        placeholder="Type the deadline of the task"
      />

      {/* Priority Selection Buttons */}
      <div className="taskInput">
        <label>Priority:</label>
        <div className="priorityButtons">
          <button
            type="button"
            className={priority === "High" ? "selected" : ""}
            onClick={() => setPriority("High")}
          >
            High
          </button>

          <button
            type="button"
            className={priority === "Medium" ? "selected" : ""}
            onClick={() => setPriority("Medium")}
          >
            Medium
          </button>

          <button
            type="button"
            className={priority === "Low" ? "selected" : ""}
            onClick={() => setPriority("Low")}
          >
            Low
          </button>
        </div>
      </div>

      {/* Add Task Button */}
      <button onClick={handleSubmitButton}>Add</button>
    </div>
  );
}

export default AddTaskForm;
