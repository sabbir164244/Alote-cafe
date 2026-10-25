import { X, MapPin, Sparkles, Check } from "lucide-react";
import { MenuItemPreview, BUSINESS_INFO } from "../data/cafeData";

interface DrinkModalProps {
  item: MenuItemPreview | null;
  onClose: () => void;
}

export default function DrinkModal({ item, onClose }: DrinkModalProps) {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#241711]/10 text-[#241711] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative h-60 sm:h-72 w-full bg-[#1A120C]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/80 via-transparent to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#5EEAD4] mb-1 block">
              {item.categoryLabel}
            </span>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-serif-title text-2xl font-bold text-white">
                {item.name}
              </h3>
              <span className="font-arabic-calligraphy text-lg text-[#E6DBD1]">
                {item.arabicName}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <p className="text-sm sm:text-base text-[#5C4D43] leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70] mb-3">
              Craft Highlights
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#241711]/8 text-xs font-medium text-[#241711]"
                >
                  <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#0F766E]/20 mb-6 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
            <div className="text-xs text-[#5C4D43] leading-relaxed">
              <strong className="font-semibold text-[#241711] block mb-0.5">
                Client Concept Note
              </strong>
              This item is part of the interactive website concept demonstration. Official pricing (SAR 1–20 range) and full seasonal blends are available on-site at Atole Cafe.
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={BUSINESS_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-sm font-semibold shadow-xs transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Visit Atole Cafe
            </a>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-xl bg-[#EFE8DE] hover:bg-[#E4DACD] text-[#241711] text-sm font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
