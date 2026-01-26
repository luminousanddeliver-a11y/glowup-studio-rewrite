import { motion } from "framer-motion";
import { X, ShoppingBag, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCompare } from "@/contexts/CompareContext";
import { useCart } from "@/contexts/CartContext";

export const CompareModal = () => {
  const { compareItems, isCompareOpen, setIsCompareOpen, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof compareItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      slug: item.slug,
      price: item.price,
      salePrice: item.salePrice,
      category: item.category,
      imageUrl: item.imageUrl,
    });
  };

  const handleAddAllToCart = () => {
    compareItems.forEach((item) => handleAddToCart(item));
    setIsCompareOpen(false);
  };

  const features = [
    { key: 'price', label: 'Price' },
    { key: 'category', label: 'Category' },
    { key: 'description', label: 'Description' },
    { key: 'ingredients', label: 'Ingredients' },
  ];

  return (
    <Dialog open={isCompareOpen} onOpenChange={setIsCompareOpen}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-card">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="font-heading text-2xl">
              Compare Products ({compareItems.length})
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            Compare features, prices, and ingredients side by side
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-180px)]">
          <div className="p-6 pt-4">
            {compareItems.length < 2 ? (
              <div className="text-center py-12">
                <p className="font-body text-muted-foreground">
                  Add at least 2 products to compare
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  {/* Header Row - Product Images & Names */}
                  <thead>
                    <tr>
                      <th className="w-32 p-2"></th>
                      {compareItems.map((item) => (
                        <th key={item.id} className="p-3 text-center align-top min-w-[180px]">
                          <div className="relative">
                            <button
                              onClick={() => removeFromCompare(item.id)}
                              className="absolute -top-1 -right-1 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center z-10"
                              aria-label={`Remove ${item.name}`}
                            >
                              <X className="w-4 h-4" />
                            </button>
                            <div className="w-full aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                              {item.imageUrl ? (
                                <img
                                  src={item.imageUrl}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <ShoppingBag className="w-12 h-12 text-muted-foreground/30" />
                                </div>
                              )}
                            </div>
                            <h3 className="font-heading text-sm font-semibold text-foreground line-clamp-2 mb-2">
                              {item.name}
                            </h3>
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(item)}
                              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body text-xs"
                            >
                              <ShoppingBag className="w-3 h-3 mr-1" />
                              Add to Cart
                            </Button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Feature Rows */}
                  <tbody>
                    {features.map((feature, index) => (
                      <tr 
                        key={feature.key} 
                        className={index % 2 === 0 ? 'bg-muted/30' : ''}
                      >
                        <td className="p-3 font-body text-sm font-medium text-foreground align-top">
                          {feature.label}
                        </td>
                        {compareItems.map((item) => (
                          <td key={item.id} className="p-3 text-center align-top">
                            {feature.key === 'price' && (
                              <div>
                                <span className="font-heading text-lg font-bold text-foreground">
                                  £{(item.salePrice ?? item.price).toFixed(2)}
                                </span>
                                {item.salePrice && item.salePrice < item.price && (
                                  <span className="block font-body text-xs text-muted-foreground line-through">
                                    £{item.price.toFixed(2)}
                                  </span>
                                )}
                              </div>
                            )}
                            {feature.key === 'category' && (
                              <Badge variant="secondary" className="font-body text-xs">
                                {item.category}
                              </Badge>
                            )}
                            {feature.key === 'description' && (
                              <p className="font-body text-sm text-muted-foreground text-left">
                                {item.description || (
                                  <span className="text-muted-foreground/50 italic">No description</span>
                                )}
                              </p>
                            )}
                            {feature.key === 'ingredients' && (
                              <p className="font-body text-sm text-muted-foreground text-left">
                                {item.ingredients || (
                                  <span className="text-muted-foreground/50 italic">Not specified</span>
                                )}
                              </p>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t border-border flex items-center justify-between gap-4">
          <Button variant="outline" onClick={clearCompare}>
            Clear All
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsCompareOpen(false)}>
              Continue Shopping
            </Button>
            <Button
              onClick={handleAddAllToCart}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add All to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
