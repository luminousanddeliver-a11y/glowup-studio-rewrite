import { Shield, Sparkles, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import treatmentRoom from "@/assets/treatment-room.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={treatmentRoom} 
                alt="Luxury treatment room with ambient lighting at Laser Light Skin Clinic" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <div className="font-heading text-2xl font-bold">6+</div>
              <div className="font-body text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-foreground mb-4">
                The Laser Light Difference
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                We combine medical-grade safety with cutting-edge technology and local expertise to deliver results you can trust.
              </p>
            </div>

            {/* Cards Stack */}
            <div className="space-y-4">
              {differentiators.map((item) => (
                <Card
                  key={item.title}
                  className="bg-card border-border shadow-card group hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start gap-4 p-6">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground mb-2">{item.title}</h3>
                      <p className="font-body text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
