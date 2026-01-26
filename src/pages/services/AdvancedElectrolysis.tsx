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
import { Timer, Shield, Users, Award, Target, Sparkles, Zap, CheckCircle, RefreshCw, Eye } from "lucide-react";
import advancedElectrolysisDevice from "@/assets/advanced-electrolysis-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const AdvancedElectrolysis = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Advanced Electrolysis Dagenham - Skin Tag, Milia, Blood Spot Removal",
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
    "description": "Advanced cosmetic electrolysis in Dagenham for skin tags, milia, blood spots, thread veins, and other blemishes. Precise removal with minimal scarring.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "15-45 min", label: "Session Length", icon: Timer },
    { value: "Precision", label: "Targeted Treatment", icon: Shield },
    { value: "Minimal", label: "Scarring", icon: Users },
    { value: "Permanent", label: "Results", icon: Award },
  ];

  const whatIsContent = [
    "Advanced Cosmetic Electrolysis uses a tiny probe to deliver precise electrical current to treat a variety of skin blemishes. Unlike standard electrolysis for hair removal, advanced electrolysis targets surface skin imperfections.",
    "This versatile technique can effectively treat skin tags, milia (white bumps), blood spots (cherry angiomas), thread veins, spider naevi, seborrhoeic keratoses, and other minor skin blemishes with minimal trauma to surrounding tissue.",
    "When performed by a skilled practitioner, advanced electrolysis offers permanent removal of blemishes with minimal risk of scarring. It's a quick, targeted treatment suitable for face and body."
  ];

  const benefits = [
    {
      title: "Skin Tag Removal",
      description: "Quick removal of skin tags on face, neck, and body. Multiple tags can be treated in one session.",
      icon: Target
    },
    {
      title: "Milia Treatment",
      description: "Clear stubborn milia (white bumps) around eyes and face that skincare can't remove.",
      icon: Eye
    },
    {
      title: "Blood Spot Removal",
      description: "Treat cherry angiomas (Campbell de Morgan spots) - those small red spots that appear with age.",
      icon: Sparkles
    },
    {
      title: "Thread Veins",
      description: "Fine facial thread veins and broken capillaries can be treated with precision electrolysis.",
      icon: Zap
    },
    {
      title: "Other Blemishes",
      description: "Spider naevi, seborrheic warts, dermatosis papulosa nigra (DPN), and more can be treated.",
      icon: RefreshCw
    },
    {
      title: "Permanent Results",
      description: "Treated blemishes don't return. New ones may appear with age but can be treated as they arise.",
      icon: CheckCircle
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "We examine your blemishes to confirm they're suitable for electrolysis and discuss the treatment plan."
    },
    {
      number: 2,
      title: "Preparation",
      description: "The area is cleansed. For sensitive areas or multiple blemishes, numbing cream may be applied."
    },
    {
      number: 3,
      title: "Treatment",
      description: "Using a fine probe, precise electrical current is applied to each blemish. You'll feel brief warmth or pinprick."
    },
    {
      number: 4,
      title: "Aftercare",
      description: "Soothing cream is applied. Detailed aftercare instructions ensure optimal healing with minimal scarring."
    }
  ];

  const technologyFeatures = [
    "Precision sterile probes for accuracy",
    "Adjustable current for different blemishes",
    "Thermolysis and blend techniques available",
    "Magnification for detailed work",
    "Minimal tissue damage to surrounding area",
    "Suitable for face and body treatments"
  ];

  const pricingTabs = [
    {
      label: "By Time",
      prices: [
        { area: "15 Minutes", singleSession: "£50", course: "N/A", savings: "Treats 3-5 small blemishes" },
        { area: "30 Minutes", singleSession: "£80", course: "N/A", savings: "Treats 6-10 blemishes" },
        { area: "45 Minutes", singleSession: "£110", course: "N/A", savings: "Treats 11-15 blemishes" },
        { area: "60 Minutes", singleSession: "£140", course: "N/A", savings: "Multiple/larger areas" },
      ]
    },
    {
      label: "By Blemish",
      prices: [
        { area: "Milia (per lesion)", singleSession: "£15", course: "£60 (5+)", savings: "Save £15" },
        { area: "Small Skin Tag", singleSession: "£30", course: "N/A", savings: "" },
        { area: "Medium Skin Tag", singleSession: "£50", course: "N/A", savings: "" },
        { area: "Blood Spot (small)", singleSession: "£25", course: "N/A", savings: "" },
        { area: "Blood Spot (large)", singleSession: "£40", course: "N/A", savings: "" },
      ]
    }
  ];

  const idealCandidates = [
    "Have skin tags they want removed",
    "Have milia that skincare won't clear",
    "Have blood spots (cherry angiomas)",
    "Have facial thread veins or broken capillaries",
    "Have other benign skin blemishes",
    "Want precise, permanent removal"
  ];

  const considerations = [
    {
      title: "Pacemakers",
      description: "Electrolysis is not suitable for those with pacemakers due to the electrical current."
    },
    {
      title: "Keloid Scarring",
      description: "Those prone to keloid scars should discuss this at consultation."
    },
    {
      title: "Suspicious Lesions",
      description: "Any lesion that has recently changed should be examined by a doctor first."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "No special preparation needed",
        "Area should be clean",
        "Inform us of any conditions"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Brief warmth or pinprick sensation",
        "Multiple blemishes treated per session",
        "Numbing available for sensitivity"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Small crusts form over treated areas",
        "Keep clean and dry",
        "Crusts fall off in 7-14 days"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Day 1-3", result: "Small crusts form" },
    { session: "Week 1-2", result: "Crusts fall off naturally" },
    { session: "Week 2-4", result: "Pink skin fades to normal tone" }
  ];

  const faqs = [
    {
      question: "What's the difference between this and regular electrolysis?",
      answer: "Standard electrolysis removes hair by targeting follicles. Advanced electrolysis treats surface skin blemishes like tags, milia, and blood spots using specialized techniques."
    },
    {
      question: "Does it hurt?",
      answer: "You'll feel a brief warm sensation or mild pinprick with each treatment pulse. Most clients find it very tolerable. Numbing cream is available for sensitive areas or multiple treatments."
    },
    {
      question: "Will there be scarring?",
      answer: "When performed correctly with proper aftercare, scarring is minimal to none. There may be temporary redness or light marks that fade over a few weeks."
    },
    {
      question: "How many sessions do I need?",
      answer: "Most blemishes are treated in a single session. Large or numerous blemishes may need follow-up treatments. We treat a limited number per session to ensure proper healing."
    },
    {
      question: "Can you treat milia around my eyes?",
      answer: "Yes, we can carefully treat milia around the eye area. This is a common request and the delicate area is treated with extra care."
    },
    {
      question: "What are blood spots?",
      answer: "Cherry angiomas (Campbell de Morgan spots) are small, bright red spots caused by clusters of blood vessels. They're harmless but common with age and respond well to electrolysis."
    },
    {
      question: "Can I have treatment on my body?",
      answer: "Yes, advanced electrolysis can treat blemishes on the body as well as face. Common areas include neck, chest, and underarms for skin tags."
    },
    {
      question: "How is this different from freezing (cryotherapy)?",
      answer: "Both are effective. Electrolysis offers more precision for smaller blemishes and facial areas. Cryotherapy may be better for larger areas. We'll recommend the best approach for your blemishes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Advanced Electrolysis Dagenham | Skin Tags, Milia, Blood Spots | Book Now"
        description="Advanced cosmetic electrolysis in Dagenham. Precise removal of skin tags, milia, blood spots, thread veins. Minimal scarring, permanent results. Book consultation!"
        canonicalUrl="https://laserlightskinclinic.co.uk/advanced-electrolysis-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Precision Blemish Removal"
          title="Advanced Electrolysis in Dagenham"
          titleAccent="Dagenham"
          subtitle="Skin Tags, Milia, Blood Spots & More"
          description="Precise removal of unwanted skin blemishes using advanced electrolysis techniques. Permanent results with minimal scarring."
          badge="15-Minute Sessions From £50"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Advanced Electrolysis" }
          ]}
          stats={[
            { value: "Precision", label: "Treatment" },
            { value: "Minimal", label: "Scarring" },
            { value: "Permanent", label: "Results" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="What is Advanced Electrolysis?"
          content={whatIsContent}
          highlightText="A versatile technique that permanently removes skin tags, milia, blood spots, and other blemishes with precision accuracy."
        />
        
        <BenefitsList
          title="What We Can Treat"
          subtitle="Precision treatment for various skin blemishes"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Treatment Process"
          subtitle="Quick, precise blemish removal"
          steps={steps}
        />
        
        <TechnologySection
          title="Advanced Electrolysis Technology"
          subtitle="Precision tools for targeted treatment"
          technologyName="Advanced Cosmetic Electrolysis"
          description="Our advanced electrolysis uses precision sterile probes to deliver controlled electrical current directly to each blemish. This targeted approach treats only the blemish tissue, leaving surrounding skin undamaged for optimal healing."
          features={technologyFeatures}
          certifications={["Sterile Equipment", "Professional Grade", "CE Marked"]}
          deviceImage={advancedElectrolysisDevice}
        />
        
        <TabbedPricingTable
          title="Advanced Electrolysis Pricing"
          subtitle="Flexible pricing by time or by blemish"
          tabs={pricingTabs}
          offerBanner={{
            highlight: "FREE ASSESSMENT",
            text: "Book Your Consultation"
          }}
          paymentOptions="Choose time-based or per-blemish pricing based on your needs."
          disclaimer="Number of blemishes treated per session depends on size and location."
        />
        
        <WhoIsThisFor
          title="Is Advanced Electrolysis Right for You?"
          intro="This treatment is ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Advanced Electrolysis FAQs"
          subtitle="Common questions about blemish removal"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Clear, Blemish-Free Skin"
          description="See how quickly and effectively unwanted blemishes can be removed. Book your assessment today."
        />
        
        <ServiceCTA
          title="Ready for Clearer Skin?"
          subtitle="Book a free assessment to discuss your blemishes and treatment options."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedElectrolysis;
