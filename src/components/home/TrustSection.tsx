import { Shield, Award, Zap, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

const testimonials = [
  {
    name: "Mili Begum",
    rating: 5,
    treatment: "General Experience",
    quote: "Clean and lovely decor. The staff are extremely helpful and friendly. Taiba and Kate were great and made me feel comfortable. I highly recommend this place!",
  },
  {
    name: "G",
    rating: 5,
    treatment: "Laser Hair Removal",
    quote: "Made to feel so comfortable during my treatment. I highly recommend the laser used here, especially for people of colour. The technology is truly pain-free.",
  },
  {
    name: "Aisha Oma",
    rating: 5,
    treatment: "Hydrafacial",
    quote: "The Hydrafacial treatment was AMAZING! My skin has never felt so good. The staff were so welcoming and professional.",
  },
];

const promises = [
  {
    icon: Shield,
    title: "NHS-Approved Safety",
    description: "All procedures meet highest medical standards.",
  },
  {
    icon: Award,
    title: "Level 4 Qualified Experts",
    description: "Extensive experience with diverse skin types.",
  },
  {
    icon: Zap,
    title: "Lynton & Quanta Lasers",
    description: "World-class, medical-grade technology.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-14 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
        <h2 className="text-foreground mb-3">
            Why East London & Essex Trust <span className="text-primary">Laser Light</span>
          </h2>
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Real Reviews */}
        <motion.div 
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-heading text-lg font-medium text-center text-muted-foreground mb-8">
            Real Reviews from Real Clients
          </h3>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow h-full relative overflow-hidden group">
                  {/* Decorative gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-foreground mb-5 text-sm leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-heading font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body shadow-sm"
            >
              <a
                href={GOOGLE_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read All 250+ Reviews
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Our Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading text-lg font-medium text-center text-muted-foreground mb-8">
            Our Promise to You
          </h3>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                className="relative flex flex-col items-center text-center p-6 md:p-8 bg-secondary rounded-2xl group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <promise.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="relative font-heading font-semibold text-foreground mb-2">
                  {promise.title}
                </h4>
                <p className="relative font-body text-sm text-muted-foreground">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
