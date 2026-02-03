import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { z } from "zod";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

const services = [
  "Laser Hair Removal",
  "Hydrafacials",
  "Tattoo Removal",
  "Skin Rejuvenation",
  "SkinPen Microneedling",
  "IV Drips & Infusions",
  "Chemical Peels",
  "Electrolysis",
  "Cold Plasma",
  "Injectables",
  "Other",
];

const openingHours = [
  { day: "Monday", hours: "10:00 AM - 7:00 PM" },
  { day: "Tuesday", hours: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "10:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
  { day: "Friday", hours: "10:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "Closed", closed: true },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Laser Light Skin Clinic",
    "description": "Get in touch with Laser Light Skin Clinic in Dagenham. Book a free consultation for laser hair removal and skin treatments.",
    "url": "https://laserlightskinclinic.co.uk/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Laser Light Skin Clinic",
      "telephone": ["+442085981200", "+447949501777"],
      "email": "info@laserlightskinclinic.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125 Becontree Avenue",
        "addressLocality": "Dagenham",
        "addressRegion": "Essex",
        "postalCode": "RM8 2UJ",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.5545814",
        "longitude": "0.1173976"
      },
      "url": "https://laserlightskinclinic.co.uk",
      "priceRange": "££",
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Contact Us | Laser Light Skin Clinic Dagenham | Book Appointment"
        description="Contact Laser Light Skin Clinic in Dagenham. Call 0208 598 1200 or 07949 501 777. Book an appointment for laser hair removal and skin treatments."
        canonicalUrl="https://laserlightskinclinic.co.uk/contact"
        structuredData={contactPageSchema}
      />

      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-primary pt-24 lg:pt-28 pb-12 lg:pb-16">
          <div className="container-custom text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4"
            >
              Get in Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4"
            >
              Ready to <span className="text-accent">Glow Up?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto"
            >
              We believe in transparency and comfort. Whether you have questions about a treatment or are ready to start your journey, we are here for you.
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Quick Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-foreground">Quick Enquiry</h2>
                </div>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        required
                        className="h-11 border-border bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07123 456789"
                        className="h-11 border-border bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      required
                      className="h-11 border-border bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium text-foreground">
                      Service of Interest
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="h-11 border-border bg-background" aria-label="Select a service of interest">
                        <SelectValue placeholder="Please select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you today?"
                      rows={4}
                      required
                      className="border-border bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.7657412826285!2d0.1173976!3d51.5545814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a556bfa82c13%3A0x6ebb4d999d740f14!2sLaser%20Light%20Skin%20Clinic!5e0!3m2!1sen!2suk!4v1706300000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Laser Light Skin Clinic - 125 Becontree Avenue, Dagenham"
                  className="absolute inset-0"
                />
                {/* Clinic Badge Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="bg-card rounded-full px-5 py-3 shadow-lg border border-border flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase">Our Clinic</span>
                      <p className="text-sm font-medium text-foreground">125 Becontree Ave, Dagenham</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom Cards Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Contact Us Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="font-heading font-bold text-lg text-foreground">Contact Us</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Phone Number</span>
                      <a href="tel:02085981200" className="block font-semibold text-foreground hover:text-accent transition-colors">
                        0208 598 1200
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Email Address</span>
                      <a href="mailto:info@laserlightskinclinic.co.uk" className="block font-semibold text-foreground hover:text-accent transition-colors text-sm">
                        info@laserlightskinclinic.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href="https://www.facebook.com/laserlightskinclinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/laserlightskinclinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Opening Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-heading font-bold text-lg text-foreground">Opening Hours</h3>
                </div>

                <div className="space-y-3">
                  {openingHours.map((item) => (
                    <div key={item.day} className="flex justify-between items-center">
                      <span className={`text-sm ${item.closed ? "text-accent" : "text-foreground"}`}>
                        {item.day}
                      </span>
                      <span className={`text-sm ${item.closed ? "text-accent font-medium" : "text-muted-foreground"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Skip the Wait CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-accent rounded-2xl p-6 text-accent-foreground"
              >
                <h3 className="font-heading font-bold text-xl mb-3">Skip the wait?</h3>
                <p className="text-accent-foreground/80 text-sm mb-6">
                  Ready for flawless skin? You can book your consultation or treatment directly through our online calendar system.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">Instant Confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">Choose your expert</span>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 border-0 font-semibold"
                >
                  <a
                    href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Appointment Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
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

export default Contact;
