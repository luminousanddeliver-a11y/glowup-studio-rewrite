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
import { Zap, Shield, Droplets, Heart } from "lucide-react";

const IVDrips = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IV Drips & Vitamin Infusions East London",
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
    "description": "Medically supervised IV drips and vitamin infusions in East London. Energy boost, immunity support, and skin glow treatments with 100% absorption.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "100",
      "priceCurrency": "GBP",
      "description": "Signature Wellness IV Drip from £100"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do IV drips cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IV drips at our East London clinic start from £100 for a Signature Wellness Drip. Specialized drips like our Immunity Shield and Energy Boost range from £150-£200."
        }
      },
      {
        "@type": "Question",
        "name": "Are IV drips safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when administered by qualified medical professionals. All our IV drips are performed by trained nurses using sterile equipment. We conduct a health screening before every treatment."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an IV drip take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most IV drip sessions take 30-60 minutes. You can relax in our comfortable treatment room while receiving your infusion. B12 injections take just a few minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get an IV drip for energy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Energy Boost IV is specifically formulated to combat fatigue, improve mental clarity, and restore vitality. It contains B vitamins, vitamin C, and other energizing nutrients."
        }
      }
    ]
  };

  const stats = [
    { value: "100%", label: "Nutrient Absorption", icon: Droplets },
    { value: "Instant", label: "Energy Boost", icon: Zap },
    { value: "Medically", label: "Supervised", icon: Shield },
    { value: "Wellness", label: "From Within", icon: Heart },
  ];

  const whatIsContent = [
    "IV vitamin therapy delivers essential nutrients directly into your bloodstream, bypassing the digestive system for 100% absorption. When you take vitamins orally, your body only absorbs 20-50% of the nutrients. With IV infusion, every drop goes directly where it's needed.",
    "Our IV drips are formulated with medical-grade vitamins, minerals, and amino acids tailored to specific health goals—whether you want more energy, a stronger immune system, radiant skin, or faster recovery from illness or exercise.",
    "At Laser Light Skin Clinic, all IV treatments are administered by qualified nurses under medical supervision. We conduct a thorough health screening before your first treatment to ensure the therapy is safe and appropriate for you."
  ];

  const benefits = [
    {
      title: "100% Nutrient Absorption",
      description: "Bypass the digestive system and deliver vitamins directly into your bloodstream for maximum bioavailability and immediate effect."
    },
    {
      title: "Immediate Energy Boost",
      description: "Feel revitalized within hours—not days. Our Energy Boost IV combats fatigue, brain fog, and low energy levels."
    },
    {
      title: "Enhanced Immunity",
      description: "High-dose vitamin C, zinc, and other immune-boosting nutrients help your body fight off illness and recover faster."
    },
    {
      title: "Radiant Skin",
      description: "Our Skin Glow IV includes glutathione, vitamin C, and biotin to promote clear, luminous skin from within."
    },
    {
      title: "Faster Recovery",
      description: "Athletes and busy professionals use IV therapy to recover faster from workouts, travel, or demanding schedules."
    },
    {
      title: "Personalized Formulations",
      description: "Choose from our menu of drips or work with our team to create a customized infusion tailored to your specific needs."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Health Screening",
      description: "Complete a brief health questionnaire and consultation to ensure IV therapy is safe and appropriate for you."
    },
    {
      number: 2,
      title: "Drip Selection",
      description: "Choose from our menu of specialized IV drips based on your health goals—energy, immunity, skin, or recovery."
    },
    {
      number: 3,
      title: "Relaxing Infusion",
      description: "Recline in our comfortable treatment room while your IV drip is administered. Sessions typically last 30-60 minutes."
    },
    {
      number: 4,
      title: "Immediate Benefits",
      description: "Many clients feel the effects immediately. Optimal results are achieved with regular treatments based on your wellness goals."
    }
  ];

  const prices = [
    { area: "Signature Wellness Drip", singleSession: "£100", course: "£450 (6 sessions)", note: "Hydration + essential vitamins" },
    { area: "Energy Boost IV", singleSession: "£150", course: "£675 (6 sessions)", note: "B vitamins + vitamin C + minerals" },
    { area: "Immunity Shield IV", singleSession: "£180", course: "£810 (6 sessions)", note: "High-dose vitamin C + zinc + glutathione" },
    { area: "Skin Glow IV", singleSession: "£200", course: "£900 (6 sessions)", note: "Glutathione + biotin + vitamin C" },
    { area: "NAD+ Anti-Aging IV", singleSession: "£350", course: "£1575 (6 sessions)", note: "Cellular rejuvenation" },
    { area: "B12 Injection", singleSession: "£35", course: "£150 (6 sessions)", note: "Quick energy boost" },
    { area: "Vitamin D Injection", singleSession: "£35", course: "£150 (6 sessions)", note: "Immune support" }
  ];

  const idealCandidates = [
    "Feel constantly tired or fatigued",
    "Want to boost your immune system",
    "Seek radiant, glowing skin from within",
    "Need faster recovery from exercise or illness",
    "Travel frequently and experience jet lag",
    "Want to optimize your overall wellness"
  ];

  const considerations = [
    {
      title: "Energy & Fatigue",
      description: "Our Energy Boost IV is perfect for chronic fatigue, brain fog, or demanding lifestyles. Feel revitalized within hours."
    },
    {
      title: "Immunity Support",
      description: "High-dose vitamin C and zinc help your body fight infections. Popular during cold and flu season or when feeling run down."
    },
    {
      title: "Skin Health",
      description: "Glutathione and vitamin C promote clear, luminous skin. Works from the inside out for a natural glow."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Eat a light meal beforehand",
        "Stay hydrated",
        "Complete health questionnaire"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "30-60 minute session",
        "Relax in comfortable setting",
        "Administered by qualified nurse"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Resume normal activities immediately",
        "Stay hydrated",
        "Effects felt within hours"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Immediately", result: "Hydration and initial boost" },
    { session: "24-48 hours", result: "Peak energy and clarity" },
    { session: "Regular sessions", result: "Sustained wellness benefits" }
  ];

  const faqs = [
    {
      question: "How much do IV drips cost?",
      answer: "IV drips at our East London clinic start from £100 for a Signature Wellness Drip. Specialized drips like our Immunity Shield and Energy Boost range from £150-£200. B12 injections are just £35."
    },
    {
      question: "Are IV drips safe?",
      answer: "Yes, when administered by qualified medical professionals. All our IV drips are performed by trained nurses using sterile equipment. We conduct a health screening before every treatment to ensure safety."
    },
    {
      question: "How long does an IV drip take?",
      answer: "Most IV drip sessions take 30-60 minutes. You can relax in our comfortable treatment room while receiving your infusion. B12 and vitamin D injections take just a few minutes."
    },
    {
      question: "Can I get an IV drip for energy?",
      answer: "Yes, our Energy Boost IV is specifically formulated to combat fatigue, improve mental clarity, and restore vitality. It contains B vitamins, vitamin C, and other energizing nutrients."
    },
    {
      question: "How often should I get an IV drip?",
      answer: "For general wellness, monthly treatments are popular. For specific goals like immunity during cold season or recovery from illness, weekly sessions may be recommended. We'll advise based on your needs."
    },
    {
      question: "Can I get an IV drip if I'm pregnant?",
      answer: "We do not perform IV drips on pregnant or breastfeeding clients as a precaution. Please consult with your GP or midwife about vitamin supplementation during pregnancy."
    },
    {
      question: "Will I feel anything during the drip?",
      answer: "You may feel a slight coolness as the fluid enters your bloodstream, and some people taste the vitamins briefly. Most clients find the experience relaxing and comfortable."
    },
    {
      question: "What's the difference between IV drips and taking vitamins orally?",
      answer: "Oral vitamins must pass through your digestive system, where only 20-50% is absorbed. IV therapy delivers nutrients directly into your bloodstream for 100% absorption and immediate effect."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="IV Drips East London | Vitamin Infusions | Energy & Immunity | Book Now"
        description="Medically supervised IV drips and vitamin infusions in East London. Energy boost, immunity shield, and skin glow treatments. 100% nutrient absorption. Book your session today."
        canonicalUrl="https://laserlightskinclinic.co.uk/iv-drips-infusions-east-london"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          badge="Wellness From Within"
          title="IV Drips & Vitamin Infusions"
          subtitle="100% Absorption. Instant Results. Medical-Grade Wellness."
          description="Boost energy, strengthen immunity, and achieve radiant skin with our medically supervised IV vitamin infusions. Feel the difference from the inside out."
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is IV Vitamin Therapy?"
          content={whatIsContent}
          highlightText="IV therapy delivers nutrients with 100% bioavailability—far superior to the 20-50% absorption of oral supplements."
        />
        
        <BenefitsList
          title="Benefits of IV Vitamin Therapy"
          subtitle="Wellness delivered directly where your body needs it"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your IV Drip Experience"
          subtitle="From consultation to revitalization"
          steps={steps}
        />
        
        <div id="pricing">
          <PricingTable
            title="IV Drip Menu & Pricing"
            subtitle="Choose the infusion that's right for you"
            prices={prices}
            disclaimer="All treatments administered by qualified nurses. Health screening required before first treatment. Course packages offer the best value."
          />
        </div>
        
        <WhoIsThisFor
          title="Is IV Vitamin Therapy Right for You?"
          intro="IV drips are ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="IV Drip FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ServiceCTA
          title="Ready to Feel Your Best?"
          subtitle="Book your IV drip session and experience wellness from within"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default IVDrips;
