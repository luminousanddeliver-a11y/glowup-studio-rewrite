import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star } from "lucide-react";
import heroClinicNew from "@/assets/hero-clinic-new.png";

export const HeroSection = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Decorative teal bar */}
            <div className="w-12 h-1 bg-primary mb-6 mx-auto lg:mx-0" />

            <h1 className="text-foreground mb-6 leading-tight">
              NHS-Approved Laser & Skin Clinic in{" "}
              <span className="text-primary">Dagenham, East London</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              The only 5-star clinic in East London with pain-free Lynton Motus AY laser technology. Medically graded, FDA-approved, and trusted by over 250+ clients.
            </p>

            {/* Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg mb-8">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-body font-semibold">25% Off for New Clients</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body h-14 px-8 text-lg"
              >
                <a href="#contact">
                  Book Free Consultation & Get 25% Off
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-lg"
              >
                <a href="#services">View All Treatments</a>
              </Button>
            </div>

            {/* Stats with divider */}
            <div className="border-t border-border mt-10 pt-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div className="text-center lg:text-left">
                  <div className="font-heading text-2xl font-semibold text-primary">250+</div>
                  <div className="font-body text-sm text-muted-foreground">5-Star Reviews</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-heading text-2xl font-semibold text-primary">10+</div>
                  <div className="font-body text-sm text-muted-foreground">Treatments</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-heading text-2xl font-semibold text-primary">6+</div>
                  <div className="font-body text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image with NHS Badge */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroClinicNew} 
                alt="Modern aesthetic clinic treatment room with professional equipment"
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* NHS Approved Badge Overlay */}
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-3 rounded-lg max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4" />
                  <span className="font-semibold text-sm">NHS Approved</span>
                </div>
                <div className="text-xs opacity-90">FDA-certified technology for safe, effective treatments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
