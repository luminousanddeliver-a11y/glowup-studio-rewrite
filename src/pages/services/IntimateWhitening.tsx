import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { HowItWorks } from "@/components/services/HowItWorks";
import { PricingTable } from "@/components/services/PricingTable";
import { WhoIsThisFor } from "@/components/services/WhoIsThisFor";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Shield, Heart, Sparkles, Lock } from "lucide-react";
import intimateCareProducts from "@/assets/intimate-care-products.jpg";


const relatedServices = [
  { name: "Laser Hair Removal", href: "/laser-hair-removal-dagenham", description: "Permanent hair reduction for smooth skin" },
  { name: "Pigmentation Treatment", href: "/pigmentation-treatment-dagenham", description: "Even out skin tone on face and body" },
  { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham", description: "Improve skin texture and radiance" },
];

const testimonials = [
  { quote: "The staff made me feel so comfortable. Results exceeded my expectations and my confidence is restored.", initials: "FA", treatment: "Intimate Whitening", rating: 5 },
];

const IntimateWhitening = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Intimate V-Whitening East London",
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
    "description": "Discreet, professional intimate V-whitening treatment in East London. Safe lightening for even skin tone. Medical-grade solutions in a confidential setting.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "150",
      "priceCurrency": "GBP",
      "description": "Intimate Whitening from £150 per session"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is intimate whitening safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our intimate whitening treatments use medical-grade products specifically formulated for sensitive areas. All treatments are performed by qualified professionals in a clinical, hygienic environment."
        }
      },
      {
        "@type": "Question",
        "name": "How much does intimate whitening cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intimate whitening treatments start from £150 per session. A course of 3-5 sessions is typically recommended for optimal results, with package discounts available."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions are needed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see visible results after 2-3 sessions. For optimal results, we typically recommend a course of 4-6 sessions spaced 2-3 weeks apart."
        }
      },
      {
        "@type": "Question",
        "name": "Is the treatment painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the treatment is not painful. You may experience a mild tingling sensation during application, but it's generally well-tolerated. We use gentle, medical-grade products suitable for sensitive skin."
        }
      }
    ]
  };

  const stats = [
    { value: "Discreet", label: "& Confidential", icon: Lock },
    { value: "Medical", label: "Grade Products", icon: Shield },
    { value: "Even", label: "Skin Tone", icon: Sparkles },
    { value: "Confidence", label: "Boosting", icon: Heart },
  ];

  const whatIsContent = [
    "Intimate V-whitening is a professional treatment designed to lighten hyperpigmentation in intimate areas. Darkening in these areas is completely natural and common—caused by hormones, friction, aging, and genetics—but many people feel self-conscious about uneven skin tone.",
    "Our treatment uses medical-grade lightening solutions specifically formulated for sensitive intimate areas. These products work by gently inhibiting melanin production and promoting cell turnover, gradually evening out skin tone over a series of sessions.",
    "At Laser Light Skin Clinic, we understand this is a personal concern. All treatments are conducted in complete privacy by qualified female practitioners. We provide a professional, judgment-free environment where your comfort and confidentiality are our priority."
  ];

  const benefits = [
    {
      title: "Even, Natural Skin Tone",
      description: "Gradually lighten hyperpigmentation to achieve a more even, natural-looking skin tone in intimate areas."
    },
    {
      title: "Boost Self-Confidence",
      description: "Many clients report feeling more confident and comfortable after treatment—whether for themselves or with a partner."
    },
    {
      title: "Safe, Medical-Grade Products",
      description: "We use professional-grade products specifically formulated for sensitive intimate areas—never harsh bleaching agents."
    },
    {
      title: "Non-Invasive Treatment",
      description: "No surgery, no lasers, no downtime. Our gentle approach means you can return to normal activities immediately."
    },
    {
      title: "Complete Privacy & Discretion",
      description: "All treatments are conducted in private rooms by qualified female practitioners. Your confidentiality is guaranteed."
    },
    {
      title: "Long-Lasting Results",
      description: "With proper aftercare, results can last 12-18 months. Occasional maintenance sessions keep skin tone even."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Private Consultation",
      description: "A confidential discussion about your concerns and goals. We'll explain the treatment, answer questions, and ensure you're comfortable."
    },
    {
      number: 2,
      title: "Skin Assessment",
      description: "We assess the treatment area to determine the degree of hyperpigmentation and create a personalized treatment plan."
    },
    {
      number: 3,
      title: "Treatment Application",
      description: "The lightening solution is carefully applied to the treatment area. You may feel a mild tingling—this is normal."
    },
    {
      number: 4,
      title: "Neutralization",
      description: "The product is neutralized and removed. Soothing products are applied to calm the skin."
    },
    {
      number: 5,
      title: "Aftercare & Follow-up",
      description: "We provide aftercare products and instructions. Follow-up sessions are scheduled 2-3 weeks apart for optimal results."
    }
  ];

  const prices = [
    { area: "Intimate V-Whitening", singleSession: "£150", course: "£600 (5 sessions)" },
    { area: "Bikini Line Lightening", singleSession: "£100", course: "£400 (5 sessions)" },
    { area: "Inner Thigh Lightening", singleSession: "£120", course: "£480 (5 sessions)" },
    { area: "Underarm Lightening", singleSession: "£80", course: "£320 (5 sessions)" },
    { area: "Combined Areas Package", singleSession: "£200", course: "£800 (5 sessions)", note: "2 areas per session" }
  ];

  const idealCandidates = [
    "Have darkening or hyperpigmentation in intimate areas",
    "Want a more even skin tone",
    "Seek a confidence boost",
    "Prefer non-invasive treatments",
    "Want professional, medical-grade care",
    "Value privacy and discretion"
  ];

  const considerations = [
    {
      title: "Hormonal Hyperpigmentation",
      description: "Darkening caused by hormones (pregnancy, birth control) responds well to our treatment. Results may vary based on cause."
    },
    {
      title: "Friction-Related Darkening",
      description: "Darkening from friction (clothing, exercise) can be significantly improved with a course of treatments."
    },
    {
      title: "Maintaining Results",
      description: "Results last 12-18 months with proper care. Occasional maintenance sessions help preserve your even skin tone."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Avoid shaving 24 hours before",
        "No waxing for 1 week prior",
        "Arrive with clean skin"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "30-45 minute session",
        "Mild tingling sensation",
        "Performed by female practitioner"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Avoid tight clothing for 24 hours",
        "No swimming/sauna for 48 hours",
        "Apply provided aftercare products"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Session 1-2", result: "Initial lightening visible" },
    { session: "Session 3-4", result: "Noticeable improvement" },
    { session: "Session 5-6", result: "Optimal, even skin tone" }
  ];

  const faqs = [
    {
      question: "Is intimate whitening safe?",
      answer: "Yes, our intimate whitening treatments use medical-grade products specifically formulated for sensitive areas. We never use harsh bleaching agents. All treatments are performed by qualified professionals in a clinical, hygienic environment."
    },
    {
      question: "How much does intimate whitening cost?",
      answer: "Intimate whitening treatments start from £150 per session. A course of 5 sessions costs £600. We also offer treatments for bikini line (£100), inner thighs (£120), and underarms (£80)."
    },
    {
      question: "How many sessions are needed?",
      answer: "Most clients see visible results after 2-3 sessions. For optimal results, we typically recommend a course of 4-6 sessions spaced 2-3 weeks apart. The exact number depends on the degree of hyperpigmentation."
    },
    {
      question: "Is the treatment painful?",
      answer: "No, the treatment is not painful. You may experience a mild tingling sensation during application, but it's generally well-tolerated. We use gentle, medical-grade products suitable for sensitive skin."
    },
    {
      question: "Who performs the treatment?",
      answer: "All intimate treatments are performed by qualified female practitioners in a completely private treatment room. Your comfort, dignity, and confidentiality are our top priorities."
    },
    {
      question: "How long do results last?",
      answer: "With proper aftercare, results typically last 12-18 months. Factors like friction, hormones, and sun exposure can affect longevity. Occasional maintenance sessions (every 6-12 months) help preserve results."
    },
    {
      question: "Is there any downtime?",
      answer: "There's minimal downtime. You may experience mild sensitivity for 24-48 hours. Avoid tight clothing, swimming, and saunas for 48 hours after treatment. You can return to normal activities immediately."
    },
    {
      question: "Why does darkening occur in intimate areas?",
      answer: "Darkening in intimate areas is completely normal and common. It's caused by hormones, friction from clothing, aging, and genetics. It's a cosmetic concern, not a health issue—but treatment is available if it affects your confidence."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Intimate V-Whitening East London | Discreet & Safe | Book Now"
        description="Professional intimate V-whitening in East London. Safe, medical-grade lightening treatment. Discreet, confidential care by female practitioners. Book your consultation."
        canonicalUrl="https://laserlightskinclinic.co.uk/intimate-whitening-east-london"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Female Practitioners Only"
          title="Intimate V-Whitening East London"
          titleAccent="East London"
          subtitle="Confidence-Boosting Results in a Private Setting"
          description="Safe, professional intimate lightening using medical-grade products. Discreet care by qualified female practitioners."
          badge="Discreet & Professional"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={intimateCareProducts}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Intimate Whitening" }
          ]}
          stats={[
            { value: "Discreet", label: "& Private" },
            { value: "Medical", label: "Grade" },
            { value: "Long", label: "Lasting" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is Intimate V-Whitening?"
          content={whatIsContent}
          highlightText="All treatments are conducted in complete privacy by qualified female practitioners. Your comfort and confidentiality are our priority."
        />
        
        <BenefitsList
          title="Benefits of Intimate Whitening"
          subtitle="Safe, effective, and confidence-boosting"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Treatment Journey"
          subtitle="From consultation to confidence"
          steps={steps}
        />
        
        <div id="pricing">
          <PricingTable
            title="Intimate Whitening Pricing"
            subtitle="Professional care at accessible prices"
            prices={prices}
            disclaimer="All consultations are free and confidential. Course packages offer the best value and results. Female practitioners only."
          />
        </div>
        
        <WhoIsThisFor
          title="Is This Treatment Right for You?"
          intro="Intimate whitening is ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Intimate Whitening FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="Discreet, professional care that restores confidence"
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Feel More Confident?"
          subtitle="Book your discreet, confidential consultation today"
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default IntimateWhitening;
