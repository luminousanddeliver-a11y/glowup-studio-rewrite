import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

export const OfferBanner = () => {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-foreground/10 flex items-center justify-center">
            <Gift className="w-8 h-8 text-accent-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-accent-foreground mb-4">
            New Client Exclusive: Get 25% Off Your First Treatment!
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            As a welcome to the Laser Light Skin Clinic family, we are offering all new clients 25% off their first treatment course. This is a limited-time offer to experience the Dagenham difference.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-card text-primary hover:bg-card/90 font-body h-14 px-8 text-lg"
          >
            <a href="#contact">
              Claim Your 25% Discount Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
