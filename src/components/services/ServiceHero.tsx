import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronDown, Shield, Star } from "lucide-react";
import { PageBreadcrumb, BreadcrumbItemType } from "@/components/layout/PageBreadcrumb";
import { OptimizedImage } from "@/components/ui/optimized-image";

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
  primaryCtaHref = "https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true",
  secondaryCta,
  showPhoneCta = true,
  heroImage,
  floatingBadge,
  stats,
  breadcrumbs,
  backgroundImage,
}: ServiceHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Use heroImage or fall back to backgroundImage for backwards compatibility
  const displayImage = heroImage || backgroundImage;

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
    <section ref={sectionRef} className="bg-background py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content (appears second on mobile, first on desktop) */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <PageBreadcrumb items={breadcrumbs} className="mb-4 justify-center lg:justify-start" />
              </motion.div>
            )}

            {/* Decorative teal bar */}
            <motion.div 
              className="w-12 h-1 bg-primary mb-6 mx-auto lg:mx-0"
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
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 backdrop-blur-sm"
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
                className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg mb-6"
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
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-lg"
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
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-lg"
                >
                  <a href="tel:02085981200">
                    <Phone className="mr-2 h-5 w-5" />
                    0208 598 1200
                  </a>
                </Button>
              )}
            </motion.div>

            {/* Stats with top border divider */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-t border-border mt-8 pt-6"
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center lg:text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      <div className="font-heading text-xl font-bold text-primary">{stat.value}</div>
                      <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Image (appears first on mobile, second on desktop) */}
          <motion.div 
            className="relative order-1 lg:order-2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {displayImage && (
              <>
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-lg"
                  style={{ y: imageY }}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <OptimizedImage 
                    src={displayImage} 
                    alt={title}
                    className="w-full aspect-[4/3] object-cover"
                    priority={true}
                    objectFit="cover"
                  />
                </motion.div>
                
                {/* Floating Badge - NHS/Trust indicator */}
                {floatingBadge ? (
                  <motion.div 
                    className="absolute -bottom-8 right-4 lg:-right-6 bg-primary text-primary-foreground px-6 py-5 rounded-xl shadow-xl max-w-[280px] z-10"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {floatingBadge.icon || <Shield className="h-5 w-5 flex-shrink-0" />}
                      <span className="font-semibold text-base">{floatingBadge.title}</span>
                    </div>
                    <div className="text-sm opacity-90 leading-snug">{floatingBadge.description}</div>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="absolute -bottom-8 right-4 lg:-right-6 bg-primary text-primary-foreground px-6 py-5 rounded-xl shadow-xl max-w-[280px] z-10"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 flex-shrink-0" />
                      <span className="font-semibold text-base">NHS Approved</span>
                    </div>
                    <div className="text-sm opacity-90 leading-snug">FDA-certified technology for safe, effective treatments</div>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
