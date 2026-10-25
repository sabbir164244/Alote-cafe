import ConceptBanner from "./components/ConceptBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KnowBeforeYouGo from "./components/KnowBeforeYouGo";
import TrustSection from "./components/TrustSection";
import MenuPreview from "./components/MenuPreview";
import SignatureExperience from "./components/SignatureExperience";
import Gallery from "./components/Gallery";
import LocationSection from "./components/LocationSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241711]">
      {/* Client Demo Notice Header */}
      <ConceptBanner />

      {/* Sticky Primary Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Google Maps Verified "Know Before You Go" Banners */}
        <KnowBeforeYouGo />

        {/* Trust & Verified Google Reviews Section */}
        <TrustSection />

        {/* Menu Preview Section */}
        <MenuPreview />

        {/* Editorial Signature Experience */}
        <SignatureExperience />

        {/* Visual Gallery with Lightbox */}
        <Gallery />

        {/* Location & Interactive Google Map */}
        <LocationSection />

        {/* Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
