import { AboutSection } from "@/components/AboutSection";
import { CategorySection } from "@/components/CategorySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navbar } from "@/components/Navbar";
import { RecipesSection } from "@/components/RecipesSection";
import { TopProductsSection } from "@/components/TopProductsSection";
import { TrustSections } from "@/components/TrustSections";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <CategorySection />
      <TopProductsSection />
      <RecipesSection />
      <TrustSections />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
