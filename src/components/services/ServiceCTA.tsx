import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin } from "lucide-react";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
  showMap?: boolean;
}

export const ServiceCTA = ({
  title = "Ready to Start Your Transformation?",
  subtitle = "Book your free consultation today and discover how we can help you achieve your goals.",
  showMap = true,
}: ServiceCTAProps) => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-primary-foreground">{title}</h2>
          <p className="font-body text-xl opacity-90 mb-8">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          
          {showMap && (
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-heading font-semibold">Visit Our Clinic</span>
              </div>
              <address className="font-body not-italic opacity-90">
                6 Church Elm Lane, Dagenham, RM10 9RR<br />
                Open: Monday - Friday 10:00 AM - 7:00 PM | Saturday 10:00 AM - 5:00 PM
              </address>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
