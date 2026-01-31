import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

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
  { name: "FAQs", href: "/faq" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background overflow-hidden">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:pr-4"
          >
            {/* Logo */}
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logoImage} 
                alt="Laser Light Skin Clinic" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/90 font-heading font-medium text-lg mb-2">
              Specialist Laser Aesthetics
            </p>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              NHS-approved clinic offering pain-free laser hair removal and advanced skin treatments in Dagenham, East London.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-5 text-background">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href + index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                >
                  <Link
                    to={link.href}
                    className="font-body text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
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
            <h4 className="font-heading text-lg font-semibold mb-5 text-background">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-body text-background/80 text-sm">
                  125 Becontree Ave,<br />
                  Dagenham RM8 2UJ
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="font-body text-background/80 text-sm">
                  <a href="tel:02085981200" className="hover:text-primary transition-colors block">
                    0208 598 1200
                  </a>
                  <a href="tel:07949501777" className="hover:text-primary transition-colors block">
                    07949 501 777
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a 
                  href="mailto:info@laserlightskinclinic.co.uk" 
                  className="font-body text-background/80 text-sm hover:text-primary transition-colors break-all"
                >
                  info@laserlightskinclinic.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
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
            <h4 className="font-heading text-lg font-semibold mb-5 text-background">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
            
            {/* Trust badges */}
            <div className="space-y-3 p-4 bg-background/5 rounded-xl">
              <h5 className="font-body text-xs uppercase tracking-wider text-background/50 mb-3">Certifications</h5>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-background/80 text-sm">NHS Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-background/80 text-sm">Lynton Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-background/80 text-sm">FDA Approved Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 pb-40 lg:pb-6">
          <div className="flex flex-col gap-4">
            {/* Main footer row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-background/60 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Laser Light Skin Clinic. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link 
                  to="/privacy-policy" 
                  className="font-body text-background/60 text-sm hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="font-body text-background/60 text-sm hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link 
                  to="/faq" 
                  className="font-body text-background/60 text-sm hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </div>
            </div>
            
            {/* Agency credit row */}
            <div className="text-center border-t border-background/5 pt-4">
              <p className="font-body text-background/50 text-xs">
                Website Created, Powered, and Managed by{" "}
                <a 
                  href="https://digital.luminousanddeliver.co.uk/" 
                  target="_blank"
                  rel="noopener"
                  title="L&D Digital - Professional Web Design & Development Agency in UK"
                  className="text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center gap-1"
                >
                  L&D Digital
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
