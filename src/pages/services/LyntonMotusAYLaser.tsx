import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { TechnologySection } from "@/components/services/TechnologySection";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Timer, Shield, Users, Award, CheckCircle, Zap, Heart, Sparkles } from "lucide-react";
import laserDevice from "@/assets/laser-device.jpg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LyntonMotusAYLaser = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    "name": "Lynton Motus AY Laser",
    "description": "The world's first truly pain-free Alexandrite laser for permanent hair removal. NHS-approved and safe for all skin types.",
    "manufacturer": {
      "@type": "Organization",
      "name": "Lynton Lasers",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      }
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lynton Motus AY Laser Hair Removal",
    "provider": {
      "@type": "MedicalBusiness",
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
    "description": "Experience the Lynton Motus AY—the only Alexandrite laser with true pain-free technology. NHS-approved, safe for all skin types including dark skin.",
    "areaServed": ["Dagenham", "East London", "Barking", "Romford", "Ilford"]
  };

  const quickStats = [
    { value: "Pain-Free", label: "Guaranteed Experience", icon: Heart },
    { value: "All Skin Types", label: "Fitzpatrick I-VI", icon: Users },
    { value: "NHS Approved", label: "Medical-Grade Safety", icon: Shield },
    { value: "Made in UK", label: "British Technology", icon: Award },
  ];

  const whatIsContent = [
    "The Lynton Motus AY represents a breakthrough in laser hair removal technology. It's the world's first and only Alexandrite laser system that combines clinical efficacy with true pain-free treatment.",
    "Unlike older lasers that rely on high peak power (causing the painful 'snapping' sensation), the Motus AY uses Moveo technology—a gradual thermal approach that heats the hair follicle slowly and uniformly. The result? Permanent hair reduction without discomfort.",
    "This is the same technology trusted by NHS dermatology departments across the UK. At Laser Light Skin Clinic in Dagenham, we're proud to offer this premium technology to East London."
  ];

  const benefits = [
    {
      title: "Truly Pain-Free",
      description: "No numbing cream required. Most clients describe the sensation as a warm, relaxing massage.",
      icon: Heart
    },
    {
      title: "Safe for Dark Skin",
      description: "One of the few lasers clinically proven safe for Fitzpatrick types IV-VI without risk of burns.",
      icon: Users
    },
    {
      title: "Faster Treatment Times",
      description: "Moveo technology covers larger areas quickly. Full legs take under 30 minutes.",
      icon: Zap
    },
    {
      title: "Fewer Sessions Needed",
      description: "The 755nm Alexandrite wavelength is the most effective for hair removal. 6-8 sessions for permanent results.",
      icon: Timer
    },
    {
      title: "NHS & FDA Approved",
      description: "Meets the highest medical safety standards. Used by NHS dermatology departments.",
      icon: Shield
    },
    {
      title: "No Side Effects",
      description: "Advanced cooling system prevents burns, hyperpigmentation, and other side effects.",
      icon: Sparkles
    }
  ];

  const technologyFeatures = [
    "Moveo Technology: Gradual heating eliminates pain",
    "755nm Alexandrite Wavelength: Gold standard for hair removal",
    "Continuous Cooling: Integrated sapphire cooling tip",
    "High Repetition Rate: Treats large areas quickly",
    "Adjustable Parameters: Customized for every skin type",
    "Made in UK: Lynton is a British manufacturer"
  ];

  const faqs = [
    {
      question: "What makes the Lynton Motus AY different from other lasers?",
      answer: "The Motus AY uses patented Moveo technology that heats hair follicles gradually rather than with high-peak pulses. This is what makes it truly pain-free while maintaining clinical efficacy. It's the only Alexandrite laser in the world with this technology."
    },
    {
      question: "Is the Lynton Motus AY really pain-free?",
      answer: "Yes, genuinely. Most clients describe the sensation as a warm massage. Unlike older lasers with a 'snapping' or 'rubber band' sensation, the Moveo technology eliminates this completely. No numbing cream is needed."
    },
    {
      question: "Is it safe for my skin type?",
      answer: "The Lynton Motus AY is safe for all skin types, including Fitzpatrick types IV-VI (darker skin). This is one of the main reasons we chose this technology—to safely serve East London's diverse community."
    },
    {
      question: "Why don't all clinics use this technology?",
      answer: "The Lynton Motus AY represents a significant investment. Many clinics use cheaper IPL (not laser) or older laser systems. We believe our clients deserve the best, safest, and most effective technology available."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most clients need 6-8 sessions for optimal results. The Alexandrite 755nm wavelength is the most effective for hair removal, meaning fewer sessions compared to other lasers or IPL."
    },
    {
      question: "Is Lynton a reputable brand?",
      answer: "Lynton Lasers is a British manufacturer with over 30 years of experience. Their equipment is used by NHS hospitals, private clinics, and dermatologists worldwide. They're the most trusted name in UK aesthetic laser technology."
    }
  ];

  const relatedServices = [
    {
      name: "Laser Hair Removal",
      href: "/laser-hair-removal-dagenham",
      description: "Book your pain-free laser hair removal treatment with the Lynton Motus AY."
    },
    {
      name: "Skin Rejuvenation",
      href: "/skin-rejuvenation-dagenham",
      description: "Advanced skin renewal treatments for a youthful complexion."
    },
    {
      name: "Tattoo Removal",
      href: "/tattoo-removal-east-london",
      description: "East London's only Quanta Thunder laser for advanced tattoo removal."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Lynton Motus AY Laser | Pain-Free Hair Removal | Dagenham"
        description="Experience the Lynton Motus AY—the world's only truly pain-free Alexandrite laser. NHS-approved, safe for all skin types. Available at Laser Light Skin Clinic Dagenham."
        canonicalUrl="https://laserlightskinclinic.co.uk/lynton-motus-ay-laser"
        keywords="lynton motus ay, lynton laser, pain free laser hair removal, alexandrite laser, motus ay dagenham, lynton laser east london"
        structuredData={[structuredData, serviceSchema]}
      />
      
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        <ServiceHero
          trustBadge="NHS-Approved Technology"
          title="Lynton Motus AY Laser"
          titleAccent="Motus AY"
          subtitle="The World's Only Pain-Free Alexandrite Laser"
          description="Experience permanent hair removal without discomfort. Safe for all skin types. Available exclusively at Laser Light Skin Clinic."
          badge="Medical-Grade Technology"
          secondaryCta={{ text: "Book Free Consultation", href: "https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" }}
          heroImage={laserDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Lynton Motus AY Laser" }
          ]}
          stats={[
            { value: "Pain-Free", label: "Guaranteed" },
            { value: "All Skin", label: "Types Safe" },
            { value: "NHS", label: "Approved" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="What is the Lynton Motus AY?"
          content={whatIsContent}
          highlightText="The same technology trusted by NHS dermatology departments—now available in Dagenham."
        />
        
        <BenefitsList
          title="Why the Lynton Motus AY is Different"
          subtitle="Revolutionary Moveo technology for truly pain-free permanent hair removal"
          benefits={benefits}
        />
        
        <TechnologySection
          title="The Science Behind Moveo Technology"
          subtitle="Understanding why the Lynton Motus AY is truly pain-free"
          technologyName="Moveo Technology"
          description="Traditional lasers fire high-energy pulses that rapidly heat hair follicles—this is what causes the painful 'snapping' sensation. The Lynton Motus AY takes a different approach. Moveo technology uses lower energy delivered continuously with a sweeping motion, gradually heating the hair follicle to the destruction point without the pain."
          features={technologyFeatures}
          certifications={["NHS Approved", "CE Marked", "FDA Cleared", "Made in UK"]}
          deviceImage={laserDevice}
        />

        {/* Comparison Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-foreground mb-4">Lynton Motus AY vs Other Lasers</h2>
              <p className="font-body text-lg text-muted-foreground">
                See how our technology compares to IPL and traditional lasers
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="p-4 text-left font-heading">Feature</th>
                      <th className="p-4 text-center font-heading">Lynton Motus AY</th>
                      <th className="p-4 text-center font-heading">Traditional Laser</th>
                      <th className="p-4 text-center font-heading">IPL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-medium">Pain Level</td>
                      <td className="p-4 text-center text-primary font-semibold">Pain-Free ✓</td>
                      <td className="p-4 text-center text-muted-foreground">Painful</td>
                      <td className="p-4 text-center text-muted-foreground">Uncomfortable</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">Safe for Dark Skin</td>
                      <td className="p-4 text-center text-primary font-semibold">Yes ✓</td>
                      <td className="p-4 text-center text-muted-foreground">Limited</td>
                      <td className="p-4 text-center text-destructive">No</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Sessions Needed</td>
                      <td className="p-4 text-center text-primary font-semibold">6-8</td>
                      <td className="p-4 text-center text-muted-foreground">8-12</td>
                      <td className="p-4 text-center text-muted-foreground">12-20</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">Permanent Results</td>
                      <td className="p-4 text-center text-primary font-semibold">Yes ✓</td>
                      <td className="p-4 text-center text-muted-foreground">Yes</td>
                      <td className="p-4 text-center text-destructive">Temporary</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">NHS Approved</td>
                      <td className="p-4 text-center text-primary font-semibold">Yes ✓</td>
                      <td className="p-4 text-center text-muted-foreground">Some</td>
                      <td className="p-4 text-center text-destructive">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8">
                <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
        
        <ServiceFAQ 
          title="Frequently Asked Questions"
          subtitle="Common questions about the Lynton Motus AY laser"
          faqs={faqs} 
        />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Experience the Lynton Motus AY"
          subtitle="Book your free consultation and patch test today"
          showMap={true}
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default LyntonMotusAYLaser;
