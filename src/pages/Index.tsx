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
import { FloatingReviewButton } from "@/components/common/FloatingReviewButton";

const Index = () => {
  // MedicalClinic schema with AggregateRating
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Laser Light Skin Clinic",
    "image": "https://laserlightskinclinic.co.uk/logo.png",
    "@id": "https://laserlightskinclinic.co.uk",
    "url": "https://laserlightskinclinic.co.uk",
    "telephone": "+442085981200",
    "priceRange": "££",
    "medicalSpecialty": ["Dermatology", "Cosmetic Medicine"],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Laser Hair Removal",
        "procedureType": "https://schema.org/CosmeticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Tattoo Removal",
        "procedureType": "https://schema.org/CosmeticProcedure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Hydrafacial",
        "procedureType": "https://schema.org/CosmeticProcedure"
      }
    ],
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
      "https://www.google.com/maps/place/Laser+Light+Skin+Clinic/@51.5545221,0.1175882,17z/data=!4m16!1m9!3m8!1s0x47d8a556bfa82c13:0x6ebb4d999d740f14!2sLaser+Light+Skin+Clinic!8m2!3d51.5545814!4d0.1173976!9m1!1b1!16s%2Fg%2F11h4nbjdlz!3m5!1s0x47d8a556bfa82c13:0x6ebb4d999d740f14!8m2!3d51.5545814!4d0.1173976!16s%2Fg%2F11h4nbjdlz",
      "https://www.facebook.com/laserlightskinclinic",
      "https://www.instagram.com/laserlightskinclinic"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // FAQPage schema for homepage FAQs
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Laser Light Skin Clinic NHS-approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are proud to be an NHS-approved clinic, meaning all our procedures, equipment, and safety protocols meet the highest medical standards set by the National Health Service."
        }
      },
      {
        "@type": "Question",
        "name": "Does your laser hair removal treatment hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We use the Lynton Motus AY, which is guaranteed pain-free. Its advanced cooling system and Moveo technology ensure a comfortable experience, even on sensitive areas like the bikini line."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a treatment cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treatment costs vary by service and area. We offer transparent pricing and a free, no-obligation consultation where we provide a personalized quote. New clients also receive 25% off their first treatment course."
        }
      },
      {
        "@type": "Question",
        "name": "Is the laser safe for dark skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The Lynton Motus AY is safe for all skin types, including Fitzpatrick skin types IV-VI (darker skin tones). This is one of the reasons we chose this technology."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This depends on the treatment. Laser hair removal typically requires 6-8 sessions for optimal results. Tattoo removal varies based on ink color and depth (4-10 sessions). We provide a detailed plan during your free consultation."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="NHS-Approved Laser & Skin Clinic in Dagenham | Laser Light"
        description="East London's top-rated laser & skin clinic in Dagenham. Pain-free laser hair removal, advanced tattoo removal, Hydrafacials & more. NHS-approved. Book now!"
        canonicalUrl="https://laserlightskinclinic.co.uk"
        keywords="laser hair removal dagenham, quanta thunder east london, tattoo removal east london, skin clinic dagenham, hydrafacial, NHS approved clinic"
        structuredData={[medicalClinicSchema, faqPageSchema]}
      />
      
      <Header />
      <main className="flex-1">
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
      <FloatingReviewButton />
    </div>
  );
};

export default Index;
