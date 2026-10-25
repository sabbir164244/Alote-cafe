import { Star, Coffee, Tag, ExternalLink, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/cafeData";

export default function TrustSection() {
  const trustCards = [
    {
      icon: Star,
      iconColor: "text-amber-500 fill-amber-500",
      title: "4.9-Star Rating",
      subtitle: "Verified Google Community",
      description:
        "Backed by 124 authentic local reviews celebrating the serene environment, friendly service, and comforting beverages.",
      highlight: "124 Reviews",
    },
    {
      icon: Coffee,
      iconColor: "text-[#0F766E]",
      title: "Local Cafe Experience",
      subtitle: "Al Mansourah, Riyadh",
      description:
        "A peaceful escape located on Islamabad Street, designed for neighborhood conversations, evening unwinding, and slow moments.",
      highlight: "Open until 2:00 AM",
    },
    {
      icon: Tag,
      iconColor: "text-[#0F766E]",
      title: "SAR 1–20 Price Range",
      subtitle: "Everyday Accessible Comfort",
      description:
        "Premium quality tea and specialty coffee crafted to be enjoyed daily without pretension. High warmth, accessible hospitality.",
      highlight: "Affordable Luxury",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#241711]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E] mb-2">
              <ShieldCheck className="w-4 h-4" />
              Verified Local Reputation
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#241711]">
              Rooted in Riyadh’s Neighborhood Warmth.
            </h2>
          </div>

          <a
            href={BUSINESS_INFO.mapsLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E] hover:text-[#0D655E] group self-start md:self-auto py-1"
          >
            <span>Read Google Reviews</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 Refined Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 rounded-2xl p-8 border border-[#241711]/8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#241711]/5 flex items-center justify-center mb-6">
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <div className="text-xs font-medium text-[#8C7A70] mb-1">
                    {card.subtitle}
                  </div>
                  <h3 className="font-serif-title text-2xl font-bold text-[#241711] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5C4D43] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#241711]/5 flex items-center justify-between text-xs font-semibold text-[#0F766E]">
                  <span>{card.highlight}</span>
                  <span className="text-[#8C7A70] font-normal">Verified listing</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
