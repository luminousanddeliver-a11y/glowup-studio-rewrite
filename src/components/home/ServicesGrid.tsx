import { Link } from "react-router-dom";
import { ArrowRight, Zap, Droplets, Sparkles, FlaskConical, CircleDot, Target, Activity, Eraser, Snowflake, Heart } from "lucide-react";

const allServices = [
  {
    icon: Zap,
    name: "Laser Hair Removal",
    description: "Pain-free permanent hair reduction with Lynton Motus AY.",
    href: "/services/laser-hair-removal",
  },
  {
    icon: Droplets,
    name: "Hydrafacials",
    description: "Deep cleansing and hydration for radiant skin.",
    href: "/services/hydrafacials",
  },
  {
    icon: Sparkles,
    name: "Skin Rejuvenation",
    description: "Restore youthful glow with advanced light therapy.",
    href: "/services/skin-rejuvenation",
  },
  {
    icon: FlaskConical,
    name: "Chemical Peels",
    description: "Medical-grade peels for smooth, clear complexion.",
    href: "/services/chemical-peels",
  },
  {
    icon: CircleDot,
    name: "Electrolysis",
    description: "Permanent hair removal, one follicle at a time.",
    href: "/services/electrolysis",
  },
  {
    icon: Target,
    name: "SkinPen Microneedling",
    description: "FDA-cleared collagen induction therapy.",
    href: "/services/microneedling",
  },
  {
    icon: Activity,
    name: "IV Drips & Infusions",
    description: "Vitamin therapy for energy and skin health.",
    href: "/services/iv-drips",
  },
  {
    icon: Eraser,
    name: "Tattoo Removal",
    description: "Multi-wavelength laser removes all ink colors.",
    href: "/services/tattoo-removal",
  },
  {
    icon: Snowflake,
    name: "Cold Plasma Treatments",
    description: "Non-invasive skin tightening and rejuvenation.",
    href: "/services/cold-plasma",
  },
  {
    icon: Heart,
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
            <Link
              key={service.name}
              to={service.href}
              className="group bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
