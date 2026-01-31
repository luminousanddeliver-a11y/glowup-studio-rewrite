import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import hydrafacialDevice from "@/assets/hydrafacial-device.jpg";

const benefits = [
  "Deeply cleanses for a fresh feel",
  "Creates a smooth canvas so makeup sits better",
  "Achieve a natural, radiant glow",
];

export const PainPointSection = () => {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-60" />
      
      {/* Subtle wave pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image - Desktop only */}
          <motion.div
            className="hidden lg:block order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-40" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={hydrafacialDevice} 
                  alt="HydraFacial treatment device"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card px-4 py-2 rounded-xl shadow-lg border border-border">
                <span className="font-heading text-primary font-semibold text-sm">Most Requested</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Empathetic Headline */}
            <motion.h2 
              className="text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              Tired of skin that feels <span className="text-primary">dull & dirty?</span>
            </motion.h2>

            {/* Conversational Sub-headline */}
            <motion.p 
              className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dreaming of going makeup-free with confidence? The HydraFacial is your answer.
            </motion.p>

            {/* Benefits List */}
            <motion.ul 
              className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={benefit}
                  className="flex items-start gap-3 bg-card/50 p-3 rounded-xl border border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-body text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body min-h-[52px] px-8 text-base shadow-lg shadow-primary/20"
              >
                <a href="/hydrafacial-east-london" onClick={() => window.scrollTo(0, 0)}>
                  Discover the HydraFacial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
