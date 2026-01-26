import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/prices" },
  { name: "Prices", href: "/prices" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Gift Vouchers", href: "/gift-vouchers" },
  { name: "Academy", href: "/academy" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-xl font-semibold mb-4">
              Laser Light Skin Clinic
            </h3>
            <p className="text-background/80 font-body mb-4">
              Specialist Laser Aesthetics in Dagenham
            </p>
            <p className="text-background/70 font-body text-sm">
              NHS-approved clinic offering pain-free laser hair removal and advanced skin treatments in East London.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="font-body text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-body text-background/80 text-sm">
                  125 Becontree Ave,<br />
                  Dagenham RM8 2UJ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="font-body text-background/80 text-sm">
                  <a href="tel:02085981200" className="hover:text-primary transition-colors block">
                    0208 598 1200
                  </a>
                  <a href="tel:07949501777" className="hover:text-primary transition-colors block">
                    07949 501 777
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a 
                  href="mailto:info@laserlightskinclinic.co.uk" 
                  className="font-body text-background/80 text-sm hover:text-primary transition-colors break-all"
                >
                  info@laserlightskinclinic.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-body text-background/80 text-sm">
                  Mon - Sat: 10:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-background/80 text-sm">NHS Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-background/80 text-sm">Lynton Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-background/60 text-sm">
              © {new Date().getFullYear()} Laser Light Skin Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="/privacy-policy" 
                className="font-body text-background/60 text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="font-body text-background/60 text-sm hover:text-primary transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
