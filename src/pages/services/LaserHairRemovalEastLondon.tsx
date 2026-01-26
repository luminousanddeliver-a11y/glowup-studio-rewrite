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
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Timer, Shield, Users, Award, CheckCircle, Heart, Clock, Calendar, PiggyBank } from "lucide-react";
import laserDevice from "@/assets/laser-device.jpg";

const LaserHairRemovalEastLondon = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laser Hair Removal East London",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Laser Light Skin Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125 Becontree Avenue",
        "addressLocality": "Dagenham",
        "addressRegion": "Essex",
        "postalCode": "RM8 2UJ",
        "addressCountry": "GB"
      },
      "telephone": "+442085981200",
      "priceRange": "££",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250"
      }
    },
    "description": "East London's leading pain-free laser hair removal clinic. NHS-approved Lynton Motus AY technology safe for all skin types. Serving Barking, Romford, Ilford & surrounding areas.",
    "areaServed": ["East London", "Barking", "Romford", "Ilford", "Dagenham", "Stratford", "Canary Wharf"],
    "offers": {
      "@type": "Offer",
      "price": "80",
      "priceCurrency": "GBP",
      "description": "25% off first treatment course for new clients"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is your laser hair removal clinic in East London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're located at 125 Becontree Avenue, Dagenham RM8 2UJ—easily accessible from Barking, Romford, Ilford, Stratford, and all East London areas. Free parking available nearby."
        }
      },
      {
        "@type": "Question",
        "name": "Is the laser safe for darker skin tones common in East London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our Lynton Motus AY is specifically designed to be safe for all skin types, including Fitzpatrick types IV-VI (darker skin). This is why we're trusted by East London's diverse community."
        }
      },
      {
        "@type": "Question",
        "name": "How much does laser hair removal cost in East London?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prices start from £80 per session. We offer 25% off for new clients and interest-free payment plans. A full course of 6-8 sessions provides permanent reduction."
        }
      }
    ]
  };

  const quickStats = [
    { value: "6-8 Sessions", label: "Average Treatment Course", icon: Timer },
    { value: "Pain-Free", label: "Guaranteed Comfort", icon: Shield },
    { value: "All Skin Types", label: "Including Darker Tones", icon: Users },
    { value: "NHS-Approved", label: "Medical-Grade Standards", icon: Award },
  ];

  const whatIsContent = [
    "Looking for the best laser hair removal in East London? Laser Light Skin Clinic in Dagenham offers NHS-approved, pain-free laser hair removal using the revolutionary Lynton Motus AY technology.",
    "We serve clients from across East London including Barking, Romford, Ilford, Stratford, Canary Wharf, and beyond. Our central location in Dagenham makes us easily accessible with free parking nearby.",
    "Unlike high street clinics using outdated IPL technology, we use genuine medical-grade Alexandrite laser that delivers permanent results in fewer sessions. Safe for all skin types, including darker skin tones."
  ];

  const benefits = [
    {
      title: "Permanent Hair Reduction",
      description: "Achieve 80-95% permanent hair reduction. No more daily shaving or painful waxing appointments.",
      icon: CheckCircle
    },
    {
      title: "Pain-Free Experience",
      description: "Our Lynton Motus AY is guaranteed pain-free. Most clients describe the sensation as a warm massage.",
      icon: Heart
    },
    {
      title: "Safe for All Skin Types",
      description: "Suitable for Fitzpatrick skin types I-VI. Perfect for East London's diverse community.",
      icon: Users
    },
    {
      title: "Quick Treatment Times",
      description: "Treat large areas like full legs in under 30 minutes. Underarms take just 5-10 minutes.",
      icon: Clock
    },
    {
      title: "No Downtime Required",
      description: "Resume your normal activities immediately. No recovery period needed.",
      icon: Calendar
    },
    {
      title: "Cost-Effective Long-Term",
      description: "Save thousands compared to waxing. Average client saves £5,000+ over 10 years.",
      icon: PiggyBank
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Free Consultation & Patch Test",
      description: "We assess your skin type and hair type. A complimentary patch test ensures suitability."
    },
    {
      number: 2,
      title: "Treatment Sessions",
      description: "6-8 sessions spaced 4-6 weeks apart. Each session takes 10-45 minutes."
    },
    {
      number: 3,
      title: "Visible Results",
      description: "See gradual reduction after each session. By session 4, most see 50-70% reduction."
    },
    {
      number: 4,
      title: "Permanent Results",
      description: "Enjoy permanently smooth skin. Occasional touch-ups may be needed for hormonal changes."
    }
  ];

  const technologyFeatures = [
    "Moveo Technology: Treats large areas quickly with sweeping motion",
    "Advanced Cooling: Built-in cooling system eliminates pain",
    "Safe for All Skin Types: Including darker skin tones (Fitzpatrick IV-VI)",
    "Alexandrite 755nm: The gold standard wavelength for hair removal",
    "NHS & FDA Approved: Medical-grade safety standards",
    "Made in UK: Lynton is a British manufacturer"
  ];

  const pricingTabs = [
    {
      label: "Women's",
      prices: [
        { area: "Upper Lip", singleSession: "£80", course: "£450", savings: "Save £30" },
        { area: "Full Face", singleSession: "£140", course: "£780", savings: "Save £60" },
        { area: "Underarms", singleSession: "£80", course: "£450", savings: "Save £30" },
        { area: "Brazilian/Hollywood", singleSession: "£120", course: "£660", savings: "Save £60" },
        { area: "Half Legs", singleSession: "£140", course: "£780", savings: "Save £60" },
        { area: "Full Legs", singleSession: "£200", course: "£1,100", savings: "Save £100" },
        { area: "Full Body Special", singleSession: "£450", course: "£2,400", savings: "Save £300" },
      ]
    },
    {
      label: "Men's",
      prices: [
        { area: "Beard Line", singleSession: "£100", course: "£550", savings: "Save £50" },
        { area: "Back (Full)", singleSession: "£200", course: "£1,100", savings: "Save £100" },
        { area: "Chest", singleSession: "£140", course: "£780", savings: "Save £60" },
        { area: "Shoulders", singleSession: "£100", course: "£550", savings: "Save £50" },
      ]
    }
  ];

  const faqs = [
    {
      question: "Where exactly are you located in East London?",
      answer: "We're at 125 Becontree Avenue, Dagenham RM8 2UJ. We're a 10-minute drive from Barking, 15 minutes from Romford, and easily accessible from Ilford, Stratford, and all East London areas. Becontree tube station is nearby."
    },
    {
      question: "Is this treatment suitable for Asian and Black skin types?",
      answer: "Absolutely. Our Lynton Motus AY is one of the few lasers clinically proven safe for Fitzpatrick skin types IV-VI (darker skin tones). This is exactly why we chose this technology to serve East London's diverse community."
    },
    {
      question: "How does your pricing compare to other East London clinics?",
      answer: "We offer competitive, transparent pricing starting from £80 per session. Unlike some clinics, we use genuine medical-grade laser (not IPL), meaning you need fewer sessions for permanent results. New clients get 25% off."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer interest-free payment plans to spread the cost over 6-12 months. This makes permanent hair removal accessible for everyone."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, there's free on-street parking on Becontree Avenue and surrounding streets. We're also near Becontree tube station on the District line."
    }
  ];

  const testimonials = [
    {
      quote: "Finally found a clinic in East London that's safe for my skin type! The staff were professional and the results are amazing. Worth the trip from Ilford.",
      initials: "AK",
      treatment: "Laser Hair Removal - Full Body",
      rating: 5
    },
    {
      quote: "I've tried IPL before with no results. This actual laser technology is completely different. Pain-free and my hair is almost gone after 5 sessions!",
      initials: "PR",
      treatment: "Laser Hair Removal - Brazilian",
      rating: 5
    }
  ];

  const relatedServices = [
    {
      name: "Hydrafacial",
      href: "/hydrafacial-east-london",
      description: "Deep cleanse and rejuvenate your skin with our medical-grade Hydrafacial."
    },
    {
      name: "Skin Rejuvenation",
      href: "/skin-rejuvenation-dagenham",
      description: "Complete skin renewal for a youthful, radiant complexion."
    },
    {
      name: "Tattoo Removal",
      href: "/tattoo-removal-east-london",
      description: "Remove unwanted tattoos with our exclusive Quanta Thunder laser."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Laser Hair Removal East London | Pain-Free | From £80 | Book Free Consult"
        description="East London's top-rated laser hair removal clinic. Pain-free Lynton Motus AY laser, safe for all skin types. Serving Barking, Romford, Ilford. 25% off new clients!"
        canonicalUrl="https://laserlightskinclinic.co.uk/laser-hair-removal-east-london"
        keywords="laser hair removal east london, laser hair removal barking, laser hair removal romford, laser hair removal ilford, pain free laser east london"
        structuredData={[structuredData, faqSchema]}
      />
      
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        <ServiceHero
          trustBadge="NHS-Approved Clinic"
          title="Laser Hair Removal East London"
          titleAccent="East London"
          subtitle="East London's Leading Pain-Free Laser Clinic"
          description="Serving Barking, Romford, Ilford & all East London. Safe for all skin types. Book your free consultation today."
          badge="25% Off First Course"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={laserDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Laser Hair Removal East London" }
          ]}
          stats={[
            { value: "From £80", label: "Per Session" },
            { value: "Pain-Free", label: "Guaranteed" },
            { value: "All Skin", label: "Types" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="East London's Premier Laser Clinic"
          content={whatIsContent}
          highlightText="The only clinic in East London offering both Lynton Motus AY for hair removal AND Quanta Thunder for tattoo removal."
        />
        
        <BenefitsList
          title="Why Choose Us Over Other East London Clinics?"
          subtitle="Medical-grade technology, transparent pricing, and expert care"
          benefits={benefits}
        />
        
        <HowItWorks
          title="Your Laser Hair Removal Journey"
          subtitle="From free consultation to permanent results"
          steps={steps}
        />
        
        <TechnologySection
          title="NHS-Approved Lynton Motus AY"
          subtitle="The same technology used by NHS dermatology departments"
          technologyName="Lynton Motus AY"
          description="We invested in the Lynton Motus AY specifically because it's safe for East London's diverse community. Unlike IPL or older lasers, it's clinically proven safe for darker skin tones while delivering permanent results."
          features={technologyFeatures}
          certifications={["NHS Approved", "CE Marked", "FDA Cleared", "Made in UK"]}
          deviceImage={laserDevice}
        />
        
        <TabbedPricingTable
          title="Transparent Pricing"
          subtitle="No hidden fees. From £80 per session."
          tabs={pricingTabs}
          offerBanner={{
            highlight: "25% OFF FOR NEW CLIENTS",
            text: "Book Your Free Consultation"
          }}
          paymentOptions="Interest-free payment plans available. Spread the cost over 6-12 months."
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <ServiceFAQ 
          title="Frequently Asked Questions"
          subtitle="Common questions about laser hair removal in East London"
          faqs={faqs} 
        />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Start Your Journey?"
          subtitle="Book a free consultation at East London's most trusted laser clinic"
          showMap={true}
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default LaserHairRemovalEastLondon;
