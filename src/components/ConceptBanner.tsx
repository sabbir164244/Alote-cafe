import { useState } from "react";
import { Sparkles, X, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function ConceptBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside
      aria-label="Client Demo Notice"
      className="bg-[#241711] text-[#EFE8DE] text-xs px-4 py-2 border-b border-[#3D291F] relative z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#14B8A6]">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Website Concept Preview
          </span>
          <span className="text-[#8C7A70]" aria-hidden="true">·</span>
          <span className="text-[#C4B7AC]">
            Interactive pitch demo prepared for <strong className="font-semibold text-white">Atole Cafe</strong> in Al Mansourah, Riyadh
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#A8988C]">
          <span className="hidden md:inline text-[11px]">
            Verified Data: 4.9★ (124 Reviews) · SAR 1–20
          </span>
          <a
            href={BUSINESS_INFO.mapsLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#14B8A6] hover:text-[#2DD4BF] transition-colors inline-flex items-center gap-1 font-medium text-[11px]"
          >
            Google Maps Listing
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss demo banner"
            className="text-[#8C7A70] hover:text-[#EFE8DE] transition-colors p-1 -mr-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
