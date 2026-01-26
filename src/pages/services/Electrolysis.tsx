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
import { Award, Target, Palette, CheckCircle } from "lucide-react";
import electrolysisDevice from "@/assets/electrolysis-device.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const Electrolysis = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Electrolysis Hair Removal Dagenham",
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
    "description": "Permanent electrolysis hair removal in Dagenham. The only FDA-approved permanent hair removal for all hair colors including grey and blonde.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"],
    "offers": {
      "@type": "Offer",
      "price": "30",
      "priceCurrency": "GBP",
      "description": "Electrolysis from £30 per 15 minutes"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is electrolysis truly permanent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, electrolysis is the only FDA-approved method of permanent hair removal. Once a hair follicle is destroyed, it cannot regrow. Multiple sessions are needed to treat all hairs in their growth phase."
        }
      },
      {
        "@type": "Question",
        "name": "Can electrolysis remove grey and blonde hair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Unlike laser which targets melanin (pigment), electrolysis destroys the hair follicle directly. This makes it effective on all hair colors including grey, blonde, white, and red."
        }
      },
      {
        "@type": "Question",
        "name": "Does electrolysis hurt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients describe electrolysis as a slight pricking or stinging sensation. Modern electrolysis equipment has significantly reduced discomfort. We can apply numbing cream for sensitive areas."
        }
      },
      {
        "@type": "Question",
        "name": "How long does electrolysis take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessions are booked in 15-minute increments. Small areas like upper lip may take 15-30 minutes. Larger areas or denser hair may require longer sessions or multiple appointments."
        }
      }
    ]
  };

  const stats = [
    { value: "FDA", label: "Approved Permanent", icon: Award },
    { value: "All Colors", label: "Including Grey", icon: Palette },
    { value: "Precision", label: "Hair by Hair", icon: Target },
    { value: "Truly", label: "Permanent", icon: CheckCircle },
  ];

  const whatIsContent = [
    "Electrolysis is the only FDA-approved method of permanent hair removal. It works by inserting a tiny probe into each hair follicle and delivering a small electrical current that destroys the growth cells. Once a follicle is properly treated, it cannot produce new hair.",
    "Unlike laser hair removal, which targets melanin (pigment) in the hair, electrolysis works on any hair color—including grey, blonde, white, and red hair that laser cannot effectively treat. This makes it the ideal solution for areas where hair has lost its pigment.",
    "At Laser Light Skin Clinic, our qualified electrologist uses advanced equipment for precision treatment with minimal discomfort. We recommend electrolysis for small areas, light-colored hair, or as a 'finishing' treatment after laser to address remaining hairs."
  ];

  const benefits = [
    {
      title: "Truly Permanent Results",
      description: "The only FDA-approved permanent hair removal method. Once a follicle is destroyed, hair cannot regrow from that follicle."
    },
    {
      title: "Works on All Hair Colors",
      description: "Effective on grey, blonde, white, and red hair that laser cannot treat. Perfect for areas where hair has lost pigment."
    },
    {
      title: "Precision Treatment",
      description: "Each hair is treated individually, making it ideal for shaping eyebrows, hairlines, or treating small, defined areas."
    },
    {
      title: "Safe for All Skin Types",
      description: "Because electrolysis doesn't target melanin, it's safe for all skin types and colors with no risk of pigmentation changes."
    },
    {
      title: "Any Body Area",
      description: "Can be used on any part of the body and face, including sensitive areas like eyebrows and bikini line."
    },
    {
      title: "Finishes What Laser Started",
      description: "Ideal for treating the remaining hairs after a course of laser hair removal—especially stubborn or light-colored hairs."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We assess your hair type, skin type, and treatment area. We'll explain the process and estimate the number of sessions needed."
    },
    {
      number: 2,
      title: "Preparation",
      description: "The treatment area is cleansed. Numbing cream can be applied for sensitive areas. Hair should be visible (not shaved)."
    },
    {
      number: 3,
      title: "Treatment",
      description: "A tiny probe is inserted into each hair follicle. A brief electrical current destroys the growth cells. The hair is then removed."
    },
    {
      number: 4,
      title: "Aftercare",
      description: "Mild redness may occur for a few hours. Avoid touching the area and apply soothing products as advised."
    },
    {
      number: 5,
      title: "Follow-up Sessions",
      description: "Multiple sessions are needed to catch hairs in their growth phase. Sessions are typically weekly or bi-weekly."
    }
  ];

  const prices = [
    { area: "15 Minutes", singleSession: "£30", course: "£135 (6 sessions)" },
    { area: "30 Minutes", singleSession: "£50", course: "£225 (6 sessions)" },
    { area: "45 Minutes", singleSession: "£70", course: "£315 (6 sessions)" },
    { area: "60 Minutes", singleSession: "£90", course: "£405 (6 sessions)" },
    { area: "Consultation", singleSession: "Free", course: "-", note: "Includes treatment plan" }
  ];

  const idealCandidates = [
    "Have grey, blonde, white, or red hair",
    "Want truly permanent hair removal",
    "Need precision work (eyebrows, hairline)",
    "Have completed laser but have remaining hairs",
    "Are not suitable candidates for laser",
    "Want to treat small, defined areas"
  ];

  const considerations = [
    {
      title: "Grey & Light Hair",
      description: "If your hair has lost pigment or is naturally blonde/red, electrolysis is your only option for permanent removal."
    },
    {
      title: "Post-Laser Finishing",
      description: "After laser has reduced most hair, electrolysis can permanently remove the remaining stubborn or light-colored hairs."
    },
    {
      title: "Precision Areas",
      description: "For eyebrow shaping, hairline definition, or treating individual unwanted hairs, electrolysis offers unmatched precision."
    }
  ];

  const phases: Array<{ phase: string; icon: "before" | "during" | "after"; items: string[] }> = [
    {
      phase: "Before Treatment",
      icon: "before",
      items: [
        "Do not shave—hair must be visible",
        "Avoid caffeine on treatment day",
        "Cleanse treatment area"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during",
      items: [
        "Sessions in 15-minute blocks",
        "Slight pricking sensation",
        "Each hair treated individually"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after",
      items: [
        "Mild redness for a few hours",
        "Avoid touching treated area",
        "Return weekly/bi-weekly"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "First sessions", result: "Visible reduction begins" },
    { session: "3-6 months", result: "Significant permanent removal" },
    { session: "Complete course", result: "100% permanent results" }
  ];

  const faqs = [
    {
      question: "Is electrolysis truly permanent?",
      answer: "Yes, electrolysis is the only FDA-approved method of permanent hair removal. Once a hair follicle is destroyed, it cannot regrow. Multiple sessions are needed to treat all hairs in their active growth phase."
    },
    {
      question: "Can electrolysis remove grey and blonde hair?",
      answer: "Yes! Unlike laser which targets melanin (pigment), electrolysis destroys the hair follicle directly with electrical current. This makes it effective on all hair colors including grey, blonde, white, and red."
    },
    {
      question: "Does electrolysis hurt?",
      answer: "Most clients describe electrolysis as a slight pricking or stinging sensation. Modern equipment has significantly reduced discomfort. We can apply numbing cream for sensitive areas like the upper lip or bikini."
    },
    {
      question: "How long does electrolysis take?",
      answer: "Sessions are booked in 15-minute increments. Small areas like upper lip may take 15-30 minutes. The total number of sessions depends on the area size and hair density—we'll estimate during your consultation."
    },
    {
      question: "How is electrolysis different from laser?",
      answer: "Laser targets the melanin (pigment) in hair, so it works best on dark hair. Electrolysis destroys the follicle directly, so it works on any hair color. Laser is faster for large areas; electrolysis offers precision and permanence."
    },
    {
      question: "How many sessions will I need?",
      answer: "This varies based on the area, hair density, and individual factors. Small areas may need 6-12 sessions; larger or denser areas may require more. We'll provide an estimate during your free consultation."
    },
    {
      question: "Can I have electrolysis on my face?",
      answer: "Absolutely. Electrolysis is excellent for facial hair removal including upper lip, chin, eyebrows, and sideburns. It's particularly effective for hormonal hair growth."
    },
    {
      question: "Is electrolysis safe for dark skin?",
      answer: "Yes, electrolysis is safe for all skin types and colors. Because it doesn't target melanin, there's no risk of hyperpigmentation or hypopigmentation that can occur with some laser treatments on dark skin."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Electrolysis Hair Removal Dagenham | Permanent | Grey Hair | Book Now"
        description="Permanent electrolysis hair removal in Dagenham. The only FDA-approved permanent solution for all hair colors including grey and blonde. Book your free consultation."
        canonicalUrl="https://laserlightskinclinic.co.uk/electrolysis-hair-removal-dagenham"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="FDA Approved Method"
          title="Electrolysis Hair Removal Dagenham"
          titleAccent="Dagenham"
          subtitle="The Only Truly Permanent Solution. For All Hair Colors."
          description="FDA-approved permanent hair removal that works on grey, blonde, white, and red hair. Precision treatment for lasting results."
          badge="Works on Grey Hair"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          stats={[
            { value: "Truly", label: "Permanent" },
            { value: "All Hair", label: "Colors" },
            { value: "Precision", label: "Treatment" }
          ]}
        />
        
        <QuickStatsBar stats={stats} />
        
        <WhatIsSection
          title="What is Electrolysis?"
          content={whatIsContent}
          highlightText="Electrolysis is the only FDA-approved method of permanent hair removal—and the only option for grey, blonde, or white hair."
        />
        
        <BenefitsList
          title="Benefits of Electrolysis"
          subtitle="Truly permanent hair removal for everyone"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Electrolysis Process"
          subtitle="From consultation to permanent results"
          steps={steps}
        />
        
        <div id="pricing">
          <PricingTable
            title="Electrolysis Pricing"
            subtitle="Time-based pricing for precision treatment"
            prices={prices}
            disclaimer="Sessions booked in 15-minute increments. Course packages offer the best value. Free consultation to estimate your treatment plan."
          />
        </div>
        
        <WhoIsThisFor
          title="Is Electrolysis Right for You?"
          intro="Electrolysis is ideal if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Electrolysis FAQs"
          subtitle="Your questions answered"
          faqs={faqs}
        />
        
        <ResultsShowcase
          title="Real Results from Real Clients"
          description="Join clients who achieved truly permanent hair removal"
        />
        
        <ServiceCTA
          title="Ready for Permanent Results?"
          subtitle="Book your free electrolysis consultation today"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Electrolysis;
