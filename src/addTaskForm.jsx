import { useState } from 'react'
function AddTaskForm({onAddtask}){
   const [taskName,setTaskName]=useState("");
   const [deadline,setDeadline]=useState("");
   const [priority, setPriority]=useState("");

   const handleTaskChange=(task)=>{

       setTaskName(task.target.value);
   }

   const handleDeadlineChange=(deadln)=>{
     setDeadline(deadln.target.value);

   }
   const handlePriorityChange=(pri)=>{
    setPriority(pri.target.value);
   }
  const handlesubmitButton=(e)=>{
     e.preventDefault(); // prevent page refresh
       const tsk={taskName, deadline,priority}
       onAddtask(tsk);

       setTaskName("");
       setDeadline("");
       setPriority("");
     
  };

    return <div className="AddTask">
      <h1>ADD A TASK</h1>
      <h2> Task Name </h2>
      <input type="text" value={taskName} onChange={handleTaskChange} placeholder='type the task'></input>

       <p>the task name entered is:{taskName}</p>
         <h2>Task Deadline</h2>
         <input type="text"  value={deadline} onChange={handleDeadlineChange} placeholder='type the deadline of the task'/>
         <p>the task deadline entered is:{deadline}</p>

     <h2>Task Priority</h2>
         <input type="text"  value={priority} onChange={handlePriorityChange} placeholder='enter priority(high, medium, low)'/>
         <p>the task priority entered is:{priority}</p>

         <button onClick={handlesubmitButton} >Submit </button>

    </div>
}

export default AddTaskForm;