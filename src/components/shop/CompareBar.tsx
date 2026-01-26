import { motion, AnimatePresence } from "framer-motion";
import { X, Scale, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCompare } from "@/contexts/CompareContext";

export const CompareBar = () => {
  const { compareItems, compareCount, removeFromCompare, clearCompare, setIsCompareOpen, maxCompareItems } = useCompare();

  if (compareCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-xl"
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Product thumbnails */}
            <div className="flex items-center gap-3 flex-1 overflow-x-auto">
              <div className="flex items-center gap-2 flex-shrink-0">
                <Scale className="w-5 h-5 text-accent" />
                <span className="font-body text-sm font-medium text-foreground">
                  Compare ({compareCount}/{maxCompareItems})
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {compareItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative group flex-shrink-0"
                  >
                    <div className="w-14 h-14 bg-muted rounded-lg overflow-hidden border-2 border-border">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCompare(item.id)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Remove ${item.name} from compare`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
                
                {/* Empty slots */}
                {Array.from({ length: maxCompareItems - compareCount }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="w-14 h-14 rounded-lg border-2 border-dashed border-border flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-xs text-muted-foreground">+</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCompare}
                className="text-muted-foreground hover:text-destructive"
              >
                Clear
              </Button>
              <Button
                onClick={() => setIsCompareOpen(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
                disabled={compareCount < 2}
              >
                Compare Now
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
