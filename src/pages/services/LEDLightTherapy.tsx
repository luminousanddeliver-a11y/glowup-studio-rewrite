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
import { Timer, Shield, Users, Award, Sparkles, Heart, Sun, Zap, RefreshCw, CheckCircle } from "lucide-react";
import ledDevice from "@/assets/led-therapy-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const LEDLightTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LED Light Therapy Dagenham - Phototherapy Treatment",
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
    "description": "Professional LED light therapy in Dagenham. Red light, blue light, and near-infrared therapy for acne, anti-aging, and skin rejuvenation.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "20-30 min", label: "Relaxing Treatment", icon: Timer },
    { value: "No Downtime", label: "Return to Activities", icon: Shield },
    { value: "All Skin Types", label: "Safe & Gentle", icon: Users },
    { value: "Cumulative", label: "Results Build Over Time", icon: Award },
  ];

  const whatIsContent = [
    "LED (Light Emitting Diode) therapy uses specific wavelengths of light to trigger natural cellular processes in the skin. Different colors of light penetrate to different depths and address various skin concerns.",
    "Red light (630-660nm) stimulates collagen production and reduces inflammation, making it excellent for anti-aging and wound healing. Blue light (405-420nm) kills acne-causing bacteria and helps control breakouts. Near-infrared light penetrates deepest for tissue repair and pain relief.",
    "LED therapy is completely non-invasive with no downtime. It's often combined with other treatments to enhance results or used as a standalone therapy for those seeking gentle yet effective skin improvement."
  ];

  const benefits = [
    {
      title: "Acne Treatment (Blue Light)",
      description: "Blue light kills P. acnes bacteria that cause breakouts. Excellent for managing active acne without harsh products.",
      icon: Zap
    },
    {
      title: "Anti-Aging (Red Light)",
      description: "Stimulates collagen and elastin production to reduce fine lines, wrinkles, and improve skin firmness.",
      icon: Sparkles
    },
    {
      title: "Inflammation Reduction",
      description: "Red and near-infrared light reduce inflammation, making it ideal for rosacea, sensitive skin, and post-treatment healing.",
      icon: Heart
    },
    {
      title: "Even Skin Tone",
      description: "Regular treatments help reduce hyperpigmentation, redness, and uneven skin tone for a more radiant complexion.",
      icon: Sun
    },
    {
      title: "Wound Healing",
      description: "Accelerates skin repair and regeneration. Often used after microneedling, peels, or other procedures.",
      icon: RefreshCw
    },
    {
      title: "Zero Downtime",
      description: "Completely painless with no recovery time needed. Return to your day immediately after treatment.",
      icon: CheckCircle
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We assess your skin concerns and determine the optimal light wavelengths and treatment protocol for your goals."
    },
    {
      number: 2,
      title: "Preparation",
      description: "Skin is cleansed to remove makeup and products. Protective eyewear is provided for comfort and safety."
    },
    {
      number: 3,
      title: "LED Treatment",
      description: "You relax under the LED panel for 20-30 minutes. The light is warm and pleasant with no discomfort."
    },
    {
      number: 4,
      title: "Complete",
      description: "No aftercare needed! Your skin may have a subtle glow. Moisturizer and SPF are applied and you're ready to go."
    }
  ];

  const technologyFeatures = [
    "Medical-grade LED panels with calibrated wavelengths",
    "Red light (630-660nm) for collagen stimulation",
    "Blue light (405-420nm) for antibacterial acne treatment",
    "Near-infrared (810-850nm) for deep tissue repair",
    "Combination programs for multiple concerns",
    "FDA-cleared technology with proven results"
  ];

  const pricingTabs = [
    {
      label: "Single Sessions",
      prices: [
        { area: "LED Therapy (20 min)", singleSession: "£50", course: "N/A", savings: "" },
        { area: "LED Therapy (30 min)", singleSession: "£65", course: "N/A", savings: "" },
        { area: "LED Add-On to Facial", singleSession: "£25", course: "N/A", savings: "" },
      ]
    },
    {
      label: "Courses",
      prices: [
        { area: "6 Sessions (20 min)", singleSession: "£50/each", course: "£240", savings: "Save £60" },
        { area: "10 Sessions (20 min)", singleSession: "£50/each", course: "£350", savings: "Save £150" },
        { area: "6 Sessions (30 min)", singleSession: "£65/each", course: "£300", savings: "Save £90" },
        { area: "10 Sessions (30 min)", singleSession: "£65/each", course: "£450", savings: "Save £200" },
      ]
    }
  ];

  const idealCandidates = [
    "Have active acne or frequent breakouts",
    "Want to reduce fine lines and improve skin firmness",
    "Have sensitive or inflamed skin conditions",
    "Want to enhance results of other treatments",
    "Prefer non-invasive, gentle treatments",
    "Looking for maintenance between intensive treatments"
  ];

  const considerations = [
    {
      title: "Photosensitivity",
      description: "Certain medications increase light sensitivity. Please inform us of all medications during consultation."
    },
    {
      title: "Eye Conditions",
      description: "Those with certain eye conditions should avoid LED therapy. Protective eyewear is always provided."
    },
    {
      title: "Expectations",
      description: "LED therapy works best with consistent sessions over time. It's gentle but requires commitment for best results."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "No special preparation needed",
        "Arrive with clean skin or we'll cleanse",
        "Inform us of any photosensitizing medications"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Relax under the LED panel",
        "Treatment is warm and pleasant",
        "Some clients fall asleep!"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Immediate subtle glow",
        "No downtime whatsoever",
        "Apply SPF before leaving"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Session 1", result: "Immediate subtle glow" },
    { session: "Sessions 3-4", result: "Skin clarity improves" },
    { session: "Sessions 6-10", result: "Visible improvement in target concerns" }
  ];

  const faqs = [
    {
      question: "How often should I have LED therapy?",
      answer: "For best results, we recommend 2-3 sessions per week for the first 4-6 weeks, then weekly maintenance. Consistency is key to seeing results."
    },
    {
      question: "Does LED therapy hurt?",
      answer: "Not at all! LED therapy is completely painless. You'll feel gentle warmth and many clients find it relaxing enough to fall asleep."
    },
    {
      question: "Is LED therapy the same as laser?",
      answer: "No. LED uses lower energy levels than laser and doesn't damage the skin. LED works by stimulating cellular processes, while lasers work by creating controlled damage for regeneration."
    },
    {
      question: "Can I combine LED with other treatments?",
      answer: "Absolutely! LED therapy enhances results of facials, microneedling, peels, and other treatments. It's often used post-procedure to accelerate healing."
    },
    {
      question: "Is it safe for all skin types?",
      answer: "Yes, LED therapy is safe for all skin types and tones. There's no risk of burns or hyperpigmentation like with some other light-based treatments."
    },
    {
      question: "Which light color should I choose?",
      answer: "Our therapist will recommend the best wavelength for your concerns. Blue for acne, red for anti-aging, or a combination program."
    },
    {
      question: "How long until I see results?",
      answer: "You may notice a subtle glow after one session. Significant improvements in acne or aging concerns typically appear after 6-10 consistent sessions."
    },
    {
      question: "Can I do LED therapy if I'm pregnant?",
      answer: "LED therapy is generally considered safe during pregnancy, but we recommend consulting with your doctor first. We can adjust protocols as needed."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="LED Light Therapy Dagenham | Acne, Anti-Aging | Book Session"
        description="Professional LED light therapy in Dagenham. Blue light for acne, red light for anti-aging. Painless, no downtime. From £50 per session. Book today!"
        canonicalUrl="https://laserlightskinclinic.co.uk/led-light-therapy-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Non-Invasive Treatment"
          title="LED Light Therapy in Dagenham"
          titleAccent="Dagenham"
          subtitle="Harness the Power of Light for Beautiful Skin"
          description="Painless phototherapy for acne, anti-aging, and inflammation. No downtime, no discomfort—just results."
          badge="From £50 Per Session"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          stats={[
            { value: "20-30", label: "Minutes" },
            { value: "Zero", label: "Downtime" },
            { value: "All Skin", label: "Types" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="What is LED Light Therapy?"
          content={whatIsContent}
          highlightText="A gentle, non-invasive treatment that uses the power of light to transform your skin from within."
        />
        
        <BenefitsList
          title="Benefits of LED Therapy"
          subtitle="Different wavelengths address different skin concerns"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The LED Therapy Process"
          subtitle="The simplest, most relaxing treatment you'll ever have"
          steps={steps}
        />
        
        <TechnologySection
          title="Medical-Grade LED Technology"
          subtitle="Precise wavelengths calibrated for optimal cellular response"
          technologyName="Professional LED Panel System"
          description="Our medical-grade LED panels deliver precisely calibrated wavelengths at therapeutic intensities. Unlike home devices, professional LED therapy provides consistent, measurable light energy proven to trigger cellular responses."
          features={technologyFeatures}
          certifications={["FDA Cleared", "CE Marked", "Medical Grade"]}
          deviceImage={ledDevice}
        />
        
        <TabbedPricingTable
          title="LED Therapy Pricing"
          subtitle="Affordable treatments with excellent value courses"
          tabs={pricingTabs}
          offerBanner={{
            highlight: "10-SESSION COURSE",
            text: "Best Value - Save Up to £200"
          }}
          paymentOptions="Pay per session or save with our course packages."
          disclaimer="LED therapy is often combined with other treatments for enhanced results."
        />
        
        <WhoIsThisFor
          title="Is LED Therapy Right for You?"
          intro="LED light therapy is suitable for almost everyone looking to improve their skin:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="Your LED Therapy Experience"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="LED Therapy FAQs"
          subtitle="Everything you need to know about phototherapy"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Gentle Yet Effective Results"
          description="LED therapy proves that powerful results don't require harsh treatments. Book a session to experience the difference."
        />
        
        <ServiceCTA
          title="Ready to Glow?"
          subtitle="Book your first LED therapy session and discover the power of light for beautiful skin."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LEDLightTherapy;
