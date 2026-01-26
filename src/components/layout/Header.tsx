import { useState } from "react";
import { Menu, X, ChevronDown, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/contexts/CartContext";
import { PromoBanner } from "./PromoBanner";
import logo from "@/assets/logo.png";

const serviceCategories = [
  {
    name: "Laser & Hair Removal",
    services: [
      { name: "Laser Hair Removal", href: "/laser-hair-removal-dagenham" },
      { name: "Electrolysis", href: "/electrolysis-hair-removal-dagenham" },
      { name: "Advanced Electrolysis", href: "/advanced-electrolysis-dagenham" },
    ],
  },
  {
    name: "Facials & Skin",
    services: [
      { name: "Hydrafacials", href: "/hydrafacial-east-london" },
      { name: "Facials", href: "/facials-dagenham" },
      { name: "Chemical Peels", href: "/chemical-peels-dagenham" },
      { name: "Skin Analysis", href: "/skin-analysis-dagenham" },
      { name: "LED Light Therapy", href: "/led-light-therapy-dagenham" },
    ],
  },
  {
    name: "Advanced Treatments",
    services: [
      { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham" },
      { name: "SkinPen Microneedling", href: "/skinpen-microneedling-dagenham" },
      { name: "Cold Plasma", href: "/cold-plasma-treatment-dagenham" },
      { name: "Laser Resurfacing", href: "/laser-resurfacing-dagenham" },
      { name: "Pigmentation Treatment", href: "/pigmentation-treatment-dagenham" },
    ],
  },
  {
    name: "Injectables",
    services: [
      { name: "Botox & Fillers", href: "/injectables-dagenham" },
    ],
  },
  {
    name: "Removal Treatments",
    services: [
      { name: "Tattoo Removal", href: "/tattoo-removal-east-london" },
      { name: "Vein Removal", href: "/vein-removal-east-london" },
      { name: "Skin Tag & Mole Removal", href: "/skin-tag-mole-removal-dagenham" },
    ],
  },
  {
    name: "Wellness & Other",
    services: [
      { name: "IV Drips & Infusions", href: "/iv-drips-infusions-east-london" },
      { name: "Massage", href: "/massage-dagenham" },
      { name: "Hopi Ear Candling", href: "/hopi-ear-candling-dagenham" },
      { name: "Intimate V-Whitening", href: "/intimate-whitening-east-london" },
      { name: "Ear Piercing", href: "/ear-piercing-dagenham" },
    ],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Prices", href: "/prices" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Gift Vouchers", href: "/gift-vouchers" },
  { name: "Academy", href: "/academy" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
            <nav className="hidden lg:flex items-center gap-6">
              <a 
                href="/" 
                className="font-body text-foreground hover:text-accent transition-colors"
              >
                Home
              </a>

              {/* Services Mega Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-body text-foreground hover:text-accent transition-colors">
                  Services <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] p-4 grid grid-cols-3 gap-4">
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="space-y-2">
                      <DropdownMenuLabel className="text-accent font-heading text-sm">
                        {category.name}
                      </DropdownMenuLabel>
                      {category.services.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <a 
                            href={service.href} 
                            className="cursor-pointer w-full text-sm py-1.5 hover:text-accent"
                          >
                            {service.name}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </div>
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
                <a href="/contact">Book Consultation</a>
              </Button>
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="lg:hidden flex items-center gap-1">
              {/* Mobile Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 text-foreground hover:text-accent transition-colors touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Open cart"
              >
                <ShoppingBag className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>
              
              <button
                className="p-3 touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7 text-foreground" />
                ) : (
                  <Menu className="h-7 w-7 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-body text-foreground hover:text-accent hover:bg-accent/5 transition-colors py-3.5 px-2 rounded-lg min-h-[48px] flex items-center active:bg-accent/10 touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile Services Accordion */}
                <div className="py-2 px-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full font-body font-semibold text-foreground min-h-[48px] py-2 touch-manipulation"
                  >
                    Services
                    <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="mt-2 space-y-3 pb-2">
                      {serviceCategories.map((category) => (
                        <div key={category.name} className="pl-2">
                          <span className="font-body font-medium text-accent text-sm block py-1">
                            {category.name}
                          </span>
                          <div className="flex flex-col gap-0.5 pl-3 border-l-2 border-accent/20">
                            {category.services.map((service) => (
                              <a
                                key={service.href}
                                href={service.href}
                                className="font-body text-sm text-muted-foreground hover:text-accent active:bg-accent/5 transition-colors py-2.5 px-2 rounded min-h-[44px] flex items-center touch-manipulation"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href="tel:02085981200" 
                  className="flex items-center gap-3 text-foreground py-3.5 px-2 rounded-lg min-h-[48px] hover:bg-accent/5 active:bg-accent/10 touch-manipulation"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-body font-medium">0208 598 1200</span>
                </a>

                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 w-full mt-3 text-base font-semibold active:scale-[0.99] touch-manipulation">
                  <a href="/contact">Book Consultation</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
