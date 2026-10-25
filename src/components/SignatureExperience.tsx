import { Heart, Sparkles, Moon, Clock, Flame } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function SignatureExperience() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5EFEB] border-b border-[#241711]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#241711]/10 bg-[#1A120C]">
              <img
                src="/src/assets/images/tea_karak_traditional_pour_1792899565967.jpg"
                alt="Aromatic karak tea pouring from a traditional brass teapot into a glass"
                className="w-full h-[450px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating Highlight Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#241711]/10 shadow-lg text-[#241711]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#0F766E] mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  Brewed with Care
                </div>
                <div className="text-sm font-medium text-[#241711]">
                  Steamed loose-leaf tea, fragrant spices, and creamy karak prepared fresh throughout the day.
                </div>
              </div>
            </div>

            {/* Accent Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 w-24 h-24 rounded-full bg-[#0F766E] text-white p-2 shadow-xl items-center justify-center text-center flex-col border-4 border-[#FAF7F2]">
              <span className="font-arabic-calligraphy text-base font-bold">أتولي</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#5EEAD4]">Riyadh</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E] mb-3">
              <Sparkles className="w-4 h-4" />
              The Atole Experience
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#241711] mb-6 leading-tight">
              Made for Good Conversations.
            </h2>

            <p className="text-base sm:text-lg text-[#5C4D43] leading-relaxed mb-6">
              In a fast-moving city like Riyadh, true luxury is a place to pause. Atole Cafe was created as an unpretentious sanctuary on Islamabad Street in Al Mansourah—where locals and coffee lovers gather for honest hospitality, soothing tea, and rich espresso.
            </p>

            <p className="text-base sm:text-lg text-[#5C4D43] leading-relaxed mb-8">
              Whether you are stopping by for a morning pick-me-up or meeting companions late into the Riyadh night, our doors are open until 2:00 AM with comforting cups crafted to keep conversation flowing.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              <div className="p-4 rounded-2xl bg-white/70 border border-[#241711]/5">
                <div className="flex items-center gap-2 font-bold text-[#241711] mb-1.5 text-sm">
                  <Flame className="w-4 h-4 text-[#0F766E]" />
                  <span>Steamed Tea Craft</span>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed">
                  Celebrated by visitors on Google Maps as our standout aromatic tea experience.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#241711]/5">
                <div className="flex items-center gap-2 font-bold text-[#241711] mb-1.5 text-sm">
                  <Moon className="w-4 h-4 text-[#0F766E]" />
                  <span>Open Until 2 AM</span>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed">
                  Welcoming late-night hours matching Riyadh’s beloved evening cafe culture.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-[#241711]/5">
                <div className="flex items-center gap-2 font-bold text-[#241711] mb-1.5 text-sm">
                  <Heart className="w-4 h-4 text-[#0F766E]" />
                  <span>Live Match Vibes</span>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed">
                  A favorite neighborhood venue for fans gathering to watch football together.
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] rounded-xl shadow-xs transition-colors"
              >
                Plan Your Visit
              </a>
              <span className="text-xs text-[#8C7A70] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0F766E]" />
                {BUSINESS_INFO.openingStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
