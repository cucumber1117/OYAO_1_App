<<<<<<< HEAD
import './Roulette.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { buildWheelGradient, getResultRotation, spinResult } from '../../utils/rouletteLogic';

const SPIN_DURATION = 3600;

/*
 * 使い方:
 * <Roulette items={items} onResult={(result) => setResult(result)} />
 * items が空の場合はボタンが無効になり、抽選結果は onResult(result) で親に渡します。
 */
export default function Roulette({ items = [], onResult = () => {}, onSpin = null }) {
	const [isSpinning, setIsSpinning] = useState(false);
	const [rotation, setRotation] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const finishTimerRef = useRef(null);
	const wheelItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
	const canSpin = wheelItems.length > 0 && !isSpinning;
	const wheelGradient = useMemo(() => buildWheelGradient(wheelItems), [wheelItems]);

	useEffect(() => {
		return () => {
			if (finishTimerRef.current) window.clearTimeout(finishTimerRef.current);
		};
	}, []);

	const handleSpin = () => {
		if (!canSpin) return;

		const result = spinResult(wheelItems);
		const nextRotation = getResultRotation(result.index, wheelItems, rotation);

		setIsSpinning(true);
		setSelectedIndex(-1);
		setRotation(nextRotation);

		finishTimerRef.current = window.setTimeout(() => {
			setSelectedIndex(result.index);
			setIsSpinning(false);
			onResult(result.item);
			if (typeof onSpin === 'function') onSpin(result.item);
		}, SPIN_DURATION);
	};

	return (
		<div className="roulette">
			<div className="roulette__stage" aria-label="ルーレット">
				<div className="roulette__pointer" aria-hidden="true" />
				<div
					className="roulette__wheel"
					style={{
						'--roulette-bg': wheelGradient,
						'--rotation': `${rotation}deg`,
						'--item-count': wheelItems.length,
					}}
				>
					{wheelItems.length === 0 ? (
						<span className="roulette__empty">項目がありません</span>
					) : (
						wheelItems.map((item, index) => (
							<span
								key={`${item}-${index}`}
								className={`roulette__label${selectedIndex === index ? ' roulette__label--selected' : ''}`}
								style={{ '--index': index }}
							>
								{item}
							</span>
						))
					)}
				</div>
				<div className="roulette__center" aria-hidden="true" />
			</div>

			<button className="btn roulette__button" type="button" onClick={handleSpin} disabled={!canSpin}>
				{isSpinning ? '回転中...' : '回す'}
			</button>
		</div>
	);
}
=======
import './Home.css';
import ItemEditor from '../../components/ItemEditor/ItemEditor';
import Roulette from '../../components/Roulette/Roulette';
import ResultDisplay from '../../components/ResultDisplay/ResultDisplay';

export default function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <h1>ルーレットアプリ</h1>
      </header>

      <main className="home__main">
        {/* 左カラム：項目編集 */}
        <section className="home__panel home__panel--left">
          <ItemEditor />
        </section>

        {/* 中央カラム：ルーレット本体 */}
        <section className="home__panel home__panel--center">
          <Roulette />
        </section>

        {/* 右カラム：結果表示 */}
        <section className="home__panel home__panel--right">
          <ResultDisplay />
        </section>
      </main>
    </div>
  );
}
>>>>>>> 3e691da0c3939d2e17c99cbce0068a24df056c8a
