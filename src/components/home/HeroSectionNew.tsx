import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, CheckCircle, Users, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroClinicNew from "@/assets/hero-clinic-new.png";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

const trustItems = [
  {
    icon: Shield,
    label: "NHS & FDA Approved",
    sublabel: "Medical-grade safety",
    variant: "primary" as const,
  },
  {
    icon: Star,
    label: "4.9★ Rating",
    sublabel: "290+ verified reviews",
    variant: "gold" as const,
    href: GOOGLE_MAPS_REVIEWS_URL,
  },
  {
    icon: Sparkles,
    label: "Pain-Free Guaranteed",
    sublabel: "Lynton Motus AY laser",
    variant: "accent" as const,
  },
  {
    icon: Users,
    label: "All Skin Types",
    sublabel: "Including darker tones",
    variant: "primary" as const,
  },
  {
    icon: MapPin,
    label: "Only in East London",
    sublabel: "Quanta Thunder laser",
    variant: "exclusive" as const,
  },
];

export const HeroSectionNew = () => {
  return (
    <section className="-mt-[80px] pt-[80px] relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Ken Burns animation - Using <img> for LCP optimization */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={heroClinicNew}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/50 md:to-transparent" />
        
        {/* Decorative orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content - Main Message */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Main Headline */}
            <motion.h1 
              className="text-white mb-4 leading-tight text-4xl md:text-5xl lg:text-6xl font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Journey to Flawless Skin{" "}
              <span className="text-primary">Starts Here</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p 
              className="font-body text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The leading NHS-Approved Skin Clinic for East London & Essex. 
              Experience medical-grade treatments with world-class technology.
            </motion.p>

            {/* Primary CTAs - Side by side */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body min-h-[52px] px-8 text-base shadow-lg shadow-primary/25"
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
                className="border-white bg-white/10 text-white hover:bg-white hover:text-foreground font-body min-h-[52px] px-8 text-base backdrop-blur-sm"
              >
                <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Stats (Desktop only) */}
          <motion.div 
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="font-heading text-white text-lg font-medium mb-4">
                Trusted by East London
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">290+</span>
                  <span className="text-white/70 text-sm">5-Star Reviews</span>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">10+</span>
                  <span className="text-white/70 text-sm">Years Experience</span>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">5000+</span>
                  <span className="text-white/70 text-sm">Happy Clients</span>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">100%</span>
                  <span className="text-white/70 text-sm">NHS Approved</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar - 5 items */}
        <motion.div 
          className="mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Mobile: 2-row grid, 5th item spans full width */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
            {trustItems.map((item, index) => {
              const ItemWrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href ? { 
                href: item.href, 
                target: "_blank", 
                rel: "noopener noreferrer" 
              } : {};
              
              return (
                <motion.div
                  key={item.label}
                  className={index === 4 ? "col-span-2 sm:col-span-1 lg:col-span-1" : ""}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <ItemWrapper
                    {...wrapperProps}
                    className={`
                      flex items-center gap-2 px-3 py-3 md:py-2.5 rounded-xl backdrop-blur-sm min-h-[60px] md:min-h-0 h-full
                      transition-all duration-300 group
                      ${item.variant === 'primary' ? 'bg-primary/20 hover:bg-primary/30' : ''}
                      ${item.variant === 'gold' ? 'bg-gold/20 hover:bg-gold/30' : ''}
                      ${item.variant === 'accent' ? 'bg-accent/20 hover:bg-accent/30' : ''}
                      ${item.variant === 'exclusive' ? 'bg-gold/20 hover:bg-gold/30' : ''}
                      ${item.href ? 'cursor-pointer' : ''}
                    `}
                  >
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                      ${item.variant === 'primary' ? 'bg-primary/30' : ''}
                      ${item.variant === 'gold' ? 'bg-gold/30' : ''}
                      ${item.variant === 'accent' ? 'bg-accent/30' : ''}
                      ${item.variant === 'exclusive' ? 'bg-gold/30' : ''}
                    `}>
                      <item.icon className={`
                        h-4 w-4
                        ${item.variant === 'primary' ? 'text-primary' : ''}
                        ${item.variant === 'gold' ? 'text-gold fill-gold' : ''}
                        ${item.variant === 'accent' ? 'text-accent' : ''}
                        ${item.variant === 'exclusive' ? 'text-gold' : ''}
                      `} />
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading text-xs md:text-sm font-medium text-white truncate">
                          {item.label}
                        </span>
                        {item.variant === 'exclusive' && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 bg-gold text-black text-[8px] md:text-[9px] font-bold rounded uppercase leading-none">
                            Exclusive
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] md:text-xs text-white/60 block truncate">
                        {item.sublabel}
                      </span>
                    </div>
                  </ItemWrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
