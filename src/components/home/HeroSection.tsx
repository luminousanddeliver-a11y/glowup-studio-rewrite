import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-secondary overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
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
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg mb-8">
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
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body h-14 px-8 text-lg"
              >
                <a href="#services">View All Treatments</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
              <div className="text-center">
                <div className="font-heading text-3xl font-semibold text-primary">250+</div>
                <div className="font-body text-sm text-muted-foreground">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-semibold text-primary">10+</div>
                <div className="font-body text-sm text-muted-foreground">Treatments</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-semibold text-primary">6+</div>
                <div className="font-body text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Visual - Abstract Clinical Design */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl rotate-6 shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-3xl -rotate-3 shadow-xl" />
              <div className="absolute inset-4 bg-card rounded-2xl shadow-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                    <Shield className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-primary mb-2">Medical-Grade</h3>
                  <p className="font-body text-muted-foreground">
                    Advanced laser technology trusted by NHS professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
