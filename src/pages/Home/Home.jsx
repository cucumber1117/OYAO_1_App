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
        <section className="home__panel home__panel--left">
          <ItemEditor />
        </section>

        <section className="home__panel home__panel--center">
          <Roulette />
        </section>

        <section className="home__panel home__panel--right">
          <ResultDisplay />
        </section>
      </main>
    </div>
  );
}
