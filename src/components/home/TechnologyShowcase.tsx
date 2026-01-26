import { Check, Zap, Target } from "lucide-react";

const technologies = [
  {
    icon: Zap,
    name: "Lynton Motus AY",
    tagline: "Pain-Free Laser Hair Removal",
    description: "The only laser that delivers the power of Alexandrite without the pain. Our advanced cooling system ensures a comfortable experience, even on sensitive areas.",
    features: [
      "Safe for all skin types (Fitzpatrick I-VI)",
      "No downtime",
      "Faster treatment times",
      "NHS-approved technology",
    ],
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Target,
    name: "Quanta Thunder",
    tagline: "Advanced Tattoo Removal",
    description: "The multi-wavelength system that removes all ink colors in fewer sessions than traditional lasers.",
    features: [
      "Removes all ink colors",
      "Minimal scarring",
      "Fewer sessions required",
      "Precision targeting",
    ],
    gradient: "from-primary to-primary/60",
  },
];

export const TechnologyShowcase = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">
            Advanced Medical-Grade Technology
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We invest in the latest NHS-approved equipment to deliver safe, effective, and comfortable treatments.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card"
            >
              {/* Visual Header */}
              <div className={`h-48 bg-gradient-to-br ${tech.gradient} flex items-center justify-center`}>
                <div className="w-24 h-24 bg-card/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <tech.icon className="w-12 h-12 text-card" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-foreground mb-2">{tech.name}</h3>
                <p className="font-body text-accent font-semibold mb-4">
                  {tech.tagline}
                </p>
                <p className="font-body text-muted-foreground mb-6">
                  {tech.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {tech.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="font-body text-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
