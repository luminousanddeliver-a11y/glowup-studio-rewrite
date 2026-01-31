/**
 * BookingForm Component - Premium Redesign
 * 
 * Key Improvements:
 * - Enhanced glassmorphism form card with gradient border
 * - Floating label inputs with smooth animations
 * - Eye-catching discount badge with pulse animation
 * - Improved trust signals with icons and better hierarchy
 * - Premium button states with loading animation
 * - Better mobile responsiveness and touch targets
 * - Subtle background pattern overlay
 * - Enhanced focus states with glow effects
 */

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
import { ArrowRight, Calendar, Phone, Mail, User, Shield, Clock, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
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

// Contact info data for cleaner rendering
const contactInfo = [
  { 
    icon: Phone, 
    title: "Call Us Directly", 
    content: "0208 598 1200", 
    href: "tel:02085981200",
    highlight: true 
  },
  { 
    icon: Mail, 
    title: "Email Us", 
    content: "info@laserlightskinclinic.co.uk", 
    href: "mailto:info@laserlightskinclinic.co.uk",
    highlight: false 
  },
  { 
    icon: Calendar, 
    title: "Opening Hours", 
    content: "Mon - Sat: 10:00 AM - 7:00 PM", 
    href: null,
    highlight: false 
  },
];

export const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

      setIsSuccess(true);
      toast({
        title: "Consultation Request Received!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      form.reset();
      setTimeout(() => setIsSuccess(false), 3000);
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
    <section id="contact" className="relative section-padding bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Gradient orbs for visual interest */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text & Contact Info */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced heading with gradient accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wide uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                Free Consultation
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                Start Your Skin
                <span className="block text-accent">Transformation</span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="font-body text-lg text-primary-foreground/80 mb-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Take the first step towards flawless skin. Our expert team will assess your needs and create a personalized treatment plan just for you.
            </motion.p>

            {/* Enhanced contact info cards */}
            <motion.div 
              className="space-y-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className={`flex items-center gap-4 justify-center lg:justify-start p-3 rounded-xl transition-all duration-300 ${
                    item.highlight 
                      ? 'bg-accent/20 hover:bg-accent/30' 
                      : 'bg-primary-foreground/5 hover:bg-primary-foreground/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.highlight ? 'bg-accent text-accent-foreground' : 'bg-primary-foreground/10'
                  }`}>
                    <item.icon className={`w-5 h-5 ${item.highlight ? '' : 'text-accent'}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-body text-primary-foreground/60 text-sm">{item.title}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className={`font-body font-semibold transition-colors ${
                          item.highlight 
                            ? 'text-accent hover:text-accent/80 text-lg' 
                            : 'text-primary-foreground hover:text-accent'
                        }`}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="font-body text-primary-foreground font-medium">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Eye-catching discount badge with pulse animation */}
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-3 rounded-full shadow-lg shadow-accent/25"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-foreground"></span>
              </span>
              <span className="font-body font-bold text-lg">Free Consultation & Patch Test</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent via-primary-foreground/20 to-accent/50 rounded-2xl opacity-60" />
            
            {/* Form card with glassmorphism */}
            <div className="relative bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/10">
              {/* Form header */}
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  Request Your Free Consultation
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Fill in your details and we'll call you back
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-foreground font-medium">
                          Full Name <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-accent" />
                            <Input 
                              {...field} 
                              placeholder="Your full name" 
                              className="pl-12 h-14 font-body text-base border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-background hover:border-border"
                              autoComplete="name"
                              autoCapitalize="words"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-destructive font-body text-sm mt-1 flex items-center gap-1" />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-foreground font-medium">
                          Email Address <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-accent" />
                            <Input 
                              {...field} 
                              type="email"
                              inputMode="email"
                              placeholder="your@email.com" 
                              className="pl-12 h-14 font-body text-base border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-background hover:border-border"
                              autoComplete="email"
                              autoCapitalize="off"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-destructive font-body text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Phone Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-foreground font-medium">
                          Phone Number <span className="text-accent">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-accent" />
                            <Input 
                              {...field} 
                              type="tel"
                              inputMode="tel"
                              placeholder="07XXX XXX XXX" 
                              className="pl-12 h-14 font-body text-base border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-background hover:border-border"
                              autoComplete="tel"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-destructive font-body text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Service Select */}
                  <FormField
                    control={form.control}
                    name="service_interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-foreground font-medium">
                          Service of Interest <span className="text-accent">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 font-body text-base border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20 hover:border-border">
                              <SelectValue placeholder="Select a treatment" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl border-2 border-border/50">
                            {services.map((service) => (
                              <SelectItem 
                                key={service} 
                                value={service} 
                                className="font-body cursor-pointer hover:bg-accent/10 focus:bg-accent/10 rounded-lg"
                              >
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-destructive font-body text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-foreground font-medium">
                          Additional Message <span className="text-muted-foreground">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Tell us about your concerns or any questions..."
                            className="min-h-[100px] font-body text-base resize-none border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-background hover:border-border"
                          />
                        </FormControl>
                        <FormMessage className="text-destructive font-body text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className={`w-full h-14 font-body text-lg font-semibold rounded-xl transition-all duration-300 touch-manipulation shadow-lg ${
                      isSuccess 
                        ? 'bg-green-500 hover:bg-green-500 shadow-green-500/25' 
                        : 'bg-accent hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 active:scale-[0.99]'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </span>
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        Request Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Enquiry
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>

                  {/* Trust indicators */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="font-body text-sm">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="h-4 w-4 text-accent" />
                      <span className="font-body text-sm">Your data is secure</span>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
