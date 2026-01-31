import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import heroClinicNew from "@/assets/hero-clinic-new.png";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

export const HeroSectionNew = () => {
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Hero Image - Mobile first, full width */}
          <motion.div 
            className="w-full max-w-md mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage 
                src={heroClinicNew} 
                alt="Laser Light Skin Clinic - NHS Approved treatments in East London"
                className="w-full"
                priority={true}
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Journey to Flawless Skin <span className="text-primary">Starts Here</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            className="font-body text-lg md:text-xl text-muted-foreground mb-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The leading NHS-Approved Skin Clinic for East London & Essex.
          </motion.p>

          {/* Primary CTAs - Side by side */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body min-h-[48px] px-6 text-base shadow-lg w-full sm:w-auto"
            >
              <a href="/prices">
                View Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body min-h-[48px] px-6 text-base w-full sm:w-auto"
            >
              <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
              </a>
            </Button>
          </motion.div>

          {/* Trust Bar - Compact, 3 items */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>NHS Approved</span>
            </div>
            <a 
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gold/10 text-gold px-3 py-2 rounded-full text-sm font-medium hover:bg-gold/20 transition-colors"
            >
              <Star className="h-4 w-4 fill-current" />
              <span>4.9 Google Rating</span>
            </a>
            <div className="flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Pain-Free Guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
