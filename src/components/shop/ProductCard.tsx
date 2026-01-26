import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Plus, Minus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";

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
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const imageRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  const isOnSale = salePrice !== null && salePrice < price;
  const displayPrice = salePrice ?? price;
  const savings = isOnSale ? ((price - salePrice!) / price) * 100 : 0;
  const isWishlisted = isInWishlist(id);

  // Track product view for recently viewed
  useEffect(() => {
    if (!hasTracked.current) {
      addToRecentlyViewed({
        id,
        name,
        slug,
        price,
        salePrice,
        category,
        imageUrl,
      });
      hasTracked.current = true;
    }
  }, [id, name, slug, price, salePrice, category, imageUrl, addToRecentlyViewed]);

  const handleToggleWishlist = () => {
    toggleWishlist({
      id,
      name,
      slug,
      price,
      salePrice,
      category,
      imageUrl,
    });
  };

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
      quantity,
      imageRef.current // Pass the image element for flying animation
    );
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Image */}
      <div ref={imageRef} className="relative aspect-square bg-muted overflow-hidden">
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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-accent text-accent-foreground font-body text-xs">
                Save {Math.round(savings)}%
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-card transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isWishlisted ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
          />
        </motion.button>
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
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Button
              onClick={handleAddToCart}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
