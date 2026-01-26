import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsList } from "@/components/services/BenefitsList";
import { HowItWorks } from "@/components/services/HowItWorks";
import { TechnologySection } from "@/components/services/TechnologySection";
import { PricingTable } from "@/components/services/PricingTable";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

const TattooRemoval = () => {
  const structuredData = {
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
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

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
      title: "Aftercare",
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Tattoo Removal East London | All Colors | Safe for Dark Skin"
        description="Professional laser tattoo removal in East London. Remove all ink colors including stubborn blues and greens. Safe for dark skin. Free consultation at Laser Light Skin Clinic."
        canonicalUrl="https://laserlightskinclinic.co.uk/tattoo-removal-east-london"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          badge="All Colors Removed"
          title="Tattoo Removal East London"
          subtitle="Erase the Past. Embrace Your Future."
          description="Regret your tattoo? Our advanced Q-switched laser technology safely removes all ink colors—including stubborn blues and greens—with minimal scarring risk."
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
        />
        
        <PricingTable
          title="Tattoo Removal Pricing"
          subtitle="Prices based on tattoo size. Book a free consultation for an accurate quote."
          prices={prices}
          disclaimer="Prices are per session. Most tattoos require 4-10 sessions for complete removal. Patch test included in first session price. 0% finance options available."
        />
        
        <ServiceFAQ
          title="Tattoo Removal FAQs"
          subtitle="Everything you need to know before your treatment"
          faqs={faqs}
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
