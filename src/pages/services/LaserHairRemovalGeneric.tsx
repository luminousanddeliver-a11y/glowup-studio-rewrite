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
import laserDevice from "@/assets/thunder-machine.png";

interface Props {
  variant?: "default" | "ilford";
}

const LaserHairRemovalGeneric = ({ variant = "default" }: Props) => {
  const isIlford = variant === "ilford";
  const locationLabel = isIlford ? "Ilford" : "London";
  const canonical = isIlford
    ? "https://laserlightskinclinic.co.uk/laser-hair-removal-ilford"
    : "https://laserlightskinclinic.co.uk/laser-hair-removal";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Laser Hair Removal ${locationLabel}`,
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
      "telephone": "+442085981200"
    },
    "description": `NHS-approved laser hair removal${isIlford ? " serving Ilford and surrounding areas" : ""} using the Quanta Thunder. Safe for all skin types including darker tones.`,
    "areaServed": isIlford
      ? ["Ilford", "Redbridge", "Gants Hill", "Seven Kings", "Goodmayes", "Barkingside", "East London"]
      : ["London", "East London", "Dagenham", "Barking", "Romford", "Ilford", "Stratford"],
    "offers": {
      "@type": "Offer",
      "price": "25",
      "priceCurrency": "GBP",
      "description": "Skin patch test & consultation"
    }
  };

  const quickStats = [
    { value: "6-8 Sessions", label: "Average Course", icon: Timer },
    { value: "Comfortable", label: "Advanced Cooling", icon: Shield },
    { value: "All Skin Types", label: "Fitzpatrick I-VI", icon: Users },
    { value: "NHS-Approved", label: "Medical-Grade", icon: Award },
  ];

  const whatIsContent = isIlford
    ? [
        "Looking for laser hair removal in Ilford? Laser Light Skin Clinic — just minutes away in Dagenham — offers NHS-approved laser hair removal using the Quanta Thunder.",
        "We welcome clients from across Ilford, Redbridge, Gants Hill, Seven Kings, Goodmayes and Barkingside. Easy access by car with free parking nearby.",
        "Unlike high street IPL, we use genuine medical-grade Alexandrite laser — fewer sessions, permanent results, and safe for all skin tones."
      ]
    : [
        "Laser hair removal uses concentrated light energy to target and destroy hair follicles at the root, providing long-term reduction of 80-95% after a full course.",
        "At Laser Light Skin Clinic we use the Quanta Thunder — a true medical-grade Alexandrite laser, safe for all skin types including Fitzpatrick IV-VI.",
        "Every treatment starts with a £25 skin patch test and consultation so we can confirm suitability and design your personalised course."
      ];

  const benefits = [
    { title: "Permanent Hair Reduction", description: "Achieve 80-95% permanent reduction. No more shaving or waxing.", icon: CheckCircle },
    { title: "Comfortable Experience", description: "Quanta Thunder advanced cooling — most clients describe it as a warm massage.", icon: Heart },
    { title: "Safe for All Skin Types", description: "Suitable for Fitzpatrick I-VI, including darker skin tones.", icon: Users },
    { title: "Quick Sessions", description: "Underarms in 5-10 minutes, full legs under 30 minutes.", icon: Clock },
    { title: "No Downtime", description: "Resume normal activities immediately.", icon: Calendar },
    { title: "Cost-Effective", description: "Save thousands long-term vs. waxing. Interest-free plans available.", icon: PiggyBank },
  ];

  const steps = [
    { number: 1, title: "Skin Patch & Consultation (£25)", description: "We assess your skin and hair type and run a patch test to confirm suitability." },
    { number: 2, title: "Treatment Sessions", description: "6-8 sessions, 4-6 weeks apart. Each session 10-45 minutes depending on area." },
    { number: 3, title: "Visible Results", description: "Gradual reduction after each session. By session 4, most see 50-70% reduction." },
    { number: 4, title: "Permanent Results", description: "80-95% permanent reduction by the end of your course." },
  ];

  const technologyFeatures = [
    "Moveo Technology: treats large areas quickly",
    "Advanced cooling for a comfortable experience",
    "Safe for all skin types including Fitzpatrick IV-VI",
    "Alexandrite 755nm — gold-standard wavelength",
    "NHS Approved · FDA Approved",
    "Trusted by NHS dermatology departments"
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
    { question: "How much is the consultation?", answer: "Your skin patch test and consultation is £25. This confirms your skin's suitability and lets us design your treatment plan." },
    { question: "Does it hurt?", answer: "Our Quanta Thunder features advanced cooling. Most clients describe the sensation as a warm massage." },
    { question: "Is it safe for darker skin?", answer: "Yes — the Quanta Thunder is clinically proven safe for Fitzpatrick IV-VI." },
    { question: "How many sessions will I need?", answer: "Most clients need 6-8 sessions spaced 4-6 weeks apart for optimal results." },
    { question: "Do you offer payment plans?", answer: "Yes — interest-free payment plans from 3 to 12 months are available." },
    ...(isIlford ? [{ question: "Where are you located from Ilford?", answer: "We're in Dagenham (RM8 2UJ) — a short drive from Ilford, with free parking nearby." }] : []),
  ];

  const testimonials = [
    { quote: "Amazing results — my skin is so smooth and the team made me feel completely at ease.", initials: "SA", treatment: "Full Legs", rating: 5 },
    { quote: "As someone with darker skin I was nervous, but the Quanta Thunder is brilliant. Real results, no irritation.", initials: "NK", treatment: "Full Body", rating: 5 },
  ];

  const relatedServices = [
    { name: "Advanced Electrolysis", href: "/advanced-electrolysis-dagenham", description: "Permanent hair removal for fine or light hair." },
    { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham", description: "Complement smooth skin with full rejuvenation." },
    { name: "Hydrafacial", href: "/hydrafacial-east-london", description: "Deep cleanse and rejuvenate your skin." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={isIlford ? "Laser Hair Removal Ilford | NHS Approved | Laser Light" : "Laser Hair Removal | NHS Approved | Laser Light Skin Clinic"}
        description={isIlford
          ? "Laser hair removal serving Ilford & Redbridge. Quanta Thunder, safe for all skin types. £25 skin patch & consultation. Interest-free 3–12 months."
          : "NHS-approved laser hair removal using the Quanta Thunder. Safe for all skin types. £25 skin patch & consultation. Interest-free plans 3–12 months."}
        canonicalUrl={canonical}
        structuredData={[structuredData]}
      />

      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        <ServiceHero
          trustBadge="NHS-Approved Clinic"
          title={isIlford ? "Laser Hair Removal Ilford" : "Laser Hair Removal"}
          titleAccent={isIlford ? "Ilford" : undefined}
          subtitle="Permanently smooth skin with the Quanta Thunder"
          description="Safe for all skin types including darker tones. Start with a skin patch test & consultation."
          primaryCtaText="Book a Skin Patch & Consultation – £25"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={laserDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: isIlford ? "Laser Hair Removal Ilford" : "Laser Hair Removal" }
          ]}
          stats={[
            { value: "From £25", label: "Patch & Consult" },
            { value: "Comfortable", label: "Experience" },
            { value: "All Skin", label: "Types" }
          ]}
        />

        <QuickStatsBar stats={quickStats} />

        <WhatIsSection
          title={isIlford ? "Ilford's Trusted Laser Clinic — Just Down the Road" : "Medical-Grade Laser Hair Removal"}
          content={whatIsContent}
          highlightText="Skin patch test & consultation just £25 — fully redeemable against your first treatment."
        />

        <BenefitsList
          title="Why Choose Laser Hair Removal With Us?"
          subtitle="Medical-grade technology, expert care, transparent pricing"
          benefits={benefits}
        />

        <HowItWorks
          title="Your Treatment Journey"
          subtitle="From patch test to permanent results"
          steps={steps}
        />

        <TechnologySection
          title="The Quanta Thunder"
          subtitle="The same technology trusted by NHS dermatology departments"
          technologyName="Quanta Thunder"
          description="A true medical-grade Alexandrite laser combining clinical efficacy with advanced cooling for a comfortable experience — safe for every skin tone."
          features={technologyFeatures}
          certifications={["NHS Approved", "FDA Approved"]}
          deviceImage={laserDevice}
        />

        <TabbedPricingTable
          title="Transparent Pricing"
          subtitle="No hidden fees. Course savings + interest-free payment plans."
          tabs={pricingTabs}
          offerBanner={{
            highlight: "SKIN PATCH & CONSULTATION – £25",
            text: "Book Yours Today"
          }}
          paymentOptions="Plans available via our finance partner. Subject to status."
        />

        <ServiceTestimonial testimonials={testimonials} />

        <ServiceFAQ
          title="Frequently Asked Questions"
          subtitle="Everything you need to know"
          faqs={faqs}
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA
          title="Ready to Book?"
          subtitle="Reserve your £25 skin patch test & consultation and take the first step to permanently smooth skin."
        />
      </main>

      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default LaserHairRemovalGeneric;
