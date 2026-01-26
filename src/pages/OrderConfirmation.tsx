import { useSearchParams } from "react-router-dom";
import { CheckCircle, Package, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";

const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("order") || "Unknown";

  return (
    <>
      <SEOHead
        title="Order Confirmed | Laser Light Skin Clinic"
        description="Thank you for your order"
      />

      <Header />

      <main className="min-h-screen bg-background py-16 lg:py-24">
        <div className="container-custom max-w-2xl">
          <div className="text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>

            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Thank You for Your Order!
            </h1>

            <p className="font-body text-lg text-muted-foreground mb-8">
              Your order has been received and is being processed.
            </p>

            {/* Order Number */}
            <div className="bg-card rounded-xl border border-border p-6 mb-8">
              <p className="font-body text-sm text-muted-foreground mb-1">
                Order Number
              </p>
              <p className="font-heading text-2xl font-bold text-foreground">
                {orderNumber}
              </p>
            </div>

            {/* What's Next */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                What happens next?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">
                      Confirmation Email
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      You'll receive an order confirmation email shortly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Package className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">
                      Shipping
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Orders are typically dispatched within 1-2 business days. 
                      You'll receive tracking information once shipped.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-12 px-8"
              >
                <a href="/shop">Continue Shopping</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="font-body h-12 px-8"
              >
                <a href="/">Return to Home</a>
              </Button>
            </div>

            {/* Contact */}
            <p className="font-body text-sm text-muted-foreground mt-8">
              Questions about your order?{" "}
              <a href="tel:02085981200" className="text-accent hover:underline">
                Call us on 0208 598 1200
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default OrderConfirmation;
