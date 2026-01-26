import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "promo-banner-dismissed";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-promo text-promo-foreground py-2 px-4 relative z-[60]">
      <div className="container-custom flex items-center justify-center">
        <p className="font-body text-sm md:text-base font-semibold text-center">
          🎉 <span className="uppercase tracking-wide">25% OFF FOR ALL NEW CLIENTS</span> – 
          <a 
            href="tel:02085981200" 
            className="underline underline-offset-2 hover:no-underline ml-1"
          >
            Book Now
          </a>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
