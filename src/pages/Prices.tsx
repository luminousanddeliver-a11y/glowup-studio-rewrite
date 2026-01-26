import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone } from "lucide-react";

const priceCategories = {
  laser: {
    title: "Laser Hair Removal",
    description: "Pain-free permanent hair reduction with Lynton Motus AY",
    treatments: [
      { name: "Upper Lip", single: "£40", course6: "£180" },
      { name: "Chin", single: "£45", course6: "£200" },
      { name: "Full Face", single: "£85", course6: "£380" },
      { name: "Underarms", single: "£55", course6: "£250" },
      { name: "Brazilian", single: "£95", course6: "£430" },
      { name: "Hollywood", single: "£110", course6: "£495" },
      { name: "Half Legs", single: "£120", course6: "£540" },
      { name: "Full Legs", single: "£180", course6: "£810" },
      { name: "Full Arms", single: "£100", course6: "£450" },
      { name: "Back", single: "£140", course6: "£630" },
      { name: "Chest", single: "£120", course6: "£540" },
      { name: "Full Body", single: "£350", course6: "£1575" },
    ],
    note: "25% off for new clients. Prices include consultation."
  },
  facials: {
    title: "Facials & Skin Treatments",
    description: "Advanced facial treatments for radiant, healthy skin",
    treatments: [
      { name: "HydraFacial Signature", single: "£120", course3: "£320" },
      { name: "HydraFacial Deluxe", single: "£150", course3: "£400" },
      { name: "HydraFacial Platinum", single: "£180", course3: "£480" },
      { name: "HydraFacial for Back", single: "£150", course3: "£400" },
      { name: "HydraFacial Keravive (Scalp)", single: "£200", course3: "£540" },
      { name: "Million Dollar Facial", single: "£180", course3: "£480" },
      { name: "LED Light Therapy", single: "£60", course6: "£270" },
      { name: "SkinPen Microneedling (Face)", single: "£250", course3: "£675" },
      { name: "SkinPen Microneedling (Face & Neck)", single: "£300", course3: "£810" },
      { name: "Chemical Peel (Light)", single: "£80", course3: "£215" },
      { name: "Chemical Peel (Medium)", single: "£120", course3: "£320" },
      { name: "Cosmelan Peel", single: "£650", course3: "—" },
    ],
    note: "Consultation required for all treatments."
  },
  advanced: {
    title: "Advanced Treatments",
    description: "Cutting-edge aesthetic procedures",
    treatments: [
      { name: "Cold Plasma (Face)", single: "£180", course3: "£480" },
      { name: "Cold Plasma (Neck)", single: "£120", course3: "£320" },
      { name: "Cold Plasma (Face & Neck)", single: "£250", course3: "£675" },
      { name: "Skin Rejuvenation (Face)", single: "£150", course3: "£400" },
      { name: "Laser Resurfacing (Face)", single: "£250", course3: "£675" },
      { name: "Pigmentation Treatment", single: "£120", course3: "£320" },
      { name: "Vein Removal (Small Area)", single: "£80", course3: "£215" },
      { name: "Vein Removal (Medium Area)", single: "£120", course3: "£320" },
      { name: "Skin Tag Removal (per tag)", single: "£50", course3: "—" },
      { name: "Mole Removal (per mole)", single: "£100", course3: "—" },
    ],
    note: "Prices may vary based on treatment area size."
  },
  injectables: {
    title: "Injectables",
    description: "Botox, fillers, and aesthetic injectables",
    treatments: [
      { name: "Botox - 1 Area", single: "£150", course3: "—" },
      { name: "Botox - 2 Areas", single: "£220", course3: "—" },
      { name: "Botox - 3 Areas", single: "£280", course3: "—" },
      { name: "Lip Filler (0.5ml)", single: "£150", course3: "—" },
      { name: "Lip Filler (1ml)", single: "£220", course3: "—" },
      { name: "Cheek Filler (1ml)", single: "£280", course3: "—" },
      { name: "Chin Filler (1ml)", single: "£280", course3: "—" },
      { name: "Lemon Bottle (Fat Dissolving)", single: "£120", course3: "£320" },
      { name: "Lumi Eyes", single: "£150", course3: "£400" },
    ],
    note: "All injectables performed by qualified practitioners."
  },
  removal: {
    title: "Removal Treatments",
    description: "Tattoo removal and electrolysis",
    treatments: [
      { name: "Tattoo Removal (Extra Small)", single: "£60", course6: "£270" },
      { name: "Tattoo Removal (Small)", single: "£80", course6: "£360" },
      { name: "Tattoo Removal (Medium)", single: "£120", course6: "£540" },
      { name: "Tattoo Removal (Large)", single: "£180", course6: "£810" },
      { name: "Electrolysis (15 mins)", single: "£25", course6: "£120" },
      { name: "Electrolysis (30 mins)", single: "£40", course6: "£180" },
      { name: "Advanced Electrolysis (30 mins)", single: "£55", course6: "£250" },
    ],
    note: "Tattoo removal sessions spaced 6-8 weeks apart."
  },
  wellness: {
    title: "Wellness & Other",
    description: "IV drips, massage, and additional services",
    treatments: [
      { name: "IV Drip - Vitamin C Boost", single: "£150", course3: "£400" },
      { name: "IV Drip - Glutathione", single: "£180", course3: "£480" },
      { name: "IV Drip - NAD+", single: "£350", course3: "£945" },
      { name: "IV Drip - Myers Cocktail", single: "£200", course3: "£540" },
      { name: "Intimate V-Whitening", single: "£150", course3: "£400" },
      { name: "Massage (30 mins)", single: "£40", course3: "£100" },
      { name: "Massage (60 mins)", single: "£70", course3: "£180" },
      { name: "Hopi Ear Candling", single: "£35", course3: "£90" },
      { name: "Ear Piercing", single: "£25", course3: "—" },
      { name: "Skin Analysis", single: "£30", course3: "—" },
    ],
    note: "Gift vouchers available for all treatments."
  },
};

const Prices = () => {
  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Treatment Prices at Laser Light Skin Clinic",
    "description": "Complete price list for laser hair removal, facials, injectables and skin treatments in Dagenham.",
    "url": "https://laserlightskinclinic.co.uk/prices"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Prices | Laser Hair Removal & Skin Treatment Costs Dagenham"
        description="View our treatment prices for laser hair removal, Hydrafacials, Botox, tattoo removal and more. 25% off for new clients. Transparent pricing at Laser Light Skin Clinic Dagenham."
        canonicalUrl="https://laserlightskinclinic.co.uk/prices"
        structuredData={priceSchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <PageBreadcrumb 
                items={[{ label: "Prices" }]} 
                variant="dark"
                className="mb-4"
              />
              <h1 className="mb-4">Treatment Prices</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Transparent pricing for all our services. New clients receive 25% off their first treatment course.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Price Tables */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <Tabs defaultValue="laser" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <TabsList className="w-full flex-wrap h-auto gap-2 bg-secondary p-2 mb-8">
                  <TabsTrigger value="laser" className="flex-1 min-w-[120px]">Laser</TabsTrigger>
                  <TabsTrigger value="facials" className="flex-1 min-w-[120px]">Facials</TabsTrigger>
                  <TabsTrigger value="advanced" className="flex-1 min-w-[120px]">Advanced</TabsTrigger>
                  <TabsTrigger value="injectables" className="flex-1 min-w-[120px]">Injectables</TabsTrigger>
                  <TabsTrigger value="removal" className="flex-1 min-w-[120px]">Removal</TabsTrigger>
                  <TabsTrigger value="wellness" className="flex-1 min-w-[120px]">Wellness</TabsTrigger>
                </TabsList>
              </motion.div>

              {Object.entries(priceCategories).map(([key, category]) => (
                <TabsContent key={key} value={key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card rounded-lg shadow-card overflow-hidden"
                  >
                    <div className="p-6 border-b border-border">
                      <h2 className="text-foreground mb-2">{category.title}</h2>
                      <p className="text-muted-foreground font-body">{category.description}</p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-secondary">
                          <tr>
                            <th className="text-left p-4 font-heading font-medium text-foreground">Treatment</th>
                            <th className="text-right p-4 font-heading font-medium text-foreground">Single</th>
                            <th className="text-right p-4 font-heading font-medium text-foreground">
                              {key === "injectables" ? "—" : key === "laser" || key === "removal" ? "Course of 6" : "Course of 3"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.treatments.map((treatment, index) => (
                            <motion.tr
                              key={treatment.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.03 }}
                              className={index % 2 === 0 ? "bg-background" : "bg-secondary/50"}
                            >
                              <td className="p-4 font-body text-foreground">{treatment.name}</td>
                              <td className="p-4 font-body text-foreground text-right">{treatment.single}</td>
                              <td className="p-4 font-body text-foreground text-right">
                                {(treatment as any).course6 || (treatment as any).course3 || "—"}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {category.note && (
                      <div className="p-4 bg-accent/10 text-accent font-body text-sm">
                        {category.note}
                      </div>
                    )}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-foreground mb-4"
            >
              Ready to Book?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-8"
            >
              Contact us for a free consultation and let us create a personalized treatment plan for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/contact">Book Consultation</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary">
                <a href="tel:02085981200">
                  <Phone className="h-4 w-4 mr-2" />
                  0208 598 1200
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Prices;
