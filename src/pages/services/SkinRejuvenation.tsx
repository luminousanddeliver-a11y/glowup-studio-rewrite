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
import { Sun, Sparkles, Shield, Clock } from "lucide-react";
import skinTexture from "@/assets/skin-texture.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const SkinRejuvenation = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Skin Rejuvenation Dagenham",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Laser Light Skin Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6 Church Elm Lane",
        "addressLocality": "Dagenham",
        "postalCode": "RM10 9RR",
        "addressCountry": "GB"
      },
      "telephone": "+442085981200"
    },
    "description": "Advanced skin rejuvenation treatments in Dagenham. Reduce fine lines, sun damage, and uneven skin tone with our multi-modality approach.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "150",
      "priceCurrency": "GBP",
      "description": "Full Face Laser Rejuvenation from £150"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does skin rejuvenation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Skin rejuvenation treatments start from £100 per session. Full face laser rejuvenation is £150 per session, with discounts available for course bookings."
        }
      },
      {
        "@type": "Question",
        "name": "Can you treat sun damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our laser rejuvenation treatments are highly effective for sun damage, including age spots, freckles, and uneven pigmentation caused by UV exposure."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most skin rejuvenation treatments have minimal downtime. You may experience mild redness for 24-48 hours, but can usually return to normal activities immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe for dark skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use advanced laser technology that is safe for all skin types, including darker skin tones (Fitzpatrick IV-VI)."
        }
      }
    ]
  };

  const stats = [
    { value: "Sun Damage", label: "Corrected", icon: Sun },
    { value: "Fine Lines", label: "Reduced", icon: Sparkles },
    { value: "All Skin Types", label: "Safe For", icon: Shield },
    { value: "Minimal", label: "Downtime", icon: Clock },
  ];

  const whatIsContent = [
    "Skin rejuvenation refers to a range of advanced treatments designed to restore a youthful, radiant appearance to your skin. As we age, our skin loses collagen, elasticity, and develops signs of sun damage, pigmentation, and fine lines.",
    "At Laser Light Skin Clinic, we offer a multi-modality approach to skin rejuvenation, combining the most effective technologies including laser treatments, SkinPen microneedling, and medical-grade chemical peels to address your specific concerns.",
    "Whether you're dealing with sun spots, uneven skin tone, fine lines, or dull, tired-looking skin, our Level 4 qualified aestheticians will create a personalized treatment plan to help you achieve a naturally refreshed and rejuvenated appearance."
  ];

  const benefits = [
    {
      title: "Reduce Fine Lines & Wrinkles",
      description: "Stimulate collagen production to smooth out fine lines and wrinkles, restoring a more youthful appearance to your skin."
    },
    {
      title: "Correct Sun Damage",
      description: "Target age spots, freckles, and uneven pigmentation caused by years of sun exposure, revealing clearer, more even-toned skin."
    },
    {
      title: "Improve Skin Texture",
      description: "Refine rough skin texture, minimise pores, and achieve a smoother, more refined complexion."
    },
    {
      title: "Boost Collagen Production",
      description: "Our treatments stimulate your skin's natural collagen production for long-lasting improvements in firmness and elasticity."
    },
    {
      title: "Even Skin Tone",
      description: "Reduce redness, hyperpigmentation, and discoloration for a more uniform, radiant complexion."
    },
    {
      title: "Minimal Downtime",
      description: "Most treatments require little to no downtime, so you can return to your daily activities with refreshed, glowing skin."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consultation & Skin Analysis",
      description: "We assess your skin type, concerns, and goals using advanced skin analysis technology. Together, we'll create a personalized treatment plan."
    },
    {
      number: 2,
      title: "Treatment Selection",
      description: "Based on your needs, we recommend the most effective combination of treatments—laser, microneedling, peels, or a combination approach."
    },
    {
      number: 3,
      title: "Treatment Sessions",
      description: "Each session is tailored to your skin's response. Most clients see visible improvement after 2-3 sessions, with optimal results after a full course."
    },
    {
      number: 4,
      title: "Maintenance Plan",
      description: "We'll create a maintenance schedule to preserve your results, along with personalized skincare recommendations for home use."
    }
  ];

  const technologyFeatures = [
    "Laser Genesis for collagen stimulation",
    "IPL for pigmentation correction",
    "Lynton Motus AY for skin tone",
    "SkinPen microneedling for texture",
    "AlumierMD professional peels",
    "LED light therapy"
  ];

  const prices = [
    { area: "Laser Skin Rejuvenation (Full Face)", singleSession: "£150", course: "£675 (6 sessions)" },
    { area: "Laser Skin Rejuvenation (Face & Neck)", singleSession: "£200", course: "£900 (6 sessions)" },
    { area: "IPL Pigmentation Treatment", singleSession: "£120", course: "£540 (6 sessions)" },
    { area: "LED Light Therapy", singleSession: "£50", course: "£225 (6 sessions)" },
    { area: "Combination Package", singleSession: "£250", course: "£1125 (6 sessions)", note: "Laser + Peel + LED" }
  ];

  const idealCandidates = [
    "Have sun damage or age spots",
    "Notice fine lines and loss of skin elasticity",
    "Have uneven skin tone or hyperpigmentation",
    "Want to improve overall skin texture",
    "Looking for a non-surgical anti-aging solution",
    "Want to maintain youthful, healthy-looking skin"
  ];

  const considerations = [
    {
      title: "Sun Damage & Age Spots",
      description: "Our IPL and laser treatments are highly effective for sun-induced pigmentation, often showing significant results after just 2-3 sessions."
    },
    {
      title: "Fine Lines & Wrinkles",
      description: "Laser Genesis and microneedling stimulate collagen production, naturally reducing the appearance of fine lines over time."
    },
    {
      title: "Dull, Tired Skin",
      description: "Chemical peels and Hydrafacials instantly refresh dull skin, revealing a brighter, more radiant complexion."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Avoid sun exposure for 2 weeks",
        "Stop retinoids 3-5 days before",
        "Arrive with clean, makeup-free skin"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "30-60 minute session",
        "Mild warming sensation",
        "Comfortable, relaxing experience"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Mild redness for 24-48 hours",
        "Apply SPF daily (essential)",
        "Avoid direct sun for 1 week"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Session 1-2", result: "Improved radiance and glow" },
    { session: "Session 3-4", result: "Visible pigmentation reduction" },
    { session: "Session 5-6", result: "Firmer, more even-toned skin" }
  ];

  const faqs = [
    {
      question: "How much does skin rejuvenation cost?",
      answer: "Skin rejuvenation treatments start from £100 per session. Full face laser rejuvenation is £150 per session, with discounts available for course bookings. During your consultation, we'll recommend the most cost-effective treatment plan for your goals."
    },
    {
      question: "Can you treat sun damage?",
      answer: "Yes, our laser and IPL treatments are highly effective for sun damage, including age spots, freckles, and uneven pigmentation caused by UV exposure. Most clients see significant improvement after 2-3 sessions."
    },
    {
      question: "Is there any downtime?",
      answer: "Most skin rejuvenation treatments have minimal downtime. You may experience mild redness for 24-48 hours, but can usually return to normal activities immediately. We'll provide specific aftercare instructions for your chosen treatment."
    },
    {
      question: "Is it safe for dark skin?",
      answer: "Yes, we use advanced laser technology, including the Lynton Motus AY, that is safe for all skin types, including darker skin tones (Fitzpatrick IV-VI). A thorough consultation ensures we choose the safest and most effective approach for your skin."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most clients see visible improvement after 2-3 sessions, with optimal results achieved after a course of 4-6 treatments. Maintenance sessions every 3-6 months help preserve your results long-term."
    },
    {
      question: "What's the difference between laser rejuvenation and a chemical peel?",
      answer: "Laser rejuvenation uses light energy to stimulate collagen and target specific concerns like pigmentation. Chemical peels use acids to remove dead skin cells and reveal fresher skin beneath. We often combine both for comprehensive results."
    },
    {
      question: "Can I combine skin rejuvenation with other treatments?",
      answer: "Absolutely! We often create combination treatment plans that include laser rejuvenation, Hydrafacials, SkinPen microneedling, and chemical peels for comprehensive results. Your treatment plan will be tailored to your specific goals."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Skin Rejuvenation Dagenham | Sun Damage | Fine Lines | Book Now"
        description="Advanced skin rejuvenation in Dagenham. Reduce sun damage, fine lines, and uneven skin tone. Multi-modality approach with laser, microneedling & peels. Book your consultation."
        canonicalUrl="https://laserlightskinclinic.co.uk/skin-rejuvenation-dagenham"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Multi-Modality Approach"
          title="Skin Rejuvenation Dagenham"
          titleAccent="Dagenham"
          subtitle="Turn Back the Clock. Reveal Your Best Skin."
          description="Reduce sun damage, fine lines, and uneven skin tone with advanced multi-modality treatments. Customized plans for lasting results."
          badge="Anti-Aging & Radiance"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          stats={[
            { value: "Sun Damage", label: "Corrected" },
            { value: "Fine Lines", label: "Reduced" },
            { value: "Minimal", label: "Downtime" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is Skin Rejuvenation?"
          content={whatIsContent}
          highlightText="Our multi-modality approach combines the most effective technologies—laser, microneedling, and medical-grade peels—for comprehensive, lasting results."
        />
        
        <BenefitsList
          title="Benefits of Skin Rejuvenation"
          subtitle="Restore youthful radiance with advanced technology"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Skin Rejuvenation Journey"
          subtitle="From consultation to radiant results"
          steps={steps}
        />
        
        <TechnologySection
          title="Multi-Modality Technology"
          subtitle="Combining the best treatments for optimal results"
          technologyName="Advanced Treatment Suite"
          description="We don't rely on a single technology—we combine multiple advanced treatments to address all aspects of skin aging. From laser and IPL for pigmentation, to microneedling for texture, to peels for radiance, we create a comprehensive plan tailored to your unique skin."
          features={technologyFeatures}
          certifications={["NHS Approved", "CE Marked", "FDA Cleared"]}
          deviceImage={skinTexture}
        />
        
        <div id="pricing">
          <PricingTable
            title="Skin Rejuvenation Pricing"
            subtitle="Investment in your skin's future"
            prices={prices}
            disclaimer="New clients receive 25% off their first treatment. Course packages offer the best value and results. 0% finance options available."
          />
        </div>
        
        <WhoIsThisFor
          title="Is Skin Rejuvenation Right for You?"
          intro="Skin rejuvenation treatments are ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Skin Rejuvenation FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="See the visible improvement in skin tone, texture, and radiance"
        />
        
        <ServiceCTA
          title="Ready for Radiant Skin?"
          subtitle="Book your consultation and start your skin rejuvenation journey"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SkinRejuvenation;
