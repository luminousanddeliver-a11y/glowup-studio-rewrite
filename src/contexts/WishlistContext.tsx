import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export interface WishlistItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  category: string;
  imageUrl: string | null;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (item: WishlistItem) => void;
  clearWishlist: () => void;
  wishlistCount: number;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  wishlistBounce: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const WISHLIST_STORAGE_KEY = 'llsc-wishlist';

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistBounce, setWishlistBounce] = useState(false);

  useEffect(() => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = useCallback((item: WishlistItem) => {
    setWishlistBounce(true);
    setTimeout(() => setWishlistBounce(false), 400);

    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlistItems((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  const isInWishlist = useCallback((productId: string) => {
    return wishlistItems.some((i) => i.id === productId);
  }, [wishlistItems]);

  const toggleWishlist = useCallback((item: WishlistItem) => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  }, [isInWishlist, removeFromWishlist, addToWishlist]);

  const clearWishlist = useCallback(() => {
    setWishlistItems([]);
  }, []);

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
        clearWishlist,
        wishlistCount,
        isWishlistOpen,
        setIsWishlistOpen,
        wishlistBounce,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
