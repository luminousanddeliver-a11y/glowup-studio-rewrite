import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "./CartItem";

const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 4.95;

export const CartDrawer = () => {
  const { cartItems, cartTotal, cartCount, isCartOpen, setIsCartOpen } = useCart();

  const shippingCost = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const orderTotal = cartTotal + shippingCost;
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart ({cartCount})
          </SheetTitle>
          <SheetDescription className="sr-only">
            Review and manage items in your shopping cart
          </SheetDescription>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              Your cart is empty
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Discover our premium AlumierMD skincare range
            </p>
            <Button
              onClick={() => setIsCartOpen(false)}
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
            >
              <a href="/shop">Browse Products</a>
            </Button>
          </div>
        ) : (
          <>
            {/* Free Shipping Progress */}
            {amountToFreeShipping > 0 && (
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <p className="font-body text-sm text-muted-foreground text-center">
                  Add <span className="font-semibold text-foreground">£{amountToFreeShipping.toFixed(2)}</span> more for free shipping!
                </p>
                <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-300"
                    style={{ width: `${Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Summary */}
            <div className="border-t border-border pt-4 mt-4 space-y-3">
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">£{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">
                  {shippingCost === 0 ? (
                    <span className="text-accent font-semibold">FREE</span>
                  ) : (
                    `£${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between font-heading text-lg font-semibold pt-2 border-t border-border">
                <span>Total</span>
                <span>£{orderTotal.toFixed(2)}</span>
              </div>

              <div className="space-y-2 pt-2">
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body h-12"
                >
                  <a href="/checkout">Proceed to Checkout</a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full font-body"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
