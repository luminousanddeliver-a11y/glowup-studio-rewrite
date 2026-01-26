import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star } from "lucide-react";
import heroClinicNew from "@/assets/hero-clinic-new.png";

export const HeroSection = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - appears second on mobile, first on desktop */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Decorative teal bar */}
            <div className="w-12 h-1 bg-primary mb-6 mx-auto lg:mx-0" />

            <h1 className="text-foreground mb-4 leading-tight">
              Advanced Laser & Skin Treatments
            </h1>

            <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
              Professional laser treatments and skincare solutions in Dagenham, East London. NHS-approved, FDA-certified technology with pain-free Lynton Motus AY laser.
            </p>

            {/* Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-body font-semibold">25% Off for New Clients</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body h-12 px-6 text-base"
              >
                <a href="#contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-12 px-6 text-base"
              >
                <a href="#services">Learn More</a>
              </Button>
            </div>

            {/* Stats with divider */}
            <div className="border-t border-border mt-8 pt-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="text-center lg:text-left">
                  <div className="font-heading text-xl font-bold text-primary">250+</div>
                  <div className="font-body text-xs text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-heading text-xl font-bold text-primary">6+</div>
                  <div className="font-body text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-heading text-xl font-bold text-primary">5★</div>
                  <div className="font-body text-xs text-muted-foreground">Rated Clinic</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image - appears first on mobile, second on desktop */}
          <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroClinicNew} 
                alt="Modern aesthetic clinic treatment room with professional equipment"
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            
            {/* NHS Approved Badge - Floating outside image */}
            <div className="absolute -bottom-6 right-4 lg:-right-4 bg-primary text-primary-foreground px-5 py-4 rounded-xl shadow-xl max-w-[220px] z-10">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 flex-shrink-0" />
                <span className="font-semibold text-sm">NHS Approved</span>
              </div>
              <div className="text-xs opacity-90 leading-tight">FDA-certified technology for safe, effective treatments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
