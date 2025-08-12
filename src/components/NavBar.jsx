import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { autoAlpha: 0, y: -30 },
      { autoAlpha: 1, y: 0, delay: 2.1, duration: 0.7, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-75% 0px -25% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClasses = (id) =>
    activeSection === id
      ? "text-[#e94326] font-semibold transition"
      : "text-[#695c53] hover:text-[#e94326] font-semibold transition";

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-[#f2e8e4] shadow z-50 opacity-0"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a onClick={() => setIsOpen(false)} href="#home" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/CBC.png`}
            alt="Crocheted by Carisse Logo"
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex space-x-6">
          <a href="#yarn-mixes" className={linkClasses("yarn-mixes")}>
            Yarn Mixes
          </a>
          <a href="#crocheted-items" className={linkClasses("crocheted-items")}>
            Crocheted Items
          </a>
          <a href="#where-to-buy" className={linkClasses("where-to-buy")}>
            Where to Buy
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-[#695c53] hover:text-[#e94326] transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#f2e8e4] px-4 pb-4 space-y-3">
          <a
            href="#yarn-mixes"
            onClick={() => setIsOpen(false)}
            className={`block ${linkClasses("yarn-mixes")}`}
          >
            Yarn Mixes
          </a>
          <a
            href="#crocheted-items"
            onClick={() => setIsOpen(false)}
            className={`block ${linkClasses("crocheted-items")}`}
          >
            Crocheted Items
          </a>
          <a
            href="#where-to-buy"
            onClick={() => setIsOpen(false)}
            className={`block ${linkClasses("where-to-buy")}`}
          >
            Where to Buy
          </a>
        </div>
      )}
    </nav>
  );
}
