import { useState } from "react";
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  ExternalLink,
  Copy,
  Check,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-[#F5EFEB] border-b border-[#241711]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E] mb-2">
            <MapPin className="w-4 h-4" />
            Location & Visiting
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#241711] mb-4">
            Find Your Way to Atole Cafe.
          </h2>
          <p className="text-base sm:text-lg text-[#5C4D43] leading-relaxed">
            Located on Islamabad Street in the Al Mansourah district of Riyadh. Stop by for evening tea, freshly pulled espresso, or quiet conversation.
          </p>
        </div>

        {/* 2-Column Split: Interactive Map on Left/Top, Contact & Hours Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Map Container & 3 Functional Action Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-[#241711]/10 shadow-lg bg-[#EAE2D7]">
              {!iframeError ? (
                <iframe
                  title="Atole Cafe Location Map"
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  onError={() => setIframeError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#FAF7F2]">
                  <MapPin className="w-12 h-12 text-[#0F766E] mb-3" />
                  <p className="text-base font-semibold text-[#241711] mb-2">
                    Interactive Map Preview
                  </p>
                  <p className="text-sm text-[#5C4D43] mb-4 max-w-sm">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.mapsLocationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F766E] text-white text-sm font-semibold"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* 3 Mandated Functional Buttons Directly Under the Map */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Button 1: Open Google Maps */}
              <a
                href={BUSINESS_INFO.mapsLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-[#241711] bg-white hover:bg-[#FAF7F2] border border-[#241711]/10 rounded-xl shadow-xs transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#0F766E]" />
                Open Google Maps
              </a>

              {/* Button 2: Get Directions */}
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] rounded-xl shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>

              {/* Button 3: Call Now */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-[#241711] bg-[#EFE8DE] hover:bg-[#E4DACD] rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0F766E]" />
                Call Now
              </a>
            </div>

            <p className="text-[11px] text-[#8C7A70] text-center sm:text-left">
              Map embed loaded from Google Maps for Islamabad Street, Al Mansourah, Riyadh.
            </p>
          </div>

          {/* Right: Opening Hours & Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#241711]/8 shadow-sm">
              <h3 className="font-serif-title text-2xl font-bold text-[#241711] mb-6">
                Visiting Details
              </h3>

              {/* Address Row */}
              <div className="mb-6 pb-6 border-b border-[#241711]/5">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70]">
                    Verified Address
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="text-xs font-medium text-[#0F766E] hover:text-[#0D655E] inline-flex items-center gap-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-base font-semibold text-[#241711] mb-1">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs text-[#8C7A70]">
                  District: Al Mansourah · Postal Code: 12684 · Riyadh, KSA
                </p>
              </div>

              {/* Phone Row */}
              <div className="mb-6 pb-6 border-b border-[#241711]/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70] block mb-1.5">
                  Direct Phone Call
                </span>
                <div className="flex items-center justify-between">
                  <div>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-xl font-bold text-[#241711] hover:text-[#0F766E] transition-colors tabular-nums"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-xs text-[#8C7A70] block">
                      Intl: {BUSINESS_INFO.phoneInternational}
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#FAF7F2] hover:bg-[#EFE8DE] text-[#241711] border border-[#241711]/10 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0F766E]" />
                    Call
                  </a>
                </div>
              </div>

              {/* Hours Row */}
              <div className="mb-6 pb-6 border-b border-[#241711]/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A70] block mb-2">
                  Operating Hours
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-sm text-[#241711]">
                    Open daily · Closes at 2:00 AM
                  </span>
                </div>
                <p className="text-xs text-[#5C4D43] leading-relaxed mb-3">
                  A full weekly day-by-day timetable is not published on the listing. Please check Google Maps before visiting on holidays or special hours.
                </p>
                <a
                  href={BUSINESS_INFO.mapsLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0F766E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Check Current Live Hours on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Optional WhatsApp Contact Channel */}
              <div className="p-4 rounded-2xl bg-[#E6F4F1] border border-[#0F766E]/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-1.5">
                  <MessageCircle className="w-4 h-4 text-[#0F766E]" />
                  <span>WhatsApp Chat (Optional)</span>
                </div>
                <p className="text-xs text-[#4A5D58] leading-relaxed mb-3">
                  You can message via WhatsApp using the cafe’s phone number. If unavailable, please call directly.
                </p>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] rounded-xl transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Neighborhood Tip */}
            <div className="p-5 rounded-2xl bg-white/70 border border-[#241711]/5 text-xs text-[#5C4D43] flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#8C7A70] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#241711] block mb-0.5">
                  Visiting from central Riyadh?
                </strong>
                Al Mansourah is easily accessible via major Riyadh ring roads. Parking is available along Islamabad Street.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
