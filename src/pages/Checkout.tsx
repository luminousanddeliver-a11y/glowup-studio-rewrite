import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { CheckoutForm } from "@/components/shop/CheckoutForm";
import { OrderSummary } from "@/components/shop/OrderSummary";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { useCart } from "@/contexts/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();

  // Redirect to shop if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      const timer = setTimeout(() => {
        window.location.href = "/shop";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [cartItems.length]);

  if (cartItems.length === 0) {
    return (
      <>
        <SEOHead
          title="Checkout | Laser Light Skin Clinic"
          description="Complete your order"
        />
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="font-heading text-2xl font-semibold text-foreground mb-2">
              Your cart is empty
            </h1>
            <p className="font-body text-muted-foreground mb-4">
              Redirecting to shop...
            </p>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Checkout | Laser Light Skin Clinic"
        description="Complete your order for AlumierMD skincare products"
      />

      <Header />
      <CartDrawer />

      <main className="min-h-screen bg-background py-8 lg:py-12">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PageBreadcrumb 
              items={[
                { label: "Shop", href: "/shop" },
                { label: "Checkout" }
              ]} 
              className="mb-6"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8"
          >
            Checkout
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <CheckoutForm />
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <OrderSummary />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
