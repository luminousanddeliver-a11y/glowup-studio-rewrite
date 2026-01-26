import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export const ServiceHero = ({ title, subtitle, description, badge }: ServiceHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-6">
              {badge}
            </span>
          )}
          
          <h1 className="mb-4 text-primary-foreground">{title}</h1>
          
          <p className="text-xl md:text-2xl font-heading font-medium opacity-90 mb-4">
            {subtitle}
          </p>
          
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8 font-body">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 px-8 text-lg"
            >
              <a href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body h-14 px-8 text-lg"
            >
              <a href="tel:02085981200">
                <Phone className="mr-2 h-5 w-5" />
                0208 598 1200
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
