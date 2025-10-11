function ToggleButton({ isCompleted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        backgroundColor: isCompleted ? "#a72874ff" : "#c37cabff",
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
