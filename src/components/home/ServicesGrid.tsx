import { ArrowRight } from "lucide-react";

const allServices = [
  {
    name: "Laser Hair Removal",
    description: "Pain-free permanent hair reduction with Lynton Motus AY.",
    href: "/services/laser-hair-removal",
  },
  {
    name: "Hydrafacials",
    description: "Deep cleansing and hydration for radiant skin.",
    href: "/services/hydrafacials",
  },
  {
    name: "Skin Rejuvenation",
    description: "Restore youthful glow with advanced light therapy.",
    href: "/services/skin-rejuvenation",
  },
  {
    name: "Chemical Peels",
    description: "Medical-grade peels for smooth, clear complexion.",
    href: "/services/chemical-peels",
  },
  {
    name: "Electrolysis",
    description: "Permanent hair removal, one follicle at a time.",
    href: "/services/electrolysis",
  },
  {
    name: "SkinPen Microneedling",
    description: "FDA-cleared collagen induction therapy.",
    href: "/services/microneedling",
  },
  {
    name: "IV Drips & Infusions",
    description: "Vitamin therapy for energy and skin health.",
    href: "/services/iv-drips",
  },
  {
    name: "Tattoo Removal",
    description: "Multi-wavelength laser removes all ink colors.",
    href: "/services/tattoo-removal",
  },
  {
    name: "Cold Plasma Treatments",
    description: "Non-invasive skin tightening and rejuvenation.",
    href: "/services/cold-plasma",
  },
  {
    name: "Intimate V-Whitening",
    description: "Safe, professional intimate area treatments.",
    href: "/services/intimate-whitening",
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

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {allServices.map((service) => (
            <a
              key={service.name}
              href={service.href}
              className="group bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-heading text-base font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3">
                {service.description}
              </p>
              <span className="inline-flex items-center font-body text-sm text-accent">
                Learn More
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
