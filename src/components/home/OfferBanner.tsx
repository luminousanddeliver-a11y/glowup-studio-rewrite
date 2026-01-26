import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";
import { motion } from "framer-motion";

export const OfferBanner = () => {
  return (
    <section className="bg-primary py-16 md:py-20 overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div 
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-foreground/10 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Gift className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            New Client Exclusive: Get 25% Off Your First Treatment!
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            As a welcome to the Laser Light Skin Clinic family, we are offering all new clients 25% off their first treatment course. This is a limited-time offer to experience the Dagenham difference.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-body h-14 px-8 text-lg"
            >
              <a href="#contact">
                Claim Your 25% Discount Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
