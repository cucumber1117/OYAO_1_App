import './ItemEditor.css';

export default function ItemEditor({ items = [], onAdd = () => {}, onDelete = () => {} }) {
  const addItem = () => {
    const text = prompt('項目名を入力');
    if (!text?.trim()) return;

    onAdd(text.trim());
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
              onClick={() => onDelete(index)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
