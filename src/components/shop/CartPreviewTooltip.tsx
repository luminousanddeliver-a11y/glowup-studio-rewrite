import { ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { CartBounceIndicator } from "./FlyingCartAnimation";

interface CartPreviewTooltipProps {
  children: React.ReactNode;
}

export const CartPreviewTooltip = ({ children }: CartPreviewTooltipProps) => {
  const { cartItems, cartTotal, cartCount, removeFromCart, setIsCartOpen, cartBounce } = useCart();

  // Only show preview on desktop
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return <>{children}</>;
  }

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div className="relative" data-cart-icon="true">
          <motion.div
            animate={cartBounce ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
          <CartBounceIndicator />
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        align="end" 
        className="w-80 p-0 shadow-xl border-border"
        sideOffset={8}
      >
        <div className="p-4 border-b border-border bg-muted/30">
          <div className="flex items-center justify-between">
            <h4 className="font-heading font-semibold text-foreground flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Cart ({cartCount})
            </h4>
            {cartCount > 0 && (
              <span className="font-body text-sm text-muted-foreground">
                £{cartTotal.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-6 text-center">
            <ShoppingBag className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
            <p className="font-body text-sm text-muted-foreground">
              Your cart is empty
            </p>
          </div>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto p-2">
              <AnimatePresence>
                {cartItems.slice(0, 3).map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-md bg-muted overflow-hidden shrink-0">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {item.quantity} × £{(item.salePrice ?? item.price).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeFromCart(item.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-destructive/10 rounded transition-all"
                      aria-label="Remove item"
                    >
                      <X className="w-3.5 h-3.5 text-muted-foreground hover:text-destructive" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {cartItems.length > 3 && (
                <p className="text-center font-body text-xs text-muted-foreground py-2">
                  +{cartItems.length - 3} more item{cartItems.length - 3 > 1 ? 's' : ''}
                </p>
              )}
            </div>

            <div className="p-3 border-t border-border bg-muted/30 space-y-2">
              <Button
                onClick={() => setIsCartOpen(true)}
                variant="outline"
                className="w-full font-body text-sm h-9"
              >
                View Cart
              </Button>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm h-9"
              >
                <a href="/checkout">Checkout</a>
              </Button>
            </div>
          </>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};
