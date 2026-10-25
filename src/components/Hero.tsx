import { MapPin, Phone, Star, Clock, ArrowDownRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A120C]"
    >
      {/* Background Cinematic Image with Zero-Broken-Image fallback container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_atole_cafe_atmosphere_1792899565443.jpg"
          alt="Warm, inviting interior of Atole Cafe in Riyadh featuring wooden artisanal counters and cozy seating"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
        />
        {/* Measured Scrim for contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#150D08]/95 via-[#1A120C]/65 to-[#150D08]/40" />
        <div className="absolute inset-0 bg-[#0F766E]/10 mix-blend-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Top Kicker / Location Stamp */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm font-medium mb-6">
          <span className="font-arabic-calligraphy text-sm text-[#5EEAD4]">{BUSINESS_INFO.signageTagline}</span>
          <span className="text-white/40" aria-hidden="true">·</span>
          <span>Islamabad Street, Al Mansourah</span>
          <span className="text-white/40" aria-hidden="true">·</span>
          <span className="text-[#5EEAD4] font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Closes 2:00 AM
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] text-balance max-w-4xl mb-6">
          Your Little Escape in Riyadh.
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#E6DBD1] font-light max-w-2xl leading-relaxed mb-10 text-balance">
          Discover a welcoming cafe atmosphere, comforting tea, and moments worth slowing down for.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <a
            href={BUSINESS_INFO.mapsLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] active:scale-[0.98] rounded-xl shadow-lg shadow-[#0F766E]/25 transition-all"
          >
            <MapPin className="w-5 h-5 text-[#5EEAD4]" aria-hidden="true" />
            Find Us on Maps
          </a>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-[#1A120C] bg-[#FAF7F2] hover:bg-white active:scale-[0.98] rounded-xl transition-all shadow-md"
          >
            <Phone className="w-5 h-5 text-[#0F766E]" aria-hidden="true" />
            Call the Cafe
          </a>
        </div>

        {/* Trust Line & Google Stats */}
        <div className="border-t border-white/15 pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-[#D4C5B9]">
          <div className="flex items-center gap-1.5 font-medium text-white">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4.9 Google Rating</span>
          </div>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
          <span>124 Verified Reviews</span>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
          <span>Price Range: SAR 1–20</span>
        </div>
      </div>

      {/* Decorative Bottom Wave / Transition */}
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
}
