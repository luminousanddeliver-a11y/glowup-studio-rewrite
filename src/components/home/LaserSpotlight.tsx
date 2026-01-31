import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
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
    <section className="py-12 md:py-16 bg-secondary overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Image */}
          <motion.div
            className="order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={laserDevice} 
                alt="Lynton Motus AY laser device - Pain-free laser hair removal"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-foreground mb-4">
              The Leader in <span className="text-primary">Pain-Free</span> Laser Hair Removal
            </h2>
            
            <p className="font-body text-muted-foreground mb-6">
              Experience permanent hair reduction with our NHS-approved Lynton Motus AY laser. 
              Advanced cooling technology ensures a comfortable experience, even on sensitive areas.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-body text-foreground text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body min-h-[48px] px-6 text-base w-full sm:w-auto"
            >
              <Link to="/services/laser-hair-removal">
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
