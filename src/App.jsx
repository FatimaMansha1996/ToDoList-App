import { useState } from "react";
import "./App.css";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function App() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    const taskWithId = {
      id: Date.now(),
      completed: false,
      ...newTask,
    };
    setTask([...task, taskWithId]);
  };

  const toggleTask = (id) => {
  setTask(task.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
};

const deleteTask = (id) => {
  setTask(task.filter(t => t.id !== id));
};


  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        listOfTasks={task}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
