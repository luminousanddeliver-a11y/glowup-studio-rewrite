import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";

const OrderCancelled = () => {
  return (
    <>
      <SEOHead
        title="Order Cancelled | Laser Light Skin Clinic"
        description="Your order was not completed"
      />

      <Header />

      <main className="min-h-screen bg-background py-16 lg:py-24">
        <div className="container-custom max-w-2xl">
          <div className="text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-muted-foreground" />
            </div>

            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Order Not Completed
            </h1>

            <p className="font-body text-lg text-muted-foreground mb-8">
              Your payment was cancelled and your order was not placed. 
              Your cart items have been saved.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-12 px-8"
              >
                <a href="/checkout">Return to Checkout</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="font-body h-12 px-8"
              >
                <a href="/shop">Continue Shopping</a>
              </Button>
            </div>

            {/* Help */}
            <p className="font-body text-sm text-muted-foreground mt-8">
              Having trouble?{" "}
              <a href="tel:02085981200" className="text-accent hover:underline">
                Call us on 0208 598 1200
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default OrderCancelled;
