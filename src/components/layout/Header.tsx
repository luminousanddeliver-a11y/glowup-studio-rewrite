import { useState } from "react";
import { Menu, X, ChevronDown, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/contexts/CartContext";
import { PromoBanner } from "./PromoBanner";
import logo from "@/assets/logo.png";

const services = [
  { name: "Laser Hair Removal", href: "/laser-hair-removal-dagenham" },
  { name: "Hydrafacials", href: "/hydrafacial-east-london" },
  { name: "Tattoo Removal", href: "/tattoo-removal-east-london" },
  { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham" },
  { name: "SkinPen Microneedling", href: "/skinpen-microneedling-dagenham" },
  { name: "IV Drips & Infusions", href: "/iv-drips-infusions-east-london" },
  { name: "Chemical Peels", href: "/chemical-peels-dagenham" },
  { name: "Electrolysis", href: "/electrolysis-hair-removal-dagenham" },
  { name: "Cold Plasma", href: "/cold-plasma-treatment-dagenham" },
  { name: "Intimate V-Whitening", href: "/intimate-whitening-east-london" },
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
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <>
      <PromoBanner />
      <header className="sticky top-0 z-50 bg-card shadow-card">
        <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Laser Light Skin Clinic" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="/" 
              className="font-body text-foreground hover:text-accent transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-body text-foreground hover:text-accent transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem 
                    key={service.href} 
                    asChild
                  >
                    <a href={service.href} className="cursor-pointer w-full">
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:02085981200" 
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-body">0208 598 1200</span>
            </a>
            
            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>
            
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-12 px-6">
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>
            
            <button
              className="p-2"
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
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="py-2">
                <span className="font-body font-semibold text-foreground">Services</span>
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="font-body text-muted-foreground hover:text-accent transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
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
    </>
  );
};
