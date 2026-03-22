import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import PortfolioSlider from "@/components/PortfolioSlider";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  const whatsappUrl = "https://wa.me/919606766511?text=Hi%20Abhishek%2C%20I%27m%20interested%20in%20your%20photography%20services.";

  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <PortfolioSlider />
      <div id="services"><ServicesSection /></div>
      <div id="portfolio"><PortfolioSection /></div>
      <TestimonialsSection />
      <div id="booking"><BookingSection /></div>
      <footer className="py-8 px-6 text-center text-muted-foreground text-xs tracking-wide border-t border-border">
        <p>© {new Date().getFullYear()} Abhishek Virendra Photography. All rights reserved.</p>
        <p className="mt-1">A Lay Man Approach Towards Photography™</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.388 1.092-1.938 1.998-3.168 2.264-.842.178-1.94.32-5.638-1.212-4.734-1.96-7.776-6.756-8.012-7.07-.228-.314-1.904-2.536-1.904-4.836s1.204-3.432 1.632-3.902c.428-.47.936-.588 1.248-.588.312 0 .624.002.898.016.288.014.674-.11 1.054.804.388.936 1.326 3.236 1.442 3.47.116.234.194.508.038.82-.156.314-.234.508-.468.782-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.47 1.216 2.006 2.61 3.25 1.792 1.598 3.302 2.094 3.772 2.328.47.234.744.196 1.018-.118.274-.314 1.17-1.366 1.482-1.836.312-.47.624-.39 1.054-.234.43.156 2.728 1.288 3.196 1.522.47.234.782.352.898.546.116.196.116 1.13-.272 2.222z"/>
        </svg>
      </a>
    </main>
  );
};

export default Index;
