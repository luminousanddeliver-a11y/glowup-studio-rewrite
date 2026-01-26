import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileStickyButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t border-border shadow-lg p-3">
      <div className="flex gap-3">
        <Button
          asChild
          variant="outline"
          className="flex-1 h-12 font-body border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          <a href="tel:02085981200">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button
          asChild
          className="flex-1 h-12 font-body bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <a href="#contact">
            <Calendar className="mr-2 h-4 w-4" />
            Book Now
          </a>
        </Button>
      </div>
    </div>
  );
};
