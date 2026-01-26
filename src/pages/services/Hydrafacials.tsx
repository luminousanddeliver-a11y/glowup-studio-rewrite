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

const Hydrafacials = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hydrafacial East London",
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
    "description": "Professional Hydrafacial treatments in East London. Deep cleansing, exfoliation, and hydration in one session. Instant glow with zero downtime.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const benefits = [
    {
      title: "Instant Visible Results",
      description: "Walk out with noticeably clearer, brighter, and more hydrated skin immediately after your first session. Perfect before special events."
    },
    {
      title: "Deep Cleansing & Extraction",
      description: "Vortex suction technology removes dirt, oil, and blackheads from pores without the pain or redness of traditional extractions."
    },
    {
      title: "Intense Hydration",
      description: "Antioxidants, peptides, and hyaluronic acid are infused deep into the skin, leaving it plump and glowing."
    },
    {
      title: "No Downtime",
      description: "Unlike chemical peels or microneedling, you can apply makeup and return to work immediately after your Hydrafacial."
    },
    {
      title: "Suitable for All Skin Types",
      description: "Whether you have oily, dry, sensitive, or combination skin, Hydrafacial can be customized to your specific needs."
    },
    {
      title: "Treats Multiple Concerns",
      description: "Address fine lines, wrinkles, hyperpigmentation, congested pores, and dullness all in one treatment."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Cleanse & Peel",
      description: "Gentle exfoliation removes dead skin cells and uncovers a fresh layer of skin using a mild glycolic/salicylic acid solution."
    },
    {
      number: 2,
      title: "Extract & Hydrate",
      description: "Painless vortex suction removes impurities from pores while simultaneously infusing hydrating serums deep into the skin."
    },
    {
      number: 3,
      title: "Fuse & Protect",
      description: "Antioxidants, peptides, and hyaluronic acid saturate the skin's surface to maximize glow and protection."
    },
    {
      number: 4,
      title: "LED Light Therapy (Optional)",
      description: "Red or blue LED light enhances results by stimulating collagen production or reducing bacteria for acne-prone skin."
    }
  ];

  const technologyFeatures = [
    "Patented Vortex-Fusion technology",
    "Medical-grade serums",
    "Real-time skin analysis",
    "Customizable boosters",
    "Painless extraction",
    "Anti-aging peptide infusion"
  ];

  const prices = [
    { area: "Signature Hydrafacial", singleSession: "£120", course: "£540 (6 sessions)" },
    { area: "Deluxe Hydrafacial", singleSession: "£150", course: "£675 (6 sessions)", note: "Includes LED therapy" },
    { area: "Platinum Hydrafacial", singleSession: "£200", course: "£900 (6 sessions)", note: "Includes lymphatic drainage" },
    { area: "Hydrafacial + Chemical Peel", singleSession: "£180", course: "£810 (6 sessions)" },
    { area: "Express Hydrafacial", singleSession: "£80", course: "£360 (6 sessions)", note: "30-minute treatment" }
  ];

  const faqs = [
    {
      question: "What is a Hydrafacial?",
      answer: "Hydrafacial is a medical-grade facial treatment that combines cleansing, exfoliation, extraction, and hydration in one session. It uses patented Vortex-Fusion technology to deliver active ingredients deep into the skin while removing impurities."
    },
    {
      question: "How long does a Hydrafacial take?",
      answer: "A standard Hydrafacial takes 45-60 minutes. Our Express option is 30 minutes, while Platinum treatments with lymphatic drainage take approximately 75-90 minutes."
    },
    {
      question: "How often should I get a Hydrafacial?",
      answer: "For optimal results, we recommend monthly treatments. However, even a single session will leave your skin visibly improved. Many clients book before special events for an instant glow."
    },
    {
      question: "Is there any downtime?",
      answer: "No downtime at all! You can apply makeup and return to work immediately. Your skin may appear slightly flushed for 30 minutes, but this subsides quickly."
    },
    {
      question: "Is Hydrafacial suitable for acne-prone skin?",
      answer: "Yes! Hydrafacial is excellent for acne-prone skin. The extraction removes pore-clogging debris, and we can add a salicylic acid booster to target active breakouts."
    },
    {
      question: "Can I combine Hydrafacial with other treatments?",
      answer: "Absolutely. Hydrafacial pairs beautifully with LED light therapy, chemical peels, and microneedling. We can create a customized treatment plan during your consultation."
    },
    {
      question: "Will I see results after one session?",
      answer: "Yes! Most clients notice clearer, brighter, more hydrated skin immediately after their first Hydrafacial. Results improve with regular treatments."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Hydrafacial East London | Instant Glow | No Downtime | Book Now"
        description="Experience the ultimate Hydrafacial in East London at Laser Light Skin Clinic. Deep cleansing, extraction, and hydration in one session. Walk out glowing. Book today."
        canonicalUrl="https://laserlightskinclinic.co.uk/hydrafacial-east-london"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          badge="Most Popular Facial"
          title="Hydrafacial East London"
          subtitle="Deep Cleanse. Extract. Hydrate. Glow."
          description="The ultimate facial treatment that cleanses, exfoliates, and hydrates your skin in just 45 minutes. Walk out with an instant glow and zero downtime."
        />
        
        <BenefitsList
          title="Why Hydrafacial?"
          subtitle="The facial loved by celebrities and skincare experts worldwide"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The 4-Step Hydrafacial Process"
          subtitle="A complete skin transformation in under an hour"
          steps={steps}
        />
        
        <TechnologySection
          title="Medical-Grade Technology"
          subtitle="The science behind your glow"
          technologyName="Hydrafacial System"
          description="The Hydrafacial system uses patented Vortex-Fusion technology to deliver superior results. The spiral design creates a vortex effect to easily dislodge and remove impurities while simultaneously infusing the skin with nourishing serums."
          features={technologyFeatures}
          certifications={["FDA Cleared", "CE Marked"]}
        />
        
        <PricingTable
          title="Hydrafacial Pricing"
          subtitle="Choose the treatment that's right for you"
          prices={prices}
          disclaimer="New clients receive 25% off their first treatment. All Hydrafacials include a personalized skin analysis and aftercare advice."
        />
        
        <ServiceFAQ
          title="Hydrafacial FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ServiceCTA
          title="Ready for Your Best Skin?"
          subtitle="Book your Hydrafacial today and walk out glowing"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Hydrafacials;
