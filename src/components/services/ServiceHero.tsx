import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronDown, Shield, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface SecondaryCTA {
  text: string;
  href: string;
}

interface HeroStat {
  value: string;
  label: string;
}

interface ServiceHeroProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  description: string;
  badge?: string;
  trustBadge?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCta?: SecondaryCTA;
  showPhoneCta?: boolean;
  backgroundImage?: string;
  stats?: HeroStat[];
}

// Animated counter component
const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;
    
    // Extract numeric part and suffix
    const numericMatch = value.match(/^([\d,]+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetNum = parseInt(numericMatch[1].replace(/,/g, ""));
    const suffix = value.slice(numericMatch[0].length);
    const duration = 1500;
    const steps = 30;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const currentValue = Math.round(targetNum * eased);
      setDisplayValue(currentValue.toLocaleString() + suffix);
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValue(value);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, [isInView, value]);
  
  return (
    <div ref={ref} className="text-center bg-background/60 backdrop-blur-sm px-4 py-2 rounded-lg">
      <div className="font-heading text-2xl font-semibold text-primary">{displayValue}</div>
      <div className="font-body text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export const ServiceHero = ({
  title,
  titleAccent,
  subtitle,
  description,
  badge,
  trustBadge,
  primaryCtaText = "Book Free Consultation",
  primaryCtaHref = "#contact",
  secondaryCta,
  showPhoneCta = true,
  backgroundImage,
  stats,
}: ServiceHeroProps) => {
  // Split title by accent if provided
  const renderTitle = () => {
    if (titleAccent && title.includes(titleAccent)) {
      const parts = title.split(titleAccent);
      return (
        <>
          {parts[0]}
          <span className="text-accent">{titleAccent}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
        </div>
      )}

      {/* Fallback gradient if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
      )}

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            {trustBadge && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
              >
                <Shield className="h-4 w-4" />
                <span className="font-body text-sm font-semibold">{trustBadge}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground mb-4 leading-tight"
            >
              {renderTitle()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-heading font-medium text-muted-foreground mb-4"
            >
              {subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-lg text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 mb-6"
            >
              {description}
            </motion.p>

            {/* Offer Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg mb-8 backdrop-blur-sm"
              >
                <Star className="h-4 w-4 fill-current" />
                <span className="font-body font-semibold">{badge}</span>
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 px-8 text-lg"
              >
                <a href={primaryCtaHref}>
                  <Calendar className="mr-2 h-5 w-5" />
                  {primaryCtaText}
                </a>
              </Button>
              
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-lg bg-background/50 backdrop-blur-sm"
                >
                  <a href={secondaryCta.href}>
                    <ChevronDown className="mr-2 h-5 w-5" />
                    {secondaryCta.text}
                  </a>
                </Button>
              )}
              
              {showPhoneCta && !secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-lg bg-background/50 backdrop-blur-sm"
                >
                  <a href="tel:02085981200">
                    <Phone className="mr-2 h-5 w-5" />
                    0208 598 1200
                  </a>
                </Button>
              )}
            </motion.div>

            {/* Quick Stats with counting animation */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <AnimatedCounter value={stat.value} label={stat.label} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Empty right side - image fills background */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
