import './ItemEditor.css';

export default function ItemEditor({ items = [], onAdd = () => {} }) {
  return (
    <div className="item-editor">
      <h2 className="item-editor__title">項目編集</h2>
      <div className="item-editor__body">
        <p className="item-editor__hint">ここで項目の追加・削除・編集を実装してください。</p>
        <button className="btn" onClick={() => onAdd('新しい項目')}>項目を追加</button>
        <ul className="item-editor__list">
          {items.map((it, i) => (
            <li key={i} className="item-editor__item">{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
