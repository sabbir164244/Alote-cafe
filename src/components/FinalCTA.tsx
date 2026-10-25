import { Navigation, Phone, MapPin, Coffee } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#241711] text-white overflow-hidden">
      {/* Background Ambience Texture & Scrim */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/src/assets/images/cafe_interior_cozy_lounge_1792899567164.jpg"
          alt="Atole Cafe interior atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#241711]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5EEAD4] mb-4">
          <Coffee className="w-4 h-4" />
          <span>Atole Cafe · Riyadh</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl text-balance">
          Your Next Favourite Cafe Moment Awaits.
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-[#D4C5B9] max-w-2xl leading-relaxed mb-10 text-balance">
          Stop by, enjoy the atmosphere, and discover Atole Cafe in Riyadh.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] active:scale-[0.98] rounded-xl shadow-lg transition-all"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </a>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-[#241711] bg-[#FAF7F2] hover:bg-white active:scale-[0.98] rounded-xl shadow-md transition-all"
          >
            <Phone className="w-5 h-5 text-[#0F766E]" />
            Call the Cafe
          </a>
        </div>

        {/* Footnote with address */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A8988C]">
          <MapPin className="w-4 h-4 text-[#5EEAD4]" />
          <span>Islamabad Street, Al Mansourah, Riyadh 12684</span>
          <span className="text-white/30 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Closes at 2:00 AM</span>
        </div>
      </div>
    </section>
  );
}
