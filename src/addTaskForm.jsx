import { useState } from 'react'
import './AddTaskForm.css';
function AddTaskForm({ onAddTask }){
   const [taskName,setTaskName]=useState("");
   const [deadline,setDeadline]=useState("");
   const [priority, setPriority]=useState("");

   const handleTaskChange=(task)=>{

       setTaskName(task.target.value);
   }

   const handleDeadlineChange=(deadln)=>{
     setDeadline(deadln.target.value);

   }
   
  const handlesubmitButton=(e)=>{
     e.preventDefault(); // prevent page refresh

      // Basic validation
    if (!taskName || !deadline || !priority) {
      alert("Please fill in all fields.");
      return;
    }
       const tsk={taskName, deadline,priority}
      onAddTask(tsk);
       
     
       setTaskName("");
       setDeadline("");
       setPriority("");
     
  }

    return <div className="AddTask">
      <h1>ADD A TASK</h1>
      <h2> Task Name </h2>
      <input type="text" value={taskName} onChange={handleTaskChange} placeholder='type the task'></input>

      
         <h2>Task Deadline</h2>
         <input type="text"  value={deadline} onChange={handleDeadlineChange} placeholder='type the deadline of the task'/>
        

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


         <button onClick={handlesubmitButton} >Add </button>
         

    </div>
}

export default AddTaskForm;