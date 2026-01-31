import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Phone, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import heroClinicNew from "@/assets/hero-clinic-new.png";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - appears second on mobile, first on desktop */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Decorative teal bar */}
            <motion.div 
              className="w-12 h-1 bg-primary mb-6 mx-auto lg:mx-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            <motion.h1 
              className="text-foreground mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Pain-Free Laser Hair Removal in <span className="text-primary">Dagenham</span>
            </motion.h1>

            <motion.p 
              className="font-body text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Permanent results in 6-8 sessions. <strong className="text-foreground">Safe for all skin types</strong>, including darker skin tones. NHS-approved technology trusted by 250+ happy clients.
            </motion.p>

            {/* Trust Signals - Visible without scrolling */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>NHS Approved</span>
              </div>
              <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>Pain-Free Guaranteed</span>
              </div>
              <a 
                href={GOOGLE_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gold/10 text-gold px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gold/20 transition-colors"
              >
                <Star className="h-4 w-4 fill-current" />
                <span>4.9★ (250+ Reviews)</span>
              </a>
            </motion.div>

            {/* Pricing Anchor */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="font-body text-sm">Treatments from</span>
              <span className="font-heading font-bold text-xl text-primary">£80</span>
              <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">Free Patch Test</span>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body h-14 px-8 text-base shadow-lg"
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
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-base"
              >
                <a href="/prices">View Prices</a>
              </Button>
            </motion.div>

            {/* Secondary CTAs - Micro-commitments */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href="tel:02085981200"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call: 0208 598 1200</span>
              </a>
              <span className="text-border hidden sm:inline">|</span>
              <a 
                href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Free Patch Test Available
              </a>
            </motion.div>

            {/* Stats with divider */}
            <motion.div 
              className="border-t border-border mt-8 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  { value: "250+", label: "Happy Clients" },
                  { value: "6+", label: "Years Experience" },
                  { value: "All Skin", label: "Types Treated" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="font-heading text-xl font-bold text-primary">{stat.value}</div>
                    <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image - appears first on mobile, second on desktop */}
          <motion.div 
            className="relative order-1 lg:order-2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ y: imageY }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <OptimizedImage 
                src={heroClinicNew} 
                alt="Pain-free laser hair removal treatment at Laser Light Skin Clinic Dagenham"
                className="w-full"
                priority={true}
                objectFit="cover"
              />
            </motion.div>
            
            {/* NHS Approved Badge - Floating outside image */}
            <motion.div 
              className="absolute -bottom-8 right-4 lg:-right-6 bg-primary text-primary-foreground px-6 py-5 rounded-xl shadow-xl max-w-[280px] z-10"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 flex-shrink-0" />
                <span className="font-semibold text-base">NHS Approved Clinic</span>
              </div>
              <div className="text-sm opacity-90 leading-snug">Lynton Motus AY laser—FDA certified & pain-free</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};