import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { HowItWorks } from "@/components/services/HowItWorks";
import { PricingTable } from "@/components/services/PricingTable";
import { WhoIsThisFor } from "@/components/services/WhoIsThisFor";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Zap, Shield, Sparkles, Atom } from "lucide-react";
import coldPlasmaDevice from "@/assets/cold-plasma-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const ColdPlasma = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cold Plasma Treatment Dagenham",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Laser Light Skin Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125 Becontree Avenue",
        "addressLocality": "Dagenham",
        "postalCode": "RM8 2UJ",
        "addressCountry": "GB"
      },
      "telephone": "+442085981200"
    },
    "description": "Revolutionary cold plasma skin treatment in Dagenham. The 4th state of matter for acne sterilization, collagen stimulation, and enhanced product absorption.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "120",
      "priceCurrency": "GBP",
      "description": "Cold Plasma Treatment from £120 per session"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is cold plasma treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cold plasma is the 4th state of matter—ionized gas that's been energized. When applied to skin, it sterilizes bacteria, stimulates collagen, and increases product absorption by up to 120 times."
        }
      },
      {
        "@type": "Question",
        "name": "How much does cold plasma treatment cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cold plasma treatments at our Dagenham clinic cost £120 per session. Course packages of 6 sessions offer discounted rates at £540."
        }
      },
      {
        "@type": "Question",
        "name": "Is cold plasma good for acne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, cold plasma is excellent for acne. It sterilizes acne-causing bacteria on contact, reduces inflammation, and promotes healing. It can treat active breakouts without irritation."
        }
      },
      {
        "@type": "Question",
        "name": "Is cold plasma safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, cold plasma is very safe. Unlike hot plasma, it operates at near body temperature and doesn't cause burns or tissue damage. It's been used in medicine for wound healing and sterilization."
        }
      }
    ]
  };

  const stats = [
    { value: "4th State", label: "Of Matter", icon: Atom },
    { value: "Bacteria", label: "Sterilization", icon: Shield },
    { value: "120x", label: "Product Absorption", icon: Zap },
    { value: "Collagen", label: "Stimulation", icon: Sparkles },
  ];

  const whatIsContent = [
    "Cold plasma is often called the '4th state of matter'—after solid, liquid, and gas. It's created when gas (like nitrogen) is energized to create ionized particles. Unlike hot plasma (think lightning or the sun), cold atmospheric plasma operates at near body temperature, making it safe for skin application.",
    "When applied to the skin, cold plasma has remarkable effects: it instantly sterilizes bacteria, stimulates fibroblasts to produce collagen, reduces inflammation, and dramatically increases the skin's absorption of active ingredients—by up to 120 times.",
    "At Laser Light Skin Clinic, we use cold plasma technology as both a standalone treatment for acne and skin rejuvenation, and as a powerful enhancer for other treatments like facials and serums. It's cutting-edge science that delivers visible results."
  ];

  const benefits = [
    {
      title: "Sterilizes Acne Bacteria",
      description: "Cold plasma kills P. acnes bacteria on contact, making it highly effective for treating active acne without antibiotics or harsh chemicals."
    },
    {
      title: "120x Enhanced Absorption",
      description: "Dramatically increases your skin's ability to absorb serums and active ingredients, maximizing the effectiveness of every product."
    },
    {
      title: "Stimulates Collagen",
      description: "The ionized particles stimulate fibroblast activity, promoting natural collagen and elastin production for firmer, more youthful skin."
    },
    {
      title: "Reduces Inflammation",
      description: "Anti-inflammatory properties calm redness, irritation, and inflammatory skin conditions like acne and rosacea."
    },
    {
      title: "No Downtime",
      description: "Cold plasma is gentle and non-invasive. There's no heat damage, no redness, and you can return to normal activities immediately."
    },
    {
      title: "Enhances Other Treatments",
      description: "When combined with facials, microneedling, or serum application, cold plasma amplifies results significantly."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Skin Consultation",
      description: "We assess your skin concerns—whether acne, aging, or dullness—to determine how cold plasma can best benefit you."
    },
    {
      number: 2,
      title: "Cleansing",
      description: "Your skin is thoroughly cleansed to remove makeup, oil, and impurities before treatment."
    },
    {
      number: 3,
      title: "Cold Plasma Application",
      description: "The plasma device is passed over your skin, delivering ionized particles. You may feel a slight tingling—no pain or heat."
    },
    {
      number: 4,
      title: "Serum Infusion",
      description: "While absorption is maximized, we apply targeted serums that penetrate deeply for enhanced results."
    },
    {
      number: 5,
      title: "Aftercare",
      description: "No special aftercare needed. Apply SPF and continue your normal routine with optimized product absorption."
    }
  ];

  const prices = [
    { area: "Cold Plasma Facial", singleSession: "£120", course: "£540 (6 sessions)" },
    { area: "Cold Plasma Acne Treatment", singleSession: "£100", course: "£450 (6 sessions)" },
    { area: "Cold Plasma + Hydrafacial", singleSession: "£180", course: "£810 (6 sessions)" },
    { area: "Cold Plasma + Microneedling", singleSession: "£280", course: "£1260 (6 sessions)" },
    { area: "Cold Plasma Add-On", singleSession: "£50", course: "-", note: "Add to any facial treatment" }
  ];

  const idealCandidates = [
    "Have active acne or acne-prone skin",
    "Want to maximize skincare product absorption",
    "Looking for non-invasive anti-aging",
    "Have sensitive or reactive skin",
    "Want to enhance other treatment results",
    "Interested in cutting-edge skin technology"
  ];

  const considerations = [
    {
      title: "Active Acne",
      description: "Cold plasma sterilizes acne bacteria instantly, making it excellent for treating active breakouts without irritation or antibiotics."
    },
    {
      title: "Product Absorption",
      description: "If you invest in quality serums, cold plasma ensures they actually penetrate your skin rather than sitting on the surface."
    },
    {
      title: "Sensitive Skin",
      description: "Because it operates at body temperature with no chemicals, cold plasma is ideal for sensitive or reactive skin types."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Arrive with clean skin or we'll cleanse",
        "No special preparation needed",
        "Can be done on active acne"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "30-45 minute session",
        "Slight tingling sensation",
        "No pain or heat"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "No downtime—resume normal activities",
        "Skin may feel smoother immediately",
        "Enhanced product absorption for 24 hours"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Immediately", result: "Smoother, clearer skin" },
    { session: "After 3 sessions", result: "Visible acne reduction" },
    { session: "Course of 6", result: "Improved texture and tone" }
  ];

  const faqs = [
    {
      question: "What is cold plasma treatment?",
      answer: "Cold plasma is the 4th state of matter—ionized gas that's been energized. When applied to skin, it sterilizes bacteria, stimulates collagen, and increases product absorption by up to 120 times. It operates at near body temperature, so it's completely safe."
    },
    {
      question: "How much does cold plasma treatment cost?",
      answer: "Cold plasma treatments at our Dagenham clinic cost £120 per session for a full facial treatment. Course packages of 6 sessions are available at £540, and you can add cold plasma to any facial for just £50."
    },
    {
      question: "Is cold plasma good for acne?",
      answer: "Yes, cold plasma is excellent for acne. It sterilizes acne-causing P. acnes bacteria on contact, reduces inflammation, and promotes healing. It can treat active breakouts without irritation, antibiotics, or harsh chemicals."
    },
    {
      question: "Is cold plasma safe?",
      answer: "Yes, cold plasma is very safe. Unlike hot plasma, it operates at near body temperature and doesn't cause burns or tissue damage. It's been used in medicine for wound healing and sterilization for years."
    },
    {
      question: "How is cold plasma different from other treatments?",
      answer: "Cold plasma works through ionization rather than heat or chemicals. This makes it uniquely able to sterilize bacteria, boost product absorption, and stimulate collagen—all without any downtime or side effects."
    },
    {
      question: "Can I combine cold plasma with other treatments?",
      answer: "Absolutely! Cold plasma is an excellent add-on to Hydrafacials, microneedling, and chemical peels. The enhanced absorption means active ingredients penetrate up to 120 times more effectively."
    },
    {
      question: "How many sessions will I need?",
      answer: "For general skin rejuvenation, we recommend a course of 6 sessions. For active acne, you may see significant improvement after 3-4 sessions. We'll create a treatment plan based on your specific concerns."
    },
    {
      question: "Is there any downtime?",
      answer: "No downtime at all. Cold plasma is completely non-invasive. You can apply makeup and return to normal activities immediately after your treatment."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Cold Plasma Treatment Dagenham | Acne & Rejuvenation | Book Now"
        description="Revolutionary cold plasma skin treatment in Dagenham. Sterilize acne bacteria, boost product absorption 120x, and stimulate collagen. Cutting-edge skin science. Book now."
        canonicalUrl="https://laserlightskinclinic.co.uk/cold-plasma-treatment-dagenham"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Advanced Science"
          title="Cold Plasma Treatment Dagenham"
          titleAccent="Dagenham"
          subtitle="The 4th State of Matter. For Revolutionary Skin Results."
          description="Harness cold atmospheric plasma to sterilize acne bacteria, boost product absorption 120x, and stimulate natural collagen."
          badge="Cutting-Edge Technology"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={coldPlasmaDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Cold Plasma" }
          ]}
          stats={[
            { value: "120x", label: "Absorption" },
            { value: "Bacteria", label: "Sterilized" },
            { value: "Zero", label: "Downtime" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is Cold Plasma?"
          content={whatIsContent}
          highlightText="Cold plasma increases your skin's absorption of active ingredients by up to 120 times—making every serum work dramatically harder."
        />
        
        <BenefitsList
          title="Benefits of Cold Plasma"
          subtitle="Science-backed skin transformation"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Cold Plasma Process"
          subtitle="From consultation to radiant skin"
          steps={steps}
        />
        
        <div id="pricing">
          <PricingTable
            title="Cold Plasma Pricing"
            subtitle="Cutting-edge technology, accessible pricing"
            prices={prices}
            disclaimer="Add cold plasma to any facial for enhanced results. Course packages recommended for acne treatment."
          />
        </div>
        
        <WhoIsThisFor
          title="Is Cold Plasma Right for You?"
          intro="Cold plasma treatment is ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Cold Plasma FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ServiceTestimonial 
          testimonials={[
            { quote: "Tried everything for my acne. Cold plasma combined with facials finally cleared my skin!", initials: "AW", treatment: "Cold Plasma + Facial", rating: 5 },
            { quote: "Love how my serums work so much better after cold plasma. Skin feels amazing.", initials: "SH", treatment: "Cold Plasma Treatment", rating: 5 }
          ]} 
        />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="Experience the science-backed skin transformation"
        />
        
        <RelatedServices 
          services={[
            { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Combine with Hydrafacial for best results" },
            { name: "Facials", href: "/facials-dagenham", description: "Enhance your facial with cold plasma" },
            { name: "LED Light Therapy", href: "/led-light-therapy-dagenham", description: "Layer treatments for maximum effect" }
          ]}
        />
        
        <ServiceCTA
          title="Ready for Cutting-Edge Skin Science?"
          subtitle="Book your cold plasma treatment and experience the 4th state of matter"
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default ColdPlasma;
