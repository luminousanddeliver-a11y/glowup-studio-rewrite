import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroClinic} 
          alt="Modern aesthetic clinic treatment room" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              <span className="font-body text-sm font-semibold">NHS-Approved Clinic</span>
            </div>

            <h1 className="text-foreground mb-6 leading-tight">
              Pain-Free Laser Hair Removal & Skin Treatments in{" "}
              <span className="text-accent">Dagenham, East London</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Achieve permanently smooth skin and a flawless complexion with our NHS-approved, medical-grade technology. Book your free consultation today.
            </p>

            {/* Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg mb-8 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-body font-semibold">25% Off for New Clients</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 px-8 text-lg"
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
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-lg bg-background/50 backdrop-blur-sm"
              >
                <a href="#services">View All Treatments</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
              <div className="text-center bg-background/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="font-heading text-3xl font-semibold text-primary">250+</div>
                <div className="font-body text-sm text-muted-foreground">5-Star Reviews</div>
              </div>
              <div className="text-center bg-background/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="font-heading text-3xl font-semibold text-primary">10+</div>
                <div className="font-body text-sm text-muted-foreground">Treatments</div>
              </div>
              <div className="text-center bg-background/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="font-heading text-3xl font-semibold text-primary">6+</div>
                <div className="font-body text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Empty right side - image fills background */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
