import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import laserDevice from "@/assets/laser-device.jpg";
import hydrafacialDevice from "@/assets/hydrafacial-device.jpg";
import microneedlingDevice from "@/assets/microneedling-device.jpg";
import tattooRemovalDevice from "@/assets/tattoo-removal-device.jpg";

const services = [
  {
    image: laserDevice,
    title: "Laser Hair Removal",
    description: "Pain-free permanent hair reduction in 6 sessions using NHS-approved Lynton Motus AY technology.",
    price: "From £80",
    href: "/laser-hair-removal-dagenham",
  },
  {
    image: hydrafacialDevice,
    title: "Hydrafacials",
    description: "Deep cleanse, exfoliate, and hydrate your skin with our medical-grade Hydrafacial treatments.",
    price: "From £90",
    href: "/hydrafacial-east-london",
  },
  {
    image: microneedlingDevice,
    title: "SkinPen Microneedling",
    description: "Reduce acne scars and boost collagen with FDA-cleared SkinPen technology.",
    price: "From £200",
    href: "/skinpen-microneedling-dagenham",
  },
  {
    image: tattooRemovalDevice,
    title: "Tattoo Removal",
    description: "Remove unwanted tattoos with our advanced Quanta Thunder multi-wavelength laser system.",
    price: "From £50",
    href: "/tattoo-removal-east-london",
  },
];

export const FeaturedServices = () => {
  return (
    <section id="services" className="section-padding bg-background overflow-hidden">
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
            Our Most Popular Treatments in Dagenham
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Discover the advanced treatments that deliver real results. From permanent hair removal to glowing skin, we have a solution tailored for you.
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
              <Card className="group bg-card border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                {/* Service Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} treatment at Laser Light Skin Clinic Dagenham`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardHeader className="pb-4">
                  <h3 className="text-foreground group-hover:text-primary transition-colors">
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
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-body"
                  >
                    <a href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
