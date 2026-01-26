import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const STORAGE_KEY = "promo-banner-dismissed";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check localStorage on mount
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      // Delay showing for entrance animation
      const showTimer = setTimeout(() => setIsVisible(true), 100);
      setIsLoaded(true);
      return () => clearTimeout(showTimer);
    }
  }, []);

  // Auto-collapse on mobile after 5 seconds
  useEffect(() => {
    if (isVisible && isMobile) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isMobile]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (!isLoaded) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="bg-promo/90 backdrop-blur-sm text-promo-foreground overflow-hidden relative z-[60]"
        >
          <div className="container-custom py-2 px-4 flex items-center justify-center">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
