import './ResultDisplay.css';

export default function ResultDisplay({ result = null }) {
  return (
    <div className="result-display">
      <h2 className="result-display__title">結果</h2>
      <div className="result-display__area">{result ?? 'まだ回していません'}</div>
    </div>
  );
}
