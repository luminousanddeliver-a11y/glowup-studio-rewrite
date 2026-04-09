import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronDown, Shield, Star } from "lucide-react";
import { PageBreadcrumb, BreadcrumbItemType } from "@/components/layout/PageBreadcrumb";

interface SecondaryCTA {
  text: string;
  href: string;
}

interface HeroStat {
  value: string;
  label: string;
}

interface FloatingBadge {
  icon?: React.ReactNode;
  title: string;
  description: string;
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
  heroImage?: string;
  floatingBadge?: FloatingBadge;
  stats?: HeroStat[];
  breadcrumbs?: BreadcrumbItemType[];
  /** @deprecated Use heroImage instead */
  backgroundImage?: string;
}

export const ServiceHero = ({
  title,
  titleAccent,
  subtitle,
  description,
  badge,
  trustBadge,
  primaryCtaText = "Book an Appointment",
  primaryCtaHref = "https://phorest.com/book/salons/laserlightskinclinic",
  secondaryCta,
  showPhoneCta = true,
  heroImage,
  floatingBadge,
  stats,
  breadcrumbs,
  backgroundImage,
}: ServiceHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const displayImage = heroImage || backgroundImage;

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

  const badgeData = floatingBadge || {
    title: "NHS Approved",
    description: "FDA-certified technology for safe, effective treatments",
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative -mt-[80px] min-h-[520px] md:min-h-[560px] lg:min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Background image with parallax */}
      {displayImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: bgY }}
        >
          <img 
            src={displayImage} 
            alt={`${title} treatment at Laser Light Skin Clinic Dagenham`}
            className="w-full h-[120%] object-cover object-center"
            loading="eager"
          />
        </motion.div>
      )}
      
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-[100px] pb-10 md:pb-14 lg:pb-16 w-full">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <PageBreadcrumb items={breadcrumbs} className="[&_a]:text-white/70 [&_a:hover]:text-white [&_span]:text-white/50 [&_svg]:text-white/50 [&_li:last-child_span]:text-white/90" />
            </motion.div>
          )}

          {/* Decorative teal bar */}
          <motion.div 
            className="w-12 h-1 bg-primary mb-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          {/* Trust Badge */}
          {trustBadge && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-white/20"
            >
              <Shield className="h-4 w-4" />
              <span className="font-body text-sm font-semibold">{trustBadge}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mb-3 leading-tight drop-shadow-lg"
          >
            {renderTitle()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl font-heading font-medium text-white/90 mb-3 drop-shadow-md"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-base md:text-lg text-white/75 max-w-xl mb-5"
          >
            {description}
          </motion.p>

          {/* Offer Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-lg mb-5 backdrop-blur-sm border border-gold/30"
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
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-13 px-7 text-base"
            >
              <a href={primaryCtaHref} target={primaryCtaHref.startsWith("http") ? "_blank" : undefined} rel={primaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}>
                <Calendar className="mr-2 h-5 w-5" />
                {primaryCtaText}
              </a>
            </Button>
            
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white font-body h-13 px-7 text-base backdrop-blur-sm"
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
                className="border-white/40 text-white hover:bg-white/10 hover:text-white font-body h-13 px-7 text-base backdrop-blur-sm"
              >
                <a href="tel:02085981200">
                  <Phone className="mr-2 h-5 w-5" />
                  0208 598 1200
                </a>
              </Button>
            )}
          </motion.div>

          {/* Stats + floating badge row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            {/* Floating badge inline */}
            <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-lg backdrop-blur-sm shadow-lg">
              {floatingBadge?.icon || <Shield className="h-4 w-4 flex-shrink-0" />}
              <span className="font-semibold text-sm">{badgeData.title}</span>
            </div>

            {stats && stats.length > 0 && (
              <>
                <div className="w-px h-8 bg-white/20 hidden sm:block" />
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="font-heading text-lg font-bold text-primary">{stat.value}</div>
                    <div className="font-body text-xs text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};