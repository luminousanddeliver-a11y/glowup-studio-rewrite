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
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground mb-4">
            Why East London & Essex Trust <span className="text-primary">Glow-Up Studio</span>
          </h2>
        </motion.div>

        {/* Real Reviews */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-heading text-lg font-medium text-center text-muted-foreground mb-6">
            Real Reviews
          </h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-sm h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Quote className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-foreground mb-4 text-sm italic line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-heading font-medium text-foreground text-sm">
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
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
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
          <h3 className="font-heading text-lg font-medium text-center text-muted-foreground mb-6">
            Our Promise
          </h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                className="flex flex-col items-center text-center p-5 bg-secondary rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <promise.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-medium text-foreground mb-1">
                  {promise.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
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
