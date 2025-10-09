function TaskList({listOfTasks ,onToggle, onDelete}){


    return<div className="tasksList">
        <h1>Task List</h1>
        <ul>
      {tasks.map((task, index) => (
          <li key={index}>
            <strong>{listOfTasks.taskName}</strong> | Deadline: {listOfTasks.deadline} | Priority: {listOfTasks.priority}
          </li>
        ))}
         </ul>


    </div>
}

export default TaskList;