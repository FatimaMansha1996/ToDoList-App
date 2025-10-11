import ToggleButton from "./ToggleButton";
import DeleteButton from "./DeleteButton";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className="taskItem"
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        backgroundColor: "#f1f1f1",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <strong>{task.taskName}</strong> <br />
      Deadline: {task.deadline} <br />
      Priority: {task.priority} <br />

      {/* Buttons */}
      <div style={{ marginTop: "10px" }}>
        <ToggleButton
          isCompleted={task.completed}
          onToggle={onToggle}
        />
        <DeleteButton onDelete={onDelete} />
      </div>
    </li>
  );
}

export default TaskItem;
