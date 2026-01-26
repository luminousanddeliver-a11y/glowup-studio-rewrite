import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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
import { ScrollReveal } from "@/components/home/ScrollReveal";
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
      "image": "https://laserlightskinclinic.co.uk/og-image.jpg",
      "priceRange": "££",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.google.com/maps/place/Laser+Light+Skin+Clinic/@51.5545221,0.1175882,17z/data=!4m16!1m9!3m8!1s0x47d8a556bfa82c13:0x6ebb4d999d740f14!2sLaser+Light+Skin+Clinic!8m2!3d51.5545814!4d0.1173976!9m1!1b1!16s%2Fg%2F11h4nbjdlz!3m5!1s0x47d8a556bfa82c13:0x6ebb4d999d740f14!8m2!3d51.5545814!4d0.1173976!16s%2Fg%2F11h4nbjdlz",
        "https://www.instagram.com/laserlightskinclinic"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "19:00"
        }
      ]
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);
      
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

  const contactItems = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <p className="font-body text-muted-foreground">
          125 Becontree Avenue,<br />
          Dagenham, Essex,<br />
          RM8 2UJ
        </p>
      )
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <div className="font-body text-muted-foreground space-y-1">
          <a href="tel:02085981200" className="block hover:text-accent transition-colors">
            0208 598 1200
          </a>
          <a href="tel:07949501777" className="block hover:text-accent transition-colors">
            07949 501 777
          </a>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a 
          href="mailto:info@laserlightskinclinic.co.uk" 
          className="font-body text-muted-foreground hover:text-accent transition-colors"
        >
          info@laserlightskinclinic.co.uk
        </a>
      )
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: (
        <div className="font-body text-muted-foreground space-y-1 text-sm">
          <div className="flex justify-between gap-8">
            <span>Monday - Friday</span>
            <span>10:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between gap-8">
            <span>Saturday</span>
            <span>10:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between gap-8">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Contact Us | Laser Light Skin Clinic Dagenham | Book Appointment"
        description="Contact Laser Light Skin Clinic in Dagenham. Call 0208 598 1200 or 07949 501 777. Book an appointment for laser hair removal and skin treatments."
        canonicalUrl="https://laserlightskinclinic.co.uk/contact"
        structuredData={contactPageSchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground -mt-[80px] pt-[88px] lg:pt-[92px] pb-10">
          <div className="container-custom">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <PageBreadcrumb 
                items={[{ label: "Contact" }]} 
                variant="dark"
                className="mb-4"
              />
              <h1 className="mb-4">Get in Touch</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Ready to start your journey to beautiful skin? Contact us today for a free consultation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <motion.div 
                      key={item.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="h-6 w-6 text-accent" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-lg font-medium text-foreground mb-1">{item.title}</h3>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Google Map */}
                <motion.div 
                  className="mt-8 rounded-lg overflow-hidden shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.7657412826285!2d0.1173976!3d51.5545814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a556bfa82c13%3A0x6ebb4d999d740f14!2sLaser%20Light%20Skin%20Clinic!5e0!3m2!1sen!2suk!4v1706300000000!5m2!1sen!2suk"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Laser Light Skin Clinic - 125 Becontree Avenue, Dagenham"
                    className="w-full"
                  />
                </motion.div>

                {/* Parking & Transport Info */}
                <motion.div 
                  className="mt-6 bg-accent/5 rounded-lg p-6 border border-accent/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="font-heading text-lg font-medium text-foreground mb-4">
                    Getting Here
                  </h3>
                  <div className="space-y-3 font-body text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-accent text-xs font-bold">P</span>
                      </div>
                      <p>Free street parking available on Becontree Avenue and surrounding roads</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-accent text-xs font-bold">🚇</span>
                      </div>
                      <p>5-minute walk from Becontree Station (District Line)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-accent text-xs font-bold">🚌</span>
                      </div>
                      <p>Bus routes 62, 145, and 368 stop nearby</p>
                    </div>
                  </div>
                </motion.div>

                {/* Google Reviews Badge */}
                <motion.a 
                  href="https://www.google.com/maps/place/Laser+Light+Skin+Clinic/@51.5545221,0.1175882,17z/data=!4m16!1m9!3m8!1s0x47d8a556bfa82c13:0x6ebb4d999d740f14!2sLaser+Light+Skin+Clinic!8m2!3d51.5545814!4d0.1173976!9m1!1b1!16s%2Fg%2F11h4nbjdlz!3m5!1s0x47d8a556bfa82c13:0x6ebb4d999d740f14!8m2!3d51.5545814!4d0.1173976!16s%2Fg%2F11h4nbjdlz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-4 bg-card p-5 rounded-lg border border-border hover:border-accent/30 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="shrink-0">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="font-semibold text-foreground">4.9</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">250+ Google Reviews</span>
                      <span className="text-accent ml-2 group-hover:underline">Read reviews →</span>
                    </p>
                  </div>
                </motion.a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card p-8 rounded-lg shadow-card">
                  <h2 className="text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground font-body mb-6">
                    Fill in the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="07123 456 789"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service of Interest</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
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

export default Contact;
