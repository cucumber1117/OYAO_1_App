import { useState } from 'react';
import { loadItems, saveItems } from './storage';

function App() {
  const [items, setItems] = useState(loadItems());

  const addItem = () => {
    const next = [...items, '新しい項目'];

    setItems(next);
    saveItems(next);
  };

  return (
    <>
      <button onClick={addItem}>追加</button>

      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </>
  );
}