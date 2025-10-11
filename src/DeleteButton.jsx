function DeleteButton({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      style={{
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "6px 10px",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
