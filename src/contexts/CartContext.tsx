import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  category: string;
  quantity: number;
  imageUrl: string | null;
}

export interface FlyingItemData {
  id: string;
  imageUrl: string | null;
  startX: number;
  startY: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number, elementRef?: HTMLElement | null) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  flyingItem: FlyingItemData | null;
  clearFlyingItem: () => void;
  cartBounce: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'llsc-cart';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [flyingItem, setFlyingItem] = useState<FlyingItemData | null>(null);
  const [cartBounce, setCartBounce] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity = 1, elementRef?: HTMLElement | null) => {
    // Trigger flying animation if element ref provided
    if (elementRef) {
      const rect = elementRef.getBoundingClientRect();
      setFlyingItem({
        id: item.id,
        imageUrl: item.imageUrl,
        startX: rect.left + rect.width / 2 - 28, // Center the 56px flying item
        startY: rect.top + rect.height / 2 - 28,
      });
    }

    // Trigger cart bounce
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 400);

    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
    
    // Open cart after a slight delay for animation
    setTimeout(() => setIsCartOpen(true), 650);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const clearFlyingItem = useCallback(() => {
    setFlyingItem(null);
  }, []);

  const cartTotal = cartItems.reduce((sum, item) => {
    const price = item.salePrice ?? item.price;
    return sum + price * item.quantity;
  }, 0);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        flyingItem,
        clearFlyingItem,
        cartBounce,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
