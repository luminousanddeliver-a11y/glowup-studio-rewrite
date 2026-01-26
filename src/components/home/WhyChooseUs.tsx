import { Shield, Sparkles, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const differentiators = [
  {
    icon: Shield,
    title: "NHS-Approved Safety",
    description: "All our procedures, equipment, and protocols meet the highest medical standards set by the National Health Service.",
  },
  {
    icon: Sparkles,
    title: "Guaranteed Pain-Free",
    description: "Using the revolutionary Lynton Motus AY laser, we deliver permanent hair reduction without the pain.",
  },
  {
    icon: MapPin,
    title: "Level 4 Qualified Experts",
    description: "Our team of local, Level 4 qualified therapists have extensive experience treating East London's diverse skin types.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">
            The Laser Light Difference: Why East London Chooses Us
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We combine medical-grade safety with cutting-edge technology and local expertise to deliver results you can trust.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <Card
              key={item.title}
              className="bg-card border-border shadow-card text-center group hover:shadow-card-hover transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-foreground">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
