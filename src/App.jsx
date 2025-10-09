import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTaskForm from './addTaskForm'
function App() {
  const [task, settask] = useState([]);

  const addTask=(newtask)=>{
   settask([...task,newtask]);

  };

  return (
    <div>
   < AddTaskForm onAddTask= {addTask}/>
   <h2>Task List</h2>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            <strong>{task.taskName}</strong> | Deadline: {task.deadline} | Priority: {task.priority}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
