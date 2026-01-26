import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
  { name: "Hydrafacials", href: "/services/hydrafacials" },
  { name: "Skin Rejuvenation", href: "/services/skin-rejuvenation" },
  { name: "Chemical Peels", href: "/services/chemical-peels" },
  { name: "Electrolysis", href: "/services/electrolysis" },
  { name: "SkinPen Microneedling", href: "/services/microneedling" },
  { name: "IV Drips & Infusions", href: "/services/iv-drips" },
  { name: "Tattoo Removal", href: "/services/tattoo-removal" },
  { name: "Cold Plasma Treatments", href: "/services/cold-plasma" },
  { name: "Intimate V-Whitening", href: "/services/intimate-whitening" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-card">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-semibold text-primary">
              Laser Light Skin Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className="font-body text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-body text-foreground hover:text-accent transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem 
                    key={service.href} 
                    onClick={() => navigate(service.href)}
                    className="cursor-pointer"
                  >
                    {service.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:02085981200" 
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-body">0208 598 1200</span>
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-12 px-6">
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="py-2">
                <span className="font-body font-semibold text-foreground">Services</span>
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="font-body text-muted-foreground hover:text-accent transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <a 
                href="tel:02085981200" 
                className="flex items-center gap-2 text-foreground py-2"
              >
                <Phone className="h-4 w-4" />
                <span className="font-body">0208 598 1200</span>
              </a>

              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-12 w-full mt-2">
                <a href="#contact">Book Consultation</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
