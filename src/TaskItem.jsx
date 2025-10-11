import ToggleButton from "./ToggleButton";
import DeleteButton from "./DeleteButton";
import './TaskItem.css';


function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className="taskItem"
     
    >
      <strong>{task.taskName}</strong> <br />
      Deadline: {task.deadline} <br />
      Priority: {task.priority} <br />

      {/* Buttons */}
      
        <ToggleButton
          isCompleted={task.completed}
          onToggle={onToggle}
        />
        <DeleteButton onDelete={onDelete} />
      
    </li>
  );
}

export default TaskItem;
