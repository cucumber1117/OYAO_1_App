import { useState } from 'react';
import './ItemEditor.css';

export default function ItemEditor() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const text = prompt('項目名を入力');
    if (!text) return;

    setItems([...items, text]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="item-editor">
      <h2 className="item-editor__title">項目編集</h2>

      <button className="btn" onClick={addItem}>
        項目を追加
      </button>

      <ul className="item-editor__list">
        {items.map((item, index) => (
          <li key={index} className="item-editor__item">
            {item}
            <button
              className="btn"
              onClick={() => deleteItem(index)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}