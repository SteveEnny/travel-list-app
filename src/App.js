import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  const [descripton, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);
  function handleSubmit(e) {
    e.preventDefault();
    if (!descripton) return;
    const newItems = {
      descripton,
      quantity,
      id: Date.now(),
      packed: false,
    };
    console.log(newItems);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {/* <option value={1}>1</option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={descripton}
        onChange={(e) => {
          setDescription(e.target.value);
          // console.log(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Item item={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  console.log(item);
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already pascked X (X%)
    </footer>
  );
}
