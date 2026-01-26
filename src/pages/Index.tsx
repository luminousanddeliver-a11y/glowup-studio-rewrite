import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TechnologyShowcase } from "@/components/home/TechnologyShowcase";
import { ExclusiveTechnologyBanner } from "@/components/home/ExclusiveTechnologyBanner";
import { Testimonials } from "@/components/home/Testimonials";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { OfferBanner } from "@/components/home/OfferBanner";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

import { BookingForm } from "@/components/home/BookingForm";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { ScrollReveal } from "@/components/home/ScrollReveal";

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
      "latitude": 51.5545814,
      "longitude": 0.1173976
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
      "https://www.google.com/maps/place/Laser+Light+Skin+Clinic/@51.5545221,0.1175882,17z",
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
        title="NHS-Approved Laser & Skin Clinic in Dagenham | Laser Light"
        description="East London's ONLY clinic with the Quanta Thunder Series for advanced tattoo removal. Pain-free laser hair removal, Hydrafacials & skin treatments. NHS-approved. 25% off new clients!"
        canonicalUrl="https://laserlightskinclinic.co.uk"
        keywords="laser hair removal dagenham, quanta thunder east london, tattoo removal east london, skin clinic dagenham, hydrafacial, NHS approved clinic"
        structuredData={localBusinessSchema}
      />
      
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        <HeroSection />
        <TrustBar />
        <ScrollReveal delay={0.1}>
          <FeaturedServices />
        </ScrollReveal>
        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TechnologyShowcase />
        </ScrollReveal>
        <ScrollReveal>
          <ExclusiveTechnologyBanner />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ServicesGrid />
        </ScrollReveal>
        <ScrollReveal>
          <OfferBanner />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal>
          <BookingForm />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FinalCTA />
        </ScrollReveal>
      </main>
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default Index;
