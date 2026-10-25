import { MapPin, Phone, ExternalLink, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A120C] text-[#C4B7AC] border-t border-[#241711] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <span className="font-display-wordmark text-2xl font-bold tracking-[0.16em] text-white block mb-1">
              ATOLE CAFE
            </span>
            <span className="font-arabic-calligraphy text-sm text-[#5EEAD4] block mb-4">
              {BUSINESS_INFO.arabicName} · Al Mansourah, Riyadh
            </span>
            <p className="text-sm text-[#A8988C] max-w-sm leading-relaxed mb-6">
              A serene neighborhood cafe in Riyadh offering warm tea, specialty coffee, and comfortable moments for conversation and connection.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#8C7A70]">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
              Website Concept Preview
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu Preview
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Atmosphere Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Map Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Visit & Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5EEAD4] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#5EEAD4] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-white transition-colors tabular-nums font-medium text-white"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="pt-2 flex flex-wrap gap-3">
                <a
                  href={BUSINESS_INFO.mapsLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#5EEAD4] hover:text-[#2DD4BF] transition-colors font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Google Maps Page
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#5EEAD4] hover:text-[#2DD4BF] transition-colors font-medium"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Presentation Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A70]">
          <div className="flex flex-wrap items-center gap-3">
            <span>Atole Cafe Concept Demo</span>
            <span aria-hidden="true">·</span>
            <span>Riyadh, Saudi Arabia</span>
            <span aria-hidden="true">·</span>
            <span>{currentYear}</span>
          </div>
          <div className="text-center sm:text-right">
            Independent client-facing web design presentation concept
          </div>
        </div>
      </div>
    </footer>
  );
}
