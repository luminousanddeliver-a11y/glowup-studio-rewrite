import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

export const FloatingReviewButton = () => {
  // Construct the write review URL by appending the review action
  const writeReviewUrl = GOOGLE_MAPS_REVIEWS_URL + "/writereview";

  return (
    <motion.a
      href={writeReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-4 sm:bottom-28 md:bottom-24 lg:bottom-6 lg:right-6 z-50 flex items-center gap-2 bg-gold text-gold-foreground px-4 py-3 rounded-full shadow-lg hover:bg-gold/90 transition-colors group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Write a Google Review for Laser Light Skin Clinic"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Star className="h-5 w-5 fill-current" />
      </motion.div>
      <span className="font-body font-medium text-sm whitespace-nowrap">
        Leave a Review
      </span>
    </motion.a>
  );
};
