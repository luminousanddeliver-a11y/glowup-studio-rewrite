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
    "name": "Quanta Thunder Laser",
    "description": "Advanced Alexandrite laser for permanent hair removal. NHS-approved and safe for all skin types.",
    "manufacturer": {
      "@type": "Organization",
      "name": "Quanta System",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      }
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quanta Thunder Laser Hair Removal",
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
    "description": "Experience the Quanta Thunder—an advanced Alexandrite laser. NHS-approved, safe for all skin types including dark skin.",
    "areaServed": ["Dagenham", "East London", "Barking", "Romford", "Ilford"]
  };

  const quickStats = [
    { value: "Comfortable", label: "Advanced Cooling", icon: Heart },
    { value: "All Skin Types", label: "Fitzpatrick I-VI", icon: Users },
    { value: "NHS Approved", label: "Medical-Grade Safety", icon: Shield },
    { value: "Made in UK", label: "British Technology", icon: Award },
  ];

  const whatIsContent = [
    "The Quanta Thunder represents a breakthrough in laser hair removal technology. It's an advanced Alexandrite laser system that combines clinical efficacy with comfortable treatment.",
    "Unlike older lasers that rely on high peak power (causing discomfort), the Motus AY uses Moveo technology—a gradual thermal approach that heats the hair follicle slowly and uniformly. The result? Permanent hair reduction with minimal discomfort.",
    "This is the same technology trusted by NHS dermatology departments across the UK. At Laser Light Skin Clinic in Dagenham, we're proud to offer this premium technology to East London."
  ];

  const benefits = [
    {
      title: "Comfortable Treatment",
      description: "Advanced cooling and Moveo technology ensure a comfortable experience. Most clients describe the sensation as a warm massage.",
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
    "Moveo Technology: Gradual heating for comfort",
    "755nm Alexandrite Wavelength: Gold standard for hair removal",
    "Continuous Cooling: Integrated sapphire cooling tip",
    "High Repetition Rate: Treats large areas quickly",
    "Adjustable Parameters: Customized for every skin type",
    "Made in UK: Quanta is a world-leading manufacturer"
  ];

  const faqs = [
    {
      question: "What makes the Quanta Thunder different from other lasers?",
      answer: "The Motus AY uses patented Moveo technology that heats hair follicles gradually rather than with high-peak pulses. This makes treatment comfortable while maintaining clinical efficacy. It's the only Alexandrite laser in the world with this technology."
    },
    {
      question: "Is the Quanta Thunder comfortable?",
      answer: "Yes. Most clients describe the sensation as a warm massage. Unlike older lasers with a 'snapping' or 'rubber band' sensation, the Moveo technology eliminates this completely. No numbing cream is needed."
    },
    {
      question: "Is it safe for my skin type?",
      answer: "The Quanta Thunder is safe for all skin types, including Fitzpatrick types IV-VI (darker skin). This is one of the main reasons we chose this technology—to safely serve East London's diverse community."
    },
    {
      question: "Why don't all clinics use this technology?",
      answer: "The Quanta Thunder represents a significant investment. Many clinics use cheaper IPL (not laser) or older laser systems. We believe our clients deserve the best, safest, and most effective technology available."
    },
    {
      question: "How many sessions will I need?",
      answer: "Most clients need 6-8 sessions for optimal results. The Alexandrite 755nm wavelength is the most effective for hair removal, meaning fewer sessions compared to other lasers or IPL."
    },
    {
      question: "Is Quanta System a reputable brand?",
      answer: "Quanta System is a world-leading manufacturer of medical and aesthetic lasers. Their equipment is used by NHS hospitals, private clinics, and dermatologists worldwide. The Thunder series represents the pinnacle of laser technology."
    }
  ];

  const relatedServices = [
    {
      name: "Laser Hair Removal",
      href: "/laser-hair-removal-dagenham",
      description: "Book your laser hair removal treatment with the Quanta Thunder."
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
        title="Quanta Thunder Laser | Advanced Hair Removal | Dagenham"
        description="Experience the Quanta Thunder—an advanced Alexandrite laser. NHS-approved, safe for all skin types. Available at Laser Light Skin Clinic Dagenham."
        canonicalUrl="https://laserlightskinclinic.co.uk/lynton-motus-ay-laser"
        keywords="quanta thunder, quanta laser, laser hair removal, alexandrite laser, quanta thunder dagenham, quanta laser east london"
        structuredData={[structuredData, serviceSchema]}
      />
      
      <Header />
      
      <main className="flex-1 pb-20 lg:pb-0">
        <ServiceHero
          trustBadge="NHS-Approved Technology"
          title="Quanta Thunder Laser"
          titleAccent="Motus AY"
          subtitle="An Advanced Alexandrite Laser"
          description="Experience permanent hair removal without discomfort. Safe for all skin types. Available exclusively at Laser Light Skin Clinic."
          badge="Medical-Grade Technology"
          secondaryCta={{ text: "Book Consultation", href: "https://phorest.com/book/salons/laserlightskinclinic" }}
          heroImage={laserDevice}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Quanta Thunder Laser" }
          ]}
          stats={[
            { value: "Comfortable", label: "Experience" },
            { value: "All Skin", label: "Types Safe" },
            { value: "NHS", label: "Approved" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="What is the Quanta Thunder?"
          content={whatIsContent}
          highlightText="The same technology trusted by NHS dermatology departments—now available in Dagenham."
        />
        
        <BenefitsList
          title="Why the Quanta Thunder is Different"
          subtitle="Revolutionary Moveo technology for comfortable permanent hair removal"
          benefits={benefits}
        />
        
        <TechnologySection
          title="The Science Behind Moveo Technology"
          subtitle="Understanding why the Quanta Thunder is comfortable"
          technologyName="Moveo Technology"
          description="Traditional lasers fire high-energy pulses that rapidly heat hair follicles—this is what causes the painful 'snapping' sensation. The Quanta Thunder takes a different approach. Moveo technology uses lower energy delivered continuously with a sweeping motion, gradually heating the hair follicle to the destruction point without the pain."
          features={technologyFeatures}
          certifications={["NHS Approved", "FDA Approved", "FDA Cleared", "Made in UK"]}
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
              <h2 className="text-foreground mb-4">Quanta Thunder vs Other Lasers</h2>
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
                      <th className="p-4 text-center font-heading">Quanta Thunder</th>
                      <th className="p-4 text-center font-heading">Traditional Laser</th>
                      <th className="p-4 text-center font-heading">IPL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-medium">Pain Level</td>
                      <td className="p-4 text-center text-primary font-semibold">Comfortable ✓</td>
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
                <a href="https://phorest.com/book/salons/laserlightskinclinic" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
        
        <ServiceFAQ 
          title="Frequently Asked Questions"
          subtitle="Common questions about the Quanta Thunder laser"
          faqs={faqs} 
        />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Experience the Quanta Thunder"
          subtitle="Book your consultation and patch test today"
          showMap={true}
        />
      </main>
      
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default LyntonMotusAYLaser;
