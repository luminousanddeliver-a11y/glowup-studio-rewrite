import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Heart, Plus, Minus, Scale, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCompare } from "@/contexts/CompareContext";

export interface QuickViewProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  category: string;
  description: string | null;
  imageUrl: string | null;
  ingredients?: string | null;
}

interface ProductQuickViewProps {
  product: QuickViewProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isInCompare, toggleCompare, compareCount, maxCompareItems } = useCompare();

  if (!product) return null;

  const isOnSale = product.salePrice !== null && product.salePrice < product.price;
  const displayPrice = product.salePrice ?? product.price;
  const savings = isOnSale ? ((product.price - product.salePrice!) / product.price) * 100 : 0;
  const isWishlisted = isInWishlist(product.id);
  const isComparing = isInCompare(product.id);
  const canAddToCompare = compareCount < maxCompareItems || isComparing;

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        salePrice: product.salePrice,
        category: product.category,
        imageUrl: product.imageUrl,
      },
      quantity
    );
    setQuantity(1);
    onClose();
  };

  const handleToggleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      salePrice: product.salePrice,
      category: product.category,
      imageUrl: product.imageUrl,
    });
  };

  const handleToggleCompare = () => {
    toggleCompare({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      salePrice: product.salePrice,
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl,
      ingredients: product.ingredients,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>Product details and purchase options</DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square bg-muted">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                <ShoppingBag className="w-24 h-24 text-muted-foreground/30" />
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge variant="secondary" className="font-body">
                {product.category}
              </Badge>
              {isOnSale && (
                <Badge className="bg-accent text-accent-foreground font-body">
                  Save {Math.round(savings)}%
                </Badge>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                {product.name}
              </h2>
              
              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-heading text-3xl font-bold text-foreground">
                  £{displayPrice.toFixed(2)}
                </span>
                {isOnSale && (
                  <span className="font-body text-lg text-muted-foreground line-through">
                    £{product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Ingredients */}
              {product.ingredients && (
                <div className="mb-4">
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-1">
                    Key Ingredients
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {product.ingredients}
                  </p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4 border-t border-border">
              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="font-body text-sm text-muted-foreground">Quantity:</span>
                <div className="flex items-center border border-border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-body">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-body text-base"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart - £{(displayPrice * quantity).toFixed(2)}
              </Button>

              {/* Secondary Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleToggleWishlist}
                  className={`flex-1 ${isWishlisted ? 'border-accent text-accent' : ''}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-accent' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleToggleCompare}
                  disabled={!canAddToCompare}
                  className={`flex-1 ${isComparing ? 'border-accent text-accent' : ''}`}
                >
                  {isComparing ? (
                    <Check className="w-4 h-4 mr-2" />
                  ) : (
                    <Scale className="w-4 h-4 mr-2" />
                  )}
                  {isComparing ? 'Comparing' : 'Compare'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
