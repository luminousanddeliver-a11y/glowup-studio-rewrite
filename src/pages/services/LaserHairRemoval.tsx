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
import { Timer, Shield, Users, Award, CheckCircle, Heart, Clock, Calendar, PiggyBank } from "lucide-react";
import laserDevice from "@/assets/laser-device.jpg";


const LaserHairRemoval = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pain-Free Laser Hair Removal Dagenham",
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
    "description": "Pain-free laser hair removal in Dagenham using the Lynton Motus AY. Safe for all skin types including dark skin. NHS-approved clinic serving London & East London.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London", "London", "Redbridge", "Havering", "Newham", "Barking and Dagenham", "Essex", "Epping"],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "80",
      "highPrice": "2400",
      "priceCurrency": "GBP",
      "offerCount": "15"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://laserlightskinclinic.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://laserlightskinclinic.co.uk/prices" },
      { "@type": "ListItem", "position": 3, "name": "Laser Hair Removal" }
    ]
  };

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does laser hair removal hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our Lynton Motus AY is guaranteed pain-free. Most clients describe it as a warm massage sensation. Unlike older lasers, there is no \"snapping\" or burning feeling."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients need 6-8 sessions for optimal results. Hair grows in cycles, and laser only targets hair in the active growth phase. Sessions are spaced 4-6 weeks apart."
        }
      },
      {
        "@type": "Question",
        "name": "Is laser hair removal safe for dark skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Lynton Motus AY is one of the few lasers clinically proven safe for Fitzpatrick skin types IV-VI (darker skin tones). Traditional lasers carried a risk of burns or hyperpigmentation on dark skin, but our technology eliminates this risk."
        }
      }
    ]
  };

  // Quick Stats
  const quickStats = [
    { value: "6-8 Sessions", label: "Average Treatment Course", icon: Timer },
    { value: "Pain-Free", label: "Guaranteed Comfort", icon: Shield },
    { value: "All Skin Types", label: "Fitzpatrick I-VI", icon: Users },
    { value: "NHS-Approved", label: "Medical-Grade Standards", icon: Award },
  ];

  // What Is Content
  const whatIsContent = [
    "Laser hair removal is a medical procedure that uses concentrated light energy to target and destroy hair follicles at the root. The laser emits a specific wavelength of light that is absorbed by the melanin (pigment) in the hair shaft. This energy is converted into heat, which damages the hair follicle and inhibits future hair growth.",
    "Unlike temporary methods like shaving or waxing, laser hair removal provides long-term reduction. After a full course of treatments (typically 6-8 sessions), most clients experience permanent reduction of 80-95% in the treated area.",
    "At Laser Light Skin Clinic, we use the Lynton Motus AY, the most advanced pain-free laser technology available. This means you get permanent results without the discomfort associated with older laser systems."
  ];

  // Benefits
  const benefits = [
    {
      title: "Permanent Hair Reduction",
      description: "Achieve 80-95% permanent hair reduction after a full course. No more daily shaving or painful waxing.",
      icon: CheckCircle
    },
    {
      title: "Pain-Free Experience",
      description: "Our Lynton Motus AY technology is guaranteed pain-free. Most clients describe the sensation as a warm massage.",
      icon: Heart
    },
    {
      title: "Safe for All Skin Types",
      description: "Suitable for Fitzpatrick skin types I-VI, including darker skin tones that were previously unsuitable for laser.",
      icon: Users
    },
    {
      title: "Quick Treatment Times",
      description: "Treat large areas like full legs in under 30 minutes. Underarms take just 5-10 minutes.",
      icon: Clock
    },
    {
      title: "No Downtime",
      description: "Resume your normal activities immediately. No recovery period or special aftercare required.",
      icon: Calendar
    },
    {
      title: "Cost-Effective Long-Term",
      description: "Save thousands over a lifetime compared to waxing. Average client saves £5,000+ over 10 years.",
      icon: PiggyBank
    }
  ];

  // How It Works Steps
  const steps = [
    {
      number: 1,
      title: "Free Consultation & Patch Test",
      description: "We assess your skin type, hair type, and treatment goals. A complimentary patch test ensures you're a suitable candidate."
    },
    {
      number: 2,
      title: "Treatment Sessions (6-8 Sessions)",
      description: "Sessions are spaced 4-6 weeks apart to target hair in different growth phases. Each session takes 10-45 minutes depending on the area."
    },
    {
      number: 3,
      title: "Hair Reduction Results",
      description: "You'll notice gradual reduction after each session. By session 4, most clients see 50-70% reduction."
    },
    {
      number: 4,
      title: "Maintenance (Optional)",
      description: "Most clients achieve permanent reduction. Occasional touch-ups (once yearly) may be needed due to hormonal changes."
    }
  ];

  // Technology Features
  const technologyFeatures = [
    "Moveo Technology: Treats large areas quickly with sweeping motion",
    "Advanced Cooling: Built-in cooling system eliminates pain",
    "Adjustable Pulse Duration: Safe for all skin types, including dark skin",
    "Faster Results: Fewer sessions required compared to older systems",
    "Alexandrite 755nm wavelength for clinical efficacy",
    "True pain-free experience unlike any other laser"
  ];

  // Pricing Tabs
  const pricingTabs = [
    {
      label: "Women's",
      prices: [
        { area: "Upper Lip", singleSession: "£80", course: "£450", savings: "Save £30" },
        { area: "Full Face", singleSession: "£140", course: "£780", savings: "Save £60" },
        { area: "Underarms", singleSession: "£80", course: "£450", savings: "Save £30" },
        { area: "Brazilian/Hollywood", singleSession: "£120", course: "£660", savings: "Save £60" },
        { area: "Half Legs", singleSession: "£140", course: "£780", savings: "Save £60" },
        { area: "Full Legs", singleSession: "£200", course: "£1,100", savings: "Save £100" },
        { area: "Full Body Special", singleSession: "£450", course: "£2,400", savings: "Save £300" },
      ]
    },
    {
      label: "Men's",
      prices: [
        { area: "Beard Line", singleSession: "£100", course: "£550", savings: "Save £50" },
        { area: "Back (Full)", singleSession: "£200", course: "£1,100", savings: "Save £100" },
        { area: "Chest", singleSession: "£140", course: "£780", savings: "Save £60" },
        { area: "Shoulders", singleSession: "£100", course: "£550", savings: "Save £50" },
      ]
    }
  ];

  // Who Is This For
  const idealCandidates = [
    "Tired of shaving, waxing, or plucking",
    "Have dark hair (laser targets melanin)",
    "Want long-term hair reduction",
    "Have realistic expectations (80-95% reduction)",
    "Not currently pregnant or breastfeeding",
    "Not taking photosensitive medications"
  ];

  const considerations = [
    {
      title: "PCOS & Hirsutism",
      description: "Laser hair removal is highly effective for women with PCOS-related excess hair growth."
    },
    {
      title: "Dark Skin",
      description: "Our Lynton Motus AY is specifically designed to be safe for darker skin tones (Fitzpatrick IV-VI)."
    },
    {
      title: "Blonde/Red Hair",
      description: "Laser is less effective on light hair. We recommend a free consultation to assess suitability."
    }
  ];

  // What to Expect Phases
  const phases = [
    {
      phase: "Before First Session",
      icon: "before" as const,
      items: [
        "Shave the treatment area 24 hours before",
        "Avoid sun exposure for 2 weeks",
        "No waxing or plucking for 4 weeks"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Session duration: 10-45 minutes",
        "Sensation: Warm, painless massage-like feeling",
        "Safety: Protective eyewear provided"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Redness: May last 1-2 hours (normal)",
        "Hair shedding: 7-14 days post-treatment",
        "Next session: 4-6 weeks later"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Session 1-2", result: "Hair grows back slower" },
    { session: "Session 3-4", result: "50-70% reduction visible" },
    { session: "Session 6-8", result: "80-95% permanent reduction achieved" }
  ];

  // FAQs
  const faqs = [
    {
      question: "Does laser hair removal hurt?",
      answer: "No. Our Lynton Motus AY is guaranteed pain-free. Most clients describe it as a warm massage sensation. Unlike older lasers, there is no \"snapping\" or burning feeling."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most clients need 6-8 sessions for optimal results. Hair grows in cycles, and laser only targets hair in the active growth phase. Sessions are spaced 4-6 weeks apart."
    },
    {
      question: "Is it safe for dark skin?",
      answer: "Yes. The Lynton Motus AY is one of the few lasers clinically proven safe for Fitzpatrick skin types IV-VI (darker skin tones). Traditional lasers carried a risk of burns or hyperpigmentation on dark skin, but our technology eliminates this risk."
    },
    {
      question: "Is laser hair removal permanent?",
      answer: "We achieve permanent hair *reduction* of 80-95%. This means the majority of hair follicles are destroyed permanently. However, hormonal changes (pregnancy, menopause, PCOS) can trigger new hair growth over time, requiring occasional touch-ups."
    },
    {
      question: "Can I shave between sessions?",
      answer: "Yes, you should shave between sessions. Avoid waxing, plucking, or threading, as these remove the hair follicle that the laser needs to target."
    },
    {
      question: "What's the difference between laser hair removal and IPL?",
      answer: "IPL (Intense Pulsed Light) uses broad-spectrum light and is less effective than laser. True medical-grade lasers, like our Lynton Motus AY, use a single focused wavelength (Alexandrite 755nm) for superior results and safety."
    },
    {
      question: "Can I get laser hair removal if I have a tan?",
      answer: "We recommend avoiding sun exposure and tanning for 2 weeks before and after treatment. Tanned skin increases the risk of side effects. If you have naturally dark skin, you are still a candidate."
    },
    {
      question: "Is there any downtime?",
      answer: "No. You can resume normal activities immediately. Some clients experience mild redness for 1-2 hours, similar to a light sunburn."
    },
    {
      question: "Can I get laser hair removal while pregnant?",
      answer: "We do not perform laser hair removal on pregnant or breastfeeding clients as a precaution, though there is no evidence of harm."
    },
    {
      question: "How much does it cost compared to waxing?",
      answer: "While laser has a higher upfront cost, it's significantly cheaper long-term. The average person spends £100-150 per year on waxing (£1,500 over 10 years). A full course of laser costs £450-1,100 depending on the area, providing permanent reduction."
    }
  ];

  const testimonials = [
    {
      quote: "I've had laser hair removal on my legs and underarms. The results are amazing! Completely pain-free and my skin is so smooth now. Best decision I ever made!",
      initials: "SA",
      treatment: "Laser Hair Removal - Full Legs",
      rating: 5
    },
    {
      quote: "As someone with dark skin, I was worried about finding a safe laser. The Lynton Motus AY is incredible - no burns, no pain, just results. Highly recommend!",
      initials: "NK",
      treatment: "Laser Hair Removal - Full Body",
      rating: 5
    }
  ];

  const relatedServices = [
    {
      name: "Advanced Electrolysis",
      href: "/advanced-electrolysis-dagenham",
      description: "Permanent hair removal for fine or light hair that laser can't target."
    },
    {
      name: "Intimate V-Whitening",
      href: "/intimate-whitening-east-london",
      description: "Brighten and rejuvenate intimate areas for even-toned skin."
    },
    {
      name: "Skin Rejuvenation",
      href: "/skin-rejuvenation-dagenham",
      description: "Complement your hair-free skin with complete rejuvenation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Pain-Free Laser Hair Removal Dagenham | NHS Approved | Book Free Consult"
        description="Get permanent hair reduction in 6-8 sessions with pain-free Lynton Motus AY laser. Safe for all skin types. NHS-approved clinic in Dagenham. Free consultation - Book today!"
        canonicalUrl="https://laserlightskinclinic.co.uk/laser-hair-removal-dagenham"
        structuredData={[structuredData, faqSchema, breadcrumbSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Section 1: Hero */}
        <ServiceHero
          trustBadge="NHS-Approved Clinic"
          title="Pain-Free Laser Hair Removal in Dagenham"
          titleAccent="Dagenham"
          subtitle="Experience the Freedom of Permanently Smooth Skin"
          description="Safe for all skin types including dark skin. Book your free consultation and say goodbye to shaving forever."
          badge="Free Consultation"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={laserDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Laser Hair Removal" }
          ]}
          stats={[
            { value: "6-8", label: "Sessions" },
            { value: "Pain-Free", label: "Guaranteed" },
            { value: "All Skin", label: "Types" }
          ]}
        />
        
        {/* Section 2: Quick Stats */}
        <QuickStatsBar stats={quickStats} />
        
        {/* Section 3: What Is It? */}
        <WhatIsSection
          title="What is Laser Hair Removal?"
          content={whatIsContent}
          highlightText="The only system we trust for our Dagenham clients - delivering permanent results without the discomfort."
        />
        
        {/* Section 4: Benefits */}
        <BenefitsList
          title="Why Choose Laser Hair Removal?"
          subtitle="Experience the difference of medical-grade technology and expert care"
          benefits={benefits}
        />
        
        {/* Section 5: How It Works */}
        <HowItWorks
          title="The Laser Hair Removal Process"
          subtitle="From consultation to permanent results in 4 simple steps"
          steps={steps}
        />
        
        {/* Section 6: Technology */}
        <TechnologySection
          title="Why We Use the Lynton Motus AY"
          subtitle="The only laser hair removal system that combines clinical efficacy with true pain-free technology"
          technologyName="Lynton Motus AY"
          description="The Lynton Motus AY is the only laser hair removal system in the world that combines the clinical efficacy of Alexandrite wavelength (755nm) with true pain-free technology. This is the same system trusted by NHS dermatology departments across the UK."
          features={technologyFeatures}
          certifications={["NHS Approved", "CE Marked", "FDA Cleared"]}
          deviceImage={laserDevice}
        />
        
        {/* Section 7: Pricing */}
        <TabbedPricingTable
          title="Areas We Treat & Transparent Pricing"
          subtitle="No hidden fees. Book a free consultation for a personalized quote."
          tabs={pricingTabs}
          offerBanner={{
            highlight: "FREE CONSULTATION & PATCH TEST",
            text: "Book Your Appointment Today"
          }}
          paymentOptions="Interest-free payment plans available. Spread the cost over 6-12 months."
          disclaimer="Prices may vary based on individual assessment. Course payments can be split with 0% finance options available."
        />
        
        {/* Section 8: Who Is This For */}
        <WhoIsThisFor
          title="Is Laser Hair Removal Right for You?"
          intro="Laser hair removal is suitable for most people, but certain factors make you an ideal candidate:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        {/* Section 9: What to Expect */}
        <WhatToExpect
          title="Your Laser Hair Removal Journey: Session by Session"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        {/* Section 10: FAQs */}
        <ServiceFAQ
          title="Laser Hair Removal FAQs"
          subtitle="Everything you need to know about our pain-free laser hair removal"
          faqs={faqs}
        />
        
        {/* Section 11: Testimonials */}
        <ServiceTestimonial testimonials={testimonials} />
        
        {/* Section 12: Results Showcase */}
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="Join thousands of satisfied clients who have achieved permanent hair reduction with our pain-free laser technology."
        />
        
        {/* Section 13: Related Services */}
        <RelatedServices services={relatedServices} />
        
        {/* Section 12: Final CTA */}
        <ServiceCTA
          title="Ready to Say Goodbye to Unwanted Hair?"
          subtitle="Book a free, no-obligation consultation with one of our Level 4 qualified therapists. We'll assess your skin type, discuss your goals, and provide a personalized treatment plan."
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default LaserHairRemoval;
