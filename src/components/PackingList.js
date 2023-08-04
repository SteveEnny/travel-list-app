import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClear,
}) {
  const [sort, setSort] = useState("input");
  let sortedItem;

  if (sort === "input") {
    sortedItem = items;
  }

  if (sort === "packed") {
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  if (sort === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  return (
    <div className="list">
      <ul>
        {sortedItem.map((items) => (
          <Item
            item={items}
            key={items.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by input packing status</option>
        </select>
        <button onClick={onClear}>Clear Lists</button>
      </div>
    </div>
  );
}
