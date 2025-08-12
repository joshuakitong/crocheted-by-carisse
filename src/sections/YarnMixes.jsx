import { useState, useEffect } from "react";
import FullscreenModal from "../components/FullscreenModal";

export default function YarnMixes() {
  const ombreMixes = [
    {
      name: "Pink Mermaid",
      images: ["images/ombre1a.jpg", "images/ombre1b.jpg"],
    },
    {
      name: "Purple Wave",
      images: ["images/ombre2a.jpg", "images/ombre2b.jpg"],
    },
    {
      name: "Coral Sand",
      images: ["images/ombre3a.jpg", "images/ombre3b.jpg"],
    },
    {
      name: "Loyal Blue",
      images: ["images/ombre4a.jpg", "images/ombre4b.jpg"],
    },
  ];

  const regularMixes = [
    { name: "Scoop of Fun", image: "images/regular1.jpg" },
    { name: "Pretty Peacock", image: "images/regular2.jpg" },
    { name: "Lantana Love", image: "images/regular3.jpg" },
    { name: "Pea Flower", image: "images/regular4.jpg" },
    { name: "Titanium", image: "images/regular5.jpg" },
    { name: "Fairy Sprinkle", image: "images/regular6.jpg" },
    { name: "Modern Boho", image: "images/regular7.jpg" },
    { name: "Bluebell Kiss", image: "images/regular8.jpg" },
    { name: "Palm Coast", image: "images/regular9.jpg" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");
  const [modalGroup, setModalGroup] = useState(null);

  const openModal = (group, index) => {
    if (group === "ombre") {
      const allOmbreImages = ombreMixes.flatMap(mix => mix.images);
      setModalImages(allOmbreImages);
      setModalIndex(index);
      setModalTitle(ombreMixes[Math.floor(index / 2)].name);
      setModalGroup("ombre");
    } else if (group === "regular") {
      const allRegularImages = regularMixes.map(mix => mix.image);
      setModalImages(allRegularImages);
      setModalIndex(index);
      setModalTitle(regularMixes[index].name);
      setModalGroup("regular");
    }
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const nextImage = () => setModalIndex((i) => (i + 1) % modalImages.length);
  const prevImage = () => setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);

  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalGroup === "ombre") {
      setModalTitle(ombreMixes[Math.floor(modalIndex / 2)].name);
    } else if (modalGroup === "regular") {
      setModalTitle(regularMixes[modalIndex].name);
    }
  }, [modalIndex, modalGroup]);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-section");

    function checkVisibility() {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          el.classList.add("visible");
        }
      });
    }

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);

    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <div className="pt-16 px-4 max-w-7xl mx-auto">
      <h1 className="animate-section text-4xl font-bold text-[#e94326] mb-6 text-center">
        Fine Cotton Yarn Mixes
      </h1>

      <h2 className="animate-section text-2xl font-semibold text-[#eb9803] mb-2 text-center">Ombre Mixes</h2>
      <p className="animate-section text-[#695c53] mb-8 text-center">
        12 ply fine cotton | Sportweight (approximately 350g/1400m) | 390 PHP / 8 USD
      </p>

      <div className="animate-section grid grid-cols-1 lg:grid-cols-2 gap-y-16 mb-12">
        {ombreMixes.map((mix, i) => (
          <div key={mix.name} className="relative flex justify-center items-center">
            <div
              className="group relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal("ombre", i * 2)}
            >
              <img
                src={`${import.meta.env.BASE_URL}${mix.images[1]}`}
                alt={mix.name}
                className="rounded-xl rotate-2 absolute w-96 sm:w-128 translate-x-4 transform group-hover:translate-x-0 group-hover:rotate-0 transition duration-300"
              />
              <img
                src={`${import.meta.env.BASE_URL}${mix.images[0]}`}
                alt={mix.name}
                className="rounded-xl -rotate-2 w-96 sm:w-128 -translate-x-4 transform group-hover:translate-x-0 group-hover:rotate-0 transition duration-300"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 p-6 bg-black/50 rounded-lg text-white text-center py-1 text-sm font-semibold z-10">
                {mix.name}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                Click to view in fullscreen
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="animate-section text-2xl font-semibold text-[#eb9803] mb-2 text-center">Regular Mixes</h2>
      <p className="animate-section text-[#695c53] mb-8 text-center">
        12 ply fine cotton | Sportweight (approximately 250g/1000m) | 290 PHP / 6 USD
      </p>
      <div className="animate-section grid grid-cols-1 xl:grid-cols-3 gap-8">
        {regularMixes.map((mix, i) => (
          <div
            key={mix.name}
            className="relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal("regular", i)}
          >
            <img
              src={`${import.meta.env.BASE_URL}${mix.image}`}
              alt={mix.name}
              className="rounded-xl"
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 p-6 bg-black/50 rounded-lg text-white text-center py-1 text-sm font-semibold z-10">
              {mix.name}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
              Click to view in fullscreen
            </div>
          </div>
        ))}
      </div>

      <FullscreenModal
        open={modalOpen}
        title={modalTitle}
        images={modalImages}
        index={modalIndex}
        onClose={closeModal}
        onPrev={prevImage}
        onNext={nextImage}
        onBackdropClick={handleBackdropClick}
      />
    </div>
  );
}
