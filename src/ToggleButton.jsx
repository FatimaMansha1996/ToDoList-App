function ToggleButton({ isCompleted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        backgroundColor: isCompleted ? "#28a745" : "#6c757d",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "6px 10px",
        marginRight: "8px",
        cursor: "pointer",
      }}
    >
      {isCompleted ? "Completed" : "Mark Complete"}
    </button>
  );
}

export default ToggleButton;
