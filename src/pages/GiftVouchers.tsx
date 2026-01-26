import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Gift, Phone, Mail, Heart, Sparkles, Star } from "lucide-react";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";

const voucherOptions = [
  {
    amount: "£50",
    description: "Perfect for a facial or introductory treatment",
    popular: false,
  },
  {
    amount: "£100",
    description: "Great for HydraFacials or laser sessions",
    popular: true,
  },
  {
    amount: "£150",
    description: "Ideal for advanced treatments or multiple sessions",
    popular: false,
  },
  {
    amount: "£200",
    description: "A luxurious gift for comprehensive treatments",
    popular: false,
  },
  {
    amount: "Custom",
    description: "Choose any amount to suit your budget",
    popular: false,
  },
];

const treatmentVouchers = [
  {
    name: "HydraFacial Signature",
    price: "£120",
    description: "The ultimate facial for glowing skin",
  },
  {
    name: "Million Dollar Facial",
    price: "£180",
    description: "Our most luxurious facial experience",
  },
  {
    name: "IV Drip Experience",
    price: "£150",
    description: "Revitalizing vitamin infusion therapy",
  },
  {
    name: "Pamper Package",
    price: "£200",
    description: "Facial + LED therapy + massage combo",
  },
];

const GiftVouchers = () => {
  const giftVoucherSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Gift Vouchers - Laser Light Skin Clinic",
    "description": "Gift vouchers for laser hair removal, facials, and skin treatments at Laser Light Skin Clinic Dagenham.",
    "url": "https://laserlightskinclinic.co.uk/gift-vouchers",
    "brand": {
      "@type": "Brand",
      "name": "Laser Light Skin Clinic"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "50",
      "highPrice": "500",
      "priceCurrency": "GBP"
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <SEOHead
        title="Gift Vouchers | Laser & Skin Treatment Gifts Dagenham | Laser Light"
        description="Give the gift of beautiful skin. Purchase gift vouchers for laser hair removal, Hydrafacials, and skin treatments at Laser Light Skin Clinic Dagenham."
        canonicalUrl="https://laserlightskinclinic.co.uk/gift-vouchers"
        structuredData={giftVoucherSchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-accent -mt-[80px] pt-[88px] lg:pt-[92px] pb-10">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <PageBreadcrumb 
                items={[{ label: "Gift Vouchers" }]} 
                variant="dark"
                className="mb-6 justify-center"
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Gift className="h-8 w-8 text-accent" />
              </motion.div>
              <h1 className="text-primary-foreground mb-4">Gift Vouchers</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Give the gift of beautiful, radiant skin. The perfect present for birthdays, anniversaries, or just because.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Monetary Vouchers */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-foreground mb-4">Monetary Gift Vouchers</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Let them choose their perfect treatment with a monetary voucher.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {voucherOptions.map((voucher, index) => (
                <motion.div
                  key={voucher.amount}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow text-center ${
                    voucher.popular ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {voucher.popular && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-body px-3 py-1 rounded-full"
                    >
                      Most Popular
                    </motion.span>
                  )}
                  <div className="text-3xl font-heading font-bold text-foreground mb-2">
                    {voucher.amount}
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    {voucher.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Vouchers */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-foreground mb-4">Treatment Gift Vouchers</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Choose a specific treatment for a truly thoughtful gift.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentVouchers.map((voucher, index) => (
                <motion.div
                  key={voucher.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <Sparkles className="h-5 w-5 text-accent" />
                  </motion.div>
                  <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                    {voucher.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    {voucher.description}
                  </p>
                  <div className="text-xl font-heading font-bold text-accent">
                    {voucher.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Purchase */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-foreground mb-6">How to Purchase</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Contact Us",
                      description: "Call or email us with your chosen voucher amount or treatment.",
                    },
                    {
                      step: 2,
                      title: "Make Payment",
                      description: "Pay securely by card over the phone or visit us in person.",
                    },
                    {
                      step: 3,
                      title: "Receive Your Voucher",
                      description: "We'll email a beautiful digital voucher or post a physical one.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="flex gap-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shrink-0 font-heading font-bold"
                      >
                        {item.step}
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-body">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-8 p-4 bg-accent/10 rounded-lg"
                >
                  <div className="flex items-center gap-2 text-accent font-body">
                    <Star className="h-5 w-5" />
                    <span>Gift vouchers are valid for 12 months from purchase date.</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-lg p-8 shadow-card"
              >
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                    Ready to Order?
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Contact us to purchase your gift voucher today.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="tel:02085981200">
                      <Phone className="h-4 w-4 mr-2" />
                      Call 0208 598 1200
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary text-primary">
                    <a href="mailto:info@laserlightskinclinic.co.uk">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default GiftVouchers;
