import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

interface FlyingItem {
  id: string;
  imageUrl: string | null;
  startX: number;
  startY: number;
}

export const FlyingCartAnimation = () => {
  const { flyingItem, clearFlyingItem } = useCart();
  const [items, setItems] = useState<FlyingItem[]>([]);

  useEffect(() => {
    if (flyingItem) {
      const newItem: FlyingItem = {
        id: `${flyingItem.id}-${Date.now()}`,
        imageUrl: flyingItem.imageUrl,
        startX: flyingItem.startX,
        startY: flyingItem.startY,
      };
      setItems((prev) => [...prev, newItem]);
      clearFlyingItem();
    }
  }, [flyingItem, clearFlyingItem]);

  const handleAnimationComplete = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Find cart icon position
  const getCartPosition = () => {
    const cartIcon = document.querySelector('[data-cart-icon="true"]');
    if (cartIcon) {
      const rect = cartIcon.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    // Fallback to top-right area
    return { x: window.innerWidth - 80, y: 60 };
  };

  return (
    <AnimatePresence>
      {items.map((item) => {
        const cartPos = getCartPosition();
        const deltaX = cartPos.x - item.startX;
        const deltaY = cartPos.y - item.startY;

        return (
          <motion.div
            key={item.id}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: item.startX,
              top: item.startY,
            }}
            initial={{ 
              scale: 1, 
              opacity: 1,
              x: 0,
              y: 0,
            }}
            animate={{
              x: deltaX,
              y: deltaY,
              scale: [1, 1.2, 0.3],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: {
                times: [0, 0.3, 1],
              },
              opacity: {
                times: [0, 0.7, 1],
              },
            }}
            onAnimationComplete={() => handleAnimationComplete(item.id)}
          >
            <div className="w-14 h-14 rounded-full bg-card shadow-xl border-2 border-accent overflow-hidden">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
              )}
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};

// Cart icon bounce animation component
export const CartBounceIndicator = () => {
  const { cartBounce } = useCart();

  return (
    <AnimatePresence>
      {cartBounce && (
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/30"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </AnimatePresence>
  );
};
