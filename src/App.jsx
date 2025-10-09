import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTaskForm from './addTaskForm'
import TaskList from './TaskList'
function App() {
  const [task, settask] = useState([]);

  const addTask=(newtask)=>{
   settask([...task,newtask]);

  };

  return (
    <div>
   < AddTaskForm onAddTask= {addTask}/>
   
   < TaskList listOfTasks= {task}/>
    </div>
  )
}

export default App
