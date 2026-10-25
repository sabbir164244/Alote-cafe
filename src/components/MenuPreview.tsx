import { useState } from "react";
import { Coffee, Info, ArrowUpRight } from "lucide-react";
import { MENU_PREVIEW_ITEMS, MenuItemPreview } from "../data/cafeData";
import DrinkModal from "./DrinkModal";

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<MenuItemPreview | null>(null);

  const categories = [
    { id: "all", label: "All Selections" },
    { id: "tea", label: "Tea & Karak" },
    { id: "coffee", label: "Coffee" },
    { id: "favourites", label: "Cafe Favourites" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? MENU_PREVIEW_ITEMS
      : MENU_PREVIEW_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#241711]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E] mb-2">
            <Coffee className="w-4 h-4" />
            Curated Menu Preview
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#241711] mb-4">
            Comforting Karak, Specialty Brews & Gatherings.
          </h2>
          <p className="text-base sm:text-lg text-[#5C4D43] leading-relaxed">
            A sample preview of Atole Cafe’s beverage program. Designed to showcase how the cafe’s authentic offerings can be beautifully presented to visitors.
          </p>
        </div>

        {/* Demo Disclaimer Note */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#F3ECE1] border border-[#241711]/8 flex items-start sm:items-center gap-3">
          <Info className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs sm:text-sm text-[#5C4D43]">
            <strong className="font-semibold text-[#241711]">Client Presentation Notice:</strong> The full official menu and exact pricing (SAR 1–20 listed range) are not finalized on this demo. This section is structured for effortless replacement with Atole Cafe’s real printed or digital menu.
          </div>
        </div>

        {/* Category Filter Tabs (Interactive segmented buttons with click handlers) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-[#EFE8DE]/70 rounded-2xl max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? "bg-white text-[#241711] shadow-xs"
                  : "text-[#5C4D43] hover:text-[#241711]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#241711]/8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#241711]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {item.categoryLabel}
                  </span>
                  {item.standoutBadge && (
                    <span className="text-[10px] font-bold tracking-wide uppercase text-white bg-[#0F766E] px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                      ★ {item.standoutBadge}
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 right-4 text-xs font-arabic-calligraphy text-white/80">
                  {item.arabicName}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#241711] mb-2 group-hover:text-[#0F766E] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed mb-4">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#241711]/5 flex items-center justify-between">
                  <span className="text-xs text-[#8C7A70]">
                    SAR 1–20 Category Range
                  </span>
                  <span className="text-xs font-semibold text-[#0F766E] group-hover:underline inline-flex items-center gap-1">
                    Explore Item
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drink Detail Modal */}
      <DrinkModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
