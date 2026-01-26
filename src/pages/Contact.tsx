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
      <main className="flex-1 overflow-hidden">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
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

                {/* Map Placeholder */}
                <motion.div 
                  className="mt-8 bg-secondary rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="font-body text-muted-foreground">
                    We're located on Becontree Avenue, easily accessible from Becontree and Dagenham Heathway stations.
                  </p>
                </motion.div>
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
    </div>
  );
};

export default Contact;
