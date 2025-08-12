import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import YarnMixes from './sections/YarnMixes';
import CrochetedItems from './sections/CrochetedItems';
import WhereToBuy from './sections/WhereToBuy';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const homeRef = useRef(null);
  const yarnRef = useRef(null);
  const crochetedRef = useRef(null);
  const buyRef = useRef(null);

  useEffect(() => {
    const sections = [
      yarnRef.current,
      crochetedRef.current,
      buyRef.current,
    ];

    sections.forEach((section) => {
      if (!section) return;

      gsap.set(section, { opacity: 0, y: 30 });

      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="background-texture font-raleway">
      <NavBar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="yarn-mixes" ref={yarnRef}>
        <YarnMixes />
      </section>
      
      <section id="crocheted-items" ref={crochetedRef}>
        <CrochetedItems />
      </section>
      
      <section id="where-to-buy" ref={buyRef}>
        <WhereToBuy />
      </section>
      
      <footer className="bg-[#f2e8e4] text-[#695c53] text-center py-2">
        © 2025 Crocheted by Carisse. All rights reserved.
      </footer>
    </div>
  );
}
