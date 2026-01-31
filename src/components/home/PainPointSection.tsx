import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const benefits = [
  "Deeply cleanses for a fresh feel",
  "Creates a smooth canvas so makeup sits better",
  "Achieve a natural, radiant glow",
];

export const PainPointSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-accent/5 via-background to-primary/5 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
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
            className="font-body text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dreaming of going makeup-free with confidence? The HydraFacial is your answer.
          </motion.p>

          {/* Benefits List */}
          <motion.ul 
            className="space-y-4 mb-8 text-left max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.li 
                key={benefit}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="font-body text-foreground">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body min-h-[48px] px-6 text-base"
            >
              <Link to="/services/hydrafacials">
                Discover the HydraFacial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
