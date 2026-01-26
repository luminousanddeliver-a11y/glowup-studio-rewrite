import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 4.95;

export const OrderSummary = () => {
  const { cartItems, cartTotal } = useCart();

  const shippingCost = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const orderTotal = cartTotal + shippingCost;

  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4 sticky top-24">
      <h2 className="font-heading text-xl font-semibold text-foreground">
        Order Summary
      </h2>

      {/* Items */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {cartItems.map((item) => {
          const displayPrice = item.salePrice ?? item.price;
          return (
            <div key={item.id} className="flex gap-3">
              <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <ShoppingBag className="w-4 h-4 text-muted-foreground/30" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm text-foreground truncate">{item.name}</p>
                <p className="font-body text-xs text-muted-foreground">
                  Qty: {item.quantity} × £{displayPrice.toFixed(2)}
                </p>
              </div>
              <span className="font-body text-sm font-semibold text-foreground">
                £{(displayPrice * item.quantity).toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Totals */}
      <div className="border-t border-border pt-4 space-y-2">
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
      </div>

      {/* Trust signals */}
      <div className="pt-4 border-t border-border">
        <p className="font-body text-xs text-muted-foreground text-center">
          🔒 Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
};
