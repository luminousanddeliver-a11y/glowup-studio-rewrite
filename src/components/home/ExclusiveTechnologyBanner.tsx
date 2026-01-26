import { Award, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import tattooRemovalDevice from "@/assets/tattoo-removal-device.jpg";

export const ExclusiveTechnologyBanner = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Exclusive Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-4 py-2 rounded-full font-body text-sm font-semibold mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(212, 175, 55, 0.4)",
                  "0 0 0 10px rgba(212, 175, 55, 0)",
                  "0 0 0 0 rgba(212, 175, 55, 0)"
                ]
              }}
              // @ts-ignore - framer-motion transition for boxShadow animation
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Award className="h-4 w-4" />
              <span>ONLY IN EAST LONDON</span>
            </motion.div>

            <motion.h2 
              className="text-primary-foreground text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Quanta Thunder Series
            </motion.h2>

            <motion.p 
              className="text-xl md:text-2xl text-gold font-heading font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              The World's Most Advanced Tattoo Removal
            </motion.p>

            <motion.p 
              className="text-primary-foreground/90 font-body text-lg mb-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're the <strong className="text-gold">ONLY clinic in East London</strong> offering the revolutionary Quanta Thunder Series. Remove ALL ink colors—including stubborn blues and greens—in fewer sessions with minimal scarring.
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              className="grid grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {[
                "Removes ALL ink colors",
                "50% fewer sessions",
                "Minimal scarring",
                "FDA Cleared & CE Marked"
              ].map((feature, index) => (
                <div key={feature} className="flex items-center gap-2 text-primary-foreground/90 font-body text-sm">
                  <Zap className="h-4 w-4 text-gold shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground font-body h-12 px-6 text-base shadow-lg"
              >
                <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body h-12 px-6 text-base"
              >
                <a href="/tattoo-removal-east-london">Learn More</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={tattooRemovalDevice} 
                alt="Quanta Thunder Series - Advanced multi-wavelength tattoo removal laser"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Exclusive overlay badge */}
              <motion.div 
                className="absolute top-4 right-4 bg-gold text-gold-foreground px-4 py-2 rounded-lg font-body font-bold text-sm shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ★ EXCLUSIVE
              </motion.div>
            </div>

            {/* Floating stats card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-card text-foreground p-5 rounded-xl shadow-xl max-w-[200px] hidden md:block"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="font-heading text-2xl font-bold text-primary mb-1">50%</div>
              <div className="font-body text-sm text-muted-foreground">Fewer sessions than traditional lasers</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
