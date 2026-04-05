import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import treatmentRoom from "@/assets/treatment-room.jpg";

export const PremierSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={treatmentRoom} 
          alt="Luxury treatment room" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <motion.h2 
            className="text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Premier Clinic for Redbridge & Havering
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="font-body text-lg text-primary-foreground/90 mb-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience medical-grade treatments with the service you deserve, conveniently located in East London.
          </motion.p>

          <motion.p 
            className="font-body text-base text-primary-foreground/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Get Central London quality without the journey.
          </motion.p>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-body min-h-[48px] px-4 md:px-6 text-sm md:text-base whitespace-normal text-center"
            >
              <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                Book Your Free, No-Obligation Consultation
                <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
