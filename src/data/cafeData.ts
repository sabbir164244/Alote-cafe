/**
 * Verified Business Details for Atole Cafe
 * Islamabad Street, Al Mansourah, Riyadh, Saudi Arabia
 */

export const BUSINESS_INFO = {
  name: "Atole Cafe",
  arabicName: "مقهى أتولي",
  signageTagline: "شاي مختص · قهوة مختصة", // Exact Arabic text on their physical storefront sign
  category: "Coffee Shop",
  rating: 4.9,
  reviewsCount: 124,
  priceRange: "SAR 1–20",
  openingStatus: "Open, closes at 2:00 AM",
  address: "Islamabad Street, Al Mansourah, Riyadh 12684, Saudi Arabia",
  shortAddress: "Islamabad Street, Al Mansourah, Riyadh",
  phone: "059 840 3709",
  phoneInternational: "+966 59 840 3709",
  phoneTel: "tel:+966598403709",
  whatsappUrl: "https://wa.me/966598403709",
  mapsLocationUrl: "https://www.google.com/maps/search/?api=1&query=Atole+Cafe%2C+Islamabad+Street%2C+Al+Mansourah%2C+Riyadh+12684%2C+Saudi+Arabia",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Atole+Cafe%2C+Islamabad+Street%2C+Al+Mansourah%2C+Riyadh+12684%2C+Saudi+Arabia",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Atole%20Cafe%2C%20Islamabad%20Street%2C%20Al%20Mansourah%2C%20Riyadh%2012684%2C%20Saudi%20Arabia&output=embed",
};

export interface MenuItemPreview {
  id: string;
  name: string;
  arabicName: string;
  category: "coffee" | "tea" | "favourites";
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  standoutBadge?: string;
}

export const MENU_PREVIEW_ITEMS: MenuItemPreview[] = [
  {
    id: "steamed-tea",
    name: "Signature Steamed Tea",
    arabicName: "الشاهي المبخر (المميز)",
    category: "tea",
    categoryLabel: "Tea & Karak",
    tagline: "Voted standout drink on Google Maps · Steamed with rich aroma",
    description: "The crown jewel celebrated across 124+ Google Maps reviews. Crafted with traditional boiling, releasing deep aromatic steam and spices that keep locals returning night after night.",
    image: "/src/assets/images/tea_karak_traditional_pour_1792899565967.jpg",
    highlights: ["Standout Drink on Maps", "Aromatic Steam", "Masala Chai Option"],
    standoutBadge: "Google Maps Standout",
  },
  {
    id: "karak-tea",
    name: "Traditional Karak Tea",
    arabicName: "شاي كرك أصيل",
    category: "tea",
    categoryLabel: "Tea & Karak",
    tagline: "Slow-simmered black tea infused with cardamom and rich evaporated milk",
    description: "Brewed patiently in classic pots, balancing warm cardamom, aromatic saffron nuances, and silky evaporated milk. A comforting Riyadh neighborhood staple.",
    image: "/src/assets/images/tea_karak_traditional_pour_1792899565967.jpg",
    highlights: ["Hand-Crushed Cardamom", "Slow Simmered", "Comforting Warmth"],
  },
  {
    id: "specialty-latte",
    name: "Specialty Espresso & Latte",
    arabicName: "قهوة مختصة ولاتيه",
    category: "coffee",
    categoryLabel: "Coffee",
    tagline: "Freshly pulled espresso with velvety micro-foam latte art",
    description: "Carefully calibrated extraction showcasing nutty caramel undertones, balanced roast depth, and silky textured steamed milk poured by attentive baristas.",
    image: "/src/assets/images/specialty_coffee_espresso_art_1792899566579.jpg",
    highlights: ["Silky Micro-foam", "Rich Espresso Crema", "Freshly Ground"],
  },
  {
    id: "spanish-latte",
    name: "Signature Iced Spanish Latte",
    arabicName: "سبانش لاتيه بارد",
    category: "coffee",
    categoryLabel: "Coffee",
    tagline: "Layered chilled espresso over sweetened milk and ice",
    description: "A beloved Saudi cafe staple offering refreshing coolness during warm Riyadh afternoons, perfectly harmonizing sweetness with bold espresso.",
    image: "/src/assets/images/specialty_coffee_espresso_art_1792899566579.jpg",
    highlights: ["Chilled Perfection", "Smooth Sweetness", "Double Shot"],
  },
  {
    id: "cafe-pastries",
    name: "Fresh Bakes & Light Treats",
    arabicName: "مخبوزات وحلويات خفيفة",
    category: "favourites",
    categoryLabel: "Cafe Favourites",
    tagline: "Delicate pairing treats baked fresh daily",
    description: "Crisp flaky croissants, date sweets, and tea biscuits prepared to complement hot karak or espresso during quiet morning or late night visits.",
    image: "/src/assets/images/cafe_interior_cozy_lounge_1792899567164.jpg",
    highlights: ["Daily Selection", "Ideal Tea Pairing", "Sweet & Savory"],
  },
  {
    id: "evening-blend",
    name: "Saudi Coffee & Dates Companion",
    arabicName: "قهوة سعودية مع تمر",
    category: "favourites",
    categoryLabel: "Cafe Favourites",
    tagline: "Light roast with cardamom, cloves, and premium local dates",
    description: "Traditional hospitality served with warmth. A quintessential gathering tradition representing Riyadh's time-honored generosity.",
    image: "/src/assets/images/hero_atole_cafe_atmosphere_1792899565443.jpg",
    highlights: ["Cardamom Infused", "Saudi Tradition", "Gathering Favorite"],
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  aspect: string;
  category: string;
  isVerifiedScreenshot?: boolean;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "maps-listing-proof",
    title: "Google Maps Listing & Verified Banners",
    subtitle: "4.9★ rating with 'Visitors highlight steamed tea' & 'Fans gather for live matches'",
    image: "/assets/aistudio/Screenshot_2026-10-25-06-29-32-03_3d9111e2d3171bf4882369f490c087b4_1b31be02.jpg",
    aspect: "4:3",
    category: "Google Maps Listing",
    isVerifiedScreenshot: true,
  },
  {
    id: "storefront-photo",
    title: "Real Storefront & Seating",
    subtitle: "Illuminated physical sign: 'Atole · شاي مختص · قهوة مختصة' on Islamabad Street",
    image: "/assets/aistudio/Screenshot_2026-10-25-06-29-24-26_3d9111e2d3171bf4882369f490c087b4_99670f8a.jpg",
    aspect: "4:3",
    category: "Storefront & Interior",
    isVerifiedScreenshot: true,
  },
  {
    id: "karak-pouring",
    title: "Aromatic Steamed Tea Preparation",
    subtitle: "Steaming spiced tea poured from traditional brassware",
    image: "/src/assets/images/tea_karak_traditional_pour_1792899565967.jpg",
    aspect: "4:3",
    category: "Traditional Craft",
  },
  {
    id: "lounge-interior",
    title: "Comfortable Seating Lounge",
    subtitle: "Cozy upholstered armchairs and soft ambient warmth",
    image: "/src/assets/images/cafe_interior_cozy_lounge_1792899567164.jpg",
    aspect: "4:3",
    category: "Interior Atmosphere",
  },
  {
    id: "espresso-craft",
    title: "Specialty Espresso & Brews",
    subtitle: "Carefully extracted coffee with fine latte art",
    image: "/src/assets/images/specialty_coffee_espresso_art_1792899566579.jpg",
    aspect: "4:3",
    category: "Coffee Bar",
  },
  {
    id: "storefront-render",
    title: "Welcoming Evening Storefront",
    subtitle: "Warm lights inviting neighborhood patrons on Islamabad Street",
    image: "/src/assets/images/cafe_storefront_warm_evening_1792899567575.jpg",
    aspect: "4:3",
    category: "Exterior & Street",
  },
];
