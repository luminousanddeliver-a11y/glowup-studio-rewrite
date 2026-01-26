import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ShoppingBag, Zap, Sparkles, Wand2, Eraser, Heart, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
import { CartPreviewTooltip } from "@/components/shop/CartPreviewTooltip";
import { CartBounceIndicator } from "@/components/shop/FlyingCartAnimation";
import { PromoBanner } from "./PromoBanner";
import { ScrollProgress } from "./ScrollProgress";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    name: "Laser & Hair Removal",
    icon: Zap,
    services: [
      { name: "Laser Hair Removal", href: "/laser-hair-removal-dagenham" },
      { name: "Electrolysis", href: "/electrolysis-hair-removal-dagenham" },
      { name: "Advanced Electrolysis", href: "/advanced-electrolysis-dagenham" },
    ],
  },
  {
    name: "Facials & Skin",
    icon: Sparkles,
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
    icon: Wand2,
    services: [
      { name: "Botox & Fillers", href: "/injectables-dagenham" },
      { name: "Skin Rejuvenation", href: "/skin-rejuvenation-dagenham" },
      { name: "SkinPen Microneedling", href: "/skinpen-microneedling-dagenham" },
      { name: "Cold Plasma", href: "/cold-plasma-treatment-dagenham" },
      { name: "Laser Resurfacing", href: "/laser-resurfacing-dagenham" },
      { name: "Pigmentation Treatment", href: "/pigmentation-treatment-dagenham" },
    ],
  },
  {
    name: "Wellness & Body",
    icon: Heart,
    services: [
      { name: "IV Drips & Infusions", href: "/iv-drips-infusions-east-london" },
      { name: "Massage", href: "/massage-dagenham" },
      { name: "Hopi Ear Candling", href: "/hopi-ear-candling-dagenham" },
      { name: "Intimate V-Whitening", href: "/intimate-whitening-east-london" },
      { name: "Ear Piercing", href: "/ear-piercing-dagenham" },
    ],
  },
  {
    name: "More",
    icon: Gift,
    services: [
      { name: "Gift Vouchers", href: "/gift-vouchers" },
      { name: "Academy", href: "/academy" },
    ],
  },
  {
    name: "Removal Treatments",
    icon: Eraser,
    services: [
      { name: "Tattoo Removal", href: "/tattoo-removal-east-london" },
      { name: "Vein Removal", href: "/vein-removal-east-london" },
      { name: "Skin Tag & Mole Removal", href: "/skin-tag-mole-removal-dagenham" },
    ],
  },
];

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Prices", href: "/prices" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const { cartCount, setIsCartOpen, cartBounce } = useCart();
  const location = useLocation();

  // Check if a nav link is active
  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  // Check if any service is active (for Services dropdown)
  const isServicesActive = serviceCategories.some(category =>
    category.services.some(service => location.pathname === service.href)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <PromoBanner />
      <motion.header 
        className="sticky top-0 z-50 bg-card shadow-card"
        animate={{ 
          boxShadow: isCompact 
            ? "0 4px 20px rgba(0,0,0,0.1)" 
            : "0 1px 3px rgba(0,0,0,0.05)" 
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="container-custom">
          <motion.div 
            className="flex items-center justify-between"
            animate={{ height: isCompact ? 64 : 80 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Logo */}
            <a href="/" className="flex items-center">
              <motion.img 
                src={logo} 
                alt="Laser Light Skin Clinic" 
                className="w-auto"
                animate={{ height: isCompact ? 40 : 56 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Services Mega Dropdown - First */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "flex items-center gap-1 font-body transition-colors relative group",
                  isServicesActive 
                    ? "text-accent font-medium" 
                    : "text-foreground hover:text-accent"
                )}>
                  <span className="relative">
                    Services
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-out",
                      isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[580px] p-5 grid grid-cols-2 gap-x-8 gap-y-5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                  {serviceCategories.map((category, categoryIndex) => (
                    <motion.div 
                      key={category.name} 
                      className="space-y-1.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.03, duration: 0.2 }}
                    >
                      <DropdownMenuLabel className="text-accent font-heading text-sm pb-1.5 mb-1 border-b border-accent/20 flex items-center gap-1.5">
                        <category.icon className="h-3.5 w-3.5" />
                        {category.name}
                      </DropdownMenuLabel>
                      {category.services.map((service) => (
                        <DropdownMenuItem key={service.href} asChild className="p-0 focus:bg-transparent data-[highlighted]:bg-transparent data-[highlighted]:text-accent">
                          <a 
                            href={service.href} 
                            className={cn(
                              "cursor-pointer w-full text-sm py-1.5 px-2 -mx-2 rounded-md transition-all duration-200 group/item relative",
                              location.pathname === service.href
                                ? "text-accent font-medium bg-accent/5"
                                : "text-foreground hover:text-accent hover:bg-muted"
                            )}
                          >
                            <span className="relative">
                              {service.name}
                              <span className={cn(
                                "absolute -bottom-0.5 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-out",
                                location.pathname === service.href ? "w-full" : "w-0 group-hover/item:w-full"
                              )} />
                            </span>
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </motion.div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body transition-colors relative py-1 group",
                    isActiveLink(link.href)
                      ? "text-accent font-medium"
                      : "text-foreground hover:text-accent"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-out",
                    isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:02085981200" 
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors relative group py-1"
              >
                <Phone className="h-4 w-4" />
                <span className="font-body relative">
                  0208 598 1200
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-out w-0 group-hover:w-full" />
                </span>
              </a>
              
              {/* Cart Icon with Preview Tooltip */}
              <CartPreviewTooltip>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-foreground hover:text-accent transition-colors"
                  aria-label="Open cart"
                >
                  <motion.div
                    animate={cartBounce ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </motion.div>
                  {cartCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      {cartCount > 9 ? "9+" : cartCount}
                    </motion.span>
                  )}
                </button>
              </CartPreviewTooltip>
              
              <Button asChild className={`bg-primary hover:bg-primary/90 text-primary-foreground font-body px-6 transition-all duration-200 ${isCompact ? 'h-10' : 'h-12'}`}>
                <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">Book an Appointment</a>
              </Button>
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="lg:hidden flex items-center gap-1">
              {/* Mobile Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 text-foreground hover:text-accent transition-colors touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Open cart"
                data-cart-icon="true"
              >
                <motion.div
                  animate={cartBounce ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ShoppingBag className="h-6 w-6" />
                </motion.div>
                {cartCount > 0 && (
                  <motion.span 
                    className="absolute top-1.5 right-1.5 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {cartCount > 9 ? "9+" : cartCount}
                  </motion.span>
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
          </motion.div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
              <nav className="flex flex-col gap-1">
                {/* Mobile Services Accordion - First */}
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

                {/* Other nav links */}
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-body transition-colors py-3.5 px-2 rounded-lg min-h-[48px] flex items-center touch-manipulation",
                      isActiveLink(link.href)
                        ? "text-accent font-medium bg-accent/10"
                        : "text-foreground hover:text-accent hover:bg-accent/5 active:bg-accent/10"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}

                <a 
                  href="tel:02085981200" 
                  className="flex items-center gap-3 text-foreground py-3.5 px-2 rounded-lg min-h-[48px] hover:bg-accent/5 active:bg-accent/10 touch-manipulation"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-body font-medium">0208 598 1200</span>
                </a>

                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-body h-14 w-full mt-3 text-base font-semibold active:scale-[0.99] touch-manipulation">
                  <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">Book an Appointment</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </motion.header>
    </>
  );
};
