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
    <section id="contact" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
              Book Your Free Consultation
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8">
              Take the first step towards flawless skin. Our expert team will assess your needs and create a personalized treatment plan just for you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-primary-foreground font-medium">Call Us Directly</p>
                  <a href="tel:02085981200" className="font-body text-primary-foreground/80 hover:text-accent transition-colors">
                    0208 598 1200
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-primary-foreground font-medium">Email Us</p>
                  <a href="mailto:info@laserlightskinclinic.co.uk" className="font-body text-primary-foreground/80 hover:text-accent transition-colors">
                    info@laserlightskinclinic.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-primary-foreground font-medium">Opening Hours</p>
                  <p className="font-body text-primary-foreground/80">Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg">
              <span className="font-body font-semibold">🎉 25% Off for New Clients!</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
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
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            {...field} 
                            placeholder="Your full name" 
                            className="pl-10 h-12 font-body"
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
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            {...field} 
                            type="email"
                            placeholder="your@email.com" 
                            className="pl-10 h-12 font-body"
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
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            {...field} 
                            type="tel"
                            placeholder="07XXX XXX XXX" 
                            className="pl-10 h-12 font-body"
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
                          <SelectTrigger className="h-12 font-body">
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
                          className="min-h-[100px] font-body resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-body text-lg"
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
          </div>
        </div>
      </div>
    </section>
  );
};
