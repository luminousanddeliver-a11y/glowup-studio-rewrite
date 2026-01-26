import { useState } from "react";
import { ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  category: string;
  description: string | null;
  imageUrl: string | null;
}

export const ProductCard = ({
  id,
  name,
  slug,
  price,
  salePrice,
  category,
  description,
  imageUrl,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const isOnSale = salePrice !== null && salePrice < price;
  const displayPrice = salePrice ?? price;
  const savings = isOnSale ? ((price - salePrice!) / price) * 100 : 0;

  const handleAddToCart = () => {
    addToCart(
      {
        id,
        name,
        slug,
        price,
        salePrice,
        category,
        imageUrl,
      },
      quantity
    );
    setQuantity(1);
  };

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge variant="secondary" className="font-body text-xs">
            {category}
          </Badge>
          {isOnSale && (
            <Badge className="bg-accent text-accent-foreground font-body text-xs">
              Save {Math.round(savings)}%
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-heading text-lg font-semibold text-foreground line-clamp-1">
          {name}
        </h3>
        
        {description && (
          <p className="font-body text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-xl font-bold text-foreground">
            £{displayPrice.toFixed(2)}
          </span>
          {isOnSale && (
            <span className="font-body text-sm text-muted-foreground line-through">
              £{price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-muted transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-body text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-body"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
