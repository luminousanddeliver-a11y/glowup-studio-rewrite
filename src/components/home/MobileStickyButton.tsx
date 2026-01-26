import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileStickyButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom">
      <div className="flex gap-3 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <Button
          asChild
          variant="outline"
          className="flex-1 h-14 font-body font-semibold text-base border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98] transition-all touch-manipulation"
        >
          <a href="tel:02085981200" className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </Button>
        <Button
          asChild
          className="flex-1 h-14 font-body font-semibold text-base bg-primary hover:bg-primary/90 text-primary-foreground active:scale-[0.98] transition-all touch-manipulation shadow-lg"
        >
          <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>Book Appointment</span>
          </a>
        </Button>
      </div>
    </div>
  );
};
