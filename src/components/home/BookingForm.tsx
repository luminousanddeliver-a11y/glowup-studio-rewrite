import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Calendar, Phone, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  service_interest: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000, "Message is too long").optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const services = [
  "Laser Hair Removal",
  "Hydrafacials",
  "Skin Rejuvenation",
  "Chemical Peels",
  "SkinPen Microneedling",
  "IV Drips & Infusions",
  "Tattoo Removal",
  "Botox & Fillers",
  "Vein Removal",
  "Electrolysis",
  "Cold Plasma",
  "LED Light Therapy",
  "Other",
];

export const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service_interest: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("inquiries").insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service_interest: data.service_interest,
        message: data.message || null,
      });

      if (error) throw error;

      toast({
        title: "Consultation Request Received!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      form.reset();
    } catch (error) {
      console.error("Booking form error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly at 0208 598 1200.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Book Your Free Consultation
            </motion.h2>
            <motion.p 
              className="font-body text-lg text-primary-foreground/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Take the first step towards flawless skin. Our expert team will assess your needs and create a personalized treatment plan just for you.
            </motion.p>

            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { icon: Phone, title: "Call Us Directly", content: "0208 598 1200", href: "tel:02085981200" },
                { icon: Mail, title: "Email Us", content: "info@laserlightskinclinic.co.uk", href: "mailto:info@laserlightskinclinic.co.uk" },
                { icon: Calendar, title: "Opening Hours", content: "Mon - Sat: 10:00 AM - 7:00 PM", href: null },
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-center gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-primary-foreground font-medium">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="font-body text-primary-foreground/80 hover:text-accent transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="font-body text-primary-foreground/80">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <span className="font-body font-semibold">🎉 25% Off for New Clients!</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="bg-card rounded-2xl p-5 md:p-8 shadow-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-foreground">Full Name *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input 
                            {...field} 
                            placeholder="Your full name" 
                            className="pl-11 h-14 font-body text-base"
                            autoComplete="name"
                            autoCapitalize="words"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-foreground">Email Address *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input 
                            {...field} 
                            type="email"
                            inputMode="email"
                            placeholder="your@email.com" 
                            className="pl-11 h-14 font-body text-base"
                            autoComplete="email"
                            autoCapitalize="off"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-foreground">Phone Number *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input 
                            {...field} 
                            type="tel"
                            inputMode="tel"
                            placeholder="07XXX XXX XXX" 
                            className="pl-11 h-14 font-body text-base"
                            autoComplete="tel"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service_interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-foreground">Service of Interest *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-14 font-body text-base">
                            <SelectValue placeholder="Select a treatment" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="font-body">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-foreground">Additional Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Tell us about your concerns or any questions..."
                          className="min-h-[120px] font-body text-base resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 bg-accent hover:bg-accent/90 text-accent-foreground font-body text-lg font-semibold active:scale-[0.99] transition-all touch-manipulation"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Book Your Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-center font-body text-sm text-muted-foreground">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
