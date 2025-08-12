export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f2e8e4] shadow z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        <a href="#home" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/CBC.png`}
            alt="Crocheted by Carisse Logo" 
            className="h-10 w-auto"
          />
        </a>

        <div className="space-x-6">
          <a href="#yarn-mixes" className="text-[#695c53] hover:text-[#e94326] font-semibold transition">
            Yarn Mixes
          </a>
          <a href="#crocheted-items" className="text-[#695c53] hover:text-[#e94326] font-semibold transition">
            Crocheted Items
          </a>
          <a href="#where-to-buy" className="text-[#695c53] hover:text-[#e94326] font-semibold transition">
            Where to Buy
          </a>
        </div>
      </div>
    </nav>
  );
}
