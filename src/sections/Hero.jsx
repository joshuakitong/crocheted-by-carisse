import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const logoRef = useRef(null);
  const descRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (
      !logoRef.current ||
      !descRef.current ||
      !containerRef.current
    ) return;

    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
    timeline.fromTo(logoRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, immediateRender: false })
      .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, immediateRender: false }, "+=0.01")
      .fromTo(containerRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.7, immediateRender: false }, "+=0.01");

    return () => timeline.kill();
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/herobackground.jpg)` }}
    >
      <div className="max-w-7xl px-4 pt-24 pb-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center">
          <img
            ref={logoRef}
            src={`${import.meta.env.BASE_URL}images/CBCLogo.png`}
            alt="Crocheted by Carisse Logo"
            className="w-42 md:w-52 mx-auto opacity-0"
          />
          <p
            ref={descRef}
            className="mt-6 text-lg md:text-xl text-white font-semibold max-w-lg mx-auto opacity-0"
            style={{ textShadow: "1.5px 1.5px 2px rgb(105, 92, 83)" }}
          >
            Maker of handmade yarn mixes and made-to-order crocheted items from Baguio City, Philippines
          </p>
        </div>

        <div ref={containerRef} className="flex-1 text-center md:text-left bg-white/80 p-6 md:p-8 rounded-xl opacity-0">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#e94326] leading-snug"
          >
            Welcome Crocheters & Yarn Lovers
          </h2>
          <p
            className="mt-4 text-lg text-[#695c53] leading-relaxed"
          >
            Whether you're searching for the perfect fine cotton yarn to inspire your next project or
            a beautifully handcrafted crochet piece made just for you — you've come to the right place!
          </p>
          <a
            href="#yarn-mixes"
            className="inline-block mt-6 bg-[#eb9803] text-white px-4 py-3 rounded-full font-semibold shadow hover:bg-[#c77a02] transition-colors"
          >
            See Yarn Mixes
          </a>
        </div>
      </div>
    </div>
  );
}
