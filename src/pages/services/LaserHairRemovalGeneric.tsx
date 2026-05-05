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
  variant?: "default" | "ilford" | "dagenham";
}

const LOCATION_COPY = {
  ilford: {
    label: "Ilford",
    path: "/laser-hair-removal-ilford",
    areaServed: ["Ilford", "Redbridge", "Gants Hill", "Seven Kings", "Goodmayes", "Barkingside", "East London"],
    whatIsTitle: "Ilford's Trusted Laser Clinic",
    intro: "Looking for laser hair removal in Ilford? Laser Light Skin Clinic, just minutes away in Dagenham, offers NHS-approved laser hair removal using the Quanta Thunder.",
    locality: "We welcome clients from across Ilford, Redbridge, Gants Hill, Seven Kings, Goodmayes and Barkingside. Easy access by car with free parking nearby.",
    faqLocation: { question: "Where are you located from Ilford?", answer: "We're in Dagenham (RM8 2UJ), a short drive from Ilford, with free parking nearby." },
  },
  dagenham: {
    label: "Dagenham",
    path: "/laser-hair-removal-dagenham",
    areaServed: ["Dagenham", "Barking", "Romford", "Becontree", "Chadwell Heath", "East London"],
    whatIsTitle: "Dagenham's Trusted Laser Clinic",
    intro: "Looking for laser hair removal in Dagenham? Laser Light Skin Clinic on Becontree Avenue offers NHS-approved laser hair removal using the Quanta Thunder.",
    locality: "We welcome clients from across Dagenham, Barking, Romford, Becontree and Chadwell Heath. Free parking available nearby.",
    faqLocation: { question: "Where are you located in Dagenham?", answer: "We're at 125 Becontree Avenue, Dagenham RM8 2UJ, with free parking nearby." },
  },
} as const;

const LaserHairRemovalGeneric = ({ variant = "default" }: Props) => {
  const isLocation = variant === "ilford" || variant === "dagenham";
  const loc = isLocation ? LOCATION_COPY[variant as "ilford" | "dagenham"] : null;
  const canonical = `https://laserlightskinclinic.co.uk${loc ? loc.path : "/laser-hair-removal"}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": loc ? `Laser Hair Removal ${loc.label}` : "Laser Hair Removal",
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
    "description": `NHS-approved laser hair removal${loc ? ` serving ${loc.label} and surrounding areas` : ""} using the Quanta Thunder. Safe for all skin types including darker tones.`,
    "areaServed": loc ? loc.areaServed : ["London", "East London", "Dagenham", "Barking", "Romford", "Ilford", "Stratford"],
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

  const whatIsContent = loc
    ? [
        loc.intro,
        loc.locality,
        "Unlike high street IPL, we use genuine medical-grade Alexandrite laser. Fewer sessions, permanent results, and safe for all skin tones."
      ]
    : [
        "Laser hair removal uses concentrated light energy to target and destroy hair follicles at the root, providing long-term reduction of 80-95% after a full course.",
        "At Laser Light Skin Clinic we use the Quanta Thunder, a true medical-grade Alexandrite laser, safe for all skin types including Fitzpatrick IV-VI.",
        "Every treatment starts with a skin patch test and consultation so we can confirm suitability and design your personalised course."
      ];

  const benefits = [
    { title: "Permanent Hair Reduction", description: "Achieve 80-95% permanent reduction. No more shaving or waxing.", icon: CheckCircle },
    { title: "Comfortable Experience", description: "Quanta Thunder advanced cooling. Most clients describe it as a warm massage.", icon: Heart },
    { title: "Safe for All Skin Types", description: "Suitable for Fitzpatrick I-VI, including darker skin tones.", icon: Users },
    { title: "Quick Sessions", description: "Underarms in 5-10 minutes, full legs under 30 minutes.", icon: Clock },
    { title: "No Downtime", description: "Resume normal activities immediately.", icon: Calendar },
    { title: "Cost-Effective", description: "Save thousands long-term vs. waxing. Interest-free plans available.", icon: PiggyBank },
  ];

  const steps = [
    { number: 1, title: "Skin Patch & Consultation", description: "We assess your skin and hair type and run a patch test to confirm suitability." },
    { number: 2, title: "Treatment Sessions", description: "6-8 sessions, 4-6 weeks apart. Each session 10-45 minutes depending on area." },
    { number: 3, title: "Visible Results", description: "Gradual reduction after each session. By session 4, most see 50-70% reduction." },
    { number: 4, title: "Permanent Results", description: "80-95% permanent reduction by the end of your course." },
  ];

  const technologyFeatures = [
    "Moveo Technology: treats large areas quickly",
    "Advanced cooling for a comfortable experience",
    "Safe for all skin types including Fitzpatrick IV-VI",
    "Alexandrite 755nm, gold-standard wavelength",
    "NHS Approved · FDA Approved",
    "Trusted by NHS dermatology departments"
  ];

  const pricingTabs = [
    {
      label: "Women's",
      prices: [
        { area: "Upper Lip", singleSession: "£40", course: "£180", savings: "Save £60" },
        { area: "Chin", singleSession: "£45", course: "£200", savings: "Save £70" },
        { area: "Lip & Chin", singleSession: "£65", course: "£290", savings: "Save £100" },
        { area: "Sideburns", singleSession: "£45", course: "£200", savings: "Save £70" },
        { area: "Jawline", singleSession: "£45", course: "£200", savings: "Save £70" },
        { area: "Full Face", singleSession: "£85", course: "£380", savings: "Save £130" },
        { area: "Neck (Front)", singleSession: "£50", course: "£225", savings: "Save £75" },
        { area: "Neck (Back)", singleSession: "£50", course: "£225", savings: "Save £75" },
        { area: "Underarms", singleSession: "£55", course: "£250", savings: "Save £80" },
        { area: "Bikini Line", singleSession: "£55", course: "£250", savings: "Save £80" },
        { area: "Extended Bikini", singleSession: "£75", course: "£340", savings: "Save £110" },
        { area: "Brazilian", singleSession: "£95", course: "£430", savings: "Save £140" },
        { area: "Hollywood", singleSession: "£110", course: "£495", savings: "Save £165" },
        { area: "Buttocks", singleSession: "£80", course: "£360", savings: "Save £120" },
        { area: "Half Arms (Lower)", singleSession: "£70", course: "£315", savings: "Save £105" },
        { area: "Half Arms (Upper)", singleSession: "£70", course: "£315", savings: "Save £105" },
        { area: "Full Legs", singleSession: "£180", course: "£810", savings: "Save £270" },
        { area: "Full Arms", singleSession: "£180", course: "£810", savings: "Save £270" },
        { area: "Hands & Fingers", singleSession: "£40", course: "£180", savings: "Save £60" },
        { area: "Half Legs (Lower)", singleSession: "£120", course: "£540", savings: "Save £180" },
        { area: "Half Legs (Upper)", singleSession: "£120", course: "£540", savings: "Save £180" },
        { area: "Feet & Toes", singleSession: "£40", course: "£180", savings: "Save £60" },
        { area: "Stomach Line", singleSession: "£45", course: "£200", savings: "Save £70" },
        { area: "Full Stomach", singleSession: "£80", course: "£360", savings: "Save £120" },
        { area: "Lower Back", singleSession: "£60", course: "£270", savings: "Save £90" },
        { area: "Chest", singleSession: "£80", course: "£360", savings: "Save £120" },
        { area: "Nipples", singleSession: "£40", course: "£180", savings: "Save £60" },
        { area: "Shoulders", singleSession: "£60", course: "£270", savings: "Save £90" },
        { area: "Full Body", singleSession: "£1,200", course: "£5,400", savings: "Save £1,800" },
      ]
    },
    {
      label: "Men's",
      prices: [
        { area: "Unibrow", singleSession: "£35", course: "£160", savings: "Save £50" },
        { area: "Ears", singleSession: "£35", course: "£160", savings: "Save £50" },
        { area: "Nose", singleSession: "£35", course: "£160", savings: "Save £50" },
        { area: "Beard Line / Cheeks", singleSession: "£55", course: "£250", savings: "Save £80" },
        { area: "Full Beard", singleSession: "£85", course: "£380", savings: "Save £130" },
        { area: "Neck (Front)", singleSession: "£55", course: "£250", savings: "Save £80" },
        { area: "Neck (Back)", singleSession: "£55", course: "£250", savings: "Save £80" },
        { area: "Shoulders", singleSession: "£80", course: "£360", savings: "Save £120" },
        { area: "Upper Back", singleSession: "£90", course: "£405", savings: "Save £135" },
        { area: "Full Back", singleSession: "£140", course: "£630", savings: "Save £210" },
        { area: "Chest", singleSession: "£120", course: "£540", savings: "Save £180" },
        { area: "Stomach", singleSession: "£100", course: "£450", savings: "Save £150" },
        { area: "Chest & Stomach", singleSession: "£180", course: "£810", savings: "Save £270" },
        { area: "Half Arms (Lower)", singleSession: "£70", course: "£315", savings: "Save £105" },
        { area: "Half Arms (Upper)", singleSession: "£70", course: "£315", savings: "Save £105" },
        { area: "Full Arms", singleSession: "£180", course: "£810", savings: "Save £270" },
        { area: "Hands & Fingers", singleSession: "£40", course: "£180", savings: "Save £60" },
        { area: "Half Legs (Lower)", singleSession: "£140", course: "£630", savings: "Save £210" },
        { area: "Half Legs (Upper)", singleSession: "£140", course: "£630", savings: "Save £210" },
        { area: "Full Legs", singleSession: "£200", course: "£900", savings: "Save £300" },
        { area: "Feet & Toes", singleSession: "£40", course: "£180", savings: "Save £60" },
        { area: "Full Body", singleSession: "£400", course: "£1800", savings: "Save £600" },
      ]
    }
  ];

  const faqs = [
    { question: "How much is the consultation?", answer: "Your skin patch test and consultation is £25. This confirms your skin's suitability and lets us design your treatment plan." },
    { question: "Does it hurt?", answer: "Our Quanta Thunder features advanced cooling. Most clients describe the sensation as a warm massage." },
    { question: "Is it safe for darker skin?", answer: "Yes. The Quanta Thunder is clinically proven safe for Fitzpatrick IV-VI." },
    { question: "How many sessions will I need?", answer: "Most clients need 6-8 sessions spaced 4-6 weeks apart for optimal results." },
    { question: "Do you offer payment plans?", answer: "Yes! We offer 0% interest-free finance options allowing you to spread the cost over 6-12 months. Ask at your consultation for details." },
    ...(loc ? [loc.faqLocation] : []),
  ];

  const testimonials = [
    { quote: "Amazing results. My skin is so smooth and the team made me feel completely at ease.", initials: "SA", treatment: "Full Legs", rating: 5 },
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
        title={loc ? `Laser Hair Removal ${loc.label} | NHS Approved | Laser Light` : "Laser Hair Removal | NHS Approved | Laser Light Skin Clinic"}
        description={loc
          ? `Laser hair removal serving ${loc.label} & surrounding areas. Quanta Thunder, safe for all skin types. 0% interest-free finance available over 6-12 months.`
          : "NHS-approved laser hair removal using the Quanta Thunder. Safe for all skin types. 0% interest-free finance available over 6-12 months."}
        canonicalUrl={canonical}
        structuredData={[structuredData]}
      />

      <Header />

      <main className="flex-1 pb-20 lg:pb-0">
        <ServiceHero
          trustBadge="NHS-Approved Clinic"
          title={loc ? `Laser Hair Removal ${loc.label}` : "Laser Hair Removal"}
          titleAccent={loc ? loc.label : undefined}
          subtitle="Permanently smooth skin with the Quanta Thunder"
          description="Safe for all skin types including darker tones."
          primaryCtaText="Book Consultation"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          heroImage={laserDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: loc ? `Laser Hair Removal ${loc.label}` : "Laser Hair Removal" }
          ]}
        />

        <QuickStatsBar stats={quickStats} />

        <WhatIsSection
          title={loc ? loc.whatIsTitle : "Medical-Grade Laser Hair Removal"}
          content={whatIsContent}
          collapsible
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
          description="A true medical-grade Alexandrite laser combining clinical efficacy with advanced cooling for a comfortable experience. Safe for every skin tone."
          features={technologyFeatures}
          certifications={["NHS Approved", "FDA Approved"]}
          deviceImage={laserDevice}
        />

        <TabbedPricingTable
          title="Transparent Pricing"
          subtitle="No hidden fees. Course savings + interest-free payment plans."
          tabs={pricingTabs}
          offerBanner={{
            highlight: "SKIN PATCH & CONSULTATION",
            text: "Book Yours Today"
          }}
          paymentOptions="0% interest-free finance options allowing you to spread the cost over 6-12 months. Ask at your consultation for details."
          disclaimer="Patch test required before first treatment. Prices include consultation."
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
          subtitle="Reserve your skin patch test & consultation and take the first step to permanently smooth skin."
        />
      </main>

      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default LaserHairRemovalGeneric;
