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
import { Timer, Shield, Users, Award, CheckCircle, Sparkles, RefreshCw, Target, Layers, Zap } from "lucide-react";
import laserResurfacingDevice from "@/assets/laser-resurfacing-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const LaserResurfacing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laser Skin Resurfacing Dagenham - Fractional Laser Treatment",
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
    "description": "Professional fractional laser resurfacing in Dagenham. Treat acne scars, wrinkles, sun damage, and uneven skin texture. NHS-approved clinic.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long is the recovery from laser resurfacing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recovery varies by intensity. Ablative treatments require 5-7 days of downtime, while non-ablative fractional treatments have minimal downtime of 1-2 days with mild redness."
        }
      }
    ]
  };

  const quickStats = [
    { value: "30-60 min", label: "Treatment Time", icon: Timer },
    { value: "FDA Cleared", label: "Medical-Grade Laser", icon: Shield },
    { value: "All Concerns", label: "Scars, Wrinkles, Texture", icon: Users },
    { value: "Long-Lasting", label: "Collagen Stimulation", icon: Award },
  ];

  const whatIsContent = [
    "Laser skin resurfacing uses concentrated light energy to remove damaged skin layers and stimulate new collagen production. This results in smoother, more youthful skin with improved texture, tone, and reduced imperfections.",
    "Fractional laser technology treats microscopic columns of skin while leaving surrounding tissue intact. This 'fractional' approach speeds healing while delivering dramatic results for acne scars, wrinkles, sun damage, and uneven texture.",
    "At Laser Light Skin Clinic, we offer both ablative (more intensive) and non-ablative (gentler) fractional laser options, customized to your skin concerns and lifestyle. Our medical-grade equipment delivers superior results compared to beauty salon devices."
  ];

  const benefits = [
    {
      title: "Acne Scar Reduction",
      description: "Dramatically improve the appearance of pitted, rolling, and boxcar acne scars with fractional resurfacing.",
      icon: Target
    },
    {
      title: "Wrinkle Reduction",
      description: "Smooth fine lines and deeper wrinkles by stimulating collagen production from within.",
      icon: Sparkles
    },
    {
      title: "Sun Damage Repair",
      description: "Treat age spots, sun spots, and uneven pigmentation caused by years of UV exposure.",
      icon: RefreshCw
    },
    {
      title: "Improved Skin Texture",
      description: "Refine enlarged pores, rough texture, and dull skin for a smoother, more radiant complexion.",
      icon: Layers
    },
    {
      title: "Scar Improvement",
      description: "Reduce the appearance of surgical scars, stretch marks, and other skin irregularities.",
      icon: CheckCircle
    },
    {
      title: "Collagen Stimulation",
      description: "Results continue to improve over 3-6 months as new collagen forms, providing lasting rejuvenation.",
      icon: Zap
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consultation & Assessment",
      description: "We analyze your skin concerns, determine the appropriate laser intensity, and create a customized treatment plan."
    },
    {
      number: 2,
      title: "Pre-Treatment Preparation",
      description: "Depending on treatment intensity, you may use preparation skincare for 2-4 weeks before. Numbing cream is applied 30-60 minutes before."
    },
    {
      number: 3,
      title: "Laser Treatment",
      description: "The fractional laser is precisely applied to the treatment area. You'll feel heat and mild prickling as the laser works."
    },
    {
      number: 4,
      title: "Recovery & Results",
      description: "Post-treatment care instructions are provided. Skin heals over 3-7 days, with optimal results developing over 3-6 months."
    }
  ];

  const technologyFeatures = [
    "Fractional delivery for faster healing",
    "Adjustable depth and intensity settings",
    "Precision targeting of specific concerns",
    "Integrated cooling for comfort",
    "Safe for all skin types with proper settings",
    "Stimulates natural collagen regeneration"
  ];

  const pricingTabs = [
    {
      label: "Face",
      prices: [
        { area: "Full Face", singleSession: "£350", course: "£950 (3)", savings: "Save £100" },
        { area: "Forehead", singleSession: "£150", course: "£400 (3)", savings: "Save £50" },
        { area: "Cheeks", singleSession: "£200", course: "£540 (3)", savings: "Save £60" },
        { area: "Around Eyes", singleSession: "£150", course: "£400 (3)", savings: "Save £50" },
        { area: "Around Mouth", singleSession: "£150", course: "£400 (3)", savings: "Save £50" },
      ]
    },
    {
      label: "Scars",
      prices: [
        { area: "Acne Scars (Full Face)", singleSession: "£400", course: "£1,080 (3)", savings: "Save £120" },
        { area: "Acne Scars (Cheeks Only)", singleSession: "£250", course: "£675 (3)", savings: "Save £75" },
        { area: "Surgical Scar (Small)", singleSession: "£150", course: "£400 (3)", savings: "Save £50" },
        { area: "Surgical Scar (Large)", singleSession: "£250", course: "£675 (3)", savings: "Save £75" },
      ]
    },
    {
      label: "Body",
      prices: [
        { area: "Neck", singleSession: "£250", course: "£675 (3)", savings: "Save £75" },
        { area: "Décolletage", singleSession: "£300", course: "£810 (3)", savings: "Save £90" },
        { area: "Hands", singleSession: "£200", course: "£540 (3)", savings: "Save £60" },
        { area: "Stretch Marks (Per Area)", singleSession: "£200", course: "£540 (3)", savings: "Save £60" },
      ]
    }
  ];

  const idealCandidates = [
    "Have acne scars or other facial scarring",
    "Notice fine lines, wrinkles, or loss of elasticity",
    "Have sun-damaged or age-spotted skin",
    "Want to improve overall skin texture and tone",
    "Are willing to follow post-treatment care instructions",
    "Have realistic expectations about outcomes"
  ];

  const considerations = [
    {
      title: "Darker Skin Tones",
      description: "Special protocols and gentler settings ensure safe treatment for Fitzpatrick skin types IV-VI."
    },
    {
      title: "Active Acne",
      description: "Active breakouts should be controlled before treatment. We may recommend other treatments first."
    },
    {
      title: "Downtime Requirements",
      description: "Plan for 3-7 days of redness and peeling. Avoid social events and sun exposure during healing."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "Avoid sun exposure for 2-4 weeks",
        "Stop retinoids 1 week before",
        "May use preparation skincare as directed"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Numbing cream applied for comfort",
        "Treatment takes 30-60 minutes",
        "Sensation of heat and mild prickling"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Redness and swelling for 3-7 days",
        "Skin peels as it regenerates",
        "Strict sun protection required"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Week 1", result: "Skin heals, redness fades" },
    { session: "Month 1", result: "Texture improvement visible" },
    { session: "Month 3-6", result: "Collagen regeneration complete, optimal results" }
  ];

  const faqs = [
    {
      question: "How long is the recovery from laser resurfacing?",
      answer: "Recovery depends on treatment intensity. Non-ablative treatments have 1-2 days of mild redness. Ablative treatments require 5-7 days of peeling and redness. Most clients return to work within a week."
    },
    {
      question: "How many sessions do I need?",
      answer: "Most concerns require 3-6 sessions spaced 4-6 weeks apart. Deeper scars may need more sessions. You'll see improvement after each treatment."
    },
    {
      question: "Is laser resurfacing painful?",
      answer: "We apply numbing cream 30-60 minutes before treatment. Most clients describe the sensation as heat with mild prickling. It's tolerable for the duration of treatment."
    },
    {
      question: "Can laser resurfacing treat deep acne scars?",
      answer: "Yes, fractional laser is one of the most effective treatments for acne scars, including ice pick, boxcar, and rolling scars. Multiple sessions achieve significant improvement."
    },
    {
      question: "Is it safe for dark skin?",
      answer: "Yes, with appropriate settings and protocols. We use gentler settings and specific wavelengths that are safe for darker skin tones (Fitzpatrick IV-VI)."
    },
    {
      question: "What's the difference between ablative and non-ablative?",
      answer: "Ablative lasers remove thin layers of skin for more dramatic results but require more downtime. Non-ablative lasers work beneath the surface with minimal downtime but may need more sessions."
    },
    {
      question: "How long do results last?",
      answer: "Results are long-lasting as the treatment stimulates your own collagen production. With proper skincare and sun protection, improvements can last years."
    },
    {
      question: "Can I wear makeup after treatment?",
      answer: "We recommend avoiding makeup for 3-5 days while the skin heals. Mineral makeup can typically be worn once the skin has stopped peeling."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Laser Skin Resurfacing Dagenham | Acne Scars, Wrinkles | Book Consult"
        description="Fractional laser resurfacing in Dagenham for acne scars, wrinkles, and sun damage. Medical-grade technology with dramatic results. Free consultation available."
        canonicalUrl="https://laserlightskinclinic.co.uk/laser-resurfacing-dagenham"
        structuredData={[structuredData, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Medical-Grade Technology"
          title="Laser Skin Resurfacing in Dagenham"
          titleAccent="Dagenham"
          subtitle="Transform Your Skin with Fractional Laser Technology"
          description="Dramatically reduce acne scars, wrinkles, and sun damage. Stimulate collagen production for lasting rejuvenation."
          badge="Free Consultation"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          stats={[
            { value: "3-6", label: "Sessions" },
            { value: "Long", label: "Lasting" },
            { value: "All Skin", label: "Types" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="What is Laser Skin Resurfacing?"
          content={whatIsContent}
          highlightText="Our fractional laser technology treats microscopic columns of skin, allowing faster healing while delivering dramatic results."
        />
        
        <BenefitsList
          title="What Can Laser Resurfacing Treat?"
          subtitle="Transform multiple skin concerns with advanced fractional technology"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Laser Resurfacing Process"
          subtitle="From consultation to transformed skin in 4 steps"
          steps={steps}
        />
        
        <TechnologySection
          title="Advanced Fractional Laser Technology"
          subtitle="Medical-grade equipment delivering superior results safely"
          technologyName="Fractional Laser System"
          description="Our fractional laser system creates thousands of microscopic treatment zones while leaving surrounding tissue intact. This 'fractional' approach triggers your body's natural healing response, stimulating collagen production and new skin cell formation."
          features={technologyFeatures}
          certifications={["FDA Cleared", "CE Marked", "Medical Grade"]}
          deviceImage={laserResurfacingDevice}
        />
        
        <TabbedPricingTable
          title="Laser Resurfacing Pricing"
          subtitle="Investment in lasting skin transformation. Free consultation included."
          tabs={pricingTabs}
          offerBanner={{
            highlight: "FREE CONSULTATION",
            text: "Book Your Skin Assessment"
          }}
          paymentOptions="Interest-free payment plans available on courses."
          disclaimer="Prices may vary based on individual assessment. Patch test required before first treatment."
        />
        
        <WhoIsThisFor
          title="Is Laser Resurfacing Right for You?"
          intro="Laser resurfacing is ideal for those seeking significant skin transformation:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="Your Laser Resurfacing Journey"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Laser Resurfacing FAQs"
          subtitle="Common questions about fractional laser treatment"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Transformative Results"
          description="See the dramatic improvements our clients achieve with laser resurfacing. Book a consultation to start your journey."
        />
        
        <ServiceCTA
          title="Ready to Transform Your Skin?"
          subtitle="Book a free consultation to discuss your skin concerns and create a personalized treatment plan."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LaserResurfacing;
