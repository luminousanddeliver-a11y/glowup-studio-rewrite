import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Heart, 
  Plus, 
  Minus, 
  Check, 
  Truck, 
  Shield, 
  Star,
  ChevronLeft 
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { ProductCard } from "@/components/shop/ProductCard";
import { CompareBar } from "@/components/shop/CompareBar";
import { ProductReviews } from "@/components/shop/ProductReviews";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .eq("active", true)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: relatedProducts } = useQuery({
    queryKey: ["related-products", product?.category, product?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", product?.category)
        .eq("active", true)
        .neq("id", product?.id)
        .limit(4);
      if (error) throw error;
      return data;
    },
    enabled: !!product?.category && !!product?.id,
  });

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-12">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="aspect-square rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-24 text-center">
          <div className="container-custom">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const isOnSale = product.sale_price !== null && product.sale_price < product.price;
  const displayPrice = product.sale_price ?? product.price;
  const savings = isOnSale ? ((product.price - product.sale_price!) / product.price) * 100 : 0;
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      salePrice: product.sale_price,
      category: product.category || "Uncategorized",
      imageUrl: product.image_url,
    }, quantity);
    setQuantity(1);
  };

  const handleToggleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      salePrice: product.sale_price,
      category: product.category || "Uncategorized",
      imageUrl: product.image_url,
    });
  };

  return (
    <>
      <SEOHead
        title={`${product.name} | AlumierMD | Laser Light Skin Clinic`}
        description={product.description || `Shop ${product.name} - premium AlumierMD medical-grade skincare.`}
      />

      <Header />

      <main className="min-h-screen bg-background pb-20">
        {/* Breadcrumb */}
        <div className="container-custom py-6">
          <PageBreadcrumb 
            items={[
              { label: "Shop", href: "/shop" },
              { label: product.category || "Products", href: `/shop?category=${product.category}` },
              { label: product.name }
            ]} 
          />
        </div>

        {/* Product Details */}
        <section className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden sticky top-24">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <ShoppingBag className="w-32 h-32 text-muted-foreground/30" />
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge variant="secondary" className="font-body">
                    {product.category || "Uncategorized"}
                  </Badge>
                  {isOnSale && (
                    <Badge className="bg-accent text-accent-foreground font-body">
                      Save {Math.round(savings)}%
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <Link 
                  to="/shop" 
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors mb-4"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Shop
                </Link>
                
                <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-4xl font-bold text-foreground">
                  £{displayPrice.toFixed(2)}
                </span>
                {isOnSale && (
                  <span className="font-body text-xl text-muted-foreground line-through">
                    £{product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <p className="font-body text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 py-4 border-y border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-accent" />
                  <span>Free shipping over £50</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>Authentic products</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent" />
                  <span>In stock</span>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-body text-sm text-foreground font-medium">Quantity:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors rounded-l-lg"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-body font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors rounded-r-lg"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="flex-1 h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-body text-lg"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Cart - £{(displayPrice * quantity).toFixed(2)}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleToggleWishlist}
                    className={`h-14 px-4 ${isWishlisted ? 'border-accent text-accent' : ''}`}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-accent' : ''}`} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tabs: Details, Ingredients, Reviews */}
        <section className="container-custom py-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-8">
              <TabsTrigger 
                value="details" 
                className="font-heading text-base px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Details
              </TabsTrigger>
              <TabsTrigger 
                value="ingredients" 
                className="font-heading text-base px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Ingredients
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="font-heading text-base px-6 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-0">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Product Details</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {product.description || "No detailed description available for this product."}
                </p>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-6 mb-3">How to Use</h4>
                <ol className="list-decimal list-inside font-body text-muted-foreground space-y-2">
                  <li>Cleanse your face thoroughly with a gentle cleanser</li>
                  <li>Apply a small amount to your fingertips</li>
                  <li>Gently massage into skin using upward circular motions</li>
                  <li>Allow product to absorb before applying other products</li>
                  <li>Use morning and/or evening as directed</li>
                </ol>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-0">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Key Ingredients</h3>
                {product.ingredients ? (
                  <p className="font-body text-muted-foreground leading-relaxed">{product.ingredients}</p>
                ) : (
                  <p className="font-body text-muted-foreground/60 italic">Ingredient list not available for this product.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0">
              <ProductReviews productId={product.id} productName={product.name} />
            </TabsContent>
          </Tabs>
        </section>

        {/* Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <section className="container-custom pb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard
                    id={relatedProduct.id}
                    name={relatedProduct.name}
                    slug={relatedProduct.slug}
                    price={relatedProduct.price}
                    salePrice={relatedProduct.sale_price}
                    category={relatedProduct.category || "Uncategorized"}
                    description={relatedProduct.description}
                    imageUrl={relatedProduct.image_url}
                    showCompare={false}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      <CompareBar />
      <Footer />
    </>
  );
};

export default ProductDetail;
