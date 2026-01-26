import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Laser Light Skin Clinic",
    "image": "https://laserlightskinclinic.co.uk/logo.png",
    "@id": "https://laserlightskinclinic.co.uk",
    "url": "https://laserlightskinclinic.co.uk",
    "telephone": "+442085981200",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "125 Becontree Avenue",
      "addressLocality": "Dagenham",
      "addressRegion": "Essex",
      "postalCode": "RM8 2UJ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5432,
      "longitude": 0.1258
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/laserlightskinclinic",
      "https://www.instagram.com/laserlightskinclinic"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Laser Hair Removal & Skin Clinic Dagenham | 25% Off New Clients"
        description="Get pain-free laser hair removal, Hydrafacials, and advanced skin treatments in Dagenham, East London. NHS-approved clinic with 20+ years experience. Book your free consultation today!"
        canonicalUrl="https://laserlightskinclinic.co.uk"
        structuredData={localBusinessSchema}
      />
      
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
