import { Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { ReactNode, useState, useEffect } from "react";

interface WishlistPreviewTooltipProps {
  children: ReactNode;
}

export const WishlistPreviewTooltip = ({ children }: WishlistPreviewTooltipProps) => {
  const { wishlistItems, wishlistCount, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleAddToCart = (item: typeof wishlistItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      slug: item.slug,
      price: item.price,
      salePrice: item.salePrice,
      category: item.category,
      imageUrl: item.imageUrl,
    });
    removeFromWishlist(item.id);
  };

  // Only show tooltip on desktop
  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div className="relative" data-wishlist-icon="true">
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        align="end" 
        className="w-80 p-0 shadow-xl border-border"
        sideOffset={8}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="font-heading text-sm font-semibold">
              Wishlist ({wishlistCount})
            </span>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-4">
              <Heart className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
              <p className="font-body text-sm text-muted-foreground">
                No saved items yet
              </p>
            </div>
          ) : (
            <>
              <AnimatePresence mode="popLayout">
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {wishlistItems.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 items-center"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-muted-foreground/30" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm text-foreground line-clamp-1">
                          {item.name}
                        </p>
                        <p className="font-heading text-sm font-semibold text-foreground">
                          £{(item.salePrice ?? item.price).toFixed(2)}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item);
                        }}
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>

              {wishlistItems.length > 4 && (
                <p className="text-center text-xs text-muted-foreground mt-2">
                  +{wishlistItems.length - 4} more items
                </p>
              )}
            </>
          )}

          <div className="mt-4 pt-3 border-t border-border">
            <Button
              onClick={() => setIsWishlistOpen(true)}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm"
              size="sm"
            >
              View Wishlist
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
