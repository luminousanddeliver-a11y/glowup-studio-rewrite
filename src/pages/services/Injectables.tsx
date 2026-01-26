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
import { Timer, Shield, Users, Award, CheckCircle, Heart, Clock, Sparkles, Target, Zap } from "lucide-react";
import injectablesDevice from "@/assets/injectables-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const Injectables = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aesthetic Injectables Dagenham - Botox, Fillers, Lemon Bottle",
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
    "description": "Professional aesthetic injectables in Dagenham including Botox, dermal fillers, Lemon Bottle fat dissolving, and Lumi Eyes. NHS-approved clinic with Level 4 qualified practitioners.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does Botox last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Botox typically lasts 3-4 months. Results may last longer with regular treatments as the muscles weaken over time."
        }
      },
      {
        "@type": "Question",
        "name": "Are dermal fillers safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when administered by qualified practitioners using premium products. We use only FDA-approved hyaluronic acid fillers that are naturally broken down by the body."
        }
      }
    ]
  };

  const quickStats = [
    { value: "15-30 min", label: "Quick Treatments", icon: Timer },
    { value: "FDA Approved", label: "Premium Products", icon: Shield },
    { value: "Level 4", label: "Qualified Practitioners", icon: Users },
    { value: "Natural Results", label: "Subtle Enhancement", icon: Award },
  ];

  const whatIsContent = [
    "Aesthetic injectables are minimally invasive treatments that use carefully placed injections to smooth wrinkles, restore volume, dissolve fat, and rejuvenate the under-eye area. At Laser Light Skin Clinic, we offer a comprehensive range of injectable treatments tailored to your individual goals.",
    "Our treatments include Anti-Wrinkle Injections (Botox) to smooth dynamic wrinkles, Dermal Fillers to add volume and contour, Lemon Bottle fat dissolving to target stubborn fat deposits, and Lumi Eyes to brighten and tighten the under-eye area.",
    "All treatments are performed by Level 4 qualified aesthetic practitioners using only premium, FDA-approved products. We prioritize natural-looking results that enhance your features without looking overdone."
  ];

  const benefits = [
    {
      title: "Anti-Wrinkle Injections (Botox)",
      description: "Smooth frown lines, crow's feet, and forehead wrinkles. Results last 3-4 months with minimal downtime.",
      icon: Sparkles
    },
    {
      title: "Dermal Fillers",
      description: "Restore volume to lips, cheeks, and jawline. Add definition and contour for a more youthful appearance.",
      icon: Heart
    },
    {
      title: "Lemon Bottle Fat Dissolving",
      description: "Non-surgical fat reduction for double chin, jowls, and body areas. Natural ingredients dissolve fat cells permanently.",
      icon: Target
    },
    {
      title: "Lumi Eyes",
      description: "Revolutionary under-eye treatment that brightens dark circles, reduces puffiness, and tightens loose skin.",
      icon: Zap
    },
    {
      title: "Quick & Convenient",
      description: "Most treatments take just 15-30 minutes. Perfect for busy schedules with minimal to no downtime.",
      icon: Clock
    },
    {
      title: "Natural Results",
      description: "Our philosophy is enhancement, not transformation. You'll look refreshed and rejuvenated, not frozen.",
      icon: CheckCircle
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We discuss your goals, assess your facial anatomy, and create a personalized treatment plan. This is completely free with no obligation."
    },
    {
      number: 2,
      title: "Treatment Session",
      description: "Topical numbing cream is applied for comfort. Your practitioner precisely places injections according to your customized plan."
    },
    {
      number: 3,
      title: "Immediate Results",
      description: "Fillers show immediate results. Botox takes 3-7 days to fully develop. Lemon Bottle results appear over 2-4 weeks."
    },
    {
      number: 4,
      title: "Follow-Up Care",
      description: "We offer a complimentary 2-week review appointment to ensure you're delighted with your results."
    }
  ];

  const technologyFeatures = [
    "Hyaluronic acid fillers - naturally broken down by the body",
    "Botulinum toxin Type A - proven safe for decades",
    "Lemon Bottle - natural ingredients including vitamin B2 and bromelain",
    "Polynucleotides for Lumi Eyes - collagen-stimulating formula",
    "Sterile, single-use products for maximum safety",
    "Precise injection techniques for natural results"
  ];

  const pricingTabs = [
    {
      label: "Botox",
      prices: [
        { area: "1 Area (e.g., frown lines)", singleSession: "£150", course: "N/A", savings: "" },
        { area: "2 Areas", singleSession: "£200", course: "N/A", savings: "" },
        { area: "3 Areas", singleSession: "£250", course: "N/A", savings: "" },
        { area: "Forehead Only", singleSession: "£100", course: "N/A", savings: "" },
      ]
    },
    {
      label: "Fillers",
      prices: [
        { area: "Lip Filler (0.5ml)", singleSession: "£150", course: "N/A", savings: "" },
        { area: "Lip Filler (1ml)", singleSession: "£250", course: "N/A", savings: "" },
        { area: "Cheek Filler (1ml)", singleSession: "£300", course: "N/A", savings: "" },
        { area: "Jawline (2ml)", singleSession: "£500", course: "N/A", savings: "" },
        { area: "Nasolabial Folds (1ml)", singleSession: "£300", course: "N/A", savings: "" },
      ]
    },
    {
      label: "Fat Dissolving",
      prices: [
        { area: "Lemon Bottle - Chin", singleSession: "£100", course: "£450 (5)", savings: "Save £50" },
        { area: "Lemon Bottle - Jowls", singleSession: "£100", course: "£450 (5)", savings: "Save £50" },
        { area: "Lemon Bottle - Body Area", singleSession: "£150", course: "£675 (5)", savings: "Save £75" },
      ]
    },
    {
      label: "Lumi Eyes",
      prices: [
        { area: "Under Eye Treatment", singleSession: "£200", course: "£550 (3)", savings: "Save £50" },
        { area: "Full Eye Area", singleSession: "£250", course: "£675 (3)", savings: "Save £75" },
      ]
    }
  ];

  const idealCandidates = [
    "Aged 25+ looking to prevent or reduce wrinkles",
    "Want to add volume to lips, cheeks, or jawline",
    "Have stubborn fat deposits under the chin or jowls",
    "Experience dark circles or under-eye hollows",
    "Want subtle, natural-looking enhancement",
    "Have realistic expectations about outcomes"
  ];

  const considerations = [
    {
      title: "Pregnancy & Breastfeeding",
      description: "Injectable treatments are not recommended during pregnancy or while breastfeeding."
    },
    {
      title: "Allergies",
      description: "Please inform us of any allergies. A patch test may be required for certain treatments."
    },
    {
      title: "Medical Conditions",
      description: "Certain conditions may affect suitability. Full medical history is taken during consultation."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "Avoid alcohol 24 hours before",
        "No blood-thinning medications for 1 week if possible",
        "Arrive with clean skin, no makeup on treatment area"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Topical numbing applied for comfort",
        "Treatment takes 15-45 minutes depending on areas",
        "Mild pinching sensation, generally well-tolerated"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Mild swelling and redness for 24-48 hours",
        "Avoid strenuous exercise for 24 hours",
        "No lying flat for 4 hours after Botox"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Botox", result: "Full results visible at day 7-14" },
    { session: "Fillers", result: "Immediate results, settle over 2 weeks" },
    { session: "Lemon Bottle", result: "Results develop over 2-4 weeks" }
  ];

  const faqs = [
    {
      question: "How long does Botox last?",
      answer: "Botox typically lasts 3-4 months. With regular treatments, results may last longer as the muscles weaken over time. We recommend maintenance treatments every 3-4 months to maintain results."
    },
    {
      question: "Are dermal fillers safe?",
      answer: "Yes, when administered by qualified practitioners using premium products. We use only FDA-approved hyaluronic acid fillers that are naturally broken down by the body over 6-18 months."
    },
    {
      question: "Will I look natural after fillers?",
      answer: "Absolutely. Our philosophy is 'enhancement, not transformation.' We use precise techniques and appropriate volumes to ensure you look refreshed and rejuvenated, never overdone."
    },
    {
      question: "Does Lemon Bottle really work?",
      answer: "Yes, Lemon Bottle is an effective fat dissolving treatment containing riboflavin, bromelain, and other natural ingredients. Results typically require 3-5 sessions and are permanent as the fat cells are destroyed."
    },
    {
      question: "Is there any downtime?",
      answer: "Most clients return to normal activities immediately. You may experience mild swelling, redness, or bruising that resolves within 24-72 hours. We advise avoiding strenuous exercise for 24 hours."
    },
    {
      question: "Can fillers be reversed?",
      answer: "Yes, hyaluronic acid fillers can be dissolved with an enzyme called hyaluronidase if needed. This is one reason we prefer HA fillers for safety."
    },
    {
      question: "At what age should I start Botox?",
      answer: "There's no specific age, but many clients start 'preventative Botox' in their mid-to-late 20s before deep lines form. We recommend treatments based on your individual concerns, not age."
    },
    {
      question: "What is Lumi Eyes?",
      answer: "Lumi Eyes is a polynucleotide treatment that stimulates collagen production under the eyes. It reduces dark circles, hollowing, fine lines, and puffiness. Results develop over 2-4 weeks and last 12+ months."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Injectables Dagenham | Botox, Fillers, Lemon Bottle | Book Free Consult"
        description="Professional aesthetic injectables in Dagenham. Botox from £150, lip fillers from £150, Lemon Bottle fat dissolving, Lumi Eyes. Level 4 qualified. Free consultation!"
        canonicalUrl="https://laserlightskinclinic.co.uk/injectables-dagenham"
        structuredData={[structuredData, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Level 4 Qualified Practitioners"
          title="Aesthetic Injectables in Dagenham"
          titleAccent="Dagenham"
          subtitle="Botox, Dermal Fillers, Lemon Bottle & Lumi Eyes"
          description="Subtle, natural-looking enhancements performed by qualified aesthetic practitioners using premium FDA-approved products."
          badge="Free Consultation Available"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Injectables" }
          ]}
          stats={[
            { value: "15-30", label: "Minutes" },
            { value: "Natural", label: "Results" },
            { value: "Premium", label: "Products" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="Our Injectable Treatments"
          content={whatIsContent}
          highlightText="From smoothing wrinkles to sculpting the perfect pout, our comprehensive range of injectables can help you achieve your aesthetic goals safely and naturally."
        />
        
        <BenefitsList
          title="Treatment Options"
          subtitle="Discover our full range of injectable treatments"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Injectable Journey"
          subtitle="From consultation to beautiful results in 4 simple steps"
          steps={steps}
        />
        
        <TechnologySection
          title="Premium Products & Techniques"
          subtitle="We use only the highest quality, FDA-approved products for safe and effective results"
          technologyName="FDA-Approved Injectables"
          description="At Laser Light Skin Clinic, we use only premium, FDA-approved products from trusted manufacturers. All treatments are performed using sterile, single-use products with precise injection techniques developed through advanced training."
          features={technologyFeatures}
          certifications={["FDA Approved", "CE Marked", "Level 4 Qualified"]}
          deviceImage={injectablesDevice}
        />
        
        <TabbedPricingTable
          title="Injectable Pricing"
          subtitle="Transparent pricing with no hidden fees. All prices include consultation."
          tabs={pricingTabs}
          offerBanner={{
            highlight: "FREE CONSULTATION",
            text: "Book Your Assessment Today"
          }}
          paymentOptions="Interest-free payment plans available on treatments over £200."
          disclaimer="Prices may vary based on individual assessment. A consultation is required before all injectable treatments."
        />
        
        <WhoIsThisFor
          title="Are Injectables Right for You?"
          intro="Injectable treatments are suitable for most adults looking for non-surgical enhancement:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect: Before, During & After"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Injectable Treatment FAQs"
          subtitle="Everything you need to know about our injectable treatments"
          faqs={faqs}
        />
        
        <ServiceTestimonial 
          testimonials={[
            { quote: "The anti-wrinkle treatment is so natural - nobody knows I've had anything done!", initials: "DK", treatment: "Anti-Wrinkle Injections", rating: 5 },
            { quote: "My lips look amazing. Subtle enhancement that really suits my face.", initials: "AR", treatment: "Lip Fillers", rating: 5 }
          ]} 
        />
        
        <ResultsShowcase
          title="Subtle, Natural Enhancements"
          description="Our clients trust us for natural-looking results that enhance their features. Book a consultation to discuss your goals."
        />
        
        <RelatedServices 
          services={[
            { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham", description: "Complement injectables with skin treatments" },
            { name: "SkinPen Microneedling", href: "/skinpen-microneedling-dagenham", description: "Boost collagen naturally" },
            { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Maintain glowing, healthy skin" }
          ]}
        />
        
        <ServiceCTA
          title="Ready for Your Transformation?"
          subtitle="Book a free, no-obligation consultation to discuss your goals and create a personalized treatment plan."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Injectables;
