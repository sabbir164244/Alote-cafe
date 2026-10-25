import { useState } from "react";
import { Camera, Maximize2, Info } from "lucide-react";
import { GALLERY_PHOTOS } from "../data/cafeData";
import LightboxModal from "./LightboxModal";

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#241711]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E] mb-2">
              <Camera className="w-4 h-4" />
              Visual Impressions
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#241711]">
              A Glimpse Inside the Atmosphere.
            </h2>
          </div>

          <div className="text-xs text-[#8C7A70] max-w-sm flex items-start gap-2">
            <Info className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
            <span>
              Conceptual gallery visualising storefront aesthetics, tea pours, and comfortable seating inspired by the cafe's Google Maps location.
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePhotoIndex(idx);
                }
              }}
              className="group relative rounded-2xl overflow-hidden bg-[#241711] aspect-4/3 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Verified Screenshot badge */}
              {photo.isVerifiedScreenshot && (
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-md bg-[#137333] text-white shadow-xs">
                    Verified Google Maps
                  </span>
                </div>
              )}

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Photo Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#5EEAD4] block mb-1">
                  {photo.category}
                </span>
                <h3 className="font-serif-title text-base sm:text-lg font-bold leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-1 mt-0.5">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photos={GALLERY_PHOTOS}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(index) => setActivePhotoIndex(index)}
      />
    </section>
  );
}
