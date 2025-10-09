import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTaskForm from './addTaskForm'
import TaskList from './TaskList'
function App() {
  const [task, settask] = useState([]);

  const addTask = (taskData) => {
  const { taskName, deadline, priority } = taskData;
  const newTask = {
    id: Date.now(),
    taskName,
    deadline,
    priority,
    completed: false,
  };

   settask([...task,newTask]);

  };

  // Toggle completed status
  const toggleComplete = (id) => {
    settask(
      task.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    settask(task.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 My To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      
    </div>
  );
}

export default App;
