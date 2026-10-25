import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { GalleryPhoto } from "../data/cafeData";

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % photos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, photos.length, onClose, onNavigate]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close photo preview"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + photos.length) % photos.length);
        }}
        aria-label="Previous photo"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 backdrop-blur-md"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % photos.length);
        }}
        aria-label="Next photo"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 backdrop-blur-md"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image Container */}
      <div
        className="max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] w-full rounded-2xl overflow-hidden shadow-2xl bg-black/40 flex items-center justify-center">
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl text-white">
          <div className="text-xs font-semibold text-[#5EEAD4] uppercase tracking-wider mb-1">
            {currentPhoto.category} · {currentIndex + 1} of {photos.length}
          </div>
          <h3 className="font-serif-title text-xl font-bold mb-1">
            {currentPhoto.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/70">
            {currentPhoto.subtitle}
          </p>
          <p className="mt-2 text-[11px] text-white/40 flex items-center justify-center gap-1">
            <Info className="w-3 h-3" /> Conceptual presentation visual for Atole Cafe
          </p>
        </div>
      </div>
    </div>
  );
}
