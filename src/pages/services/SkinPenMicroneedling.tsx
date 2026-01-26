import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { HowItWorks } from "@/components/services/HowItWorks";
import { TechnologySection } from "@/components/services/TechnologySection";
import { PricingTable } from "@/components/services/PricingTable";
import { WhoIsThisFor } from "@/components/services/WhoIsThisFor";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Award, Sparkles, Shield, RefreshCw } from "lucide-react";
import microneedlingDevice from "@/assets/microneedling-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const relatedServices = [
  { name: "Laser Resurfacing", href: "/laser-resurfacing-dagenham", description: "Fractional laser for deeper scars" },
  { name: "LED Light Therapy", href: "/led-light-therapy-dagenham", description: "Boost healing and collagen production" },
  { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Deep hydration for glowing skin" },
];

const testimonials = [
  { quote: "After struggling with acne scars for years, SkinPen has been a game changer. My skin texture is so much smoother!", initials: "LA", treatment: "SkinPen Microneedling", rating: 5 },
  { quote: "I love that it's safe for my skin tone. Three sessions and my scars have improved dramatically.", initials: "OB", treatment: "SkinPen Course", rating: 5 },
];

const SkinPenMicroneedling = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SkinPen Microneedling Dagenham",
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
    "description": "FDA-cleared SkinPen microneedling in Dagenham for acne scars, fine lines, and skin texture. Natural collagen induction therapy.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "200",
      "priceCurrency": "GBP",
      "description": "SkinPen Microneedling from £200 per session"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does SkinPen microneedling cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkinPen microneedling costs £200 per session at our Dagenham clinic. Course packages of 3 or 6 sessions offer discounted rates and are recommended for optimal results."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between SkinPen and a derma roller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkinPen is a medical-grade, FDA-cleared device with adjustable needle depth and controlled precision. Derma rollers are home devices with fixed needles that can cause uneven trauma and infection risk. SkinPen delivers superior, safer results."
        }
      },
      {
        "@type": "Question",
        "name": "Is there downtime after SkinPen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 24-72 hours of redness similar to a sunburn. Most clients return to normal activities within 1-2 days. Makeup can usually be applied after 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can SkinPen treat acne scars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SkinPen is highly effective for acne scars. Clinical studies show significant improvement in acne scarring after 3 treatments. It's one of the best non-surgical options for textural scarring."
        }
      }
    ]
  };

  const stats = [
    { value: "FDA Cleared", label: "Technology", icon: Award },
    { value: "Acne Scars", label: "Dramatically Reduced", icon: Sparkles },
    { value: "All Skin Types", label: "Safe For", icon: Shield },
    { value: "Natural", label: "Collagen Boost", icon: RefreshCw },
  ];

  const whatIsContent = [
    "SkinPen microneedling is an FDA-cleared collagen induction therapy that uses tiny, sterile needles to create controlled micro-injuries in the skin. These micro-channels trigger your body's natural wound healing response, stimulating the production of new collagen and elastin.",
    "Unlike aggressive treatments that damage the skin's surface, SkinPen works with your body's natural healing process. The result is gradually firmer, smoother, and more youthful-looking skin—without the risks associated with lasers on certain skin types.",
    "At Laser Light Skin Clinic, we use the SkinPen Precision—the first microneedling device cleared by the FDA for clinical use. Combined with medical-grade serums, our treatments deliver dramatic improvements in acne scars, fine lines, and overall skin texture."
  ];

  const benefits = [
    {
      title: "Dramatic Scar Reduction",
      description: "Clinical studies show SkinPen significantly improves acne scarring after just 3 treatments. It's one of the most effective non-surgical scar treatments available."
    },
    {
      title: "Natural Collagen Boost",
      description: "Trigger your skin's natural healing response to produce new collagen and elastin, resulting in firmer, more youthful skin over time."
    },
    {
      title: "Safe for All Skin Types",
      description: "Unlike many laser treatments, SkinPen is safe for all skin types including darker skin tones (Fitzpatrick IV-VI) with minimal risk of hyperpigmentation."
    },
    {
      title: "Improved Skin Texture",
      description: "Refine enlarged pores, rough texture, and uneven skin for a smoother, more polished complexion."
    },
    {
      title: "Reduces Fine Lines",
      description: "Stimulate collagen production to soften fine lines and wrinkles, particularly around the eyes, mouth, and forehead."
    },
    {
      title: "Minimal Downtime",
      description: "Most clients experience just 24-72 hours of redness—far less downtime than ablative laser treatments."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consultation & Skin Assessment",
      description: "We analyze your skin concerns—whether acne scars, fine lines, or texture issues—and create a personalized treatment plan."
    },
    {
      number: 2,
      title: "Preparation",
      description: "Your skin is cleansed and a topical numbing cream is applied for 20-30 minutes to ensure your comfort during treatment."
    },
    {
      number: 3,
      title: "SkinPen Treatment",
      description: "The SkinPen device glides across your skin, creating thousands of micro-channels. The depth is adjusted based on your concerns and treatment area."
    },
    {
      number: 4,
      title: "Serum Infusion",
      description: "While micro-channels are open, we infuse medical-grade serums that penetrate deeply for enhanced results."
    },
    {
      number: 5,
      title: "Healing & Results",
      description: "Your skin begins healing immediately. Collagen production continues for 4-6 weeks, with optimal results visible after a course of treatments."
    }
  ];

  const technologyFeatures = [
    "FDA-cleared for clinical use",
    "Adjustable needle depth (0.25-2.5mm)",
    "Single-use sterile cartridges",
    "Precise, controlled micro-injuries",
    "Built-in safety features",
    "Suitable for all skin types"
  ];

  const prices = [
    { area: "SkinPen Full Face", singleSession: "£200", course: "£540 (3 sessions)" },
    { area: "SkinPen Face & Neck", singleSession: "£280", course: "£756 (3 sessions)" },
    { area: "SkinPen Face, Neck & Décolletage", singleSession: "£350", course: "£945 (3 sessions)" },
    { area: "SkinPen Targeted Area", singleSession: "£120", course: "£324 (3 sessions)", note: "Scars, stretch marks, etc." },
    { area: "SkinPen + PRP (Vampire Facial)", singleSession: "£350", course: "£945 (3 sessions)", note: "Enhanced with your own growth factors" }
  ];

  const idealCandidates = [
    "Have acne scars or other textural scarring",
    "Notice fine lines and early signs of aging",
    "Have enlarged pores or rough skin texture",
    "Want a natural collagen-boosting treatment",
    "Have darker skin and want to avoid laser risks",
    "Looking for minimal downtime anti-aging"
  ];

  const considerations = [
    {
      title: "Acne Scars",
      description: "SkinPen is one of the most effective treatments for acne scarring. Most clients see significant improvement after 3 sessions."
    },
    {
      title: "Dark Skin Types",
      description: "Unlike lasers, SkinPen carries minimal risk of hyperpigmentation on darker skin, making it an excellent choice for Fitzpatrick IV-VI."
    },
    {
      title: "Stretch Marks",
      description: "SkinPen can improve the appearance of stretch marks on the body, stimulating collagen in areas where skin has been stretched."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Avoid retinoids for 5-7 days",
        "No active breakouts in treatment area",
        "Arrive with clean skin"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "45-60 minute session (including numbing)",
        "Mild prickling sensation",
        "Adjustable depth for comfort"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Redness for 24-72 hours (like sunburn)",
        "Avoid makeup for 24 hours",
        "Use gentle skincare only"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Week 1-2", result: "Initial healing, skin feels tighter" },
    { session: "Week 4-6", result: "New collagen production visible" },
    { session: "After 3 sessions", result: "Significant scar/texture improvement" }
  ];

  const faqs = [
    {
      question: "How much does SkinPen microneedling cost?",
      answer: "SkinPen microneedling costs £200 per session at our Dagenham clinic. Course packages of 3 or 6 sessions offer discounted rates and are recommended for optimal results, especially for acne scarring."
    },
    {
      question: "What's the difference between SkinPen and a derma roller?",
      answer: "SkinPen is a medical-grade, FDA-cleared device with adjustable needle depth and controlled precision. Derma rollers are home devices with fixed needles that can cause uneven trauma and infection risk. SkinPen delivers superior, safer results with less damage and faster healing."
    },
    {
      question: "Is there downtime after SkinPen?",
      answer: "Expect 24-72 hours of redness similar to a sunburn. Most clients return to normal activities within 1-2 days. Makeup can usually be applied after 24 hours. This is significantly less downtime than ablative laser treatments."
    },
    {
      question: "Can SkinPen treat acne scars?",
      answer: "Yes, SkinPen is highly effective for acne scars. Clinical studies show significant improvement in acne scarring after 3 treatments. It works by stimulating collagen production in the scarred areas, gradually filling in depressions and smoothing the skin surface."
    },
    {
      question: "Does microneedling hurt?",
      answer: "We apply a topical numbing cream for 20-30 minutes before treatment, so most clients experience only a mild prickling sensation. The SkinPen's adjustable depth allows us to customize the treatment to your comfort level."
    },
    {
      question: "How many sessions will I need?",
      answer: "For general skin rejuvenation, 3 sessions spaced 4-6 weeks apart are typically recommended. For acne scars or significant textural concerns, 4-6 sessions may be needed for optimal results."
    },
    {
      question: "Is SkinPen safe for dark skin?",
      answer: "Yes! One of SkinPen's major advantages is its safety on all skin types, including darker skin tones. Unlike lasers, microneedling doesn't target melanin, so there's minimal risk of hyperpigmentation."
    },
    {
      question: "Can I combine SkinPen with other treatments?",
      answer: "Absolutely. We often combine SkinPen with PRP (Platelet-Rich Plasma) for a 'Vampire Facial' that enhances results. It also pairs well with LED light therapy and can be part of a comprehensive skin rejuvenation plan."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="SkinPen Precision Microneedling Dagenham | Acne Scars | FDA Cleared | Book Now"
        description="FDA-cleared SkinPen Precision microneedling in Dagenham. Dramatically reduce acne scars and improve skin texture. Safe for all skin types. Book your consultation today."
        canonicalUrl="https://laserlightskinclinic.co.uk/skinpen-microneedling-dagenham"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="FDA Cleared Device"
          title="SkinPen Precision Microneedling Dagenham"
          titleAccent="Dagenham"
          subtitle="Transform Scars. Boost Collagen. Naturally."
          description="FDA-cleared SkinPen Precision collagen induction therapy that dramatically reduces acne scars, fine lines, and improves skin texture. Safe for all skin types."
          badge="Natural Collagen Boost"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "SkinPen Microneedling" }
          ]}
          stats={[
            { value: "Acne Scars", label: "Reduced" },
            { value: "All Skin", label: "Types Safe" },
            { value: "3 Sessions", label: "Results" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is SkinPen Microneedling?"
          content={whatIsContent}
          highlightText="SkinPen is the first FDA-cleared microneedling device—delivering medical-grade results that home devices simply cannot match."
        />
        
        <BenefitsList
          title="Benefits of SkinPen Microneedling"
          subtitle="Natural collagen induction for transformative results"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The SkinPen Process"
          subtitle="From consultation to collagen boost"
          steps={steps}
        />
        
        <TechnologySection
          title="FDA-Cleared Precision"
          subtitle="Why SkinPen stands above the rest"
          technologyName="SkinPen Precision"
          description="SkinPen Precision is the first microneedling device cleared by the FDA for clinical use. Its adjustable needle depth (0.25-2.5mm), single-use sterile cartridges, and precision engineering ensure consistent, safe, and effective results that at-home devices simply cannot replicate."
          features={technologyFeatures}
          certifications={["FDA Cleared", "CE Marked", "TGA Approved"]}
          deviceImage={microneedlingDevice}
        />
        
        <div id="pricing">
          <PricingTable
            title="SkinPen Microneedling Pricing"
            subtitle="Investment in naturally rejuvenated skin"
            prices={prices}
            disclaimer="Course packages recommended for acne scarring. New clients receive 25% off first treatment. 0% finance options available."
          />
        </div>
        
        <WhoIsThisFor
          title="Is SkinPen Right for You?"
          intro="SkinPen microneedling is ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="SkinPen FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="See the dramatic improvement in acne scars and skin texture"
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Transform Your Skin?"
          subtitle="Book your SkinPen consultation and start your journey to smoother, clearer skin"
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default SkinPenMicroneedling;
