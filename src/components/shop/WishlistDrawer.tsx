import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

export const WishlistDrawer = () => {
  const { wishlistItems, wishlistCount, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

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

  return (
    <Sheet open={isWishlistOpen} onOpenChange={setIsWishlistOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl flex items-center gap-2">
            <Heart className="w-5 h-5 text-accent" fill="currentColor" />
            Your Wishlist ({wishlistCount})
          </SheetTitle>
          <SheetDescription className="sr-only">
            View and manage your saved items
          </SheetDescription>
        </SheetHeader>

        {wishlistItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <Heart className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              Your wishlist is empty
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Save products you love for later
            </p>
            <Button
              onClick={() => setIsWishlistOpen(false)}
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
            >
              <a href="/shop">Browse Products</a>
            </Button>
          </div>
        ) : (
          <>
            {/* Wishlist Items */}
            <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4">
              <AnimatePresence mode="popLayout">
                {wishlistItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 py-4 border-b border-border last:border-b-0"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-sm font-semibold text-foreground line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {item.category}
                      </p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-heading text-sm font-bold text-foreground">
                          £{(item.salePrice ?? item.price).toFixed(2)}
                        </span>
                        {item.salePrice && item.salePrice < item.price && (
                          <span className="font-body text-xs text-muted-foreground line-through">
                            £{item.price.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(item)}
                          className="h-8 bg-accent hover:bg-accent/90 text-accent-foreground font-body text-xs"
                        >
                          <ShoppingBag className="w-3 h-3 mr-1" />
                          Add to Cart
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFromWishlist(item.id)}
                          className="h-8 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4 mt-4 space-y-2">
              <Button
                variant="outline"
                onClick={() => setIsWishlistOpen(false)}
                className="w-full font-body"
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
