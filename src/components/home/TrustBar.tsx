import { Shield, Star, Sparkles, Percent } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "NHS Approved",
    description: "Medical-grade standards",
  },
  {
    icon: Star,
    title: "5-Star Reviews (250+)",
    description: "Trusted by clients",
  },
  {
    icon: Sparkles,
    title: "Pain-Free Technology",
    description: "Lynton Motus AY",
  },
  {
    icon: Percent,
    title: "25% Off New Clients",
    description: "Limited time offer",
  },
];

export const TrustBar = () => {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <item.icon className="h-7 w-7 text-accent" />
              </div>
              <h4 className="font-heading text-sm md:text-base font-medium text-foreground">
                {item.title}
              </h4>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
