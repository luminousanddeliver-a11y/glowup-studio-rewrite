import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin } from "lucide-react";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
  showMap?: boolean;
}

export const ServiceCTA = ({
  title = "Ready to Start Your Transformation?",
  subtitle = "Book your free consultation today and discover how we can help you achieve your goals.",
  showMap = true,
}: ServiceCTAProps) => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-4 text-primary-foreground">{title}</h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-body text-xl opacity-90 mb-8"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 px-8 text-lg"
              >
                <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground font-body h-14 px-8 text-lg"
              >
                <a href="tel:02085981200">
                  <Phone className="mr-2 h-5 w-5" />
                  0208 598 1200
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {showMap && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary-foreground/10 rounded-lg p-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <MapPin className="h-5 w-5" />
                <span className="font-heading font-semibold">Visit Our Clinic</span>
              </motion.div>
              <address className="font-body not-italic opacity-90">
                125 Becontree Ave, Dagenham RM8 2UJ<br />
                Open: Monday - Friday 10:00 AM - 7:00 PM | Saturday 10:00 AM - 5:00 PM
              </address>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
