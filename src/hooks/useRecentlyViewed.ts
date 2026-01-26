import { useState, useEffect, useCallback } from 'react';

export interface RecentlyViewedProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  category: string;
  imageUrl: string | null;
  viewedAt: number;
}

const RECENTLY_VIEWED_KEY = 'llsc-recently-viewed';
const MAX_ITEMS = 8;

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedProduct[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(RECENTLY_VIEWED_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    sessionStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = useCallback((product: Omit<RecentlyViewedProduct, 'viewedAt'>) => {
    setRecentlyViewed((prev) => {
      // Remove if already exists
      const filtered = prev.filter((p) => p.id !== product.id);
      
      // Add to beginning with timestamp
      const updated = [
        { ...product, viewedAt: Date.now() },
        ...filtered,
      ].slice(0, MAX_ITEMS);
      
      return updated;
    });
  }, []);

  const clearRecentlyViewed = useCallback(() => {
    setRecentlyViewed([]);
  }, []);

  return {
    recentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed,
  };
};
