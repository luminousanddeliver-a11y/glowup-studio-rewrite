import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { ProductGrid, usePriceRange } from "@/components/shop/ProductGrid";
import { CategoryFilter } from "@/components/shop/CategoryFilter";
import { ProductSortSelect, SortOption } from "@/components/shop/ProductSortSelect";
import { PriceRangeFilter } from "@/components/shop/PriceRangeFilter";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { RecentlyViewed } from "@/components/shop/RecentlyViewed";
import { CompareBar } from "@/components/shop/CompareBar";
import { ScrollReveal } from "@/components/home/ScrollReveal";

const categories = ["Serums", "Moisturizers", "Sun Protection", "Eye Care", "Exfoliators"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const priceRange = usePriceRange(activeCategory);
  const [priceMin, setPriceMin] = useState<number | undefined>(undefined);
  const [priceMax, setPriceMax] = useState<number | undefined>(undefined);

  const handlePriceChange = (min: number, max: number) => {
    setPriceMin(min === priceRange.min ? undefined : min);
    setPriceMax(max === priceRange.max ? undefined : max);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Reset price filter when category changes
    setPriceMin(undefined);
    setPriceMax(undefined);
  };

  return (
    <>
      <SEOHead
        title="Shop AlumierMD Skincare | Laser Light Skin Clinic Dagenham"
        description="Shop premium AlumierMD medical-grade skincare products. Serums, moisturizers, SPF protection and more. Free UK shipping over £50."
      />

      <Header />
      <CartDrawer />

      <main className="min-h-screen bg-background pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-10 lg:py-14">
          <div className="container-custom text-center">
            <PageBreadcrumb 
              items={[{ label: "Shop" }]} 
              className="mb-4 justify-center"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              AlumierMD Skincare
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Medical-grade skincare formulated with clean, effective ingredients. 
              Clinically proven results for all skin types.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex items-center justify-center gap-6 text-sm font-body text-muted-foreground"
            >
              <span>✓ Free shipping over £50</span>
              <span>✓ Expert advice available</span>
              <span>✓ Authentic products</span>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-6 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-sm z-40">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </motion.div>

              {/* Sort & Price Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <PriceRangeFilter
                  minPrice={priceRange.min}
                  maxPrice={priceRange.max}
                  currentMin={priceMin ?? priceRange.min}
                  currentMax={priceMax ?? priceRange.max}
                  onChange={handlePriceChange}
                />
                <ProductSortSelect value={sortBy} onChange={setSortBy} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <ProductGrid 
              category={activeCategory} 
              sortBy={sortBy}
              priceMin={priceMin}
              priceMax={priceMax}
            />
          </div>
        </section>

        {/* Recently Viewed */}
        <RecentlyViewed />

        {/* Info Banner */}
        <section className="bg-muted/50 py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Expert Guidance",
                  description: "Our skincare specialists can help you find the perfect products for your skin type.",
                },
                {
                  title: "Medical-Grade Quality",
                  description: "AlumierMD products contain the highest concentration of active ingredients.",
                },
                {
                  title: "Results You Can See",
                  description: "Clinically proven formulations for visible skin transformation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Compare Bar - Fixed at bottom */}
      <CompareBar />

      <Footer />
    </>
  );
};

export default Shop;
