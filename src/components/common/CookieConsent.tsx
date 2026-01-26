import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent-choice";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX - don't show immediately on page load
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);
  };

  const handleClose = () => {
    // Closing without choice defaults to rejection
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon and Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      We value your privacy
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      We use cookies to enhance your browsing experience and analyse our traffic. 
                      By clicking "Accept All", you consent to our use of cookies. 
                      Read our{" "}
                      <Link 
                        to="/privacy-policy" 
                        className="text-primary hover:underline font-medium"
                      >
                        Privacy Policy
                      </Link>{" "}
                      to learn more.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReject}
                    className="font-body text-sm h-10 px-4 border-border hover:bg-muted"
                  >
                    Reject Non-Essential
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="font-body text-sm h-10 px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Accept All
                  </Button>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-muted rounded-full transition-colors md:hidden"
                    aria-label="Close cookie banner"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
