function DeleteButton({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      style={{
        backgroundColor:"#a72874ff",
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
