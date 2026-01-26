import { Link } from "react-router-dom";
import { ArrowRight, Zap, Droplets, Target, Eraser } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Laser Hair Removal",
    description: "Pain-free permanent hair reduction in 6 sessions using NHS-approved Lynton Motus AY technology.",
    price: "From £80",
    href: "/services/laser-hair-removal",
  },
  {
    icon: Droplets,
    title: "Hydrafacials",
    description: "Deep cleanse, exfoliate, and hydrate your skin with our medical-grade Hydrafacial treatments.",
    price: "From £90",
    href: "/services/hydrafacials",
  },
  {
    icon: Target,
    title: "SkinPen Microneedling",
    description: "Reduce acne scars and boost collagen with FDA-cleared SkinPen technology.",
    price: "Consultation Required",
    href: "/services/microneedling",
  },
  {
    icon: Eraser,
    title: "Tattoo Removal",
    description: "Remove unwanted tattoos with our advanced Quanta Thunder multi-wavelength laser system.",
    price: "From Consultation",
    href: "/services/tattoo-removal",
  },
];

export const FeaturedServices = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">
            Our Most Popular Treatments in Dagenham
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Discover the advanced treatments that deliver real results. From permanent hair removal to glowing skin, we have a solution tailored for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="font-body text-muted-foreground text-sm">
                  {service.description}
                </p>
                <p className="font-body font-semibold text-primary mt-4">
                  {service.price}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto font-body"
                >
                  <Link to={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
