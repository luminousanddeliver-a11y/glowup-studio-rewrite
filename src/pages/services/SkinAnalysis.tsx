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
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Timer, Shield, Users, Award, Search, Layers, Target, FileText, Sparkles, Zap } from "lucide-react";
import skinAnalysisDevice from "@/assets/skin-analysis-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const relatedServices = [
  { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Deep cleansing treatment for glowing skin" },
  { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham", description: "Multi-modality treatments for radiant skin" },
  { name: "Chemical Peels", href: "/chemical-peels-dagenham", description: "Professional peels for skin renewal" },
];

const testimonials = [
  { quote: "The skin analysis was eye-opening! I finally understand why certain products weren't working for me.", initials: "JL", treatment: "Skin Analysis", rating: 5 },
  { quote: "Seeing the UV damage under my skin was a wake-up call. Now I have a proper skincare plan.", initials: "CM", treatment: "Skin Analysis", rating: 5 },
];

const SkinAnalysis = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Skin Analysis Dagenham",
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
    "description": "Comprehensive skin analysis in Dagenham using advanced imaging technology. Understand your skin's needs and create a personalized treatment plan.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "30-45 min", label: "In-Depth Analysis", icon: Timer },
    { value: "Multi-Spectrum", label: "Imaging Technology", icon: Shield },
    { value: "Personalized", label: "Treatment Plan", icon: Users },
    { value: "Complimentary", label: "With Any Treatment", icon: Award },
  ];

  const whatIsContent = [
    "A professional skin analysis goes far beyond what you can see in a mirror. Using advanced imaging technology, we can identify skin concerns at a deeper level—including damage that hasn't yet surfaced visually.",
    "Our comprehensive analysis examines multiple factors: hydration levels, oil production, pore size, sun damage, pigmentation, wrinkles, bacterial presence, and overall skin health. This data-driven approach ensures treatments are targeted to your specific needs.",
    "Whether you're struggling with a skin concern or simply want to optimize your skincare routine, a professional analysis is the foundation for effective results. It's the starting point for creating a truly personalized skincare journey."
  ];

  const benefits = [
    {
      title: "Reveal Hidden Damage",
      description: "See sun damage, pigmentation, and aging concerns beneath the surface before they become visible.",
      icon: Search
    },
    {
      title: "Understand Your Skin Type",
      description: "Get precise measurements of hydration, oil production, and skin texture for accurate product selection.",
      icon: Layers
    },
    {
      title: "Targeted Treatment Planning",
      description: "Stop guessing. Know exactly which treatments will be most effective for your specific concerns.",
      icon: Target
    },
    {
      title: "Track Progress",
      description: "Regular analyses track improvements over time, proving the effectiveness of your skincare regimen.",
      icon: FileText
    },
    {
      title: "Product Recommendations",
      description: "Receive personalized home care recommendations based on your skin's measured needs.",
      icon: Sparkles
    },
    {
      title: "Early Intervention",
      description: "Identify potential problems early and address them before they become significant concerns.",
      icon: Zap
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Cleansing",
      description: "Skin is cleansed to remove makeup, oils, and products for accurate imaging."
    },
    {
      number: 2,
      title: "Multi-Spectrum Imaging",
      description: "Advanced cameras capture your skin under different light conditions to reveal surface and subsurface concerns."
    },
    {
      number: 3,
      title: "Analysis & Discussion",
      description: "We review the images together, explaining what each finding means and how it affects your skin health."
    },
    {
      number: 4,
      title: "Treatment Plan",
      description: "Based on your analysis, we create a personalized treatment plan and home care recommendations."
    }
  ];

  const technologyFeatures = [
    "Multi-spectrum imaging (UV, polarized, standard light)",
    "Measures hydration, oil, and elasticity",
    "Detects sub-surface sun damage",
    "Analyzes pore size and bacterial presence",
    "Tracks changes over time with stored images",
    "Clear visual reports you can take home"
  ];

  const pricingData = [
    { area: "Standalone Skin Analysis", singleSession: "£50", course: "N/A", savings: "" },
    { area: "Analysis + Facial", singleSession: "Complimentary", course: "N/A", savings: "" },
    { area: "Analysis + Any Treatment", singleSession: "Complimentary", course: "N/A", savings: "" },
    { area: "Follow-Up Analysis", singleSession: "£25", course: "N/A", savings: "" },
  ];

  const idealCandidates = [
    "Want to understand their skin better",
    "Are struggling with persistent skin concerns",
    "Want to know which treatments will work best",
    "Are interested in preventative skincare",
    "Want to track progress of their skincare routine",
    "Are considering investing in professional treatments"
  ];

  const considerations = [
    {
      title: "Recent Skincare",
      description: "For most accurate results, avoid applying products immediately before analysis."
    },
    {
      title: "Makeup",
      description: "We'll cleanse your skin before imaging, but arriving makeup-free saves time."
    }
  ];

  const faqs = [
    {
      question: "Is skin analysis painful?",
      answer: "Not at all! It's completely non-invasive. The process simply involves cleansing your skin and taking photographs under different lighting conditions."
    },
    {
      question: "How often should I have my skin analyzed?",
      answer: "We recommend an initial comprehensive analysis, then follow-up analyses every 3-6 months to track progress and adjust your treatment plan as needed."
    },
    {
      question: "What will the analysis reveal?",
      answer: "We can identify sun damage (even below the surface), hydration levels, oil production, pore size, wrinkle depth, pigmentation, bacterial presence, and overall skin age."
    },
    {
      question: "Is it included with treatments?",
      answer: "Yes! Skin analysis is complimentary when you book any treatment. We believe in understanding your skin before recommending any procedure."
    },
    {
      question: "Do I receive a report?",
      answer: "Yes, we provide a clear visual report showing your skin's strengths and areas for improvement, along with our treatment recommendations."
    },
    {
      question: "Can it detect skin cancer?",
      answer: "While our analysis can reveal pigmentation concerns, it is not a medical diagnostic tool. Any suspicious lesions should be examined by a dermatologist."
    },
    {
      question: "Will it help me choose products?",
      answer: "Absolutely! Understanding your exact skin type and concerns allows us to recommend products that will actually work for you, rather than generic suggestions."
    },
    {
      question: "How long does it take?",
      answer: "A comprehensive skin analysis takes about 30-45 minutes, including imaging, discussion of findings, and treatment planning."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Professional Skin Analysis Dagenham | Understand Your Skin | Book Now"
        description="Comprehensive skin analysis in Dagenham using advanced imaging. Reveal hidden sun damage, understand your skin type, and get a personalized treatment plan."
        canonicalUrl="https://laserlightskinclinic.co.uk/skin-analysis-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Data-Driven Skincare"
          title="Professional Skin Analysis in Dagenham"
          titleAccent="Dagenham"
          subtitle="Understand Your Skin at a Deeper Level"
          description="Advanced imaging reveals what your mirror can't. Get a comprehensive analysis and personalized treatment plan based on your skin's unique needs."
          badge="Complimentary With Any Treatment"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Skin Analysis" }
          ]}
          stats={[
            { value: "30-45", label: "Minutes" },
            { value: "Multi", label: "Spectrum" },
            { value: "Personal", label: "Plan" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="Why Skin Analysis Matters"
          content={whatIsContent}
          highlightText="Stop guessing about your skin. A professional analysis gives you the data you need to make informed decisions about treatments and products."
        />
        
        <BenefitsList
          title="What You'll Learn"
          subtitle="Comprehensive insights into your skin's health"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Analysis Process"
          subtitle="A thorough examination in 4 steps"
          steps={steps}
        />
        
        <TechnologySection
          title="Advanced Imaging Technology"
          subtitle="Multi-spectrum analysis reveals what the eye cannot see"
          technologyName="Skin Analysis System"
          description="Our professional skin analysis system uses multiple imaging modes including UV light, polarized light, and standard photography. This multi-spectrum approach reveals sun damage, bacteria, oil deposits, and other concerns that aren't visible to the naked eye."
          features={technologyFeatures}
          certifications={["Professional Grade", "CE Marked", "Data-Driven"]}
          deviceImage={skinAnalysisDevice}
        />
        
        <section id="pricing" className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-foreground mb-4">Skin Analysis Pricing</h2>
              <p className="font-body text-lg text-muted-foreground">
                Complimentary with any treatment or available as a standalone service
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <PricingTable title="" prices={pricingData} />
            </div>
          </div>
        </section>
        
        <WhoIsThisFor
          title="Who Should Get a Skin Analysis?"
          intro="A skin analysis benefits anyone who wants to optimize their skincare:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <ServiceFAQ
          title="Skin Analysis FAQs"
          subtitle="Common questions about our analysis service"
          faqs={faqs}
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Understand Your Skin?"
          subtitle="Book a skin analysis and get personalized recommendations based on data, not guesswork."
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default SkinAnalysis;
