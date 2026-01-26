import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TechnologyShowcase } from "@/components/home/TechnologyShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { OfferBanner } from "@/components/home/OfferBanner";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <FeaturedServices />
        <WhyChooseUs />
        <TechnologyShowcase />
        <Testimonials />
        <ServicesGrid />
        <OfferBanner />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
