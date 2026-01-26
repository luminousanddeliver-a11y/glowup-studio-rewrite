import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, CreditCard, Gift, Shield, Sparkles, Clock, BadgeCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Treatment {
  name: string;
  single: string;
  course?: string;
  courseType?: string;
  savings?: string;
  popular?: boolean;
}

interface PriceCategory {
  title: string;
  description: string;
  treatments: Treatment[];
  note?: string;
  courseLabel?: string;
}

const priceCategories: Record<string, PriceCategory> = {
  "laser-women": {
    title: "Laser Hair Removal - Women",
    description: "Pain-free permanent hair reduction with award-winning Lynton Motus AY technology",
    courseLabel: "Course of 6",
    treatments: [
      { name: "Upper Lip", single: "£40", course: "£180", savings: "Save £60", popular: true },
      { name: "Chin", single: "£45", course: "£200", savings: "Save £70" },
      { name: "Upper Lip & Chin", single: "£65", course: "£290", savings: "Save £100" },
      { name: "Sideburns", single: "£45", course: "£200", savings: "Save £70" },
      { name: "Full Face", single: "£85", course: "£380", savings: "Save £130", popular: true },
      { name: "Underarms", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Bikini Line", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Brazilian", single: "£95", course: "£430", savings: "Save £140", popular: true },
      { name: "Hollywood", single: "£110", course: "£495", savings: "Save £165" },
      { name: "Half Arms", single: "£70", course: "£315", savings: "Save £105" },
      { name: "Full Arms", single: "£100", course: "£450", savings: "Save £150" },
      { name: "Half Legs", single: "£120", course: "£540", savings: "Save £180" },
      { name: "Full Legs", single: "£180", course: "£810", savings: "Save £270", popular: true },
      { name: "Stomach Line", single: "£45", course: "£200", savings: "Save £70" },
      { name: "Full Stomach", single: "£80", course: "£360", savings: "Save £120" },
      { name: "Full Body", single: "£350", course: "£1575", savings: "Save £525" },
    ],
    note: "Patch test required before first treatment. Prices include consultation."
  },
  "laser-men": {
    title: "Laser Hair Removal - Men",
    description: "Effective hair removal for all skin types with the latest laser technology",
    courseLabel: "Course of 6",
    treatments: [
      { name: "Unibrow", single: "£35", course: "£160", savings: "Save £50" },
      { name: "Ears", single: "£35", course: "£160", savings: "Save £50" },
      { name: "Beard Line / Cheeks", single: "£55", course: "£250", savings: "Save £80", popular: true },
      { name: "Neck (Front/Back)", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Shoulders", single: "£80", course: "£360", savings: "Save £120" },
      { name: "Chest", single: "£120", course: "£540", savings: "Save £180", popular: true },
      { name: "Stomach", single: "£100", course: "£450", savings: "Save £150" },
      { name: "Chest & Stomach", single: "£180", course: "£810", savings: "Save £270" },
      { name: "Full Back", single: "£140", course: "£630", savings: "Save £210", popular: true },
      { name: "Half Back", single: "£90", course: "£405", savings: "Save £135" },
      { name: "Full Arms", single: "£100", course: "£450", savings: "Save £150" },
      { name: "Full Legs", single: "£200", course: "£900", savings: "Save £300" },
      { name: "Full Body", single: "£400", course: "£1800", savings: "Save £600" },
    ],
    note: "All treatments performed by qualified laser practitioners."
  },
  facials: {
    title: "Facials & HydraFacial",
    description: "Award-winning HydraFacial and bespoke facial treatments for glowing skin",
    courseLabel: "Course of 3",
    treatments: [
      { name: "HydraFacial Mini (30 mins)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "HydraFacial Signature (45 mins)", single: "£120", course: "£320", savings: "Save £40", popular: true },
      { name: "HydraFacial Deluxe (60 mins)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "HydraFacial Platinum (75 mins)", single: "£180", course: "£480", savings: "Save £60", popular: true },
      { name: "HydraFacial for Back", single: "£150", course: "£400", savings: "Save £50" },
      { name: "HydraFacial Keravive (Scalp)", single: "£200", course: "£540", savings: "Save £60" },
      { name: "Million Dollar Facial", single: "£180", course: "£480", savings: "Save £60", popular: true },
      { name: "Express Glow Facial (30 mins)", single: "£55", course: "£150", savings: "Save £15" },
      { name: "Deep Cleansing Facial (60 mins)", single: "£75", course: "£200", savings: "Save £25" },
      { name: "Anti-Ageing Facial (75 mins)", single: "£95", course: "£255", savings: "Save £30" },
    ],
    note: "All facials include skin analysis and aftercare advice."
  },
  peels: {
    title: "Chemical Peels & Microneedling",
    description: "Professional-grade peels and SkinPen treatments for skin renewal",
    courseLabel: "Course of 3",
    treatments: [
      { name: "Chemical Peel - Light (Glycolic)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "Chemical Peel - Medium (TCA)", single: "£120", course: "£320", savings: "Save £40", popular: true },
      { name: "Chemical Peel - Deep (Jessner)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Cosmelan Depigmentation Peel", single: "£650", course: "—" },
      { name: "SkinPen Microneedling (Face)", single: "£250", course: "£675", savings: "Save £75", popular: true },
      { name: "SkinPen Microneedling (Face & Neck)", single: "£300", course: "£810", savings: "Save £90" },
      { name: "SkinPen Microneedling (Stretch Marks)", single: "£200", course: "£540", savings: "Save £60" },
      { name: "LED Light Therapy (Add-on)", single: "£40", course: "£100", savings: "Save £20" },
      { name: "LED Light Therapy (Standalone)", single: "£60", course: "£160", savings: "Save £20" },
    ],
    note: "Consultation required. Results visible after 4-6 weeks."
  },
  advanced: {
    title: "Advanced Skin Treatments",
    description: "Cutting-edge technology for skin rejuvenation and resurfacing",
    courseLabel: "Course of 3",
    treatments: [
      { name: "Cold Plasma (Face)", single: "£180", course: "£480", savings: "Save £60", popular: true },
      { name: "Cold Plasma (Neck)", single: "£120", course: "£320", savings: "Save £40" },
      { name: "Cold Plasma (Face & Neck)", single: "£250", course: "£675", savings: "Save £75" },
      { name: "Laser Skin Rejuvenation (Face)", single: "£150", course: "£400", savings: "Save £50", popular: true },
      { name: "Laser Resurfacing (Face)", single: "£250", course: "£675", savings: "Save £75" },
      { name: "Laser Resurfacing (Full Face)", single: "£350", course: "£945", savings: "Save £105" },
      { name: "Pigmentation Treatment (Small)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "Pigmentation Treatment (Full Face)", single: "£150", course: "£400", savings: "Save £50", popular: true },
      { name: "Vein Removal (Small Area)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "Vein Removal (Medium Area)", single: "£120", course: "£320", savings: "Save £40" },
      { name: "Vein Removal (Large Area)", single: "£180", course: "£480", savings: "Save £60" },
    ],
    note: "Multiple sessions may be required for optimal results."
  },
  injectables: {
    title: "Injectables & Aesthetics",
    description: "Botox, dermal fillers and aesthetic injectables by qualified practitioners",
    courseLabel: "—",
    treatments: [
      { name: "Botox - 1 Area", single: "£150", popular: true },
      { name: "Botox - 2 Areas", single: "£220" },
      { name: "Botox - 3 Areas", single: "£280", popular: true },
      { name: "Lip Filler (0.5ml)", single: "£150" },
      { name: "Lip Filler (1ml)", single: "£220", popular: true },
      { name: "Cheek Filler (1ml)", single: "£280" },
      { name: "Chin Filler (1ml)", single: "£280" },
      { name: "Jawline Filler (2ml)", single: "£450" },
      { name: "Nasolabial Folds (1ml)", single: "£250" },
      { name: "Lemon Bottle Fat Dissolving (per vial)", single: "£120", course: "£320", savings: "Save £40" },
      { name: "Lumi Eyes (Under Eye)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Profhilo (2 Sessions)", single: "£500" },
      { name: "Skin Boosters", single: "£200", course: "£540", savings: "Save £60" },
    ],
    note: "All injectables include consultation. Results last 3-12 months."
  },
  removal: {
    title: "Removal Treatments",
    description: "Tattoo removal with Quanta Thunder and permanent hair removal with electrolysis",
    courseLabel: "Course of 6",
    treatments: [
      { name: "Tattoo Removal - Extra Small (up to 2cm²)", single: "£60", course: "£270", savings: "Save £90" },
      { name: "Tattoo Removal - Small (2-5cm²)", single: "£80", course: "£360", savings: "Save £120", popular: true },
      { name: "Tattoo Removal - Medium (5-10cm²)", single: "£120", course: "£540", savings: "Save £180" },
      { name: "Tattoo Removal - Large (10-20cm²)", single: "£180", course: "£810", savings: "Save £270" },
      { name: "Tattoo Removal - Extra Large (20cm²+)", single: "£250", course: "£1125", savings: "Save £375" },
      { name: "Skin Tag Removal (per tag)", single: "£50" },
      { name: "Mole Removal (per mole)", single: "£100", popular: true },
      { name: "Milia Removal (per milia)", single: "£30" },
      { name: "Electrolysis (15 mins)", single: "£25", course: "£120", savings: "Save £30" },
      { name: "Electrolysis (30 mins)", single: "£40", course: "£180", savings: "Save £60", popular: true },
      { name: "Advanced Electrolysis (30 mins)", single: "£55", course: "£250", savings: "Save £80" },
    ],
    note: "Tattoo removal sessions spaced 6-8 weeks apart. Free consultation."
  },
  wellness: {
    title: "Wellness & Body",
    description: "IV vitamin drips, massage therapy and holistic wellness treatments",
    courseLabel: "Course of 3",
    treatments: [
      { name: "IV Drip - Vitamin C Boost", single: "£150", course: "£400", savings: "Save £50", popular: true },
      { name: "IV Drip - Glutathione (Skin Brightening)", single: "£180", course: "£480", savings: "Save £60" },
      { name: "IV Drip - NAD+ (Anti-Ageing)", single: "£350", course: "£945", savings: "Save £105" },
      { name: "IV Drip - Myers Cocktail", single: "£200", course: "£540", savings: "Save £60", popular: true },
      { name: "IV Drip - Immunity Boost", single: "£180", course: "£480", savings: "Save £60" },
      { name: "IV Drip - Energy & Recovery", single: "£180", course: "£480", savings: "Save £60" },
      { name: "Intimate V-Whitening (per session)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Swedish Massage (30 mins)", single: "£40", course: "£100", savings: "Save £20" },
      { name: "Swedish Massage (60 mins)", single: "£70", course: "£180", savings: "Save £30", popular: true },
      { name: "Deep Tissue Massage (60 mins)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "Hopi Ear Candling", single: "£35", course: "£90", savings: "Save £15" },
      { name: "Ear Piercing (including studs)", single: "£25" },
      { name: "Skin Analysis Consultation", single: "£30" },
    ],
    note: "IV drips administered by qualified medical professionals."
  },
};

const trustIndicators = [
  { icon: Shield, text: "NHS Approved" },
  { icon: BadgeCheck, text: "Fully Insured" },
  { icon: Clock, text: "Free Consultation" },
  { icon: Sparkles, text: "Award Winning" },
];

const Prices = () => {
  const isMobile = useIsMobile();
  
  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Treatment Prices at Laser Light Skin Clinic",
    "description": "Complete price list for laser hair removal, facials, injectables and skin treatments in Dagenham, East London.",
    "url": "https://laserlightskinclinic.co.uk/prices"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Prices | Laser Hair Removal & Skin Treatment Costs | Dagenham"
        description="View our treatment prices for laser hair removal, HydraFacials, Botox, tattoo removal and more. 25% off for new clients. Transparent pricing at Laser Light Skin Clinic Dagenham, East London."
        canonicalUrl="https://laserlightskinclinic.co.uk/prices"
        structuredData={priceSchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <PageBreadcrumb 
                items={[{ label: "Prices" }]} 
                variant="dark"
                className="mb-4"
              />
              <h1 className="mb-4">Treatment Prices</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 font-body mb-6">
                Transparent, competitive pricing for all our treatments. No hidden fees.
              </p>
              
              {/* Offer Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-block"
              >
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-accent text-accent-foreground rounded-lg px-6 py-3 font-heading font-bold text-lg shadow-lg"
                >
                  🎉 25% OFF for All New Clients
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 lg:gap-8 mt-8"
            >
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <item.icon className="h-5 w-5" />
                  <span className="font-body text-sm lg:text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Price Tables */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <Tabs defaultValue="laser-women" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className={`${isMobile ? 'overflow-x-auto pb-2 -mx-4 px-4' : ''}`}>
                  <TabsList className={`${isMobile ? 'inline-flex w-max' : 'grid grid-cols-4 lg:grid-cols-8'} h-auto gap-2 bg-secondary p-2`}>
                    <TabsTrigger value="laser-women" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Laser Women
                    </TabsTrigger>
                    <TabsTrigger value="laser-men" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Laser Men
                    </TabsTrigger>
                    <TabsTrigger value="facials" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Facials
                    </TabsTrigger>
                    <TabsTrigger value="peels" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Peels
                    </TabsTrigger>
                    <TabsTrigger value="advanced" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Advanced
                    </TabsTrigger>
                    <TabsTrigger value="injectables" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Injectables
                    </TabsTrigger>
                    <TabsTrigger value="removal" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Removal
                    </TabsTrigger>
                    <TabsTrigger value="wellness" className="whitespace-nowrap px-4 py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      Wellness
                    </TabsTrigger>
                  </TabsList>
                </div>
              </motion.div>

              {Object.entries(priceCategories).map(([key, category]) => (
                <TabsContent key={key} value={key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card rounded-lg shadow-card overflow-hidden"
                  >
                    {/* Category Header */}
                    <div className="bg-primary p-6 text-primary-foreground">
                      <h2 className="text-2xl font-heading font-bold mb-2">{category.title}</h2>
                      <p className="font-body text-primary-foreground/80">{category.description}</p>
                    </div>

                    {/* Price Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-secondary">
                          <tr>
                            <th className="text-left p-4 font-heading font-semibold text-foreground">Treatment</th>
                            <th className="text-right p-4 font-heading font-semibold text-foreground">Single Session</th>
                            <th className="text-right p-4 font-heading font-semibold text-foreground">
                              {category.courseLabel || "Course"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.treatments.map((treatment, index) => (
                            <motion.tr
                              key={treatment.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.02 }}
                              className={`${index % 2 === 0 ? "bg-background" : "bg-secondary/30"} hover:bg-muted/50 transition-colors`}
                            >
                              <td className="p-4 font-body text-foreground">
                                <div className="flex items-center gap-2">
                                  {treatment.name}
                                  {treatment.popular && (
                                    <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full font-medium">
                                      Popular
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-4 font-body text-foreground text-right font-medium">
                                {treatment.single}
                              </td>
                              <td className="p-4 font-body text-right">
                                {treatment.course ? (
                                  <div>
                                    <span className="text-foreground font-medium">{treatment.course}</span>
                                    {treatment.savings && (
                                      <span className="block text-accent text-sm font-medium">
                                        {treatment.savings}
                                      </span>
                                    )}
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground">—</span>
                                )}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Category Note */}
                    {category.note && (
                      <div className="p-4 bg-accent/10 border-t border-border">
                        <p className="text-accent font-body text-sm flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          {category.note}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-foreground mb-4">Flexible Payment Options</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                We make treatments accessible with various payment methods and finance options.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CreditCard, title: "All Cards Accepted", desc: "Visa, Mastercard, Amex" },
                { icon: Clock, title: "0% Finance Available", desc: "Spread over 6-12 months" },
                { icon: Gift, title: "Gift Vouchers", desc: "Perfect for any occasion" },
                { icon: Shield, title: "Price Match", desc: "We'll match local prices" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg text-center shadow-card"
                >
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-primary-foreground mb-4"
            >
              Ready to Book Your Treatment?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto mb-8"
            >
              Book your free consultation today. Our expert team will create a personalized treatment plan tailored to your needs and budget.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:02085981200">
                  <Phone className="h-4 w-4 mr-2" />
                  0208 598 1200
                </a>
              </Button>
            </motion.div>
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pt-8 border-t border-primary-foreground/20"
            >
              <p className="text-primary-foreground/70 font-body text-sm">
                📍 125 Becontree Avenue, Dagenham, Essex, RM8 2UJ
              </p>
              <p className="text-primary-foreground/70 font-body text-sm mt-1">
                📧 info@laserlightskinclinic.co.uk | 📱 07949 501 777
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Prices;
