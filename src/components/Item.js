export default function Item({ item, onDeleteItem, onToggleItems }) {
  console.log(item);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
