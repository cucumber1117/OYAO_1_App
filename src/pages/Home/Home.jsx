import './Home.css';
import { useState } from 'react';
import ItemEditor from '../../components/ItemEditor/ItemEditor';
import Roulette from '../../components/Roulette/Roulette';
import ResultDisplay from '../../components/ResultDisplay/ResultDisplay';

export default function Home() {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(null);

  const addItem = (item) => {
    setItems((currentItems) => [...currentItems, item]);
  };

  const deleteItem = (deleteIndex) => {
    setItems((currentItems) => currentItems.filter((_, index) => index !== deleteIndex));
  };

  return (
    <div className="home">
      <header className="home__header">
        <h1>ルーレットアプリ</h1>
      </header>

      <main className="home__main">
        <section className="home__panel home__panel--left">
          <ItemEditor items={items} onAdd={addItem} onDelete={deleteItem} />
        </section>

        <section className="home__panel home__panel--center">
          <Roulette items={items} onResult={setResult} />
        </section>

        <section className="home__panel home__panel--right">
          <ResultDisplay result={result} />
        </section>
      </main>
    </div>
  );
}
