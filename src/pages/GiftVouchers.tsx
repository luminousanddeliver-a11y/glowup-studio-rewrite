import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Gift, Phone, Mail, Heart, Sparkles, Star } from "lucide-react";

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
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Gift Vouchers | Laser & Skin Treatment Gifts Dagenham | Laser Light"
        description="Give the gift of beautiful skin. Purchase gift vouchers for laser hair removal, Hydrafacials, and skin treatments at Laser Light Skin Clinic Dagenham."
        canonicalUrl="https://laserlightskinclinic.co.uk/gift-vouchers"
        structuredData={giftVoucherSchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-accent py-16">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-primary-foreground mb-4">Gift Vouchers</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Give the gift of beautiful, radiant skin. The perfect present for birthdays, anniversaries, or just because.
              </p>
            </div>
          </div>
        </section>

        {/* Monetary Vouchers */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Monetary Gift Vouchers</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Let them choose their perfect treatment with a monetary voucher.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {voucherOptions.map((voucher) => (
                <div 
                  key={voucher.amount}
                  className={`relative bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow text-center ${
                    voucher.popular ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {voucher.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-body px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="text-3xl font-heading font-bold text-foreground mb-2">
                    {voucher.amount}
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    {voucher.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Vouchers */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Treatment Gift Vouchers</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Choose a specific treatment for a truly thoughtful gift.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentVouchers.map((voucher) => (
                <div 
                  key={voucher.name}
                  className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                    {voucher.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    {voucher.description}
                  </p>
                  <div className="text-xl font-heading font-bold text-accent">
                    {voucher.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Purchase */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-foreground mb-6">How to Purchase</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shrink-0 font-heading font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                        Contact Us
                      </h3>
                      <p className="text-muted-foreground font-body">
                        Call or email us with your chosen voucher amount or treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shrink-0 font-heading font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                        Make Payment
                      </h3>
                      <p className="text-muted-foreground font-body">
                        Pay securely by card over the phone or visit us in person.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shrink-0 font-heading font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                        Receive Your Voucher
                      </h3>
                      <p className="text-muted-foreground font-body">
                        We'll email a beautiful digital voucher or post a physical one.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2 text-accent font-body">
                    <Star className="h-5 w-5" />
                    <span>Gift vouchers are valid for 12 months from purchase date.</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-card">
                <div className="text-center mb-8">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GiftVouchers;
