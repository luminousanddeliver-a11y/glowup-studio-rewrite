import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface CompareProduct {
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

interface CompareContextType {
  compareItems: CompareProduct[];
  addToCompare: (product: CompareProduct) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  toggleCompare: (product: CompareProduct) => void;
  clearCompare: () => void;
  compareCount: number;
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;
  maxCompareItems: number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const MAX_COMPARE_ITEMS = 4;

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareItems, setCompareItems] = useState<CompareProduct[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const addToCompare = useCallback((product: CompareProduct) => {
    setCompareItems((prev) => {
      if (prev.length >= MAX_COMPARE_ITEMS) return prev;
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromCompare = useCallback((productId: string) => {
    setCompareItems((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const isInCompare = useCallback((productId: string) => {
    return compareItems.some((p) => p.id === productId);
  }, [compareItems]);

  const toggleCompare = useCallback((product: CompareProduct) => {
    if (isInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  }, [isInCompare, removeFromCompare, addToCompare]);

  const clearCompare = useCallback(() => {
    setCompareItems([]);
  }, []);

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        isInCompare,
        toggleCompare,
        clearCompare,
        compareCount: compareItems.length,
        isCompareOpen,
        setIsCompareOpen,
        maxCompareItems: MAX_COMPARE_ITEMS,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
