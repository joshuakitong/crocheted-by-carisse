import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import YarnMixes from './sections/YarnMixes';
import CrochetedItems from './sections/CrochetedItems';
import WhereToBuy from './sections/WhereToBuy';

export default function App() {
  return (
    <div className="background-texture font-raleway">
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="yarn-mixes">
        <YarnMixes />
      </section>
      <section id="crocheted-items">
        <CrochetedItems />
      </section>
      <section id="where-to-buy">
        <WhereToBuy />
      </section>
      <footer className="bg-[#f2e8e4] text-[#695c53] text-center py-2">
        © 2025 Crocheted by Carisse. All rights reserved.
      </footer>
    </div>
  );
}
