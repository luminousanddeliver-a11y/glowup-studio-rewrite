import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const services = [
  "Laser Hair Removal",
  "Tattoo Removal",
  "HydraFacial",
  "Chemical Peels",
  "Skin Tag Removal",
  "Other",
];

export const FinalCTA = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !service) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thanks! We'll be in touch shortly.");
    setName("");
    setPhone("");
    setService("");
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <motion.h2 
            className="text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to <span className="text-primary">Glow Up?</span>
          </motion.h2>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="tel:02085981200"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>0208 598 1200</span>
            </a>
            <a 
              href="mailto:info@laserlightskinclinic.co.uk"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>info@laserlightskinclinic.co.uk</span>
            </a>
            <a 
              href="https://maps.google.com/?q=125+Becontree+Avenue,+Dagenham+RM8+2UJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>125 Becontree Avenue, Dagenham RM8 2UJ</span>
            </a>
          </motion.div>

          {/* Quick Enquiry Form */}
          <motion.div 
            className="bg-secondary rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading text-lg font-medium text-foreground mb-6">
              Quick Enquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-card border-border h-12"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-card border-border h-12"
                required
              />
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger className="bg-card border-border h-12" aria-label="Select a service of interest">
                  <SelectValue placeholder="Service of Interest" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body min-h-[48px] text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book Your Appointment Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
