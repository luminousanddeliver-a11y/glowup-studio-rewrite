import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronDown, Shield, Star } from "lucide-react";

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
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Shield className="h-4 w-4" />
                <span className="font-body text-sm font-semibold">{trustBadge}</span>
              </div>
            )}

            <h1 className="text-foreground mb-4 leading-tight">
              {renderTitle()}
            </h1>

            <p className="text-xl md:text-2xl font-heading font-medium text-muted-foreground mb-4">
              {subtitle}
            </p>

            <p className="font-body text-lg text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 mb-6">
              {description}
            </p>

            {/* Offer Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg mb-8 backdrop-blur-sm">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-body font-semibold">{badge}</span>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div>

            {/* Quick Stats */}
            {stats && stats.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-background/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="font-heading text-2xl font-semibold text-primary">{stat.value}</div>
                    <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Empty right side - image fills background */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
