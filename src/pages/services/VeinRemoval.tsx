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
import { Timer, Shield, Users, Award, CheckCircle, Target, Zap, Eye, Heart, RefreshCw } from "lucide-react";
import veinDevice from "@/assets/vein-removal-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const VeinRemoval = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Red Vein, Thread Vein & Spider Vein Removal Dagenham",
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
    "description": "Professional thread vein and spider vein removal in Dagenham using advanced laser and IPL technology. Safe, effective treatment for facial and leg veins.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "15-30 min", label: "Quick Treatment", icon: Timer },
    { value: "1-3 Sessions", label: "Typical Course", icon: Shield },
    { value: "Immediate", label: "Visible Results", icon: Users },
    { value: "Minimal", label: "Downtime", icon: Award },
  ];

  const whatIsContent = [
    "Thread veins (also called spider veins or telangiectasia) are small, dilated blood vessels visible near the skin's surface. They commonly appear on the face (especially around the nose and cheeks) and on the legs. While harmless, many people find them cosmetically bothersome.",
    "Our advanced laser and IPL treatments target the hemoglobin in these visible veins. The light energy heats and damages the vessel walls, causing them to collapse and be gradually absorbed by the body. The result is clearer, more even-toned skin.",
    "Treatment is quick, relatively comfortable, and highly effective. Most clients see significant improvement after just 1-3 sessions, depending on the size and number of veins being treated."
  ];

  const benefits = [
    {
      title: "Facial Thread Veins",
      description: "Clear visible veins on the nose, cheeks, and chin. Restore an even complexion without visible blood vessels.",
      icon: Eye
    },
    {
      title: "Leg Spider Veins",
      description: "Reduce the appearance of small spider veins on the legs for smoother, clearer skin.",
      icon: Target
    },
    {
      title: "Red Vein Treatment",
      description: "Target broken capillaries and red veins caused by aging, sun damage, or rosacea.",
      icon: Heart
    },
    {
      title: "Quick Results",
      description: "Many veins show immediate darkening and fade within days to weeks. Optimal results after 1-3 sessions.",
      icon: Zap
    },
    {
      title: "Minimal Downtime",
      description: "Return to normal activities immediately. Some temporary redness in the treated area is normal.",
      icon: RefreshCw
    },
    {
      title: "Long-Lasting",
      description: "Treated veins are permanently destroyed. New veins may develop over time but can be retreated.",
      icon: CheckCircle
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consultation & Assessment",
      description: "We examine your veins, discuss your goals, and determine the most effective treatment approach for your specific type of veins."
    },
    {
      number: 2,
      title: "Treatment Session",
      description: "Protective eyewear is worn. The laser or IPL handpiece is applied to target each vein with precise pulses of light."
    },
    {
      number: 3,
      title: "Immediate Response",
      description: "Treated veins typically darken immediately as the blood coagulates. This is a sign of effective treatment."
    },
    {
      number: 4,
      title: "Gradual Fading",
      description: "Over 2-6 weeks, the body reabsorbs the treated veins. Follow-up sessions treat any remaining vessels."
    }
  ];

  const technologyFeatures = [
    "Nd:YAG laser for deeper veins",
    "IPL for superficial spider veins",
    "Precise targeting minimizes surrounding tissue damage",
    "Integrated cooling for comfort",
    "Adjustable settings for different vein sizes",
    "Safe for all skin types with proper protocols"
  ];

  const pricingTabs = [
    {
      label: "Facial Veins",
      prices: [
        { area: "Small Area (nose tip)", singleSession: "£80", course: "£200 (3)", savings: "Save £40" },
        { area: "Medium Area (nose/cheeks)", singleSession: "£120", course: "£300 (3)", savings: "Save £60" },
        { area: "Large Area (full face)", singleSession: "£180", course: "£450 (3)", savings: "Save £90" },
      ]
    },
    {
      label: "Leg Veins",
      prices: [
        { area: "Small Cluster", singleSession: "£100", course: "£250 (3)", savings: "Save £50" },
        { area: "Half Lower Leg", singleSession: "£200", course: "£500 (3)", savings: "Save £100" },
        { area: "Full Lower Leg", singleSession: "£350", course: "£875 (3)", savings: "Save £175" },
      ]
    },
    {
      label: "Body",
      prices: [
        { area: "Small Area", singleSession: "£100", course: "£250 (3)", savings: "Save £50" },
        { area: "Medium Area", singleSession: "£150", course: "£375 (3)", savings: "Save £75" },
        { area: "Large Area", singleSession: "£250", course: "£625 (3)", savings: "Save £125" },
      ]
    }
  ];

  const idealCandidates = [
    "Have visible thread veins on face or body",
    "Bothered by spider veins on legs",
    "Have broken capillaries from rosacea or sun damage",
    "Are in general good health",
    "Have realistic expectations about outcomes",
    "Are not currently pregnant"
  ];

  const considerations = [
    {
      title: "Larger Varicose Veins",
      description: "Thread vein treatment is for small superficial veins only. Larger varicose veins require different treatment."
    },
    {
      title: "Tanned Skin",
      description: "Treatment is most effective on non-tanned skin. Avoid sun exposure before treatment."
    },
    {
      title: "Blood Clotting Disorders",
      description: "Please inform us of any blood clotting conditions or anticoagulant medications."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "Avoid sun exposure for 2 weeks",
        "No fake tan on treatment area",
        "Inform us of any medications"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Protective eyewear worn",
        "Sensation like rubber band snapping",
        "Cooling gel or device for comfort"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Veins appear darker initially",
        "Mild redness for 1-2 hours",
        "Veins fade over 2-6 weeks"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Immediately", result: "Treated veins darken" },
    { session: "1-2 weeks", result: "Veins begin to fade" },
    { session: "4-6 weeks", result: "Optimal results visible, assess for follow-up" }
  ];

  const faqs = [
    {
      question: "How many sessions will I need?",
      answer: "Most clients need 1-3 sessions depending on the number and size of veins. Smaller, superficial veins may clear in one session. Larger or numerous veins typically need multiple treatments."
    },
    {
      question: "Does vein removal hurt?",
      answer: "You'll feel a snapping sensation similar to a rubber band against the skin. Most people find it very tolerable. We use cooling to minimize discomfort."
    },
    {
      question: "Will the veins come back?",
      answer: "Treated veins are permanently destroyed and won't return. However, new veins can develop over time due to aging, hormones, or lifestyle factors. These can be treated as they appear."
    },
    {
      question: "Is there any downtime?",
      answer: "Minimal. You may have redness for a few hours and the treated veins will look darker for a week or two before fading. Most people return to normal activities immediately."
    },
    {
      question: "Can you treat veins on the legs?",
      answer: "Yes, we treat small spider veins on the legs. Larger varicose veins require different treatment methods and may need referral to a vascular specialist."
    },
    {
      question: "Is it safe for all skin types?",
      answer: "Yes, with appropriate settings and protocols. We adjust the treatment parameters based on your skin type to ensure safety and effectiveness."
    },
    {
      question: "When will I see results?",
      answer: "Veins typically darken immediately after treatment. Over the following 2-6 weeks, they gradually fade as the body reabsorbs them."
    },
    {
      question: "Can I treat facial veins caused by rosacea?",
      answer: "Yes, we can effectively treat the visible blood vessels associated with rosacea. This can significantly improve the appearance of rosacea-affected skin."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Red Vein & Spider Vein Removal Dagenham | Thread Vein Treatment | Book Now"
        description="Professional red vein, thread vein and spider vein removal in Dagenham. Advanced laser treatment for facial and leg veins. Results in 1-3 sessions. Book consultation!"
        canonicalUrl="https://laserlightskinclinic.co.uk/vein-removal-east-london"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Advanced Vascular Laser"
          title="Red Vein & Spider Vein Removal in East London"
          titleAccent="East London"
          subtitle="Clear Thread Veins, Red Veins & Broken Capillaries"
          description="Advanced laser technology targets and eliminates visible thread veins on face and body. Quick, effective treatment with minimal downtime."
          badge="Results in 1-3 Sessions"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Vein Removal" }
          ]}
          stats={[
            { value: "15-30", label: "Minutes" },
            { value: "1-3", label: "Sessions" },
            { value: "Minimal", label: "Downtime" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="What Are Thread Veins?"
          content={whatIsContent}
          highlightText="Our advanced laser targets the blood vessel without damaging surrounding skin, causing treated veins to gradually fade and disappear."
        />
        
        <BenefitsList
          title="What We Can Treat"
          subtitle="Effective solutions for visible blood vessels"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Vein Removal Process"
          subtitle="Quick, effective treatment in 4 steps"
          steps={steps}
        />
        
        <TechnologySection
          title="Advanced Vascular Laser Technology"
          subtitle="Precision targeting for effective vein removal"
          technologyName="Vascular Laser System"
          description="Our laser system emits specific wavelengths that are absorbed by hemoglobin in blood vessels. This selective targeting heats and collapses the vessel walls without damaging surrounding tissue, allowing the body to naturally reabsorb the treated vein."
          features={technologyFeatures}
          certifications={["CE Marked", "Medical Grade", "Safe for All Skin Types"]}
          deviceImage={veinDevice}
        />
        
        <TabbedPricingTable
          title="Vein Removal Pricing"
          subtitle="Investment in clearer, more even-toned skin"
          tabs={pricingTabs}
          offerBanner={{
            highlight: "FREE CONSULTATION",
            text: "Book Your Vein Assessment"
          }}
          paymentOptions="Pay per session or save with our course packages."
          disclaimer="Pricing based on area size. Exact cost determined at consultation."
        />
        
        <WhoIsThisFor
          title="Is Vein Removal Right for You?"
          intro="Thread vein treatment is ideal for those with visible superficial blood vessels:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="Your Vein Removal Journey"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Vein Removal FAQs"
          subtitle="Common questions about thread vein treatment"
          faqs={faqs}
        />
        
        <ServiceTestimonial 
          testimonials={[
            { quote: "Had thread veins on my nose for years. Two sessions and they're completely gone!", initials: "HB", treatment: "Facial Vein Removal", rating: 5 },
            { quote: "Finally feel confident in shorts again. The leg vein treatment was so effective.", initials: "JM", treatment: "Leg Vein Treatment", rating: 5 }
          ]} 
        />
        
        <ResultsShowcase
          title="Clearer, More Even Skin"
          description="See how our clients achieve vein-free skin. Book a consultation to discuss your treatment."
        />
        
        <RelatedServices 
          services={[
            { name: "Advanced Electrolysis", href: "/advanced-electrolysis-dagenham", description: "For blood spots and spider naevi" },
            { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham", description: "Comprehensive skin improvement" },
            { name: "Laser Resurfacing", href: "/laser-resurfacing-dagenham", description: "For overall skin texture" }
          ]}
        />
        
        <ServiceCTA
          title="Ready for Clearer Skin?"
          subtitle="Book a free consultation to assess your veins and create a personalized treatment plan."
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default VeinRemoval;
