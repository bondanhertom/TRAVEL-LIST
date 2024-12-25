import Button from "../Button";

export default function Item({ item, onDelete, onCheckboxChange }) {
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

      <Button onClick={() => onDelete(item.id)} name={"❌"} />
    </li>
  );
}
