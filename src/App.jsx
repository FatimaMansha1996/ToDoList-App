import { useState } from "react";
import "./App.css";
import AddTaskForm from "./addTaskForm"; // Form to add new tasks
import TaskList from "./TaskList";       // List of tasks

function App() {
  // State to store all tasks
  const [task, setTask] = useState([]);

  // Add a new task
  const addTask = (newTask) => {
    const taskWithId = {
      id: Date.now(),       // Unique ID for each task
      completed: false,     // Task starts as not completed
      ...newTask,           // Include taskName, deadline, priority
    };
    setTask([...task, taskWithId]); // Add new task to state
  };

  // Toggle completed state of a task
  const toggleTask = (id) => {
    setTask(
      task.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTask(task.filter(t => t.id !== id));
  };

  // JSX output
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} /> {/* Form to add tasks */}
      <TaskList
        listOfTasks={task}        // Pass tasks to TaskList
        onToggle={toggleTask}      // Pass toggle function
        onDelete={deleteTask}      // Pass delete function
      />
    </div>
  );
}

export default App;
