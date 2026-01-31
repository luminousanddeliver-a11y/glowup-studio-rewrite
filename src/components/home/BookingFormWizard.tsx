/**
 * BookingFormWizard Component - Multi-Step Form
 * 
 * A step-based booking form for better mobile UX:
 * - Step 1: Personal Info (name, email, phone)
 * - Step 2: Service Selection
 * - Step 3: Additional Message (optional)
 * - Progress indicator with step validation
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
import { 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Mail, 
  User, 
  Shield, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Loader2,
  Stethoscope,
  MessageSquare,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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

const steps = [
  { id: 1, title: "Your Details", icon: User, fields: ["name", "email", "phone"] },
  { id: 2, title: "Treatment", icon: Stethoscope, fields: ["service_interest"] },
  { id: 3, title: "Message", icon: MessageSquare, fields: ["message"] },
];

export const BookingFormWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    mode: "onChange",
  });

  const validateStep = async (step: number): Promise<boolean> => {
    const stepFields = steps[step - 1].fields as (keyof BookingFormData)[];
    const result = await form.trigger(stepFields);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
      setTimeout(() => {
        setIsSuccess(false);
        setCurrentStep(1);
      }, 3000);
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Gradient orbs */}
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

            {/* Contact info cards */}
            <motion.div 
              className="space-y-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a 
                href="tel:02085981200"
                className="flex items-center gap-4 justify-center lg:justify-start p-3 rounded-xl bg-accent/20 hover:bg-accent/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent text-accent-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-body text-primary-foreground/60 text-sm">Call Us Directly</p>
                  <p className="font-body font-semibold text-accent text-lg">0208 598 1200</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="mailto:info@laserlightskinclinic.co.uk"
                className="flex items-center gap-4 justify-center lg:justify-start p-3 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-foreground/10">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-body text-primary-foreground/60 text-sm">Email Us</p>
                  <p className="font-body text-primary-foreground font-medium">info@laserlightskinclinic.co.uk</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Discount badge */}
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

          {/* Right Column - Multi-Step Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent via-primary-foreground/20 to-accent/50 rounded-2xl opacity-60" />
            
            {/* Form card */}
            <div className="relative bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/10">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <motion.div 
                      className={cn(
                        "flex flex-col items-center relative z-10",
                        currentStep >= step.id ? "text-accent" : "text-muted-foreground"
                      )}
                      animate={{ 
                        scale: currentStep === step.id ? 1.05 : 1 
                      }}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                        currentStep > step.id 
                          ? "bg-accent border-accent text-accent-foreground" 
                          : currentStep === step.id 
                            ? "border-accent bg-accent/10 text-accent" 
                            : "border-border bg-background text-muted-foreground"
                      )}>
                        {currentStep > step.id ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className={cn(
                        "font-body text-xs mt-2 hidden sm:block transition-colors",
                        currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {step.title}
                      </span>
                    </motion.div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 mx-2 sm:mx-4">
                        <div className={cn(
                          "h-full transition-all duration-500",
                          currentStep > step.id ? "bg-accent" : "bg-border"
                        )} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <AnimatePresence mode="wait" custom={currentStep}>
                    {/* Step 1: Personal Details */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-center mb-6">
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                            Your Contact Details
                          </h3>
                          <p className="font-body text-sm text-muted-foreground">
                            How can we reach you?
                          </p>
                        </div>

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
                                    className="pl-12 h-14 font-body text-base border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                                    autoComplete="name"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-destructive font-body text-sm" />
                            </FormItem>
                          )}
                        />

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
                                    placeholder="your@email.com" 
                                    className="pl-12 h-14 font-body text-base border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                                    autoComplete="email"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-destructive font-body text-sm" />
                            </FormItem>
                          )}
                        />

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
                                    placeholder="07XXX XXX XXX" 
                                    className="pl-12 h-14 font-body text-base border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                                    autoComplete="tel"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-destructive font-body text-sm" />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 2: Service Selection */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        custom={2}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-center mb-6">
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                            Select Your Treatment
                          </h3>
                          <p className="font-body text-sm text-muted-foreground">
                            Which service interests you?
                          </p>
                        </div>

                        <FormField
                          control={form.control}
                          name="service_interest"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid grid-cols-2 gap-3">
                                  {services.map((service) => (
                                    <motion.button
                                      key={service}
                                      type="button"
                                      onClick={() => field.onChange(service)}
                                      className={cn(
                                        "p-4 rounded-xl border-2 text-left transition-all duration-200 font-body text-sm",
                                        field.value === service
                                          ? "border-accent bg-accent/10 text-accent"
                                          : "border-border/50 bg-background/50 hover:border-border text-foreground"
                                      )}
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <div className="flex items-center gap-2">
                                        <div className={cn(
                                          "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                                          field.value === service 
                                            ? "border-accent bg-accent" 
                                            : "border-muted-foreground"
                                        )}>
                                          {field.value === service && (
                                            <Check className="w-3 h-3 text-accent-foreground" />
                                          )}
                                        </div>
                                        <span>{service}</span>
                                      </div>
                                    </motion.button>
                                  ))}
                                </div>
                              </FormControl>
                              <FormMessage className="text-destructive font-body text-sm mt-2" />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 3: Message */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        custom={3}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-center mb-6">
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                            Additional Details
                          </h3>
                          <p className="font-body text-sm text-muted-foreground">
                            Anything else you'd like us to know? (Optional)
                          </p>
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea 
                                  {...field} 
                                  placeholder="Tell us about your concerns, questions, or preferred appointment times..."
                                  className="min-h-[150px] font-body text-base resize-none border-2 border-border/50 bg-background/50 rounded-xl transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/20"
                                />
                              </FormControl>
                              <FormMessage className="text-destructive font-body text-sm" />
                            </FormItem>
                          )}
                        />

                        {/* Summary */}
                        <div className="bg-muted/50 rounded-xl p-4 mt-4">
                          <p className="font-body text-sm text-muted-foreground mb-2">Summary</p>
                          <div className="space-y-1 text-sm font-body">
                            <p><span className="text-muted-foreground">Name:</span> <span className="text-foreground font-medium">{form.watch("name")}</span></p>
                            <p><span className="text-muted-foreground">Email:</span> <span className="text-foreground font-medium">{form.watch("email")}</span></p>
                            <p><span className="text-muted-foreground">Treatment:</span> <span className="text-accent font-medium">{form.watch("service_interest")}</span></p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 mt-8">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="flex-1 h-14 font-body rounded-xl"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back
                      </Button>
                    )}
                    
                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 h-14 font-body text-lg font-semibold rounded-xl bg-accent hover:bg-accent/90"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || isSuccess}
                        className={cn(
                          "flex-1 h-14 font-body text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg",
                          isSuccess 
                            ? 'bg-green-500 hover:bg-green-500 shadow-green-500/25' 
                            : 'bg-accent hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25'
                        )}
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
                            <ArrowRight className="h-5 w-5" />
                          </span>
                        )}
                      </Button>
                    )}
                  </div>

                  {/* Trust indicators */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-4 mt-4 border-t border-border/30">
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
