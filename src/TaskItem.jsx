function TaskItem({task}){



    return <div className="taskItem">
        
         <h2>Task Name: </h2>
         <p>{task.taskName}</p>
         <h2>Deadline: </h2>
         <p>{task.deadline}</p>
           <h2>Priority: </h2>
         <p>{task.priority}</p>

    </div>
}