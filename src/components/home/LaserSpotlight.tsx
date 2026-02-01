import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import laserDevice from "@/assets/laser-device.jpg";

const benefits = [
  "Pain-free guaranteed",
  "Safe for all skin types",
  "Permanent results in 6-8 sessions",
];

export const LaserSpotlight = () => {
  return (
    <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image - hidden on mobile */}
          <motion.div
            className="hidden lg:block order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={laserDevice} 
                  alt="Lynton Motus AY laser device - Pain-free laser hair removal"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
              >
                <Sparkles className="h-4 w-4" />
                <span className="font-heading font-semibold text-sm">#1 Service</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-foreground mb-4">
              The Leader in <span className="text-primary">Pain-Free</span> Laser Hair Removal
            </h2>
            
            <p className="font-body text-muted-foreground mb-8 text-lg">
              Experience permanent hair reduction with our NHS-approved Lynton Motus AY laser. 
              Advanced cooling technology ensures a comfortable experience, even on sensitive areas.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={benefit}
                  className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-body text-foreground font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body min-h-[52px] px-8 text-base w-full sm:w-auto shadow-lg shadow-primary/20"
            >
              <Link to="/laser-hair-removal-dagenham">
                View Laser Pricing & Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
