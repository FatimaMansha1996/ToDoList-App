import TaskItem from "./TaskItem";
import './TaskList.css';

// Displays a list of all tasks
function TaskList({ listOfTasks, onToggle, onDelete }) {

  // Show message if no tasks are available
  if (!listOfTasks || listOfTasks.length === 0) {
    return (
      <div className="tasksList">
        <h1>Task List</h1>
        <p>No tasks added yet.</p>
      </div>
    );
  }

  // Render the list of tasks
  return (
    <div className="tasksList">
      <h1>Task List</h1>
      <ul>
        {listOfTasks.map((task) => (
          <TaskItem
            key={task.id}              // Unique key for each task
            task={task}                // Pass task data to TaskItem
            onToggle={() => onToggle(task.id)}  // Toggle completion
            onDelete={() => onDelete(task.id)}  // Delete task
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
