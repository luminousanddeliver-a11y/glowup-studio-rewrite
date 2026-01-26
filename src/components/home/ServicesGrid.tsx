import { ArrowRight } from "lucide-react";

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
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">
            Explore Our Full Range of Advanced Treatments
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From permanent hair removal to advanced skin rejuvenation, click on any service below to learn how we can help you achieve your aesthetic goals.
          </p>
        </div>

        {/* Services by Category */}
        <div className="space-y-10">
          {serviceCategories.map((category) => (
            <div key={category.name}>
              {/* Category Header */}
              <h3 className="font-heading text-xl font-semibold text-accent mb-4 pb-2 border-b border-accent/20">
                {category.name}
              </h3>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {category.services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="group bg-card p-4 md:p-5 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] touch-manipulation min-h-[88px] flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-heading text-base font-medium text-foreground mb-1.5 md:mb-2 group-hover:text-accent transition-colors">
                        {service.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center font-body text-sm text-accent mt-2 md:mt-3">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 md:h-3 md:w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
