import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-accent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              Thank You for Your Order!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground mb-8"
            >
              Your order has been received and is being processed.
            </motion.p>

            {/* Order Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card rounded-xl border border-border p-6 mb-8"
            >
              <p className="font-body text-sm text-muted-foreground mb-1">
                Order Number
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="font-heading text-2xl font-bold text-foreground"
              >
                {orderNumber}
              </motion.p>
            </motion.div>

            {/* What's Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-muted/50 rounded-xl p-6 mb-8 text-left"
            >
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                What happens next?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Confirmation Email",
                    description: "You'll receive an order confirmation email shortly.",
                  },
                  {
                    icon: Package,
                    title: "Shipping",
                    description: "Orders are typically dispatched within 1-2 business days. You'll receive tracking information once shipped.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
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
            </motion.div>

            {/* Contact */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="font-body text-sm text-muted-foreground mt-8"
            >
              Questions about your order?{" "}
              <a href="tel:02085981200" className="text-accent hover:underline">
                Call us on 0208 598 1200
              </a>
            </motion.p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default OrderConfirmation;
