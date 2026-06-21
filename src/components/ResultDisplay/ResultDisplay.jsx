import './ResultDisplay.css';

export default function ResultDisplay({ result = null }) {
  return (
    <div className="result-display">
      <h2 className="result-display__title">結果</h2>
      {/* resultが空のときは、emptyクラスを付与して文字色を薄くします */}
      <div className={`result-display__area ${!result ? 'result-display__area--empty' : ''}`}>
        {result ?? 'まだ回していません'}
      </div>
    </div>
  );
}
