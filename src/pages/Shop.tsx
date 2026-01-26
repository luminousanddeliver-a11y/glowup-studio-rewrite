import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { CategoryFilter } from "@/components/shop/CategoryFilter";
import { CartDrawer } from "@/components/shop/CartDrawer";

const categories = ["Serums", "Moisturizers", "Sun Protection", "Eye Care", "Exfoliators"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <SEOHead
        title="Shop AlumierMD Skincare | Laser Light Skin Clinic Dagenham"
        description="Shop premium AlumierMD medical-grade skincare products. Serums, moisturizers, SPF protection and more. Free UK shipping over £50."
      />

      <Header />
      <CartDrawer />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              AlumierMD Skincare
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Medical-grade skincare formulated with clean, effective ingredients. 
              Clinically proven results for all skin types.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm font-body text-muted-foreground">
              <span>✓ Free shipping over £50</span>
              <span>✓ Expert advice available</span>
              <span>✓ Authentic products</span>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container-custom">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <ProductGrid category={activeCategory} />
          </div>
        </section>

        {/* Info Banner */}
        <section className="bg-muted/50 py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Expert Guidance
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Our skincare specialists can help you find the perfect products for your skin type.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Medical-Grade Quality
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  AlumierMD products contain the highest concentration of active ingredients.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Results You Can See
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Clinically proven formulations for visible skin transformation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Shop;
