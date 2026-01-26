import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
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
          <div className="text-center">
            <h1 className="font-heading text-2xl font-semibold text-foreground mb-2">
              Your cart is empty
            </h1>
            <p className="font-body text-muted-foreground mb-4">
              Redirecting to shop...
            </p>
          </div>
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
          {/* Back Link */}
          <Button
            variant="ghost"
            asChild
            className="mb-6 font-body"
          >
            <a href="/shop">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </a>
          </Button>

          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
