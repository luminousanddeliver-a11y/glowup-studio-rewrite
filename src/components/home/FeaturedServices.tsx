import { ArrowRight, Shield, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import laserDevice from "@/assets/laser-device.jpg";
import hydrafacialDevice from "@/assets/hydrafacial-device.jpg";
import microneedlingDevice from "@/assets/microneedling-device.jpg";
import tattooRemovalDevice from "@/assets/tattoo-removal-device.jpg";

const services = [
  {
    image: laserDevice,
    title: "Laser Hair Removal",
    description: "Pain-free permanent hair reduction using NHS-approved Lynton Motus AY. Safe for all skin types.",
    price: "From £80",
    href: "/laser-hair-removal-dagenham",
    badge: "Most Popular",
    trustSignal: "Pain-Free Guaranteed"
  },
  {
    image: hydrafacialDevice,
    title: "Hydrafacials",
    description: "Deep cleanse, exfoliate, and hydrate with medical-grade Hydrafacial technology.",
    price: "From £90",
    href: "/hydrafacial-east-london",
    trustSignal: "Visible Results in 1 Session"
  },
  {
    image: microneedlingDevice,
    title: "SkinPen Microneedling",
    description: "Reduce acne scars and boost collagen with FDA-cleared SkinPen Precision.",
    price: "From £200",
    href: "/skinpen-microneedling-dagenham",
    trustSignal: "FDA Cleared"
  },
  {
    image: tattooRemovalDevice,
    title: "Tattoo Removal",
    description: "East London's ONLY Quanta Thunder laser for complete tattoo removal.",
    price: "From £50",
    href: "/tattoo-removal-east-london",
    badge: "Exclusive",
    trustSignal: "Only in East London"
  },
];

export const FeaturedServices = () => {
  return (
    <section id="services" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header with SEO-optimized content */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Shield className="h-4 w-4" />
            <span className="font-body text-sm font-medium">NHS-Approved Treatments</span>
          </div>
          <h2 className="text-foreground mb-4">
            Popular Treatments in <span className="text-primary">Dagenham</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Advanced treatments that deliver real, lasting results. From permanent hair removal to glowing skin—all with NHS-approved technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group bg-card border-border shadow-card hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 overflow-hidden h-full relative">
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      service.badge === 'Exclusive' 
                        ? 'bg-gold text-gold-foreground' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                )}
                
                {/* Service Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} treatment at Laser Light Skin Clinic Dagenham - NHS approved`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardHeader className="pb-3">
                  <h3 className="text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  {/* Trust Signal */}
                  {service.trustSignal && (
                    <div className="flex items-center gap-1 text-xs text-primary mt-1">
                      <Shield className="h-3 w-3" />
                      <span className="font-medium">{service.trustSignal}</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="font-body text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-body font-semibold text-primary">
                      {service.price}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-gold text-gold" />
                      <span>4.9</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-body"
                  >
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/prices">
              View All Services & Prices
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
