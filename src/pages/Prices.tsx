import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Award, Clock, CreditCard, Star, Tag, ArrowRight, CheckCircle2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PricesStickyButton } from "@/components/prices/PricesStickyButton";

interface Treatment {
  name: string;
  single: string;
  courseOf6?: string;
  courseOf8?: string;
  note?: string;
}

interface PriceCategory {
  title: string;
  badge?: string;
  treatments: Treatment[];
  note?: string;
}

const laserPrices: PriceCategory[] = [
  {
    title: "Face & Neck",
    treatments: [
      { name: "Upper Lip", single: "£35", courseOf6: "£175", courseOf8: "£210" },
      { name: "Chin", single: "£40", courseOf6: "£200", courseOf8: "£240" },
      { name: "Upper Lip & Chin", single: "£60", courseOf6: "£300", courseOf8: "£360" },
      { name: "Full Face", single: "£110", courseOf6: "£550", courseOf8: "£660", note: "Inc. Neck" },
    ],
  },
  {
    title: "Body Packages",
    badge: "Popular Choice",
    treatments: [
      { name: "Underarms", single: "£50", courseOf6: "£250", courseOf8: "£300" },
      { name: "Bikini Line (Standard)", single: "£60", courseOf6: "£300", courseOf8: "£360" },
      { name: "Hollywood / Brazilian", single: "£85", courseOf6: "£425", courseOf8: "£510" },
      { name: "Full Legs", single: "£150", courseOf6: "£750", courseOf8: "£900" },
      { name: "Full Body Package", single: "£280", courseOf6: "£1,400", courseOf8: "£1,680", note: "Legs, Arms, Underarms, Hollywood, Buttocks" },
    ],
  },
];

const skinTreatments: PriceCategory[] = [
  {
    title: "HydraFacial",
    treatments: [
      { name: "HydraFacial Signature (45 mins)", single: "£120", courseOf6: "£640" },
      { name: "HydraFacial Deluxe (60 mins)", single: "£150", courseOf6: "£800" },
      { name: "HydraFacial Platinum (75 mins)", single: "£180", courseOf6: "£960" },
    ],
  },
  {
    title: "Chemical Peels",
    treatments: [
      { name: "Light Peel (Glycolic)", single: "£80", courseOf6: "£430" },
      { name: "Medium Peel (TCA)", single: "£120", courseOf6: "£640" },
      { name: "Deep Peel (Jessner)", single: "£150", courseOf6: "£800" },
    ],
  },
  {
    title: "Microneedling",
    badge: "Advanced",
    treatments: [
      { name: "SkinPen Face", single: "£250", courseOf6: "£1,350" },
      { name: "SkinPen Face & Neck", single: "£300", courseOf6: "£1,620" },
      { name: "SkinPen Stretch Marks", single: "£200", courseOf6: "£1,080" },
    ],
  },
];

const injectables: PriceCategory[] = [
  {
    title: "Anti-Wrinkle",
    treatments: [
      { name: "1 Area", single: "£150" },
      { name: "2 Areas", single: "£220" },
      { name: "3 Areas", single: "£280" },
    ],
  },
  {
    title: "Dermal Fillers",
    badge: "Premium",
    treatments: [
      { name: "Lip Filler (0.5ml)", single: "£150" },
      { name: "Lip Filler (1ml)", single: "£220" },
      { name: "Cheek Filler (1ml)", single: "£280" },
      { name: "Tear Trough", single: "£350" },
      { name: "Profhilo (2 Sessions)", single: "£500" },
    ],
  },
];

const trustBadges = [
  { icon: Shield, text: "NHS Approved Clinic" },
  { icon: Award, text: "Level 4 Qualified" },
  { icon: Clock, text: "Open 7 Days a Week" },
  { icon: CreditCard, text: "0% Finance Available" },
];

const exclusiveOffers = [
  {
    title: "50% Off First Session",
    description: "Valid for any single Laser Hair Removal session. Experience the pain-free difference.",
    cta: "Save 50%",
    ctaLink: "Claim Offer",
    badge: "NEW CLIENTS",
    featured: false,
  },
  {
    title: "Full Body Package",
    description: "Our most popular package. Includes legs, arms, underarms, and bikini line.",
    price: "£895",
    originalPrice: "£1,680",
    cta: "Book Now",
    featured: true,
  },
  {
    title: "HydraFacial Glow",
    description: "Buy a course of 3 HydraFacials and receive a free LED Light Therapy add-on.",
    cta: "Free Add-on",
    ctaLink: "Learn More",
    featured: false,
  },
];

const faqs = [
  {
    question: "Is a consultation fee required?",
    answer: "No, all consultations at Laser Light Skin Clinic are completely free. We believe in transparent pricing with no hidden costs.",
  },
  {
    question: "What happens if I miss an appointment?",
    answer: "We require 24 hours notice for cancellations. Late cancellations or no-shows may be charged up to 50% of the treatment cost.",
  },
  {
    question: "Are there discounts for multiple areas?",
    answer: "Yes! We offer package deals for multiple treatment areas. Our course packages provide significant savings - typically 15-25% off individual session prices.",
  },
];

const Prices = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("laser");

  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Treatment Prices at Laser Light Skin Clinic",
    "description": "Complete price list for laser hair removal, facials, injectables and skin treatments in Dagenham, East London.",
    "url": "https://laserlightskinclinic.co.uk/prices"
  };

  const renderPriceTable = (categories: PriceCategory[]) => (
    <div className="space-y-8">
      {categories.map((category, catIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: catIndex * 0.1 }}
          className="bg-card rounded-xl border border-border overflow-hidden"
        >
          {/* Category Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-b border-border">
            <h3 className="font-heading font-semibold text-lg text-foreground">{category.title}</h3>
            {category.badge && (
              <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {category.badge}
              </span>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Treatment Area
                  </th>
                  <th className="text-center px-4 py-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Single Session
                  </th>
                  <th className="text-center px-4 py-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    <span className="block">Course of 6</span>
                    <span className="text-xs text-accent font-normal">Pay for 5, Get 1 Free</span>
                  </th>
                  <th className="text-center px-4 py-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    <span className="block">Course of 8</span>
                    <span className="text-xs text-accent font-normal">Best Value (Save 30%)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {category.treatments.map((treatment, index) => (
                  <tr
                    key={treatment.name}
                    className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}
                  >
                    <td className="px-6 py-4 text-foreground font-body">
                      {treatment.name}
                      {treatment.note && (
                        <span className="block text-xs text-muted-foreground">{treatment.note}</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center text-foreground font-body">
                      {treatment.single}
                    </td>
                    <td className="px-4 py-4 text-center text-accent font-semibold">
                      {treatment.courseOf6 || "—"}
                    </td>
                    <td className="px-4 py-4 text-center text-accent font-bold">
                      {treatment.courseOf8 || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Prices | Laser Hair Removal & Skin Treatment Costs | Dagenham"
        description="View our treatment prices for laser hair removal, HydraFacials, Botox, tattoo removal and more. Free consultation available. Transparent pricing at Laser Light Skin Clinic Dagenham."
        canonicalUrl="https://laserlightskinclinic.co.uk/prices"
        structuredData={priceSchema}
      />

      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section - Light Background */}
        <section className="bg-gradient-to-b from-secondary to-background pt-24 lg:pt-28 pb-12 lg:pb-16">
          <div className="container-custom text-center">
            {/* NHS Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">NHS Approved Safety Standards</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4"
            >
              Transparent Pricing for{" "}
              <span className="text-accent">Flawless Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
            >
              Invest in your confidence with our competitive pricing and value-packed courses. Interest-free finance options available for all treatment plans over £500.
            </motion.p>
          </div>
        </section>

        {/* Current Exclusive Offers */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Current Exclusive Offers
                </h2>
              </div>
              <a href="#" className="text-accent hover:underline text-sm font-medium hidden sm:block">
                View all promos →
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {exclusiveOffers.map((offer, index) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative rounded-xl p-6 ${
                    offer.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  {offer.badge && (
                    <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                      {offer.badge}
                    </span>
                  )}
                  {offer.featured && (
                    <Star className="absolute top-4 right-4 w-5 h-5 text-primary-foreground/80" />
                  )}

                  <h3 className={`font-heading font-bold text-lg mb-2 ${offer.featured ? "" : "text-foreground"}`}>
                    {offer.title}
                  </h3>
                  <p className={`text-sm mb-4 ${offer.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {offer.description}
                  </p>

                  {offer.price && (
                    <div className="mb-4">
                      <span className={`text-xs ${offer.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        Total Course Price
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">{offer.price}</span>
                        {offer.originalPrice && (
                          <span className={`line-through text-sm ${offer.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                            {offer.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {offer.featured ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
                    >
                      <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                        {offer.cta}
                      </a>
                    </Button>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold">{offer.cta}</span>
                      <a href="#" className="text-accent hover:underline text-sm font-medium">
                        {offer.ctaLink}
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-secondary/50 border-y border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Tables with Tabs */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-custom">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex justify-center mb-10"
              >
                <TabsList className="inline-flex bg-secondary rounded-full p-1.5 gap-1">
                  <TabsTrigger
                    value="laser"
                    className="rounded-full px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    Laser Hair Removal
                  </TabsTrigger>
                  <TabsTrigger
                    value="skin"
                    className="rounded-full px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    Skin Treatments
                  </TabsTrigger>
                  <TabsTrigger
                    value="injectables"
                    className="rounded-full px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    Injectables
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              <TabsContent value="laser">
                {renderPriceTable(laserPrices)}
                <p className="text-center text-muted-foreground text-sm mt-6 font-body">
                  *Patch test required 48 hours before treatment. Prices are subject to consultation.
                </p>
              </TabsContent>

              <TabsContent value="skin">
                {renderPriceTable(skinTreatments)}
              </TabsContent>

              <TabsContent value="injectables">
                {renderPriceTable(injectables)}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Spread the Cost Banner */}
        <section className="bg-primary py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-1">
                  Spread the Cost
                </h3>
                <p className="text-primary-foreground/80 font-body text-sm">
                  We offer 0% interest finance plans for all course bookings over £500. Pay in 3, 6 or 12 installments.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary-foreground text-primary px-4 py-2 rounded font-bold text-sm">
                  KLARNA
                </div>
                <div className="bg-primary-foreground text-primary px-4 py-2 rounded font-bold text-sm">
                  PAYPAL
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <a href="/contact">Apply Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-2xl lg:text-3xl font-heading font-bold text-foreground text-center mb-10"
            >
              Common Questions
            </motion.h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
      <PricesStickyButton />
    </div>
  );
};

export default Prices;
