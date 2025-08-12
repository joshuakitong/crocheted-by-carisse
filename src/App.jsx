import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import YarnMixes from './sections/YarnMixes';
import CrochetedItems from './sections/CrochetedItems';
import WhereToBuy from './sections/WhereToBuy';

export default function App() {
  return (
    <div className="bg-[#fff9f5] font-raleway">
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
    </div>
  );
}
