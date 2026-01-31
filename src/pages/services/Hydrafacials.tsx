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
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Timer, Sparkles, Shield, Users } from "lucide-react";
import hydrafacialDevice from "@/assets/hydrafacial-device.jpg";


const Hydrafacials = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hydrafacial East London",
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
    "description": "Professional Hydrafacial treatments in East London. Deep cleansing, exfoliation, and hydration in one session. Instant glow with zero downtime.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London", "London", "Redbridge", "Havering", "Newham", "Barking and Dagenham", "Essex", "Epping"],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "80",
      "highPrice": "900",
      "priceCurrency": "GBP",
      "offerCount": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://laserlightskinclinic.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://laserlightskinclinic.co.uk/prices" },
      { "@type": "ListItem", "position": 3, "name": "Hydrafacials" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Hydrafacial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hydrafacial is a medical-grade facial treatment that combines cleansing, exfoliation, extraction, and hydration in one session. It uses patented Vortex-Fusion technology to deliver active ingredients deep into the skin while removing impurities."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a Hydrafacial take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard Hydrafacial takes 45-60 minutes. Our Express option is 30 minutes, while Platinum treatments with lymphatic drainage take approximately 75-90 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I get a Hydrafacial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For optimal results, we recommend monthly treatments. However, even a single session will leave your skin visibly improved. Many clients book before special events for an instant glow."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No downtime at all! You can apply makeup and return to work immediately. Your skin may appear slightly flushed for 30 minutes, but this subsides quickly."
        }
      },
      {
        "@type": "Question",
        "name": "Is Hydrafacial suitable for acne-prone skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Hydrafacial is excellent for acne-prone skin. The extraction removes pore-clogging debris, and we can add a salicylic acid booster to target active breakouts."
        }
      },
      {
        "@type": "Question",
        "name": "Can I combine Hydrafacial with other treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Hydrafacial pairs beautifully with LED light therapy, chemical peels, and microneedling. We can create a customized treatment plan during your consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Will I see results after one session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Most clients notice clearer, brighter, more hydrated skin immediately after their first Hydrafacial. Results improve with regular treatments."
        }
      }
    ]
  };

  const stats = [
    { value: "30-45 Min", label: "Treatment Time", icon: Timer },
    { value: "Zero", label: "Downtime", icon: Sparkles },
    { value: "Instant", label: "Visible Glow", icon: Shield },
    { value: "All Types", label: "Skin Suitable", icon: Users },
  ];

  const whatIsContent = [
    "Hydrafacial is a revolutionary medical-grade facial treatment that combines cleansing, exfoliation, extraction, and hydration into one seamless session. Using patented Vortex-Fusion technology, the treatment delivers active ingredients deep into the skin while simultaneously removing impurities and dead skin cells.",
    "Unlike traditional facials that rely on manual extraction (which can be painful and cause redness), Hydrafacial uses a gentle vacuum-like suction that painlessly removes blackheads, dirt, and oil from your pores. This makes it suitable for even the most sensitive skin types.",
    "At Laser Light Skin Clinic, our Level 4 qualified aestheticians customise every Hydrafacial with targeted boosters—whether you need extra hydration, brightening, or anti-aging benefits. The result is an immediate, visible glow that lasts for weeks."
  ];

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
    { area: "Express Hydrafacial", singleSession: "£80", course: "£360 (6 sessions)", note: "30-minute treatment" },
    { area: "Signature Hydrafacial", singleSession: "£120", course: "£540 (6 sessions)" },
    { area: "Deluxe Hydrafacial", singleSession: "£150", course: "£675 (6 sessions)", note: "Includes LED therapy" },
    { area: "Platinum Hydrafacial", singleSession: "£200", course: "£900 (6 sessions)", note: "Includes lymphatic drainage" },
    { area: "Hydrafacial + Chemical Peel", singleSession: "£180", course: "£810 (6 sessions)" }
  ];

  const idealCandidates = [
    "Want an instant glow before a special event",
    "Have dull, congested, or dehydrated skin",
    "Struggle with blackheads or enlarged pores",
    "Looking for a gentle anti-aging treatment",
    "Have sensitive skin that can't tolerate harsh peels",
    "Want to maintain healthy, radiant skin long-term"
  ];

  const considerations = [
    {
      title: "Pre-Event Glow",
      description: "Hydrafacial is perfect for weddings, parties, or photo shoots. Book 1-3 days before your event for maximum radiance."
    },
    {
      title: "Acne-Prone Skin",
      description: "We add salicylic acid boosters to target congestion and active breakouts. Safe and effective for oily, acne-prone skin."
    },
    {
      title: "Sensitive Skin",
      description: "The gentle vortex technology makes Hydrafacial suitable for rosacea and easily irritated skin types."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Arrive with clean, makeup-free skin",
        "Avoid retinoids for 48 hours prior",
        "No sun exposure for 24 hours before"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "30-90 minute session depending on type",
        "Relaxing, spa-like experience",
        "No pain—just a gentle suction sensation"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Immediate glow visible",
        "Apply SPF before leaving clinic",
        "Makeup can be applied immediately"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "1 Session", result: "Instant glow and hydration" },
    { session: "3 Sessions", result: "Improved texture and clarity" },
    { session: "6 Sessions", result: "Long-term radiance and reduced pores" }
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

  const testimonials = [
    {
      quote: "The Hydrafacial treatment was AMAZING! My skin has never felt so good. I'm absolutely glowing and my pores look so much smaller.",
      initials: "JM",
      treatment: "Hydrafacial Platinum",
      rating: 5
    },
    {
      quote: "I get a Hydrafacial every month now - it's my self-care ritual. The team here are so professional and the results speak for themselves!",
      initials: "RK",
      treatment: "Hydrafacial Signature",
      rating: 5
    }
  ];

  const relatedServices = [
    {
      name: "Chemical Peels",
      href: "/chemical-peels-dagenham",
      description: "Deeper exfoliation for enhanced skin renewal and clarity."
    },
    {
      name: "Skin Analysis",
      href: "/skin-analysis-dagenham",
      description: "Understand your skin's unique needs with advanced diagnostics."
    },
    {
      name: "LED Light Therapy",
      href: "/led-light-therapy-dagenham",
      description: "Boost collagen and heal blemishes with targeted light therapy."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Hydrafacial East London | Instant Glow | No Downtime | Book Now"
        description="Experience the ultimate Hydrafacial in East London at Laser Light Skin Clinic. Deep cleansing, extraction, and hydration in one session. Walk out glowing. Book today."
        canonicalUrl="https://laserlightskinclinic.co.uk/hydrafacial-east-london"
        structuredData={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Celebrity-Loved Treatment"
          title="Hydrafacial East London"
          titleAccent="East London"
          subtitle="Walk Out Glowing. Zero Downtime. Instant Results."
          description="The ultimate facial that cleanses, exfoliates, and hydrates in 45 minutes. Walk out glowing with zero downtime."
          badge="Most Popular Facial"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={hydrafacialDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Hydrafacials" }
          ]}
          stats={[
            { value: "45 Min", label: "Treatment" },
            { value: "Zero", label: "Downtime" },
            { value: "Instant", label: "Glow" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is a Hydrafacial?"
          content={whatIsContent}
          highlightText="Hydrafacial is the only facial treatment that delivers instant, visible results with zero downtime—making it the perfect pre-event glow treatment."
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
          deviceImage={hydrafacialDevice}
        />
        
        <div id="pricing">
          <PricingTable
            title="Hydrafacial Pricing"
            subtitle="Choose the treatment that's right for you"
            prices={prices}
            disclaimer="Free consultation included. All Hydrafacials include a personalized skin analysis and aftercare advice. Interest-free payment options available."
          />
        </div>
        
        <WhoIsThisFor
          title="Is Hydrafacial Right for You?"
          intro="Hydrafacial is suitable for virtually everyone, but you'll see the best results if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="Your Hydrafacial Experience"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Hydrafacial FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="See the visible difference a Hydrafacial makes"
        />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready for Your Best Skin?"
          subtitle="Book your Hydrafacial today and walk out glowing"
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default Hydrafacials;
