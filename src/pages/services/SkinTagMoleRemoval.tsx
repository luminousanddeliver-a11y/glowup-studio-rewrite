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
import { Timer, Shield, Users, Award, CheckCircle, Target, Zap, Sparkles, RefreshCw, AlertCircle } from "lucide-react";
import skinTagDevice from "@/assets/skin-tag-removal-device.jpg";


const relatedServices = [
  { name: "Advanced Electrolysis", href: "/advanced-electrolysis-dagenham", description: "Remove thread veins and skin imperfections" },
  { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham", description: "Improve overall skin texture and tone" },
  { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Deep cleanse for clear, healthy skin" },
];

const testimonials = [
  { quote: "Had several skin tags removed from my neck. Quick, virtually painless, and they're completely gone!", initials: "DB", treatment: "Skin Tag Removal", rating: 5 },
  { quote: "I was nervous about removing a mole on my face, but the procedure was so quick and healed beautifully.", initials: "KM", treatment: "Mole Removal", rating: 5 },
];

const SkinTagMoleRemoval = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Skin Tag & Mole Removal Dagenham",
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
    "description": "Professional skin tag and mole removal in Dagenham using advanced electrolysis and cryotherapy. Safe, effective removal of skin lesions.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London", "London", "Redbridge", "Havering", "Newham", "Barking and Dagenham", "Essex", "Epping"],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "30",
      "highPrice": "200",
      "priceCurrency": "GBP",
      "offerCount": "8"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://laserlightskinclinic.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://laserlightskinclinic.co.uk/prices" },
      { "@type": "ListItem", "position": 3, "name": "Skin Tag & Mole Removal" }
    ]
  };

  const quickStats = [
    { value: "5-15 min", label: "Quick Treatment", icon: Timer },
    { value: "Single", label: "Session Usually", icon: Shield },
    { value: "Minimal", label: "Scarring", icon: Users },
    { value: "Permanent", label: "Removal", icon: Award },
  ];

  const whatIsContent = [
    "Skin tags, moles, warts, and other benign skin lesions are extremely common but can be bothersome or unsightly. Whether they catch on clothing, affect your confidence, or simply annoy you, professional removal offers a quick and effective solution.",
    "At Laser Light Skin Clinic, we use advanced electrolysis (diathermy) and cryotherapy techniques to safely remove unwanted skin lesions. The method used depends on the type, size, and location of the lesion.",
    "All removals are performed by trained practitioners. For any suspicious lesions, we will recommend medical consultation before treatment. Your safety is our priority."
  ];

  const benefits = [
    {
      title: "Skin Tag Removal",
      description: "Remove annoying skin tags from neck, underarms, and body areas. Quick treatment with immediate results.",
      icon: Target
    },
    {
      title: "Benign Mole Removal",
      description: "Cosmetic removal of unwanted moles using advanced techniques. Minimal scarring when performed by professionals.",
      icon: Sparkles
    },
    {
      title: "Wart Removal",
      description: "Effective treatment for common warts and verrucas using cryotherapy or electrolysis.",
      icon: Zap
    },
    {
      title: "Milia Removal",
      description: "Clear those stubborn white bumps (milia) around the eyes and face with gentle extraction or electrolysis.",
      icon: RefreshCw
    },
    {
      title: "One Treatment",
      description: "Most lesions are removed in a single session. Larger lesions may need a follow-up.",
      icon: CheckCircle
    },
    {
      title: "Minimal Scarring",
      description: "Professional technique ensures minimal scarring compared to DIY methods or surgical excision.",
      icon: AlertCircle
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "We examine the lesion to determine the best removal method and ensure it's suitable for cosmetic treatment."
    },
    {
      number: 2,
      title: "Preparation",
      description: "The area is cleansed and, if needed, numbing cream or local anesthetic is applied for comfort."
    },
    {
      number: 3,
      title: "Removal",
      description: "Using electrolysis (heat) or cryotherapy (freezing), the lesion is precisely treated and removed."
    },
    {
      number: 4,
      title: "Aftercare",
      description: "Detailed aftercare instructions are provided. The area heals over 1-3 weeks depending on size and location."
    }
  ];

  const technologyFeatures = [
    "Advanced electrolysis for precise removal",
    "Cryotherapy for warts and some lesions",
    "Minimal tissue damage to surrounding area",
    "Sterile, single-use equipment",
    "Topical anesthetic available for comfort",
    "Techniques selected based on lesion type"
  ];

  const pricingTabs = [
    {
      label: "Skin Tags",
      prices: [
        { area: "1 Skin Tag", singleSession: "£50", course: "N/A", savings: "" },
        { area: "2-5 Skin Tags", singleSession: "£80", course: "N/A", savings: "" },
        { area: "6-10 Skin Tags", singleSession: "£120", course: "N/A", savings: "" },
        { area: "10+ Skin Tags", singleSession: "From £150", course: "N/A", savings: "" },
      ]
    },
    {
      label: "Moles",
      prices: [
        { area: "Small Mole (up to 3mm)", singleSession: "£100", course: "N/A", savings: "" },
        { area: "Medium Mole (3-5mm)", singleSession: "£150", course: "N/A", savings: "" },
        { area: "Large Mole (5mm+)", singleSession: "From £200", course: "N/A", savings: "" },
        { area: "Multiple Moles", singleSession: "Quote on assessment", course: "N/A", savings: "" },
      ]
    },
    {
      label: "Other Lesions",
      prices: [
        { area: "Milia (per lesion)", singleSession: "£30", course: "£120 (5+)", savings: "Save £30" },
        { area: "Wart (small)", singleSession: "£60", course: "N/A", savings: "" },
        { area: "Wart (large)", singleSession: "£100", course: "N/A", savings: "" },
        { area: "Seborrheic Keratosis", singleSession: "From £80", course: "N/A", savings: "" },
      ]
    }
  ];

  const idealCandidates = [
    "Have skin tags catching on clothing or jewelry",
    "Have cosmetically bothersome moles",
    "Want to remove warts or verrucas",
    "Have milia around the eyes",
    "Have lesions that have been assessed as benign",
    "Want quick, effective removal"
  ];

  const considerations = [
    {
      title: "Suspicious Lesions",
      description: "Any mole that has changed size, shape, or color should be examined by a doctor before cosmetic removal."
    },
    {
      title: "Keloid Scarring",
      description: "Those prone to keloid scarring should discuss this at consultation as it may affect healing."
    },
    {
      title: "Location",
      description: "Lesions in certain areas may require special care or referral to a medical professional."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "Area should be clean and makeup-free",
        "No special preparation needed",
        "Inform us of any skin conditions"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Numbing may be applied",
        "Quick treatment (5-15 minutes)",
        "Slight stinging sensation"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Small scab forms",
        "Keep clean and dry",
        "Heals in 1-3 weeks"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Day 1-3", result: "Scab forms over treated area" },
    { session: "Week 1-2", result: "Scab naturally falls off" },
    { session: "Week 2-4", result: "New skin heals, pinkness fades" }
  ];

  const faqs = [
    {
      question: "Will removing a skin tag hurt?",
      answer: "There's a brief stinging sensation during treatment, but it's very quick. For larger or more sensitive areas, we can apply numbing cream beforehand."
    },
    {
      question: "Will the skin tag grow back?",
      answer: "A properly removed skin tag will not grow back. However, if you're prone to skin tags, new ones may develop in other areas over time."
    },
    {
      question: "Can all moles be removed?",
      answer: "We only remove moles that have been assessed as benign. Any suspicious moles (changing, asymmetric, irregular borders) should be examined by a doctor first."
    },
    {
      question: "Will there be scarring?",
      answer: "With professional removal and proper aftercare, scarring is minimal. Small skin tags typically heal with no visible scar. Larger lesions may leave a small mark."
    },
    {
      question: "How long does healing take?",
      answer: "A small scab forms and falls off naturally within 1-2 weeks. Complete healing with fading of any pinkness takes 2-4 weeks."
    },
    {
      question: "Is it safe to remove moles at home?",
      answer: "We strongly advise against DIY mole removal. Professional removal ensures proper technique, sterility, and appropriate assessment of the lesion."
    },
    {
      question: "Can you remove skin tags during pregnancy?",
      answer: "While skin tags are common during pregnancy, we recommend waiting until after pregnancy for cosmetic removal as a precaution."
    },
    {
      question: "What's the difference between electrolysis and cryotherapy?",
      answer: "Electrolysis uses heat to destroy the lesion, while cryotherapy uses extreme cold (liquid nitrogen). We select the best method based on your specific lesion type and location."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Skin Tag & Mole Removal Dagenham | Quick Treatment | Book Now"
        description="Professional skin tag and mole removal in Dagenham. Quick, safe removal using advanced electrolysis. Skin tags from £50, moles from £100. Book consultation!"
        canonicalUrl="https://laserlightskinclinic.co.uk/skin-tag-mole-removal-dagenham"
        structuredData={[structuredData, breadcrumbSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Safe Professional Removal"
          title="Skin Tag & Mole Removal in Dagenham"
          titleAccent="Dagenham"
          subtitle="Quick Removal. Clear Skin. Permanent Results."
          description="Expert removal of skin tags, moles, warts, and milia using advanced electrolysis and cryotherapy techniques. Minimal scarring, fast healing."
          badge="Skin Tags From £50"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={skinTagDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Skin Tag & Mole Removal" }
          ]}
          stats={[
            { value: "5-15", label: "Minutes" },
            { value: "Single", label: "Session" },
            { value: "Minimal", label: "Scarring" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="Professional Lesion Removal"
          content={whatIsContent}
          highlightText="Never attempt to remove skin tags or moles at home. Professional removal ensures safety, proper technique, and minimal scarring."
        />
        
        <BenefitsList
          title="What We Can Remove"
          subtitle="Safe, effective treatment for common skin lesions"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Removal Process"
          subtitle="Quick, straightforward treatment"
          steps={steps}
        />
        
        <TechnologySection
          title="Advanced Removal Techniques"
          subtitle="Precision tools for safe, effective removal"
          technologyName="Electrolysis & Cryotherapy"
          description="We use advanced electrolysis (radiofrequency) for precise lesion removal with minimal tissue damage. For warts and certain lesions, cryotherapy (freezing) may be more appropriate. All equipment is sterile and single-use."
          features={technologyFeatures}
          certifications={["CE Marked", "Single-Use Equipment", "Professional Grade"]}
          deviceImage={skinTagDevice}
        />
        
        <TabbedPricingTable
          title="Removal Pricing"
          subtitle="Clear, transparent pricing for lesion removal"
          tabs={pricingTabs}
          offerBanner={{
            highlight: "FREE ASSESSMENT",
            text: "Book Your Consultation"
          }}
          paymentOptions="Multiple lesions? We offer package pricing."
          disclaimer="All lesions assessed at consultation. Suspicious lesions will be referred for medical opinion."
        />
        
        <WhoIsThisFor
          title="Is This Right for You?"
          intro="Professional lesion removal is ideal for those with bothersome benign skin growths:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Skin Tag & Mole Removal FAQs"
          subtitle="Common questions about lesion removal"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Clear, Smooth Skin"
          description="See how quickly and effectively unwanted skin lesions can be removed. Book your assessment today."
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Remove Unwanted Lesions?"
          subtitle="Book a free consultation to assess your skin tags, moles, or other lesions and discuss removal options."
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default SkinTagMoleRemoval;
