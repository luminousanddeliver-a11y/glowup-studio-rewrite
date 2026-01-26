import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { HowItWorks } from "@/components/services/HowItWorks";
import { TechnologySection } from "@/components/services/TechnologySection";
import { TabbedPricingTable } from "@/components/services/TabbedPricingTable";
import { WhoIsThisFor } from "@/components/services/WhoIsThisFor";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Timer, Shield, Users, Award, Sun, Layers, Target, Sparkles, RefreshCw, CheckCircle } from "lucide-react";
import pigmentationDevice from "@/assets/pigmentation-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const PigmentationTreatment = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pigmentation Treatment Dagenham - Melasma, Sun Spots, Age Spots",
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
    "description": "Professional pigmentation treatment in Dagenham for melasma, sun spots, age spots, and uneven skin tone. Multiple treatment options including laser, peels, and Cosmelan.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "Multiple", label: "Treatment Options", icon: Timer },
    { value: "All Skin Types", label: "Safe Protocols", icon: Shield },
    { value: "Visible", label: "Results", icon: Users },
    { value: "Customized", label: "Treatment Plans", icon: Award },
  ];

  const whatIsContent = [
    "Pigmentation concerns—whether sun spots, age spots, melasma, or post-inflammatory hyperpigmentation—can significantly impact confidence. These dark patches occur when melanin (skin pigment) is produced unevenly or excessively in certain areas.",
    "At Laser Light Skin Clinic, we offer multiple approaches to pigmentation depending on the type and cause. Options include laser treatments, chemical peels, Cosmelan/Dermamelan depigmentation systems, and specialized skincare protocols.",
    "Because pigmentation has many causes (sun damage, hormones, inflammation, genetics), correct diagnosis is essential. We begin with a thorough skin analysis to identify the type of pigmentation and create a targeted treatment plan."
  ];

  const benefits = [
    {
      title: "Sun Spots & Age Spots",
      description: "Clear dark spots caused by sun exposure. Laser and IPL target the pigment precisely for even-toned skin.",
      icon: Sun
    },
    {
      title: "Melasma Treatment",
      description: "Specialized protocols for hormonally-triggered pigmentation, including Cosmelan and combination therapies.",
      icon: Target
    },
    {
      title: "Post-Inflammatory Hyperpigmentation",
      description: "Fade dark marks left after acne, injuries, or inflammation with chemical peels and targeted treatments.",
      icon: RefreshCw
    },
    {
      title: "Uneven Skin Tone",
      description: "Achieve a more uniform complexion with treatments that address overall pigmentation and dullness.",
      icon: Layers
    },
    {
      title: "Cosmelan/Dermamelan",
      description: "Professional depigmentation systems that dramatically reduce melasma and stubborn pigmentation.",
      icon: Sparkles
    },
    {
      title: "Maintenance Support",
      description: "Ongoing skincare guidance to maintain results and prevent pigmentation from returning.",
      icon: CheckCircle
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Skin Analysis & Diagnosis",
      description: "We identify the type and cause of your pigmentation using advanced imaging and assessment. This determines the best treatment approach."
    },
    {
      number: 2,
      title: "Treatment Selection",
      description: "Based on your diagnosis, we recommend the most effective treatment: laser, peels, Cosmelan, or combination therapy."
    },
    {
      number: 3,
      title: "Treatment Course",
      description: "Most pigmentation requires multiple sessions. We create a treatment timeline and monitor progress throughout."
    },
    {
      number: 4,
      title: "Maintenance & Prevention",
      description: "Ongoing skincare and sun protection are essential. We provide a maintenance plan to preserve your results."
    }
  ];

  const technologyFeatures = [
    "Laser targeting of melanin deposits",
    "IPL for sun spots and age spots",
    "Cosmelan/Dermamelan professional systems",
    "Chemical peels for surface pigmentation",
    "Combination protocols for complex cases",
    "Safe treatment options for all skin types"
  ];

  const pricingTabs = [
    {
      label: "Laser/IPL",
      prices: [
        { area: "Spot Treatment (1-5 spots)", singleSession: "£100", course: "£270 (3)", savings: "Save £30" },
        { area: "Full Face", singleSession: "£200", course: "£540 (3)", savings: "Save £60" },
        { area: "Hands", singleSession: "£150", course: "£400 (3)", savings: "Save £50" },
        { area: "Décolletage", singleSession: "£180", course: "£480 (3)", savings: "Save £60" },
      ]
    },
    {
      label: "Cosmelan/Dermamelan",
      prices: [
        { area: "Cosmelan Pack (Full Protocol)", singleSession: "£650", course: "N/A", savings: "Includes home kit" },
        { area: "Dermamelan Pack (Full Protocol)", singleSession: "£850", course: "N/A", savings: "Includes home kit" },
        { area: "Maintenance Session", singleSession: "£100", course: "N/A", savings: "" },
      ]
    },
    {
      label: "Chemical Peels",
      prices: [
        { area: "Brightening Peel", singleSession: "£100", course: "£450 (6)", savings: "Save £150" },
        { area: "TCA Peel", singleSession: "£150", course: "£600 (6)", savings: "Save £300" },
        { area: "Advanced Depigmenting Peel", singleSession: "£180", course: "£720 (6)", savings: "Save £360" },
      ]
    }
  ];

  const idealCandidates = [
    "Have sun spots, age spots, or freckles",
    "Struggle with melasma (hormonal pigmentation)",
    "Have post-inflammatory hyperpigmentation from acne",
    "Want a more even, radiant complexion",
    "Are committed to sun protection",
    "Have realistic expectations about gradual improvement"
  ];

  const considerations = [
    {
      title: "Dark Skin Tones",
      description: "Special protocols and gentle approaches ensure safe, effective treatment for darker skin types."
    },
    {
      title: "Melasma",
      description: "Melasma is often chronic and may require ongoing management. Complete 'cure' is not always possible."
    },
    {
      title: "Sun Protection",
      description: "Strict sun protection is essential during and after treatment. Results will not last without SPF."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "Avoid sun exposure and self-tan",
        "May use prep skincare for 2-4 weeks",
        "Discontinue retinoids as directed"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Treatment varies by modality",
        "Laser/IPL: warm sensation",
        "Peels: tingling, tightness"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Pigment may darken before fading",
        "Peeling or flaking possible",
        "Strict SPF 50+ required"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Week 1-2", result: "Initial healing, pigment may darken" },
    { session: "Week 3-4", result: "Fading begins, skin tone evens" },
    { session: "Month 2-3", result: "Significant improvement visible" }
  ];

  const faqs = [
    {
      question: "What causes pigmentation?",
      answer: "Pigmentation has many causes: sun exposure, hormones (pregnancy, contraceptives), inflammation (acne, injuries), genetics, and aging. Identifying the cause helps determine the best treatment."
    },
    {
      question: "Can you treat melasma?",
      answer: "Yes, but melasma is complex. We use specialized protocols including Cosmelan/Dermamelan, gentle peels, and strict sun protection. Complete resolution isn't always possible, but significant improvement is achievable."
    },
    {
      question: "How many treatments will I need?",
      answer: "It depends on the type and severity. Sun spots may clear in 1-3 laser sessions. Melasma and post-inflammatory pigmentation often require 6+ sessions and ongoing maintenance."
    },
    {
      question: "Is it safe for dark skin?",
      answer: "Yes, with appropriate protocols. We use gentler settings and specific treatments designed for darker skin tones to avoid post-inflammatory hyperpigmentation."
    },
    {
      question: "Will the pigmentation come back?",
      answer: "Sun protection is essential to maintain results. Sun damage can cause new spots. Melasma is often chronic and may require ongoing maintenance treatments."
    },
    {
      question: "What is Cosmelan?",
      answer: "Cosmelan is a professional depigmentation system. It involves an in-clinic mask application followed by a home care protocol. It's highly effective for melasma and stubborn pigmentation."
    },
    {
      question: "Can I treat pigmentation at home?",
      answer: "Over-the-counter products can help mild cases, but professional treatments are far more effective for significant pigmentation. We recommend combining professional treatments with a targeted home care routine."
    },
    {
      question: "Why does pigment get darker before it fades?",
      answer: "After laser or IPL, pigment is brought to the surface and may appear darker for 1-2 weeks. This is normal and part of the process—it then crusts and falls off, revealing clearer skin."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Pigmentation Treatment Dagenham | Melasma, Sun Spots | Book Now"
        description="Professional pigmentation treatment in Dagenham. Laser, Cosmelan, chemical peels for melasma, sun spots, and uneven skin tone. Free consultation available."
        canonicalUrl="https://laserlightskinclinic.co.uk/pigmentation-treatment-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Specialist Pigmentation Care"
          title="Pigmentation Treatment in Dagenham"
          titleAccent="Dagenham"
          subtitle="Clear Sun Spots, Melasma & Uneven Skin Tone"
          description="Advanced treatments for all types of pigmentation. From laser to Cosmelan, we find the right solution for your skin."
          badge="Free Skin Analysis"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Pigmentation Treatment" }
          ]}
          stats={[
            { value: "Multiple", label: "Options" },
            { value: "All Skin", label: "Types" },
            { value: "Custom", label: "Plans" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="Understanding Pigmentation"
          content={whatIsContent}
          highlightText="Correct diagnosis is the key to successful pigmentation treatment. We begin with a thorough analysis to understand your specific type of hyperpigmentation."
        />
        
        <BenefitsList
          title="Pigmentation Concerns We Treat"
          subtitle="Comprehensive solutions for uneven skin tone"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Pigmentation Treatment Journey"
          subtitle="From diagnosis to clear, even-toned skin"
          steps={steps}
        />
        
        <TechnologySection
          title="Multiple Treatment Modalities"
          subtitle="We select the best approach for your specific pigmentation type"
          technologyName="Advanced Pigmentation Solutions"
          description="Different types of pigmentation respond to different treatments. Our clinic offers laser, IPL, professional peels, and the renowned Cosmelan/Dermamelan systems. After careful diagnosis, we recommend the most effective approach for your specific concerns."
          features={technologyFeatures}
          certifications={["Multiple Modalities", "Safe for All Skin", "Proven Results"]}
          deviceImage={pigmentationDevice}
        />
        
        <TabbedPricingTable
          title="Pigmentation Treatment Pricing"
          subtitle="Investment in clear, even-toned skin"
          tabs={pricingTabs}
          offerBanner={{
            highlight: "FREE SKIN ANALYSIS",
            text: "Book Your Pigmentation Assessment"
          }}
          paymentOptions="Interest-free payment plans available on treatments over £200."
          disclaimer="Treatment recommendations made after skin analysis. Results vary by individual."
        />
        
        <WhoIsThisFor
          title="Is Pigmentation Treatment Right for You?"
          intro="Our pigmentation treatments can help if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Pigmentation Treatment FAQs"
          subtitle="Common questions about treating hyperpigmentation"
          faqs={faqs}
        />
        
        <ServiceTestimonial 
          testimonials={[
            { quote: "Years of sun damage faded after my course of treatments. So happy with my results!", initials: "CM", treatment: "Pigmentation Course", rating: 5 },
            { quote: "My melasma is finally under control. The team really understood my skin.", initials: "FA", treatment: "Melasma Treatment", rating: 5 }
          ]} 
        />
        
        <ResultsShowcase
          title="Clearer, More Even Skin"
          description="See how our clients achieve more uniform, radiant complexions. Book a consultation to start your journey."
        />
        
        <RelatedServices 
          services={[
            { name: "Chemical Peels", href: "/chemical-peels-dagenham", description: "Pigmentation peels for dark spots" },
            { name: "Skin Analysis", href: "/skin-analysis-dagenham", description: "Diagnose your pigmentation" },
            { name: "Laser Resurfacing", href: "/laser-resurfacing-dagenham", description: "For stubborn sun damage" }
          ]}
        />
        
        <ServiceCTA
          title="Ready for Clearer Skin?"
          subtitle="Book a free skin analysis to diagnose your pigmentation and create a personalized treatment plan."
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default PigmentationTreatment;
