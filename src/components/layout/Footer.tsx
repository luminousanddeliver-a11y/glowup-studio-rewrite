import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
  { name: "Hydrafacials", href: "/services/hydrafacials" },
  { name: "Tattoo Removal", href: "/services/tattoo-removal" },
  { name: "SkinPen Microneedling", href: "/services/microneedling" },
  { name: "IV Drips & Infusions", href: "/services/iv-drips" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">
              Laser Light Skin Clinic
            </h3>
            <p className="text-background/80 font-body mb-4">
              Specialist Laser Aesthetics in Dagenham
            </p>
            <p className="text-background/70 font-body text-sm">
              NHS-approved clinic offering pain-free laser hair removal and advanced skin treatments in East London.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-background/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="font-body text-background/80 text-sm">
                  125 Becontree Avenue,<br />
                  Dagenham, RM8 2TX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <div className="font-body text-background/80 text-sm">
                  <a href="tel:02085981200" className="hover:text-accent transition-colors block">
                    0208 598 1200
                  </a>
                  <a href="tel:07949501777" className="hover:text-accent transition-colors block">
                    07949 501 777
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a 
                  href="mailto:info@laserlightskinclinic.co.uk" 
                  className="font-body text-background/80 text-sm hover:text-accent transition-colors"
                >
                  info@laserlightskinclinic.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="font-body text-background/80 text-sm">
                  Mon - Sat: 10:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Trust */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-body text-background/80 text-sm">NHS Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-body text-background/80 text-sm">Lynton Certified</span>
              </div>
            </div>
          </div>
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
              <Link 
                to="/privacy-policy" 
                className="font-body text-background/60 text-sm hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="font-body text-background/60 text-sm hover:text-accent transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
