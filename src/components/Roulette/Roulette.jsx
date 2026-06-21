import './Roulette.css';

export default function Roulette({ items = [], onSpin = () => {} }) {
  return (
    <div className="roulette">
      <div className="roulette__wheel">ルーレット表示</div>
      <button className="btn" onClick={() => onSpin()}>
        回す
      </button>
    </div>
  );
}
