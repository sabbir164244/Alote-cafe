import { useState, useEffect } from "react";
import { Menu, X, Navigation as NavigationIcon, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Our Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#241711]/10"
          : "bg-[#FAF7F2] border-b border-[#241711]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Clean single-line element with refined typography) */}
        <a
          href="#hero"
          className="group flex flex-col items-start whitespace-nowrap shrink-0"
        >
          <span className="font-display-wordmark text-2xl sm:text-[26px] font-bold tracking-[0.16em] text-[#241711] group-hover:text-[#0F766E] transition-colors uppercase">
            Atole Cafe
          </span>
          <span className="font-arabic-calligraphy text-xs text-[#8C7A70] tracking-wider -mt-1 group-hover:text-[#0F766E] transition-colors">
            {BUSINESS_INFO.signageTagline} · Al Mansourah
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links with hover underline) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4A3B32]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#0F766E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0F766E] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (Get Directions CTA) & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] active:scale-[0.98] rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0"
          >
            <NavigationIcon className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="md:hidden p-2.5 rounded-xl text-[#241711] hover:bg-[#EFE8DE] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#241711]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#241711] hover:text-[#0F766E] py-2 border-b border-[#241711]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D655E] rounded-xl shadow-xs"
              >
                <NavigationIcon className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#241711] bg-[#EFE8DE] hover:bg-[#E4DACD] rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
