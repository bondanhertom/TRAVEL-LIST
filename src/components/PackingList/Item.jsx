export default function Item({ item, onDelete, onCheckboxChange }) {
  function handleDelete() {
    onDelete(item.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onCheckboxChange(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
