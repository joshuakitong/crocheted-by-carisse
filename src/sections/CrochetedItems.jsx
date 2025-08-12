import { useState } from "react";
import FullscreenModal from "../components/FullscreenModal";

export default function CrochetedItems() {
  const customers = Array.from({ length: 9 }, (_, i) => ({
    name: `Customer ${i + 1}`,
    image: `images/customer${i + 1}.jpg`,
  }));

  const carisse = Array.from({ length: 9 }, (_, i) => ({
    name: `Carisse ${i + 1}`,
    image: `images/carisse${i + 1}.jpg`,
  }));

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (group, index) => {
    let allImages = [];
    if (group === "customers") {
      allImages = customers.map((item) => item.image);
    } else if (group === "carisse") {
      allImages = carisse.map((item) => item.image);
    }
    setModalImages(allImages);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const nextImage = () => setModalIndex((i) => (i + 1) % modalImages.length);
  const prevImage = () => setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const renderGrid = (items, group) => (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
      {items.map((item, i) => (
        <div
          key={item.name}
          className="relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
          onClick={() => openModal(group, i)}
        >
          <img
            src={`${import.meta.env.BASE_URL}${item.image}`}
            alt={item.name}
            className="rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            Click to view in fullscreen
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#e94326] mb-6 text-center">
        Crocheted Items
      </h1>

      <h2 className="text-2xl font-semibold text-[#eb9803] mb-2 text-center">
        by our beloved customers
      </h2>
      {renderGrid(customers, "customers")}

      <h2 className="text-2xl font-semibold text-[#eb9803] mb-2 text-center">
        by Carisse
      </h2>
      {renderGrid(carisse, "carisse")}

      <FullscreenModal
        open={modalOpen}
        images={modalImages}
        index={modalIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        onBackdropClick={handleBackdropClick}
      />
    </div>
  );
}
