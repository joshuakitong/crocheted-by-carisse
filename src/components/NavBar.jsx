import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f2e8e4] shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a onClick={() => setIsOpen(false)} href="#home" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/CBC.png`}
            alt="Crocheted by Carisse Logo"
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex space-x-6">
          <a
            href="#yarn-mixes"
            className="text-[#695c53] hover:text-[#e94326] font-semibold transition"
          >
            Yarn Mixes
          </a>
          <a
            href="#crocheted-items"
            className="text-[#695c53] hover:text-[#e94326] font-semibold transition"
          >
            Crocheted Items
          </a>
          <a
            href="#where-to-buy"
            className="text-[#695c53] hover:text-[#e94326] font-semibold transition"
          >
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
            className="block text-[#695c53] hover:text-[#e94326] font-semibold transition"
          >
            Yarn Mixes
          </a>
          <a
            href="#crocheted-items"
            onClick={() => setIsOpen(false)}
            className="block text-[#695c53] hover:text-[#e94326] font-semibold transition"
          >
            Crocheted Items
          </a>
          <a
            href="#where-to-buy"
            onClick={() => setIsOpen(false)}
            className="block text-[#695c53] hover:text-[#e94326] font-semibold transition"
          >
            Where to Buy
          </a>
        </div>
      )}
    </nav>
  );
}
