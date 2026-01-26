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
import { Palette, Calendar, Shield, Sparkles } from "lucide-react";
import tattooRemovalDevice from "@/assets/tattoo-removal-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const TattooRemoval = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tattoo Removal East London",
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
    "description": "Professional laser tattoo removal in East London using the Quanta Q-Plus C. Remove unwanted tattoos safely with our NHS-approved technology.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "50",
      "priceCurrency": "GBP",
      "description": "Tattoo removal starting from £50 per session"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does tattoo removal hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients describe the sensation as similar to a rubber band snapping against the skin. We offer numbing cream for sensitive areas. The discomfort is brief—each pulse lasts nanoseconds."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 4-10 sessions depending on the tattoo's age, ink depth, colors, and your skin type. Amateur tattoos often require fewer sessions than professional ones."
        }
      },
      {
        "@type": "Question",
        "name": "Can you remove colored tattoos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our Quanta Q-Plus C has multiple wavelengths specifically designed to target different ink colors. Black is easiest to remove, but we can effectively treat blues, greens, reds, and multicolored tattoos."
        }
      },
      {
        "@type": "Question",
        "name": "Will there be scarring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When performed correctly with proper aftercare, scarring is rare. Our advanced laser technology minimizes thermal damage to surrounding tissue."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe on dark skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with the right protocols. We use the 1064nm Nd:YAG wavelength for darker skin types, which bypasses melanin and targets the ink directly."
        }
      }
    ]
  };

  const stats = [
    { value: "All Colors", label: "Ink Removed", icon: Palette },
    { value: "6-8 Weeks", label: "Between Sessions", icon: Calendar },
    { value: "Minimal", label: "Scarring Risk", icon: Shield },
    { value: "Cover-Up", label: "Ready in 2-4 Sessions", icon: Sparkles },
  ];

  const whatIsContent = [
    "Laser tattoo removal uses concentrated light energy to break down ink particles trapped in your skin. The laser delivers ultra-short pulses that pass harmlessly through the outer skin layer and target the ink beneath. When the ink absorbs this energy, it shatters into tiny fragments.",
    "Your body's immune system then naturally flushes away these broken-down particles through the lymphatic system over the following weeks. This is why sessions are spaced 6-8 weeks apart—to give your body time to eliminate the ink and your skin time to heal.",
    "At Laser Light Skin Clinic, we use the Quanta Q-Plus C—a medical-grade Q-switched laser system with multiple wavelengths. This means we can effectively target all ink colors, including stubborn blues and greens that older lasers can't remove."
  ];

  const benefits = [
    {
      title: "Complete Tattoo Removal",
      description: "Our advanced Q-switched laser can remove tattoos completely, including stubborn blues and greens that other lasers struggle with."
    },
    {
      title: "Safe for All Skin Types",
      description: "The Quanta Q-Plus C is safe for darker skin tones (Fitzpatrick IV-VI) with proper protocols and wavelength selection."
    },
    {
      title: "Removes All Ink Colors",
      description: "Multiple wavelengths (1064nm, 532nm, 694nm) target black, blue, green, red, and multicolored tattoos effectively."
    },
    {
      title: "Minimal Scarring Risk",
      description: "Our precise laser technology breaks down ink particles without damaging surrounding tissue when performed by trained professionals."
    },
    {
      title: "Fade for Cover-Up",
      description: "If you want a cover-up tattoo, we can fade your existing ink to create a perfect canvas for new artwork."
    },
    {
      title: "NHS-Approved Standards",
      description: "Our clinic follows strict NHS protocols for safety, hygiene, and aftercare to ensure the best possible outcomes."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Free Consultation & Assessment",
      description: "We evaluate your tattoo's size, ink depth, colors, and your skin type. We'll provide an honest assessment of expected results and sessions needed."
    },
    {
      number: 2,
      title: "Patch Test",
      description: "A small test area is treated to check your skin's response and ensure the settings are optimized for your specific tattoo."
    },
    {
      number: 3,
      title: "Treatment Session",
      description: "The laser delivers ultra-short pulses that shatter ink particles into tiny fragments. Sessions typically last 15-45 minutes depending on tattoo size."
    },
    {
      number: 4,
      title: "Aftercare & Healing",
      description: "Keep the area clean and moisturized. Avoid sun exposure. Some swelling and blistering is normal and will subside within 1-2 weeks."
    },
    {
      number: 5,
      title: "Follow-up Sessions",
      description: "Sessions are spaced 6-8 weeks apart to allow your immune system to flush away broken-down ink particles. Typically 4-10 sessions required."
    }
  ];

  const technologyFeatures = [
    "Q-switched Nd:YAG (1064nm & 532nm)",
    "Ruby 694nm for stubborn colors",
    "PhotoAcoustic technology",
    "PicoBoost ultra-short pulses",
    "Minimal thermal damage",
    "Treats professional & amateur tattoos"
  ];

  const prices = [
    { area: "Extra Small (up to 2cm²)", singleSession: "£50", course: "£200 (5 sessions)" },
    { area: "Small (2-5cm²)", singleSession: "£80", course: "£320 (5 sessions)" },
    { area: "Medium (5-10cm²)", singleSession: "£120", course: "£480 (5 sessions)" },
    { area: "Large (10-20cm²)", singleSession: "£180", course: "£720 (5 sessions)" },
    { area: "Extra Large (20-40cm²)", singleSession: "£250", course: "£1000 (5 sessions)" },
    { area: "Full Sleeve", singleSession: "£400", course: "£1600 (5 sessions)" },
    { area: "Cover-Up Fading", singleSession: "£60", course: "£180 (4 sessions)", note: "2-4 sessions for cover-up prep" }
  ];

  const idealCandidates = [
    "Want complete tattoo removal",
    "Have a tattoo with black, blue, green, or multicolored ink",
    "Want to fade a tattoo for a cover-up",
    "Have realistic expectations (4-10 sessions typical)",
    "Are not pregnant or breastfeeding",
    "Can commit to 6-8 week gaps between sessions"
  ];

  const considerations = [
    {
      title: "Black & Dark Ink",
      description: "Black ink absorbs all wavelengths and is the easiest to remove. Most clients see significant fading after 3-4 sessions."
    },
    {
      title: "Colored Tattoos",
      description: "Blues, greens, and reds require specific wavelengths. Our multi-wavelength laser can target all colors effectively."
    },
    {
      title: "Cover-Up Prep",
      description: "If you want a new tattoo over an old one, we can fade the original in just 2-4 sessions to create a clean canvas."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Avoid sun exposure for 2 weeks",
        "No fake tan on the treatment area",
        "Shave any hair over the tattoo"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "15-45 minute session depending on size",
        "Rubber band snapping sensation",
        "Numbing cream available if needed"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Redness and swelling for 1-2 days",
        "Blistering may occur (normal)",
        "Keep area clean and moisturized"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Session 1-2", result: "Initial fading visible" },
    { session: "Session 3-5", result: "Significant lightening (50-70%)" },
    { session: "Session 6-10", result: "Complete or near-complete removal" }
  ];

  const faqs = [
    {
      question: "Does tattoo removal hurt?",
      answer: "Most clients describe the sensation as similar to a rubber band snapping against the skin. We offer numbing cream for sensitive areas. The discomfort is brief—each pulse lasts nanoseconds."
    },
    {
      question: "How many sessions will I need?",
      answer: "Typically 4-10 sessions depending on the tattoo's age, ink depth, colors, and your skin type. Amateur tattoos often require fewer sessions than professional ones. We'll give you an estimate during your free consultation."
    },
    {
      question: "Can you remove colored tattoos?",
      answer: "Yes! Our Quanta Q-Plus C has multiple wavelengths specifically designed to target different ink colors. Black is easiest to remove, but we can effectively treat blues, greens, reds, and multicolored tattoos."
    },
    {
      question: "Will there be scarring?",
      answer: "When performed correctly with proper aftercare, scarring is rare. Our advanced laser technology minimizes thermal damage to surrounding tissue. We provide detailed aftercare instructions to optimize healing."
    },
    {
      question: "How long between sessions?",
      answer: "We recommend 6-8 weeks between sessions. This allows your immune system time to flush away the broken-down ink particles and your skin to fully heal."
    },
    {
      question: "Can you fade a tattoo for a cover-up?",
      answer: "Absolutely! Many clients come to us to fade an existing tattoo before getting a cover-up. This usually requires only 2-4 sessions and gives your tattoo artist a much better canvas to work with."
    },
    {
      question: "Is it safe on dark skin?",
      answer: "Yes, with the right protocols. We use the 1064nm Nd:YAG wavelength for darker skin types, which bypasses melanin and targets the ink directly. A thorough consultation ensures we choose the safest approach for your skin."
    },
    {
      question: "What happens to the ink?",
      answer: "The laser breaks ink particles into tiny fragments. Your body's immune system then naturally flushes these particles away through the lymphatic system over the following weeks."
    },
    {
      question: "Can you remove eyebrow tattoos?",
      answer: "Yes, we can remove or lighten microblading and cosmetic eyebrow tattoos. Special care is taken due to the sensitive area, and results are typically excellent."
    },
    {
      question: "What's the difference between Q-switched and picosecond lasers?",
      answer: "Both are effective for tattoo removal. Q-switched lasers use nanosecond pulses, while picosecond lasers use even shorter pulses. Our Quanta Q-Plus C with PicoBoost technology delivers ultra-short pulses for optimal results on all ink types."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Tattoo Removal East London | All Colors | Safe for Dark Skin"
        description="Professional laser tattoo removal in East London. Remove all ink colors including stubborn blues and greens. Safe for dark skin. Free consultation at Laser Light Skin Clinic."
        canonicalUrl="https://laserlightskinclinic.co.uk/tattoo-removal-east-london"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Medical-Grade Laser"
          title="Tattoo Removal East London"
          titleAccent="East London"
          subtitle="Erase the Past. Embrace Your Future."
          description="Advanced Q-switched laser safely removes all ink colors—including stubborn blues and greens—with minimal scarring risk."
          badge="All Colors Removed"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Tattoo Removal" }
          ]}
          stats={[
            { value: "All", label: "Ink Colors" },
            { value: "Minimal", label: "Scarring" },
            { value: "Cover-Up", label: "Ready" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="How Does Laser Tattoo Removal Work?"
          content={whatIsContent}
          highlightText="The Quanta Q-Plus C is one of the most advanced tattoo removal lasers available—capable of removing even the most stubborn multi-colored tattoos."
        />
        
        <BenefitsList
          title="Why Choose Our Tattoo Removal?"
          subtitle="Advanced technology and expert care for the best results"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Tattoo Removal Journey"
          subtitle="From consultation to clear skin"
          steps={steps}
        />
        
        <TechnologySection
          title="The Technology Behind Complete Removal"
          subtitle="Why we use the Quanta Q-Plus C"
          technologyName="Quanta Q-Plus C"
          description="The Quanta Q-Plus C is a medical-grade Q-switched laser system that delivers ultra-short nanosecond pulses to shatter ink particles without damaging surrounding tissue. With multiple wavelengths (1064nm, 532nm, and optional Ruby 694nm), it effectively targets all tattoo colors on all skin types."
          features={technologyFeatures}
          certifications={["NHS Approved", "CE Marked", "FDA Cleared"]}
          deviceImage={tattooRemovalDevice}
        />
        
        <div id="pricing">
          <PricingTable
            title="Tattoo Removal Pricing"
            subtitle="Prices based on tattoo size. Book a free consultation for an accurate quote."
            prices={prices}
            disclaimer="Prices are per session. Most tattoos require 4-10 sessions for complete removal. Patch test included in first session price. 0% finance options available."
          />
        </div>
        
        <WhoIsThisFor
          title="Is Tattoo Removal Right for You?"
          intro="Laser tattoo removal is suitable for most people. You're an ideal candidate if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect: Session by Session"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Tattoo Removal FAQs"
          subtitle="Everything you need to know before your treatment"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="See the visible progress of tattoo removal over multiple sessions"
        />
        
        <ServiceCTA
          title="Ready to Remove Your Tattoo?"
          subtitle="Book your free consultation and patch test today"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default TattooRemoval;
