import { useState } from "react";
import { Lightbulb, ChevronRight, Tv, Flame, ExternalLink, Sparkles, X, Check } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function KnowBeforeYouGo() {
  const [activeModal, setActiveModal] = useState<"tea" | "matches" | "ask" | null>(null);

  return (
    <section className="py-8 bg-[#FAF7F2] border-b border-[#241711]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The "Know Before You Go" Google Maps Verified Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0F766E]/20 shadow-md relative overflow-hidden">
          {/* Subtle decorative background tint */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F766E]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Banner Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E6F4F1] text-[#0F766E] flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#241711]">
                    Know before you go
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                    Google Maps Insights
                  </span>
                </div>
                <p className="text-xs text-[#8C7A70] mt-0.5">
                  Verified community highlights summarized from 124+ local visitors
                </p>
              </div>
            </div>

            {/* Reviewers Avatar preview cluster */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-[#5C4D43] bg-[#FAF7F2] px-3.5 py-1.5 rounded-full border border-[#241711]/5">
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#362419] text-white text-[10px] font-bold flex items-center justify-center">
                  A
                </span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#0F766E] text-white text-[10px] font-bold flex items-center justify-center">
                  S
                </span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#D97706] text-white text-[10px] font-bold flex items-center justify-center">
                  N
                </span>
              </div>
              <span className="font-medium text-[#241711]">+124 locals</span>
            </div>
          </div>

          {/* 2 Interactive Highlight Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Banner 1: Steamed Tea Highlight */}
            <button
              onClick={() => setActiveModal("tea")}
              className="group text-left p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F3ECE1] border border-[#241711]/8 hover:border-[#0F766E]/30 transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#241711] group-hover:text-[#0F766E] transition-colors leading-snug">
                    Visitors highlight the steamed tea as a standout drink
                  </h4>
                  <p className="text-xs text-[#8C7A70] mt-1 font-arabic-calligraphy text-[13px]">
                    الشاهي المبخر ومسالا كرك الأصيل · الأكثر طلباً
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#0F766E] group-hover:text-white text-[#5C4D43] flex items-center justify-center transition-colors shadow-xs shrink-0">
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>

            {/* Banner 2: Live Matches Highlight */}
            <button
              onClick={() => setActiveModal("matches")}
              className="group text-left p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F3ECE1] border border-[#241711]/8 hover:border-[#0F766E]/30 transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Tv className="w-5 h-5 text-[#0F766E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#241711] group-hover:text-[#0F766E] transition-colors leading-snug">
                    Fans gather here to watch live matches in a vibrant setting
                  </h4>
                  <p className="text-xs text-[#8C7A70] mt-1 font-arabic-calligraphy text-[13px]">
                    أجواء حماسية لمتابعة المباريات الكروية حتى وقت متأخر
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#0F766E] group-hover:text-white text-[#5C4D43] flex items-center justify-center transition-colors shadow-xs shrink-0">
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#241711]/5">
            <button
              onClick={() => setActiveModal("ask")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <Sparkles className="w-4 h-4" />
              Ask Maps Summary
            </button>

            <a
              href={BUSINESS_INFO.mapsLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#0F766E] hover:text-[#0D655E] font-medium transition-colors"
            >
              <span>View live reviews and photo updates on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Steamed Tea Highlight Modal */}
      {activeModal === "tea" && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#241711]/10 text-[#241711] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 bg-[#1A120C]">
              <img
                src="/src/assets/images/tea_karak_traditional_pour_1792899565967.jpg"
                alt="Aromatic steamed tea at Atole Cafe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/90 via-black/40 to-transparent" />
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5EEAD4] block">
                  Google Maps Community Standout
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-white">
                  Signature Steamed Tea (الشاهي المبخر)
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm text-[#5C4D43] leading-relaxed mb-5">
                Google Maps reviewers frequently single out Atole Cafe’s steamed tea as the venue’s most memorable offering. Prepared by infusing rich black tea leaves with steaming aromatic notes, it offers Riyadh residents the comforting, historic taste of authentic tea craft.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#241711]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0F766E]" />
                  <span>Steamed to release maximum aromatic spice depth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0F766E]" />
                  <span>Available alongside traditional Masala chai & Karak</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0F766E]" />
                  <span>Ranked SAR 1–20 accessible price tier</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Get Directions to Taste
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="py-3 px-5 rounded-xl bg-[#EFE8DE] hover:bg-[#E4DACD] text-[#241711] text-xs sm:text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Matches Highlight Modal */}
      {activeModal === "matches" && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#241711]/10 text-[#241711] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 bg-[#1A120C]">
              <img
                src="/src/assets/images/hero_atole_cafe_atmosphere_1792899565443.jpg"
                alt="Atole Cafe gathering atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/90 via-black/40 to-transparent" />
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5EEAD4] block">
                  Matchday & Community
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-white">
                  Live Matches & Vibrant Atmosphere
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm text-[#5C4D43] leading-relaxed mb-5">
                Local football enthusiasts and friends gather at Atole Cafe on Islamabad Street to watch domestic and international matches. With comfortable seating and extended hours until 2:00 AM, it has become a cherished neighborhood spot for live sporting events.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#241711]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0F766E]" />
                  <span>Lively Riyadh sports screening atmosphere</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0F766E]" />
                  <span>Late night hours: open until 2:00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0F766E]" />
                  <span>Pair with hot karak or iced Spanish latte</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Call Cafe to Check Tonight’s Schedule
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="py-3 px-5 rounded-xl bg-[#EFE8DE] hover:bg-[#E4DACD] text-[#241711] text-xs sm:text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ask Maps Summary Modal */}
      {activeModal === "ask" && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#241711]/10 text-[#241711] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1A73E8]">
                  <Sparkles className="w-4 h-4" />
                  Google Maps AI Summary for Atole Cafe
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  aria-label="Close dialog"
                  className="text-[#8C7A70] hover:text-[#241711] p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="font-serif-title text-xl font-bold text-[#241711] mb-3">
                Summary from 124 Verified Google Reviews
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#5C4D43] leading-relaxed mb-6">
                <p>
                  • <strong>Signature Steamed Tea:</strong> Known for rich taste, high aroma, and balance of warmth that visitors consistently highlight as the best item on the menu.
                </p>
                <p>
                  • <strong>Match Screenings:</strong> A favorite neighborhood venue in Al Mansourah to enjoy football matches with companions in a comfortable, welcoming environment.
                </p>
                <p>
                  • <strong>Extended Hours:</strong> Open until 2:00 AM, accommodating evening and late-night visits.
                </p>
                <p>
                  • <strong>Great Value:</strong> Ranked within SAR 1–20, delivering high satisfaction without excessive cost.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={BUSINESS_INFO.mapsLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="py-3 px-5 rounded-xl bg-[#EFE8DE] hover:bg-[#E4DACD] text-[#241711] text-xs sm:text-sm font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
