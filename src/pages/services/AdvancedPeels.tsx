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
import { Award, Sparkles, Shield, Clock, Sun, Droplets, Target, RefreshCw } from "lucide-react";
import chemicalPeelProducts from "@/assets/chemical-peel-products.jpg";


const relatedServices = [
  { name: "Pigmentation Treatment", href: "/pigmentation-treatment-dagenham", description: "Laser solutions for stubborn dark spots" },
  { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham", description: "Multi-modality approach for radiant skin" },
  { name: "Chemical Peels", href: "/chemical-peels-dagenham", description: "Gentle peels for regular maintenance" },
];

const testimonials = [
  { quote: "After years of struggling with melasma, the Cosmelan treatment finally gave me clear, even skin. Life-changing!", initials: "NK", treatment: "Cosmelan Treatment", rating: 5 },
  { quote: "The Dermamelan protocol was intense but so worth it. My pigmentation has reduced by at least 80%.", initials: "PT", treatment: "Dermamelan Treatment", rating: 5 },
];

const AdvancedPeels = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Advanced Peels - Mesopeels, Cosmelan & Dermamelan Dagenham",
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
    "description": "Advanced medical-grade peels including Mesopeels, Cosmelan, and Dermamelan in Dagenham. Expert treatment for pigmentation, melasma, acne scars, and skin rejuvenation.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "150",
      "priceCurrency": "GBP",
      "description": "Advanced Peels from £150 per session"
    }
  };

  const stats = [
    { value: "Medical Grade", label: "Professional Peels", icon: Award },
    { value: "Melasma", label: "Specialist Treatment", icon: Sun },
    { value: "All Skin", label: "Types Suitable", icon: Shield },
    { value: "Dramatic", label: "Results", icon: Sparkles },
  ];

  const whatIsContent = [
    "Advanced peels go far beyond standard facials, using medical-grade formulations to address deep-rooted skin concerns like stubborn pigmentation, melasma, and severe acne scarring. At Laser Light Skin Clinic, we offer three gold-standard treatments: Mesopeels, Cosmelan, and Dermamelan.",
    "Mesopeels are customizable chemical peels from Mesoestetic that address a wide range of concerns—from acne and pigmentation to aging and dullness. They work by accelerating cell turnover and stimulating collagen production.",
    "Cosmelan and Dermamelan are the world's leading depigmenting treatments, specifically designed to treat melasma and stubborn hyperpigmentation. These intensive protocols reduce melanin production at its source, delivering dramatic and lasting results even for skin that hasn't responded to other treatments."
  ];

  const benefits = [
    {
      title: "Melasma Treatment",
      description: "Cosmelan and Dermamelan are clinically proven to reduce melasma by up to 95%. These are the most effective non-laser treatments available.",
      icon: Sun
    },
    {
      title: "Hyperpigmentation Reduction",
      description: "Target sun damage, post-inflammatory hyperpigmentation, and age spots with precision medical-grade formulations.",
      icon: Target
    },
    {
      title: "Acne & Scar Improvement",
      description: "Mesopeels specifically formulated for acne reduce breakouts, minimize pores, and improve acne scarring.",
      icon: Droplets
    },
    {
      title: "Anti-Aging Benefits",
      description: "Stimulate collagen production, reduce fine lines, and restore youthful luminosity to aging skin.",
      icon: RefreshCw
    },
    {
      title: "Even Skin Tone",
      description: "Achieve a uniformly radiant complexion by reducing discoloration and evening out skin tone.",
      icon: Sparkles
    },
    {
      title: "Safe for Darker Skin",
      description: "Unlike many treatments, these advanced peels are safe and effective for Fitzpatrick skin types IV-VI when properly administered.",
      icon: Shield
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Comprehensive Consultation",
      description: "We assess your skin type, concerns, and medical history to determine the most suitable peel and treatment protocol for you."
    },
    {
      number: 2,
      title: "Skin Preparation",
      description: "For intensive peels like Cosmelan/Dermamelan, a 2-week preparation phase with specific skincare primes your skin for optimal results."
    },
    {
      number: 3,
      title: "In-Clinic Application",
      description: "The peel is carefully applied by our trained therapists. Application time varies from 30 minutes to several hours depending on the protocol."
    },
    {
      number: 4,
      title: "Home Care Protocol",
      description: "You receive a customized home care kit with detailed instructions. For depigmenting treatments, daily application continues for several months."
    },
    {
      number: 5,
      title: "Follow-Up & Maintenance",
      description: "Regular check-ins monitor your progress. Maintenance treatments may be recommended to sustain results long-term."
    }
  ];

  const technologyFeatures = [
    "Mesoestetic medical-grade formulations",
    "Cosmelan: 4-product depigmenting system",
    "Dermamelan: Professional-only intensive treatment",
    "pH-balanced for optimal penetration",
    "Tyrosinase inhibitors for melanin control",
    "Clinically proven efficacy rates"
  ];

  const pricingTabs = [
    {
      label: "Mesopeels",
      prices: [
        { area: "Mesopeel Azelan (Acne)", singleSession: "£150", course: "£400 (3)", savings: "Save £50" },
        { area: "Mesopeel Melanostop (Pigmentation)", singleSession: "£180", course: "£480 (3)", savings: "Save £60" },
        { area: "Mesopeel Modified Jessner", singleSession: "£180", course: "£480 (3)", savings: "Save £60" },
        { area: "Mesopeel TCA (Deep Renewal)", singleSession: "£220", course: "£594 (3)", savings: "Save £66" },
      ]
    },
    {
      label: "Cosmelan",
      prices: [
        { area: "Cosmelan Peel (In-Clinic)", singleSession: "£650", course: "—", note: "Includes home kit" },
        { area: "Cosmelan Home Maintenance Kit", singleSession: "£180", course: "—", note: "3-month supply" },
        { area: "Cosmelan Complete Protocol", singleSession: "£800", course: "—", note: "Treatment + 6-month maintenance" },
      ]
    },
    {
      label: "Dermamelan",
      prices: [
        { area: "Dermamelan Peel (In-Clinic)", singleSession: "£850", course: "—", note: "Professional-strength, includes home kit" },
        { area: "Dermamelan Home Maintenance", singleSession: "£200", course: "—", note: "3-month supply" },
        { area: "Dermamelan Complete Protocol", singleSession: "£1,000", course: "—", note: "Treatment + 6-month maintenance" },
      ]
    }
  ];

  const idealCandidates = [
    "Have stubborn melasma or pigmentation",
    "Tried other treatments without success",
    "Have post-inflammatory hyperpigmentation",
    "Want to address acne and acne scarring",
    "Seek dramatic anti-aging results",
    "Are committed to following the home care protocol"
  ];

  const considerations = [
    {
      title: "Melasma",
      description: "Cosmelan and Dermamelan are the gold standard for melasma treatment, with up to 95% improvement in clinical studies."
    },
    {
      title: "Darker Skin Tones",
      description: "These peels are specifically designed to be safe for darker skin when applied by trained professionals. Strict sun protection is essential."
    },
    {
      title: "Commitment Required",
      description: "Intensive peels require a commitment to the full protocol including daily home care. Results depend on adherence to instructions."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "2-week prep with prescribed products",
        "Avoid sun exposure and tanning",
        "Discontinue retinoids as advised"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "30 mins - 8 hours depending on peel",
        "Mild warmth or tingling sensation",
        "Cosmelan/Dermamelan: mask stays on at home"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Peeling for 3-7 days (varies by peel)",
        "Strict sun protection essential",
        "Daily home care products applied"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Week 1", result: "Skin peeling and renewal" },
    { session: "Week 2-4", result: "Pigmentation fading begins" },
    { session: "Month 2-3", result: "Dramatic improvement visible" }
  ];

  const faqs = [
    {
      question: "What's the difference between Cosmelan and Dermamelan?",
      answer: "Both are professional depigmenting treatments from the same manufacturer. Dermamelan is the more intensive version, designed for severe melasma and stubborn pigmentation. Cosmelan is suitable for moderate pigmentation and is gentler, with less downtime."
    },
    {
      question: "How long do Cosmelan/Dermamelan results last?",
      answer: "With proper sun protection and maintenance products, results can last years. However, melasma is a chronic condition that can recur with hormonal changes or sun exposure. Annual maintenance treatments may be recommended."
    },
    {
      question: "Is there significant downtime?",
      answer: "Yes, expect 5-7 days of visible peeling for intensive peels. Skin may be red and flaky during this time. We recommend scheduling around your social calendar. Mesopeels have less downtime (1-3 days)."
    },
    {
      question: "Can I have these treatments if I have dark skin?",
      answer: "Yes! These treatments are specifically formulated to be safe for darker skin tones when applied by trained professionals. The key is strict sun protection and following the protocol exactly as prescribed."
    },
    {
      question: "How many sessions will I need?",
      answer: "Cosmelan and Dermamelan are typically single in-clinic treatments followed by a home care protocol. Mesopeels are often done in a series of 3-6 treatments spaced 2-4 weeks apart for best results."
    },
    {
      question: "Will my skin be sun-sensitive after treatment?",
      answer: "Yes, significantly. SPF 50+ must be applied every 2-3 hours during the treatment period and ongoing. Sun exposure can cause rebound pigmentation and reduce treatment effectiveness."
    },
    {
      question: "Can I wear makeup after treatment?",
      answer: "We recommend avoiding makeup for the first 48-72 hours post-treatment. After that, mineral makeup can be used. Full makeup is typically safe once peeling is complete."
    },
    {
      question: "Are these treatments painful?",
      answer: "Most clients experience mild warmth, tingling, or stinging during application which subsides quickly. The peeling phase can cause tightness but is generally not painful."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Advanced Peels Dagenham | Mesopeels, Cosmelan & Dermamelan | Melasma Treatment"
        description="Expert melasma and pigmentation treatment in Dagenham. Mesopeels, Cosmelan, and Dermamelan advanced peels. Up to 95% improvement in stubborn pigmentation. Book now!"
        canonicalUrl="https://laserlightskinclinic.co.uk/advanced-peels-dagenham"
        structuredData={serviceSchema}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Melasma Specialists"
          title="Advanced Peels in Dagenham"
          titleAccent="Dagenham"
          subtitle="Up to 95% Reduction in Stubborn Pigmentation"
          description="The world's most effective treatments for melasma, stubborn pigmentation, and skin rejuvenation. Medical-grade peels for dramatic, lasting results."
          badge="Up to 95% Pigmentation Reduction"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={chemicalPeelProducts}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Advanced Peels" }
          ]}
          stats={[
            { value: "95%", label: "Improvement" },
            { value: "Medical", label: "Grade" },
            { value: "All Skin", label: "Types" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What Are Advanced Peels?"
          content={whatIsContent}
          highlightText="Cosmelan and Dermamelan are the world's #1 treatments for melasma—achieving results where other treatments have failed."
        />
        
        <BenefitsList
          title="Benefits of Advanced Peels"
          subtitle="Transformative results for your most stubborn skin concerns"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Treatment Process"
          subtitle="From consultation to clear, radiant skin"
          steps={steps}
        />
        
        <TechnologySection
          title="Gold-Standard Formulations"
          subtitle="Mesoestetic's world-renowned peel systems"
          technologyName="Professional Peel Systems"
          description="We use Mesoestetic's complete range of professional peels—the global leaders in depigmenting treatments. These medical-grade formulations are only available in certified clinics and are administered by trained professionals for optimal safety and efficacy."
          features={technologyFeatures}
          certifications={["Mesoestetic Certified", "Medical Grade", "CE Marked"]}
          deviceImage={chemicalPeelProducts}
        />
        
        <div id="pricing">
          <TabbedPricingTable
            title="Advanced Peels Pricing"
            subtitle="Investment in clear, even-toned skin"
            tabs={pricingTabs}
            offerBanner={{
              highlight: "FREE CONSULTATION",
              text: "Includes Skin Analysis & Treatment Plan"
            }}
            paymentOptions="Payment plans available for Cosmelan/Dermamelan protocols."
            disclaimer="Pricing includes all in-clinic products. Home care products priced separately unless stated."
          />
        </div>
        
        <WhoIsThisFor
          title="Is an Advanced Peel Right for You?"
          intro="Advanced peels are ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Advanced Peels FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Clear, Even-Toned Results"
          description="See how our clients have transformed their skin with professional peel treatments"
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Transform Your Skin?"
          subtitle="Book your consultation to discover which advanced peel is right for you"
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default AdvancedPeels;
