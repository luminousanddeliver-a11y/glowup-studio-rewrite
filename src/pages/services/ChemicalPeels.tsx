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
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Sparkles, Layers, Clock, Shield } from "lucide-react";
import chemicalPeelProducts from "@/assets/chemical-peel-products.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const ChemicalPeels = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chemical Peels Dagenham",
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
    "description": "Medical-grade chemical peels in Dagenham for acne, pigmentation, and skin rejuvenation. AlumierMD professional peel solutions.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "80",
      "priceCurrency": "GBP",
      "description": "Light Chemical Peel from £80"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do chemical peels cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chemical peels at our Dagenham clinic start from £80 for a light peel. Medium-depth peels range from £120-£150. Course packages offer discounted rates."
        }
      },
      {
        "@type": "Question",
        "name": "Is there downtime after a chemical peel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Downtime varies by peel strength. Light peels have no downtime. Medium peels may cause 3-5 days of flaking. We'll advise based on your chosen treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Can chemical peels help with acne scars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, chemical peels can improve superficial acne scarring and post-inflammatory hyperpigmentation. For deeper scars, we often recommend combining peels with SkinPen microneedling."
        }
      },
      {
        "@type": "Question",
        "name": "Do chemical peels hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients experience a tingling or warming sensation during the peel, which subsides quickly. We monitor your comfort throughout and can neutralize the peel if needed."
        }
      }
    ]
  };

  const stats = [
    { value: "Clearer", label: "Skin Revealed", icon: Sparkles },
    { value: "Multiple", label: "Peel Depths", icon: Layers },
    { value: "Lunch Break", label: "Friendly", icon: Clock },
    { value: "Medical", label: "Grade Only", icon: Shield },
  ];

  const whatIsContent = [
    "A chemical peel is a skin-resurfacing treatment that uses carefully formulated acid solutions to remove damaged outer layers of skin. As the old skin peels away, fresh, healthier skin is revealed beneath—smoother, clearer, and more evenly toned.",
    "Chemical peels work at different depths depending on the acids used and their concentration. Light peels target the outermost layer (epidermis) for a quick refresh, while medium peels penetrate deeper to address more significant concerns like pigmentation and scarring.",
    "At Laser Light Skin Clinic, we use AlumierMD professional peel solutions—medical-grade formulations that deliver superior results compared to over-the-counter products. Our Level 4 qualified aestheticians customize each peel to your specific skin type and concerns."
  ];

  const benefits = [
    {
      title: "Clearer, Brighter Skin",
      description: "Remove dull, dead skin cells to reveal fresh, radiant skin beneath. See an immediate improvement in skin clarity and luminosity."
    },
    {
      title: "Fade Scars & Dark Spots",
      description: "Accelerate cell turnover to fade acne scars, sun spots, and post-inflammatory hyperpigmentation for a more even complexion."
    },
    {
      title: "Smoother Texture",
      description: "Refine rough skin texture, minimize the appearance of pores, and achieve a smoother, more polished skin surface."
    },
    {
      title: "Boost Product Absorption",
      description: "By removing the barrier of dead skin cells, your skincare products can penetrate more effectively for better results."
    },
    {
      title: "Control Acne",
      description: "Salicylic acid peels are particularly effective for acne-prone skin, unclogging pores and reducing breakouts."
    },
    {
      title: "Quick Treatment",
      description: "Most peels take just 30-45 minutes—perfect for a lunch break treatment with visible results."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Skin Consultation",
      description: "We assess your skin type, concerns, and goals to recommend the most appropriate peel strength and formulation."
    },
    {
      number: 2,
      title: "Skin Preparation",
      description: "Your skin is thoroughly cleansed and prepped. For some peels, we recommend a pre-treatment home care routine."
    },
    {
      number: 3,
      title: "Peel Application",
      description: "The peel solution is applied in layers. You'll feel a tingling or warming sensation as the acids work on your skin."
    },
    {
      number: 4,
      title: "Neutralization",
      description: "The peel is neutralized and removed. A soothing serum and SPF are applied to protect your fresh skin."
    },
    {
      number: 5,
      title: "Peeling Phase",
      description: "Over the following days (depending on peel depth), old skin will flake away naturally, revealing renewed skin beneath."
    }
  ];

  const prices = [
    { area: "Light Peel (Glow Peel)", singleSession: "£80", course: "£360 (6 sessions)", note: "Lunchtime glow, no downtime" },
    { area: "Medium Peel (Radiant Peel)", singleSession: "£120", course: "£540 (6 sessions)", note: "3-5 days flaking" },
    { area: "Acne Peel (Salicylic)", singleSession: "£100", course: "£450 (6 sessions)", note: "Targets active acne" },
    { area: "Pigmentation Peel", singleSession: "£150", course: "£675 (6 sessions)", note: "Targets dark spots & melasma" },
    { area: "Peel + LED Therapy", singleSession: "£130", course: "£585 (6 sessions)", note: "Enhanced healing" },
    { area: "Peel + Hydrafacial Combo", singleSession: "£180", course: "£810 (6 sessions)", note: "Ultimate skin refresh" }
  ];

  const idealCandidates = [
    "Have dull, lacklustre skin",
    "Struggle with acne or congested skin",
    "Have dark spots or uneven skin tone",
    "Want to improve skin texture",
    "Looking for a quick skin refresh",
    "Want to boost skincare product effectiveness"
  ];

  const considerations = [
    {
      title: "Acne-Prone Skin",
      description: "Salicylic acid peels penetrate oil-filled pores, making them excellent for active acne and preventing future breakouts."
    },
    {
      title: "Hyperpigmentation",
      description: "Our pigmentation peels target melanin production to fade dark spots, sun damage, and melasma over a course of treatments."
    },
    {
      title: "Sensitive Skin",
      description: "We offer gentle lactic acid peels suitable for sensitive or rosacea-prone skin, providing benefits without irritation."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Avoid retinoids for 5-7 days",
        "No waxing or laser for 2 weeks",
        "Arrive with clean, makeup-free skin"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "30-45 minute session",
        "Tingling/warming sensation",
        "Monitored for comfort"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Mild redness for a few hours",
        "Flaking begins day 2-3 (medium peels)",
        "SPF essential for 2 weeks"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Day 1", result: "Immediate glow (light peels)" },
    { session: "Day 3-7", result: "Peeling reveals fresh skin" },
    { session: "After 3-6 peels", result: "Significant improvement" }
  ];

  const faqs = [
    {
      question: "How much do chemical peels cost?",
      answer: "Chemical peels at our Dagenham clinic start from £80 for a light peel. Medium-depth peels range from £120-£150. Course packages offer discounted rates and are recommended for best results."
    },
    {
      question: "Is there downtime after a chemical peel?",
      answer: "Downtime varies by peel strength. Light peels have no downtime—you'll have an immediate glow. Medium peels may cause 3-5 days of flaking. We'll advise based on your chosen treatment and schedule."
    },
    {
      question: "Can chemical peels help with acne scars?",
      answer: "Yes, chemical peels can improve superficial acne scarring and post-inflammatory hyperpigmentation. For deeper scars, we often recommend combining peels with SkinPen microneedling for optimal results."
    },
    {
      question: "Do chemical peels hurt?",
      answer: "Most clients experience a tingling or warming sensation during the peel, which subsides quickly. We monitor your comfort throughout and can neutralize the peel if needed."
    },
    {
      question: "How often should I get a chemical peel?",
      answer: "Light peels can be done every 2-4 weeks. Medium peels are typically spaced 4-6 weeks apart. We'll create a treatment schedule based on your skin's response and goals."
    },
    {
      question: "Are chemical peels safe for dark skin?",
      answer: "Yes, with the right formulation. We use peels specifically designed for darker skin types to minimize the risk of post-inflammatory hyperpigmentation. A thorough consultation ensures safe treatment."
    },
    {
      question: "What's the difference between an at-home peel and a professional peel?",
      answer: "Professional peels use higher concentrations of active ingredients that are not available over-the-counter. They penetrate deeper and deliver more significant, longer-lasting results under controlled, safe conditions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Chemical Peels Dagenham | Acne & Pigmentation | AlumierMD | Book Now"
        description="Medical-grade chemical peels in Dagenham for acne, pigmentation, and skin rejuvenation. AlumierMD professional solutions. Clearer, brighter skin. Book your consultation."
        canonicalUrl="https://laserlightskinclinic.co.uk/chemical-peels-dagenham"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="AlumierMD Professional"
          title="Chemical Peels Dagenham"
          titleAccent="Dagenham"
          subtitle="Reveal Fresher, Clearer, Brighter Skin."
          description="Medical-grade chemical peels to treat acne, pigmentation, and dull skin. Professional solutions for visible results."
          badge="Skin Resurfacing"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Chemical Peels" }
          ]}
          stats={[
            { value: "Clearer", label: "Skin" },
            { value: "Multiple", label: "Peel Types" },
            { value: "Lunch", label: "Break Friendly" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is a Chemical Peel?"
          content={whatIsContent}
          highlightText="Our AlumierMD professional peels deliver results that over-the-counter products simply cannot match—safely and effectively."
        />
        
        <BenefitsList
          title="Benefits of Chemical Peels"
          subtitle="Transform your skin with controlled exfoliation"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Chemical Peel Process"
          subtitle="From consultation to renewed skin"
          steps={steps}
        />
        
        <div id="pricing">
          <PricingTable
            title="Chemical Peel Pricing"
            subtitle="Choose the peel that's right for you"
            prices={prices}
            disclaimer="Course packages recommended for pigmentation and scarring concerns. New clients receive 25% off first treatment."
          />
        </div>
        
        <WhoIsThisFor
          title="Is a Chemical Peel Right for You?"
          intro="Chemical peels are ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Chemical Peel FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ServiceTestimonial 
          testimonials={[
            { quote: "My skin has never looked better! The chemical peel really helped with my pigmentation issues.", initials: "SK", treatment: "Pigmentation Peel", rating: 5 },
            { quote: "Love the glow I get after my peels. The team are so knowledgeable about what my skin needs.", initials: "RM", treatment: "Light Peel Course", rating: 5 }
          ]} 
        />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="See the visible improvement in skin clarity and tone"
        />
        
        <RelatedServices 
          services={[
            { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Combine with Hydrafacial for ultimate skin refresh" },
            { name: "LED Light Therapy", href: "/led-light-therapy-dagenham", description: "Enhance peel healing with LED therapy" },
            { name: "SkinPen Microneedling", href: "/skinpen-microneedling-dagenham", description: "For deeper scarring concerns" }
          ]}
        />
        
        <ServiceCTA
          title="Ready for Renewed Skin?"
          subtitle="Book your chemical peel consultation and reveal your best skin"
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default ChemicalPeels;
