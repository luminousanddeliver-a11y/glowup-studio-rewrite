import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import skincareProducts from "@/assets/skincare-products.jpg";

export const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={skincareProducts} 
          alt="Luxury skincare products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-primary-foreground mb-4">
            Ready to Start Your Journey to Clearer, Smoother Skin?
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team of local, NHS-approved experts is here to guide you. Book a free, no-obligation consultation to discuss your goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 font-body h-14 px-8 text-lg"
            >
              <a href="https://widget.fresha.com" target="_blank" rel="noopener noreferrer">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body h-14 px-8 text-lg"
            >
              <a href="tel:02085981200">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: 0208 598 1200
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
