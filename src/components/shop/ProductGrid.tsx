import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard } from "./ProductCard";
import { ProductQuickView, QuickViewProduct } from "./ProductQuickView";
import { Skeleton } from "@/components/ui/skeleton";
import { SortOption } from "./ProductSortSelect";

interface ProductGridProps {
  category: string;
  sortBy?: SortOption;
  priceMin?: number;
  priceMax?: number;
}

export const ProductGrid = ({ 
  category, 
  sortBy = "featured",
  priceMin,
  priceMax 
}: ProductGridProps) => {
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*")
        .eq("active", true);

      if (category !== "All") {
        query = query.eq("category", category);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  // Apply sorting and filtering client-side for better UX
  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    // Filter by price range
    if (priceMin !== undefined || priceMax !== undefined) {
      result = result.filter((p) => {
        const price = p.sale_price ?? p.price;
        const min = priceMin ?? 0;
        const max = priceMax ?? Infinity;
        return price >= min && price <= max;
      });
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => (a.sale_price ?? a.price) - (b.sale_price ?? b.price));
        break;
      case "price-desc":
        result.sort((a, b) => (b.sale_price ?? b.price) - (a.sale_price ?? a.price));
        break;
      case "newest":
        result.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
        break;
      case "bestselling":
        // In production, this would use actual sales data
        // For now, prioritize items on sale as "bestselling"
        result.sort((a, b) => {
          const aOnSale = a.sale_price !== null ? 1 : 0;
          const bOnSale = b.sale_price !== null ? 1 : 0;
          return bOnSale - aOnSale;
        });
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          if (a.category !== b.category) {
            return (a.category || "").localeCompare(b.category || "");
          }
          return a.name.localeCompare(b.name);
        });
        break;
    }

    return result;
  }, [products, sortBy, priceMin, priceMax]);

  const handleQuickView = (product: typeof products extends (infer T)[] ? T : never) => {
    setQuickViewProduct({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      salePrice: product.sale_price,
      category: product.category || "Uncategorized",
      description: product.description,
      imageUrl: product.image_url,
      ingredients: product.ingredients,
    });
    setIsQuickViewOpen(true);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="space-y-4"
          >
            <Skeleton className="aspect-square w-full rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <p className="text-muted-foreground font-body">
          Unable to load products. Please try again later.
        </p>
      </motion.div>
    );
  }

  if (!filteredAndSortedProducts || filteredAndSortedProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <p className="text-muted-foreground font-body">
          No products found matching your criteria.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
          >
            <ProductCard
              id={product.id}
              name={product.name}
              slug={product.slug}
              price={product.price}
              salePrice={product.sale_price}
              category={product.category || "Uncategorized"}
              description={product.description}
              imageUrl={product.image_url}
              ingredients={product.ingredients}
              onQuickView={() => handleQuickView(product)}
            />
          </motion.div>
        ))}
      </div>

      <ProductQuickView
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};

// Export price range helper for parent components
export const usePriceRange = (category: string) => {
  const { data: products } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("price, sale_price")
        .eq("active", true);

      if (category !== "All") {
        query = query.eq("category", category);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const priceRange = useMemo(() => {
    if (!products || products.length === 0) {
      return { min: 0, max: 200 };
    }

    const prices = products.map((p) => p.sale_price ?? p.price);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices)),
    };
  }, [products]);

  return priceRange;
};
