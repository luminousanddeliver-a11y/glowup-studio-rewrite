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
import { Award, Sparkles, Shield, Clock, Diamond, Star, Heart, Zap } from "lucide-react";
import facialsSetup from "@/assets/facials-setup.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const relatedServices = [
  { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Deep cleansing and hydration for glowing skin" },
  { name: "LED Light Therapy", href: "/led-light-therapy-dagenham", description: "Boost collagen and reduce inflammation" },
  { name: "Chemical Peels", href: "/chemical-peels-dagenham", description: "Reveal fresh, radiant skin beneath" },
];

const testimonials = [
  { quote: "I had the Million Dollar Facial before my wedding and my skin looked absolutely incredible in every photo. Worth every penny!", initials: "SH", treatment: "Million Dollar Facial", rating: 5 },
  { quote: "Finally found a facial that actually delivers on the hype. My skin has never looked so radiant and lifted.", initials: "AM", treatment: "Million Dollar Facial", rating: 5 },
];

const MillionDollarFacial = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Million Dollar Facial Dagenham",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Laser Light Skin Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125 Becontree Ave",
        "addressLocality": "Dagenham",
        "postalCode": "RM8 2UJ",
        "addressCountry": "GB"
      },
      "telephone": "+442085981200"
    },
    "description": "Experience the Million Dollar Facial in Dagenham - the ultimate luxury skincare treatment combining microneedling, LED therapy, and oxygen infusion for red carpet-ready skin.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "350",
      "priceCurrency": "GBP",
      "description": "Million Dollar Facial from £350 per session"
    }
  };

  const stats = [
    { value: "Celebrity", label: "Favourite Treatment", icon: Star },
    { value: "90 Min", label: "Luxury Experience", icon: Clock },
    { value: "Immediate", label: "Visible Results", icon: Sparkles },
    { value: "All Skin", label: "Types Welcome", icon: Shield },
  ];

  const whatIsContent = [
    "The Million Dollar Facial is the ultimate luxury skincare treatment beloved by celebrities and A-listers worldwide. This signature 90-minute facial combines multiple advanced technologies in one transformative session, delivering red carpet-ready results that last.",
    "Developed by renowned facialist Deborah Mitchell, the Million Dollar Facial incorporates microneedling, LED light therapy, oxygenation, and medical-grade skincare to address every skin concern—from fine lines and wrinkles to dullness and uneven texture.",
    "At Laser Light Skin Clinic, we bring this exclusive treatment to Dagenham, offering our clients the same luxury experience enjoyed in high-end London clinics at accessible pricing. The result? Radiant, lifted, youthful-looking skin that turns heads."
  ];

  const benefits = [
    {
      title: "Instant Glow & Radiance",
      description: "Walk out with visibly brighter, more luminous skin. The perfect treatment before special events, weddings, or photoshoots.",
      icon: Sparkles
    },
    {
      title: "Deep Wrinkle Reduction",
      description: "Stimulate collagen production and soften fine lines with our advanced microneedling and LED technology combination.",
      icon: Diamond
    },
    {
      title: "Lifted & Toned Skin",
      description: "Experience a visible lifting effect as facial muscles are stimulated and skin firmness is restored.",
      icon: Heart
    },
    {
      title: "Pore Refinement",
      description: "Minimize the appearance of enlarged pores for a smoother, more refined complexion.",
      icon: Star
    },
    {
      title: "Deep Hydration",
      description: "Oxygen infusion delivers intense hydration to parched skin, restoring plumpness and vitality.",
      icon: Zap
    },
    {
      title: "No Downtime",
      description: "Unlike invasive procedures, you can return to your daily activities immediately with your new glow.",
      icon: Shield
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Deep Cleanse & Exfoliation",
      description: "Your skin is thoroughly cleansed and gently exfoliated to remove dead skin cells and prepare for treatment."
    },
    {
      number: 2,
      title: "Precision Microneedling",
      description: "Medical-grade microneedling creates micro-channels to boost collagen and enhance product absorption."
    },
    {
      number: 3,
      title: "LED Light Therapy",
      description: "Targeted LED wavelengths address specific concerns—red for collagen, blue for bacteria, near-infrared for healing."
    },
    {
      number: 4,
      title: "Oxygen Infusion & Serums",
      description: "Powerful serums and oxygen are infused deep into the skin for maximum hydration and nourishment."
    },
    {
      number: 5,
      title: "Luxury Mask & Finish",
      description: "A customized mask seals in the treatment, followed by SPF and finishing products for lasting protection."
    }
  ];

  const technologyFeatures = [
    "Medical-grade microneedling device",
    "Multi-wavelength LED light therapy",
    "Oxygen infusion system",
    "Signature Million Dollar serums",
    "Collagen-boosting peptides",
    "Advanced hydrating formulas"
  ];

  const prices = [
    { area: "Million Dollar Facial (90 mins)", singleSession: "£350", course: "£945 (3 sessions)" },
    { area: "Million Dollar Facial + Neck", singleSession: "£420", course: "£1,134 (3 sessions)" },
    { area: "Million Dollar Express (60 mins)", singleSession: "£250", course: "£675 (3 sessions)", note: "Perfect for maintenance" },
    { area: "Bridal Package (3 facials)", singleSession: "—", course: "£900", note: "Includes wedding day glow treatment" }
  ];

  const idealCandidates = [
    "Want immediate visible results for a special event",
    "Have dull, tired-looking skin",
    "Notice fine lines and loss of firmness",
    "Desire a luxury pampering experience",
    "Want to maintain youthful, radiant skin",
    "Prefer non-invasive anti-aging treatments"
  ];

  const considerations = [
    {
      title: "Pre-Wedding",
      description: "The perfect treatment 2-3 days before your wedding for a natural, radiant glow without any risk of reactions."
    },
    {
      title: "Mature Skin",
      description: "Excellent for addressing multiple signs of aging in one comprehensive treatment session."
    },
    {
      title: "Regular Maintenance",
      description: "Monthly treatments help maintain optimal skin health and delay the signs of aging."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Arrive with clean, makeup-free skin",
        "Avoid active skincare 48 hours prior",
        "Stay hydrated for best results"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "90-minute luxurious experience",
        "Relaxing, spa-like atmosphere",
        "Minimal discomfort throughout"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Mild redness for 1-2 hours only",
        "Immediate glow visible",
        "Apply SPF for 48 hours"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Immediately", result: "Visible glow and radiance" },
    { session: "Day 2-3", result: "Skin appears plumper and lifted" },
    { session: "Week 2-4", result: "Collagen boost becomes visible" }
  ];

  const faqs = [
    {
      question: "What makes the Million Dollar Facial different from other facials?",
      answer: "The Million Dollar Facial is a multi-step luxury treatment combining microneedling, LED therapy, oxygen infusion, and medical-grade serums. Unlike standard facials that only cleanse and moisturize, this treatment stimulates collagen, repairs at a cellular level, and delivers lasting results."
    },
    {
      question: "How long do results last?",
      answer: "You'll see immediate glow and radiance that lasts 2-3 weeks. With a course of 3 treatments, the collagen-boosting effects continue building for up to 6 months. Monthly maintenance treatments help sustain optimal results."
    },
    {
      question: "Is there any downtime?",
      answer: "No significant downtime. You may experience mild redness for 1-2 hours post-treatment, but you can apply makeup and return to normal activities immediately. It's perfect for pre-event preparation."
    },
    {
      question: "How soon before an event should I have this treatment?",
      answer: "For special events like weddings, we recommend 2-3 days before. This allows any mild redness to subside while the full glow effect develops. For maximum impact, a course of 3 treatments in the weeks leading up is ideal."
    },
    {
      question: "Is it suitable for sensitive skin?",
      answer: "Yes, the treatment is customized to your skin type. We adjust the microneedling depth and product selection for sensitive skin. However, we recommend a patch test if you have very reactive skin."
    },
    {
      question: "Can I have this treatment during pregnancy?",
      answer: "We don't recommend the Million Dollar Facial during pregnancy due to the microneedling component. Please let us know if you're pregnant or planning to become pregnant."
    },
    {
      question: "How often should I have this treatment?",
      answer: "For optimal anti-aging results, we recommend monthly treatments. For maintenance, every 6-8 weeks is sufficient. Before special events, a single treatment delivers beautiful immediate results."
    },
    {
      question: "Can I combine this with other treatments?",
      answer: "The Million Dollar Facial pairs beautifully with our LED Light Therapy and Hydrafacial treatments. Your therapist can create a customized treatment plan based on your goals."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Million Dollar Facial Dagenham | Luxury Anti-Aging | Book Now"
        description="Experience the celebrity-favourite Million Dollar Facial in Dagenham. Luxury 90-minute treatment for instant radiance, lifted skin, and deep rejuvenation. Book today!"
        canonicalUrl="https://laserlightskinclinic.co.uk/million-dollar-facial-dagenham"
        structuredData={serviceSchema}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Celebrity Favourite"
          title="Million Dollar Facial in Dagenham"
          titleAccent="Dagenham"
          subtitle="The Ultimate Luxury Skin Transformation"
          description="Experience the A-list facial loved by celebrities worldwide. 90 minutes of pure luxury combining microneedling, LED therapy, and oxygen infusion for red carpet-ready skin."
          badge="Instant Glow Results"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Million Dollar Facial" }
          ]}
          stats={[
            { value: "90", label: "Minutes" },
            { value: "Celebrity", label: "Favourite" },
            { value: "Instant", label: "Glow" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is the Million Dollar Facial?"
          content={whatIsContent}
          highlightText="The ultimate luxury facial that combines multiple advanced technologies for celebrity-worthy results in a single 90-minute session."
        />
        
        <BenefitsList
          title="Why Clients Love the Million Dollar Facial"
          subtitle="Transformative results from one luxurious treatment"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Million Dollar Experience"
          subtitle="Five steps to radiant, youthful skin"
          steps={steps}
        />
        
        <TechnologySection
          title="Cutting-Edge Technology"
          subtitle="Multiple modalities in one transformative treatment"
          technologyName="Million Dollar Facial System"
          description="This signature treatment combines the latest in skincare technology—medical-grade microneedling, multi-wavelength LED light therapy, oxygen infusion, and exclusive serums—to deliver comprehensive skin rejuvenation in one session."
          features={technologyFeatures}
          certifications={["Award-Winning", "Celebrity Endorsed", "Medical Grade"]}
          deviceImage={facialsSetup}
        />
        
        <div id="pricing">
          <PricingTable
            title="Million Dollar Facial Pricing"
            subtitle="Investment in luxury skin transformation"
            prices={prices}
            disclaimer="Course packages recommended for maximum anti-aging benefits. New clients receive 25% off first treatment."
          />
        </div>
        
        <WhoIsThisFor
          title="Is the Million Dollar Facial Right for You?"
          intro="This luxury treatment is perfect if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Million Dollar Facial FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Red Carpet-Ready Results"
          description="Join our clients who achieve celebrity-worthy skin with the Million Dollar Facial"
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready for Your Million Dollar Moment?"
          subtitle="Book your luxury facial experience and discover why celebrities swear by this treatment"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default MillionDollarFacial;
