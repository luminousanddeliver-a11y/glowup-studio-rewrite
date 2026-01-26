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

const LaserHairRemoval = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laser Hair Removal Dagenham",
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
    "description": "Pain-free laser hair removal in Dagenham using the Lynton Motus AY. Safe for all skin types including dark skin. NHS-approved clinic.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const benefits = [
    {
      title: "Pain-Free Treatment",
      description: "The Lynton Motus AY uses advanced Moveo technology and cooling system for a completely comfortable experience, even on sensitive areas."
    },
    {
      title: "Safe for All Skin Types",
      description: "Our laser is clinically proven safe for Fitzpatrick skin types I-VI, including dark skin tones—something many lasers cannot offer."
    },
    {
      title: "Permanent Hair Reduction",
      description: "Achieve up to 90% permanent hair reduction after completing your treatment course. Say goodbye to shaving and waxing forever."
    },
    {
      title: "Fast Treatment Sessions",
      description: "Large areas like legs and back can be treated in under 30 minutes, fitting easily into your busy schedule."
    },
    {
      title: "No Downtime",
      description: "Return to your normal activities immediately after treatment. No redness, no recovery time needed."
    },
    {
      title: "NHS-Approved Standards",
      description: "As an NHS-approved clinic, we follow the highest safety protocols and use only medically-certified equipment."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We assess your skin type, hair color, and treatment goals. We'll create a personalized plan and provide a transparent quote."
    },
    {
      number: 2,
      title: "Preparation",
      description: "Shave the area 24 hours before. Avoid sun exposure and tanning products for 2 weeks prior to treatment."
    },
    {
      number: 3,
      title: "Treatment Session",
      description: "The laser delivers precise energy to hair follicles while the cooling system keeps you comfortable. Most sessions take 15-45 minutes."
    },
    {
      number: 4,
      title: "Aftercare",
      description: "Apply SPF, avoid hot baths for 24 hours, and let treated hairs shed naturally over 1-2 weeks."
    },
    {
      number: 5,
      title: "Follow-up Sessions",
      description: "Return every 4-6 weeks to target hair in different growth cycles. Typically 6-8 sessions needed for optimal results."
    }
  ];

  const technologyFeatures = [
    "Alexandrite 755nm & Nd:YAG 1064nm wavelengths",
    "Moveo™ pain-free technology",
    "Integrated cooling system",
    "Safe for tanned skin",
    "Treats all hair types",
    "Fast repetition rate for speed"
  ];

  const prices = [
    { area: "Upper Lip", singleSession: "£45", course: "£180 (6 sessions)" },
    { area: "Chin", singleSession: "£55", course: "£220 (6 sessions)" },
    { area: "Full Face", singleSession: "£95", course: "£380 (6 sessions)" },
    { area: "Underarms", singleSession: "£65", course: "£260 (6 sessions)" },
    { area: "Brazilian/Hollywood", singleSession: "£120", course: "£480 (6 sessions)" },
    { area: "Half Legs", singleSession: "£150", course: "£600 (6 sessions)" },
    { area: "Full Legs", singleSession: "£250", course: "£1000 (6 sessions)" },
    { area: "Full Back", singleSession: "£180", course: "£720 (6 sessions)" },
    { area: "Full Body", singleSession: "£450", course: "£1800 (6 sessions)" }
  ];

  const faqs = [
    {
      question: "Is laser hair removal really pain-free?",
      answer: "Yes! The Lynton Motus AY uses Moveo technology combined with an integrated cooling system to deliver completely pain-free treatments. Most clients describe the sensation as a warm massage."
    },
    {
      question: "How many sessions do I need?",
      answer: "Most clients need 6-8 sessions for optimal results, spaced 4-6 weeks apart. This accounts for the different hair growth cycles. During your free consultation, we'll provide a personalized treatment plan."
    },
    {
      question: "Is it safe for dark skin?",
      answer: "Absolutely. The Lynton Motus AY is one of the few lasers clinically proven safe for Fitzpatrick skin types IV-VI. The Nd:YAG wavelength penetrates deeper without affecting melanin in the skin."
    },
    {
      question: "What should I do before my appointment?",
      answer: "Shave the treatment area 24 hours before. Avoid sun exposure, tanning beds, and self-tanning products for at least 2 weeks. Do not wax or pluck—the laser needs the hair root intact."
    },
    {
      question: "Are results permanent?",
      answer: "Laser hair removal provides permanent hair reduction of 80-90%. Some fine hairs may regrow over time due to hormonal changes, which can be addressed with occasional maintenance sessions."
    },
    {
      question: "Can I have treatment during pregnancy?",
      answer: "We recommend waiting until after pregnancy and breastfeeding to resume treatments. While there's no evidence of harm, we prioritize caution during this special time."
    },
    {
      question: "What areas can you treat?",
      answer: "We treat all body areas including face, underarms, bikini/Brazilian, legs, arms, chest, back, and stomach. We offer full body packages for comprehensive treatment."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Laser Hair Removal Dagenham | Pain-Free | All Skin Types | 25% Off"
        description="Get pain-free laser hair removal in Dagenham with the Lynton Motus AY. Safe for all skin types including dark skin. NHS-approved clinic. Book your free consultation today."
        canonicalUrl="https://laserlightskinclinic.co.uk/laser-hair-removal-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          badge="25% Off First Course"
          title="Laser Hair Removal Dagenham"
          subtitle="Pain-Free. Permanent Results. Safe for All Skin Types."
          description="Say goodbye to shaving and waxing forever. Our NHS-approved clinic uses the Lynton Motus AY—the most advanced pain-free laser available—to deliver permanent hair reduction for every skin type."
        />
        
        <BenefitsList
          title="Why Choose Our Laser Hair Removal?"
          subtitle="Experience the difference of medical-grade technology and expert care"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Treatment Journey"
          subtitle="From consultation to lasting results in 5 simple steps"
          steps={steps}
        />
        
        <TechnologySection
          title="The Technology Behind Your Results"
          subtitle="Why we chose the Lynton Motus AY for our clinic"
          technologyName="Lynton Motus AY"
          description="The Lynton Motus AY combines two gold-standard wavelengths—Alexandrite (755nm) for lighter skin and Nd:YAG (1064nm) for darker skin—with patented Moveo™ technology for completely pain-free treatments. This is the same system trusted by NHS dermatology departments."
          features={technologyFeatures}
          certifications={["NHS Approved", "CE Marked", "FDA Cleared"]}
        />
        
        <PricingTable
          title="Transparent Pricing"
          subtitle="No hidden fees. Book a free consultation for a personalized quote."
          prices={prices}
          disclaimer="New clients receive 25% off their first treatment course. Prices may vary based on individual assessment. Course payments can be split with 0% finance options available."
        />
        
        <ServiceFAQ
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about laser hair removal"
          faqs={faqs}
        />
        
        <ServiceCTA
          title="Ready to Start Your Hair-Free Journey?"
          subtitle="Book your free consultation today and get 25% off your first course"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LaserHairRemoval;
