import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const serviceCategories = [
  {
    name: "Laser & Hair Removal",
    services: [
      {
        name: "Laser Hair Removal",
        description: "Pain-free permanent hair reduction with Lynton Motus AY.",
        href: "/laser-hair-removal-dagenham",
      },
      {
        name: "Electrolysis",
        description: "Permanent hair removal, one follicle at a time.",
        href: "/electrolysis-hair-removal-dagenham",
      },
      {
        name: "Advanced Electrolysis",
        description: "Specialist treatment for stubborn or hormonal hair.",
        href: "/advanced-electrolysis-dagenham",
      },
    ],
  },
  {
    name: "Facials & Skin",
    services: [
      {
        name: "Hydrafacials",
        description: "Deep cleansing and hydration for radiant skin.",
        href: "/hydrafacial-east-london",
      },
      {
        name: "Facials",
        description: "Customized facial treatments for all skin types.",
        href: "/facials-dagenham",
      },
      {
        name: "Chemical Peels",
        description: "Medical-grade peels for smooth, clear complexion.",
        href: "/chemical-peels-dagenham",
      },
      {
        name: "Skin Analysis",
        description: "Professional skin assessment with OBSERV 520x.",
        href: "/skin-analysis-dagenham",
      },
      {
        name: "LED Light Therapy",
        description: "Non-invasive light treatment for skin healing.",
        href: "/led-light-therapy-dagenham",
      },
    ],
  },
  {
    name: "Advanced Treatments",
    services: [
      {
        name: "Skin Rejuvenation",
        description: "Restore youthful glow with advanced light therapy.",
        href: "/skin-rejuvenation-dagenham",
      },
      {
        name: "SkinPen Microneedling",
        description: "FDA-cleared collagen induction therapy.",
        href: "/skinpen-microneedling-dagenham",
      },
      {
        name: "Cold Plasma",
        description: "Non-invasive skin tightening and rejuvenation.",
        href: "/cold-plasma-treatment-dagenham",
      },
      {
        name: "Laser Resurfacing",
        description: "Advanced laser treatment for skin renewal.",
        href: "/laser-resurfacing-dagenham",
      },
      {
        name: "Pigmentation Treatment",
        description: "Target and reduce unwanted pigmentation.",
        href: "/pigmentation-treatment-dagenham",
      },
    ],
  },
  {
    name: "Injectables",
    services: [
      {
        name: "Botox & Fillers",
        description: "Expert anti-wrinkle and volume restoration.",
        href: "/injectables-dagenham",
      },
    ],
  },
  {
    name: "Removal Treatments",
    services: [
      {
        name: "Tattoo Removal",
        description: "Multi-wavelength laser removes all ink colors.",
        href: "/tattoo-removal-east-london",
      },
      {
        name: "Vein Removal",
        description: "Safe removal of thread veins and spider veins.",
        href: "/vein-removal-east-london",
      },
      {
        name: "Skin Tag & Mole Removal",
        description: "Quick, safe removal of unwanted skin lesions.",
        href: "/skin-tag-mole-removal-dagenham",
      },
    ],
  },
  {
    name: "Wellness & Other",
    services: [
      {
        name: "IV Drips & Infusions",
        description: "Vitamin therapy for energy and skin health.",
        href: "/iv-drips-infusions-east-london",
      },
      {
        name: "Massage",
        description: "Relaxing therapeutic massage treatments.",
        href: "/massage-dagenham",
      },
      {
        name: "Hopi Ear Candling",
        description: "Traditional ear cleansing and relaxation.",
        href: "/hopi-ear-candling-dagenham",
      },
      {
        name: "Intimate V-Whitening",
        description: "Safe, professional intimate area treatments.",
        href: "/intimate-whitening-east-london",
      },
      {
        name: "Ear Piercing",
        description: "Safe, hygienic ear piercing for all ages.",
        href: "/ear-piercing-dagenham",
      },
    ],
  },
];

export const ServicesGrid = () => {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground mb-4">
            Explore Our Full Range of Advanced Treatments
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From permanent hair removal to advanced skin rejuvenation, click on any service below to learn how we can help you achieve your aesthetic goals.
          </p>
        </motion.div>

        {/* Services by Category */}
        <div className="space-y-10">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
            >
              {/* Category Header */}
              <motion.h3 
                className="font-heading text-xl font-semibold text-primary mb-4 pb-2 border-b border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              >
                {category.name}
              </motion.h3>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {category.services.map((service, serviceIndex) => (
                  <motion.a
                    key={service.name}
                    href={service.href}
                    className="group bg-card p-4 md:p-5 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] touch-manipulation min-h-[88px] flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                  >
                    <div>
                      <h4 className="font-heading text-base font-medium text-foreground mb-1.5 md:mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center font-body text-sm text-primary mt-2 md:mt-3">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 md:h-3 md:w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
