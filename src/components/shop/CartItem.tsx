import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem as CartItemType } from "@/contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const displayPrice = item.salePrice ?? item.price;
  const lineTotal = displayPrice * item.quantity;

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      {/* Image */}
      <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <ShoppingBag className="w-8 h-8 text-muted-foreground/30" />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-heading text-sm font-semibold text-foreground truncate">
          {item.name}
        </h4>
        <p className="font-body text-xs text-muted-foreground">{item.category}</p>
        
        <div className="flex items-center justify-between mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center border border-border rounded-md">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 hover:bg-muted transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center font-body text-xs">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 hover:bg-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Price */}
          <span className="font-heading text-sm font-semibold text-foreground">
            £{lineTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeFromCart(item.id)}
        className="flex-shrink-0 text-muted-foreground hover:text-destructive"
        aria-label="Remove item"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
