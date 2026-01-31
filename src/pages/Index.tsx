import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSectionNew } from "@/components/home/HeroSectionNew";
import { TreatmentFinder } from "@/components/home/TreatmentFinder";
import { PainPointSection } from "@/components/home/PainPointSection";
import { TrustSection } from "@/components/home/TrustSection";
import { LaserSpotlight } from "@/components/home/LaserSpotlight";
import { PremierSection } from "@/components/home/PremierSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { FloatingReviewButton } from "@/components/common/FloatingReviewButton";

const Index = () => {
  // MedicalClinic + LocalBusiness combined schema with AggregateRating
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness", "MedicalBusiness"],
    "name": "Laser Light Skin Clinic",
    "image": "https://laserlightskinclinic.co.uk/logo.png",
    "@id": "https://laserlightskinclinic.co.uk",
    "url": "https://laserlightskinclinic.co.uk",
    "telephone": "+442085981200",
    "email": "info@laserlightskinclinic.co.uk",
    "priceRange": "££",
    "medicalSpecialty": ["Dermatology", "Cosmetic Medicine"],
    "description": "NHS-approved laser and skin clinic in Dagenham, East London. Specializing in pain-free laser hair removal, tattoo removal, Hydrafacials, and advanced skin treatments. Safe for all skin types.",
    "slogan": "Your Journey to Flawless Skin Starts Here",
    "areaServed": [
      { "@type": "City", "name": "Dagenham" },
      { "@type": "City", "name": "East London" },
      { "@type": "City", "name": "Barking" },
      { "@type": "City", "name": "Romford" },
      { "@type": "City", "name": "Ilford" },
      { "@type": "City", "name": "Redbridge" },
      { "@type": "City", "name": "Havering" }
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Laser Hair Removal",
        "procedureType": "https://schema.org/CosmeticProcedure",
        "description": "Pain-free permanent hair reduction using NHS-approved Lynton Motus AY laser. Safe for all skin types."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Tattoo Removal",
        "procedureType": "https://schema.org/CosmeticProcedure",
        "description": "Complete tattoo removal with East London's ONLY Quanta Thunder laser."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Hydrafacial",
        "procedureType": "https://schema.org/CosmeticProcedure",
        "description": "Deep cleanse, exfoliate, and hydrate with medical-grade Hydrafacial technology."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Chemical Peels",
        "procedureType": "https://schema.org/CosmeticProcedure",
        "description": "Professional chemical peels for skin rejuvenation and texture improvement."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Skin Tag Removal",
        "procedureType": "https://schema.org/CosmeticProcedure",
        "description": "Safe, professional removal of skin tags and moles."
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
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laser Light Skin Clinic Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Laser Hair Removal" },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP",
            "price": "80",
            "minPrice": "80"
          }
        }
      ]
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
          "text": "Treatment costs vary by service and area. We offer transparent pricing and a free, no-obligation consultation where we provide a personalized quote. Flexible payment options and interest-free plans available."
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
      },
      {
        "@type": "Question",
        "name": "Where is Laser Light Skin Clinic located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at 125 Becontree Avenue, Dagenham RM8 2UJ, East London. We serve clients from Dagenham, Barking, Romford, Ilford, Redbridge, Havering, and the wider East London area."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="NHS-Approved Laser & Skin Clinic in Dagenham | Laser Light"
        description="East London's top-rated laser & skin clinic in Dagenham. Pain-free laser hair removal, tattoo removal, Hydrafacials & more. NHS-approved. Book now!"
        canonicalUrl="https://laserlightskinclinic.co.uk"
        keywords="laser hair removal dagenham, tattoo removal east london, hydrafacial dagenham, skin clinic dagenham, NHS approved clinic, chemical peels, skin tag removal"
        structuredData={[medicalClinicSchema, faqPageSchema]}
      />
      
      <Header />
      <main className="flex-1">
        {/* Section 1: The Hook */}
        <HeroSectionNew />
        
        {/* Section 2: Treatment Finder */}
        <TreatmentFinder />
        
        {/* Section 3: Pain Point (HydraFacial) */}
        <ScrollReveal>
          <PainPointSection />
        </ScrollReveal>
        
        {/* Section 4: Build Confidence & Trust */}
        <ScrollReveal delay={0.1}>
          <TrustSection />
        </ScrollReveal>
        
        {/* Section 5: Spotlight on #1 Service */}
        <ScrollReveal>
          <LaserSpotlight />
        </ScrollReveal>
        
        {/* Section 6: Target High-Value Demographic */}
        <ScrollReveal delay={0.1}>
          <PremierSection />
        </ScrollReveal>
        
        {/* FAQ Section */}
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        
        {/* Section 7: Final CTA / Contact */}
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
