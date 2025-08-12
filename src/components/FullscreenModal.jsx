import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function FullscreenModal({
  open,
  images,
  index,
  title,
  onClose,
  onNext,
  onPrev,
  onBackdropClick,
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4"
      onClick={onBackdropClick}
    >
      {title && (
        <div className="text-white rounded-xl py-2 px-4 bg-black/50 text-2xl font-bold mb-4">
          {title}
        </div>
      )}
      <div className="relative flex items-center w-full max-w-4xl">
        {images.length > 1 && (
          <button onClick={onPrev} className="absolute left-0 p-2 text-white cursor-pointer">
            <ChevronLeft size={40} />
          </button>
        )}
        <img
          src={`${import.meta.env.BASE_URL}${images[index]}`}
          alt={title}
          className="max-h-[80vh] mx-auto rounded-2xl"
        />
        {images.length > 1 && (
          <button onClick={onNext} className="absolute right-0 p-2 text-white cursor-pointer">
            <ChevronRight size={40} />
          </button>
        )}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white cursor-pointer"
      >
        <X size={32} />
      </button>
    </div>
  );
}
