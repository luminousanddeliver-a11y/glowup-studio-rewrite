import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { HowItWorks } from "@/components/services/HowItWorks";
import { TabbedPricingTable } from "@/components/services/TabbedPricingTable";
import { WhoIsThisFor } from "@/components/services/WhoIsThisFor";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ResultsShowcase } from "@/components/services/ResultsShowcase";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { Timer, Shield, Users, Award, Sparkles, Heart, Sun, Droplets, Gem, Star } from "lucide-react";
import facialsSetup from "@/assets/facials-setup.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const Facials = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Facials Dagenham - Million Dollar Facial",
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
    "description": "Luxury professional facials in Dagenham including the famous Million Dollar Facial. Deep cleansing, anti-aging, and bespoke treatments for all skin types.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "45-90 min", label: "Luxurious Experience", icon: Timer },
    { value: "Bespoke", label: "Tailored to Your Skin", icon: Shield },
    { value: "All Skin Types", label: "Men & Women", icon: Users },
    { value: "Premium", label: "Professional Products", icon: Award },
  ];

  const whatIsContent = [
    "Our professional facials go far beyond what you can achieve at home. Using clinical-grade products and expert techniques, we deliver deep cleansing, exfoliation, extraction, and nourishment tailored to your specific skin needs.",
    "From our signature deep cleansing facials to the celebrity-favorite Million Dollar Facial, each treatment is customized after a thorough skin analysis. We use premium professional skincare lines that deliver visible results.",
    "Whether you're preparing for a special event, managing specific skin concerns, or simply want to maintain healthy, glowing skin, our qualified aestheticians will create the perfect treatment for you."
  ];

  const benefits = [
    {
      title: "Million Dollar Facial",
      description: "The celebrity favorite! Combines microdermabrasion, oxygen therapy, and LED for a red-carpet glow. Instant lifting and luminosity.",
      icon: Gem
    },
    {
      title: "Deep Cleansing Facial",
      description: "Thorough pore cleansing with professional extraction. Perfect for congested, oily, or acne-prone skin.",
      icon: Droplets
    },
    {
      title: "Anti-Aging Facial",
      description: "Targeted treatment using peptides, retinoids, and lifting massage techniques to firm, smooth, and rejuvenate.",
      icon: Sparkles
    },
    {
      title: "Hydrating Facial",
      description: "Intense moisture replenishment for dry, dehydrated, or dull skin. Plumps and revives tired complexions.",
      icon: Heart
    },
    {
      title: "Brightening Facial",
      description: "Vitamin C, acids, and brightening agents target hyperpigmentation and uneven skin tone for luminous results.",
      icon: Sun
    },
    {
      title: "Gentleman's Facial",
      description: "Tailored specifically for men's skin. Addresses ingrown hairs, razor burn, and masculine skincare needs.",
      icon: Star
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Skin Analysis & Consultation",
      description: "We examine your skin under magnification, discuss your concerns, and customize your treatment protocol."
    },
    {
      number: 2,
      title: "Double Cleanse & Exfoliation",
      description: "Remove makeup, oil, and debris. Professional exfoliation reveals fresh, receptive skin."
    },
    {
      number: 3,
      title: "Treatment & Massage",
      description: "Targeted serums, masks, and techniques address your specific concerns. Relaxing massage improves circulation."
    },
    {
      number: 4,
      title: "Finishing & Protection",
      description: "Hydrating products, SPF, and personalized home care recommendations to maintain results."
    }
  ];

  const pricingTabs = [
    {
      label: "Signature Facials",
      prices: [
        { area: "Express Glow (30 min)", singleSession: "£45", course: "£240 (6)", savings: "Save £30" },
        { area: "Classic Deep Cleanse (60 min)", singleSession: "£75", course: "£400 (6)", savings: "Save £50" },
        { area: "Luxury Anti-Aging (75 min)", singleSession: "£95", course: "£510 (6)", savings: "Save £60" },
        { area: "Million Dollar Facial (90 min)", singleSession: "£150", course: "£800 (6)", savings: "Save £100" },
      ]
    },
    {
      label: "Targeted Facials",
      prices: [
        { area: "Acne Clarifying (60 min)", singleSession: "£80", course: "£430 (6)", savings: "Save £50" },
        { area: "Brightening (60 min)", singleSession: "£85", course: "£460 (6)", savings: "Save £50" },
        { area: "Sensitive Skin Calm (60 min)", singleSession: "£80", course: "£430 (6)", savings: "Save £50" },
        { area: "Hydration Boost (60 min)", singleSession: "£75", course: "£400 (6)", savings: "Save £50" },
      ]
    },
    {
      label: "Men's Facials",
      prices: [
        { area: "Gentleman's Express (30 min)", singleSession: "£50", course: "£270 (6)", savings: "Save £30" },
        { area: "Gentleman's Deep Cleanse (60 min)", singleSession: "£80", course: "£430 (6)", savings: "Save £50" },
        { area: "Executive Rejuvenation (75 min)", singleSession: "£100", course: "£540 (6)", savings: "Save £60" },
      ]
    }
  ];

  const idealCandidates = [
    "Want to maintain healthy, glowing skin",
    "Have specific concerns like acne, aging, or dullness",
    "Preparing for a special event",
    "Need professional extraction and deep cleansing",
    "Want expert skincare advice and recommendations",
    "Appreciate a relaxing, pampering experience"
  ];

  const considerations = [
    {
      title: "Active Skin Infections",
      description: "We cannot treat active cold sores, impetigo, or other infections. Please reschedule if affected."
    },
    {
      title: "Recent Procedures",
      description: "Inform us of any recent injectables, peels, or laser treatments as timing adjustments may be needed."
    },
    {
      title: "Pregnancy",
      description: "Many facials are safe during pregnancy. We'll customize products to avoid certain ingredients."
    }
  ];

  const phases = [
    {
      phase: "Before Your Facial",
      icon: "before" as const,
      items: [
        "Arrive with clean or made-up skin",
        "Avoid waxing 48 hours before",
        "No retinoids 2-3 days before if having extractions"
      ]
    },
    {
      phase: "During Your Facial",
      icon: "during" as const,
      items: [
        "Relax in our comfortable treatment room",
        "Multiple steps customized to your skin",
        "Facial massage included for relaxation"
      ]
    },
    {
      phase: "After Your Facial",
      icon: "after" as const,
      items: [
        "Immediate glow and improved texture",
        "Mild redness possible for 1-2 hours",
        "Avoid heavy makeup for 12 hours if possible"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Immediately", result: "Glowing, fresh complexion" },
    { session: "24-48 hours", result: "Skin settles, peak radiance" },
    { session: "Monthly treatments", result: "Cumulative skin health improvement" }
  ];

  const faqs = [
    {
      question: "How often should I have a facial?",
      answer: "For optimal skin health, we recommend a professional facial every 4-6 weeks, aligned with your skin's natural renewal cycle. More frequent treatments may be recommended for specific concerns."
    },
    {
      question: "What is the Million Dollar Facial?",
      answer: "The Million Dollar Facial is a multi-step treatment combining microdermabrasion, oxygen infusion, LED therapy, and luxury products. It delivers instant lifting, hydration, and luminosity—the ultimate red-carpet treatment."
    },
    {
      question: "Will extractions cause breakouts?",
      answer: "Professional extraction actually prevents breakouts by removing blockages before they become inflamed. You may experience minor purging of existing congestion, but this clears quickly."
    },
    {
      question: "Can I wear makeup after a facial?",
      answer: "We recommend waiting 12 hours if possible to let your skin breathe and absorb the treatment benefits. If necessary, mineral makeup is gentler on freshly treated skin."
    },
    {
      question: "Do you offer facials for men?",
      answer: "Absolutely! Our Gentleman's facials are specifically designed for men's skin, addressing concerns like ingrown hairs, oiliness, and razor irritation."
    },
    {
      question: "Are facials suitable for sensitive skin?",
      answer: "Yes, we offer specialized treatments for sensitive and reactive skin using calming, gentle products. Please mention any sensitivities during your consultation."
    },
    {
      question: "What products do you use?",
      answer: "We use professional-grade skincare lines with clinically proven ingredients. Products are selected based on your specific skin type and concerns."
    },
    {
      question: "How long do results last?",
      answer: "The immediate glow lasts several days. For lasting skin health improvement, regular monthly treatments combined with a good home care routine are recommended."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Professional Facials Dagenham | Million Dollar Facial | Book Now"
        description="Luxury professional facials in Dagenham including the famous Million Dollar Facial. Deep cleansing, anti-aging, and bespoke treatments from £45. Book today!"
        canonicalUrl="https://laserlightskinclinic.co.uk/facials-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Premium Skincare Experience"
          title="Professional Facials in Dagenham"
          titleAccent="Dagenham"
          subtitle="Including the Famous Million Dollar Facial"
          description="Bespoke treatments tailored to your skin's unique needs. From deep cleansing to red-carpet luxury, experience professional skincare at its finest."
          badge="From £45"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Facials" }
          ]}
          stats={[
            { value: "45-90", label: "Minutes" },
            { value: "Bespoke", label: "Treatment" },
            { value: "Premium", label: "Products" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="Why Choose Professional Facials?"
          content={whatIsContent}
          highlightText="Every facial begins with a thorough skin analysis to ensure your treatment is perfectly tailored to your unique needs."
        />
        
        <BenefitsList
          title="Our Facial Treatments"
          subtitle="From express glow-ups to luxury transformations"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Facial Experience"
          subtitle="A luxurious journey for your skin"
          steps={steps}
        />
        
        <div className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-foreground mb-6">The Million Dollar Facial</h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                As seen on celebrities and featured in Vogue, Tatler, and Harper's Bazaar. This 90-minute 
                treatment combines the most advanced techniques for instant, visible results:
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Microdermabrasion", desc: "Crystal-free exfoliation for smooth skin" },
                  { step: "2", title: "Oxygen Therapy", desc: "Infuses skin with pure oxygen" },
                  { step: "3", title: "LED Light", desc: "Stimulates collagen production" },
                  { step: "4", title: "Luxury Mask", desc: "24K gold or collagen mask" },
                ].map((item) => (
                  <div key={item.step} className="bg-card p-6 rounded-lg shadow-card">
                    <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-heading font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <TabbedPricingTable
          title="Facial Pricing"
          subtitle="Invest in your skin with our range of professional treatments"
          tabs={pricingTabs}
          offerBanner={{
            highlight: "25% OFF FOR NEW CLIENTS",
            text: "On Your First Facial"
          }}
          paymentOptions="Course packages offer excellent value for ongoing skin health."
          disclaimer="All facials include skin analysis and personalized home care recommendations."
        />
        
        <WhoIsThisFor
          title="Who Should Book a Facial?"
          intro="Professional facials benefit everyone who wants to maintain healthy, beautiful skin:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Facial FAQs"
          subtitle="Common questions about our facial treatments"
          faqs={faqs}
        />
        
        <ServiceTestimonial 
          testimonials={[
            { quote: "The Million Dollar Facial is worth every penny! My skin was glowing for days.", initials: "LT", treatment: "Million Dollar Facial", rating: 5 },
            { quote: "I've tried facials everywhere but nothing compares. The deep cleanse is incredible.", initials: "NC", treatment: "Deep Cleansing Facial", rating: 5 }
          ]} 
        />
        
        <ResultsShowcase
          title="Glowing Results"
          description="Our clients leave with radiant, refreshed skin. Book your facial and experience the difference."
        />
        
        <RelatedServices 
          services={[
            { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Our most popular facial treatment" },
            { name: "Chemical Peels", href: "/chemical-peels-dagenham", description: "For deeper skin renewal" },
            { name: "LED Light Therapy", href: "/led-light-therapy-dagenham", description: "Add LED for enhanced results" }
          ]}
        />
        
        <ServiceCTA
          title="Ready for Your Glow-Up?"
          subtitle="Book a facial consultation and let us create the perfect treatment for your skin."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Facials;
