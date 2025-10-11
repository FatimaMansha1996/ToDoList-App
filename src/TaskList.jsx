import TaskItem from "./TaskItem";
import './TaskList.css';


function TaskList({ listOfTasks, onToggle, onDelete }) {
  if (!listOfTasks || listOfTasks.length === 0) {
    return (
      <div className="tasksList">
        <h1>Task List</h1>
        <p>No tasks added yet.</p>
      </div>
    );
  }

  return (
    <div className="tasksList">
      <h1>Task List</h1>
      <ul>
        {listOfTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => onToggle(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
