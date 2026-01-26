import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import skincareProducts from "@/assets/skincare-products.jpg";

export const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={skincareProducts} 
          alt="Luxury skincare products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
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
            Ready to Start Your Journey to Clearer, Smoother Skin?
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our team of local, NHS-approved experts is here to guide you. Book a free, no-obligation consultation to discuss your goals.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-body h-14 px-8 text-lg"
            >
              <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                Book an Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground font-body h-14 px-8 text-lg"
            >
              <a href="tel:02085981200">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: 0208 598 1200
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
