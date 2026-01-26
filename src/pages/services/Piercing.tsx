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
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Timer, Shield, Users, Award, Sparkles, Heart, Star, CheckCircle, Gem, ShieldCheck } from "lucide-react";
import piercingSetup from "@/assets/piercing-setup.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const relatedServices = [
  { name: "Hopi Ear Candling", href: "/hopi-ear-candling-dagenham", description: "Relaxing ear therapy for wellbeing" },
  { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Treat yourself to a glowing facial" },
  { name: "LED Light Therapy", href: "/led-light-therapy-dagenham", description: "Rejuvenate and heal your skin" },
];

const testimonials = [
  { quote: "Brought my daughter for her first ear piercing. The staff were so gentle and patient with her. Healed perfectly!", initials: "RS", treatment: "Ear Piercing", rating: 5 },
  { quote: "So much better than going to a mall kiosk. Clean, professional, and the earrings are beautiful quality.", initials: "AJ", treatment: "Ear Piercing", rating: 5 },
];

const Piercing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Ear Piercing Dagenham",
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
    "description": "Professional ear piercing in Dagenham using sterile techniques and hypoallergenic jewelry. Safe piercing for all ages in a clinical environment.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "5-10 min", label: "Quick Procedure", icon: Timer },
    { value: "Sterile", label: "Clinical Environment", icon: Shield },
    { value: "All Ages", label: "Children Welcome", icon: Users },
    { value: "Quality", label: "Jewelry Included", icon: Award },
  ];

  const whatIsContent = [
    "Ear piercing should be performed in a clean, clinical environment by trained professionals. At Laser Light Skin Clinic, we offer safe, hygienic ear piercing for all ages using sterile techniques and high-quality, hypoallergenic jewelry.",
    "Unlike mall kiosks or high-street stores, we operate in a medical clinic setting with strict hygiene protocols. All equipment is sterile and single-use, minimizing the risk of infection or complications.",
    "We offer a range of beautiful starter earrings in surgical steel, titanium, and gold. Our trained staff will guide you through proper aftercare to ensure your piercing heals perfectly."
  ];

  const benefits = [
    {
      title: "Clinical Sterility",
      description: "Piercing performed in a medical clinic environment with hospital-grade hygiene standards.",
      icon: ShieldCheck
    },
    {
      title: "Professional Training",
      description: "All piercings performed by trained staff who understand anatomy and safety protocols.",
      icon: Star
    },
    {
      title: "Quality Jewelry",
      description: "Hypoallergenic starter earrings in surgical steel, titanium, or gold included in the price.",
      icon: Gem
    },
    {
      title: "Child-Friendly",
      description: "Experienced with children of all ages. Patient, gentle approach to make it a positive experience.",
      icon: Heart
    },
    {
      title: "Aftercare Support",
      description: "Detailed aftercare instructions and support if you have any questions during healing.",
      icon: CheckCircle
    },
    {
      title: "Multiple Positions",
      description: "Lobe, helix, and other ear positions available. Discuss options during your appointment.",
      icon: Sparkles
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Choose Your Earrings",
      description: "Select from our range of hypoallergenic starter earrings in various styles and metals."
    },
    {
      number: 2,
      title: "Mark the Position",
      description: "We carefully mark the desired position and confirm you're happy with the placement."
    },
    {
      number: 3,
      title: "Quick Piercing",
      description: "Using sterile, single-use equipment, the piercing is performed quickly and safely."
    },
    {
      number: 4,
      title: "Aftercare Instructions",
      description: "We provide detailed aftercare guidance and a cleaning solution to ensure proper healing."
    }
  ];

  const pricingData = [
    { area: "Single Lobe Piercing", singleSession: "£15", course: "N/A", savings: "Includes earring" },
    { area: "Both Lobes", singleSession: "£25", course: "N/A", savings: "Includes earrings" },
    { area: "Single Helix/Cartilage", singleSession: "£25", course: "N/A", savings: "Includes earring" },
    { area: "Upgrade to Gold Studs", singleSession: "+£10", course: "N/A", savings: "" },
    { area: "Aftercare Solution", singleSession: "£5", course: "N/A", savings: "Included with piercing" },
  ];

  const idealCandidates = [
    "Children (any age) getting first ear piercing",
    "Adults wanting new piercings",
    "Those who want a clinical, sterile environment",
    "People with sensitive skin needing hypoallergenic jewelry",
    "Anyone wanting professional piercing with proper aftercare",
    "Those wanting helix or cartilage piercings"
  ];

  const considerations = [
    {
      title: "Under 16s",
      description: "Parental consent and presence required for all piercings on under-16s."
    },
    {
      title: "Metal Allergies",
      description: "Please inform us of any known metal allergies. We offer titanium for sensitive individuals."
    },
    {
      title: "Healing Time",
      description: "Lobe piercings take 6-8 weeks to heal. Cartilage takes 3-6 months. Follow aftercare carefully."
    }
  ];

  const phases = [
    {
      phase: "Before Piercing",
      icon: "before" as const,
      items: [
        "Eat a meal beforehand",
        "Choose your earring style",
        "Bring ID if under 16 (with parent)"
      ]
    },
    {
      phase: "During Piercing",
      icon: "during" as const,
      items: [
        "Position marked and confirmed",
        "Quick pinch sensation",
        "Completed in seconds"
      ]
    },
    {
      phase: "After Piercing",
      icon: "after" as const,
      items: [
        "Slight tenderness for a few days",
        "Clean twice daily with solution",
        "Avoid touching or rotating earrings"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "Day 1-3", result: "Slight tenderness and redness" },
    { session: "Week 1-2", result: "Initial healing, continue aftercare" },
    { session: "Week 6-8", result: "Lobe piercings healed, can change earrings" }
  ];

  const faqs = [
    {
      question: "Does ear piercing hurt?",
      answer: "You'll feel a quick pinch that lasts less than a second. Most people, including children, find it very manageable. The anticipation is usually worse than the actual piercing!"
    },
    {
      question: "What age can children be pierced?",
      answer: "We pierce children of any age. For young children, we recommend waiting until they can understand basic aftercare. Parental consent and presence is required for under-16s."
    },
    {
      question: "How long until I can change earrings?",
      answer: "Lobe piercings: 6-8 weeks. Cartilage piercings: 3-6 months. Changing earrings too soon can cause infection or the hole to close."
    },
    {
      question: "What if I'm allergic to metals?",
      answer: "We offer hypoallergenic options including surgical steel and titanium, which are safe for most metal sensitivities. Please inform us of any known allergies."
    },
    {
      question: "How do I care for a new piercing?",
      answer: "Clean twice daily with the provided saline solution. Avoid touching the piercing, sleeping on it, or submerging it in pools/baths until healed."
    },
    {
      question: "Is it safer than a piercing gun?",
      answer: "We use modern piercing systems that are sterile and single-use. Unlike traditional guns, our equipment can be fully sterilized between uses, reducing infection risk."
    },
    {
      question: "Can I get multiple piercings in one session?",
      answer: "Yes, we can do both ears and even add a helix piercing in one visit. We'll discuss placement and healing considerations."
    },
    {
      question: "What if my piercing gets infected?",
      answer: "Signs of infection include increasing pain, excessive swelling, and discharge. Contact us or see a doctor if you're concerned. Most issues are avoided with proper aftercare."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Professional Ear Piercing Dagenham | Safe, Sterile | All Ages"
        description="Professional ear piercing in Dagenham in a clean, clinical environment. Safe for all ages, hypoallergenic jewelry included. Both lobes just £25. Book today!"
        canonicalUrl="https://laserlightskinclinic.co.uk/ear-piercing-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Clinical Piercing Environment"
          title="Professional Ear Piercing in Dagenham"
          titleAccent="Dagenham"
          subtitle="Safe, Sterile Piercing for All Ages"
          description="Get your ears pierced in a clean, clinical environment by trained professionals. Hypoallergenic jewelry included."
          badge="Both Lobes Just £25"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Ear Piercing" }
          ]}
          stats={[
            { value: "5-10", label: "Minutes" },
            { value: "Sterile", label: "Procedure" },
            { value: "All Ages", label: "Welcome" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="Why Choose Professional Piercing?"
          content={whatIsContent}
          highlightText="Unlike mall kiosks, we operate in a medical clinic with hospital-grade hygiene standards for safe, infection-free piercing."
        />
        
        <BenefitsList
          title="The Clinical Difference"
          subtitle="Why parents and adults choose our clinic"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Piercing Process"
          subtitle="Quick, safe, and pain-free experience"
          steps={steps}
        />
        
        <section id="pricing" className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-foreground mb-4">Ear Piercing Pricing</h2>
              <p className="font-body text-lg text-muted-foreground">
                All prices include hypoallergenic starter earrings
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <PricingTable title="" prices={pricingData} />
            </div>
          </div>
        </section>
        
        <WhoIsThisFor
          title="Who Can Get Pierced?"
          intro="Our piercing service is suitable for:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Ear Piercing FAQs"
          subtitle="Common questions from parents and adults"
          faqs={faqs}
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Get Pierced?"
          subtitle="Book your appointment for safe, professional ear piercing in a clinical environment."
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default Piercing;
