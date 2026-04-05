import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Phone, ShoppingBag, Zap, Sparkles, Wand2, Eraser, Heart, Gift, PoundSterling, BookOpen, Mail, Users } from "lucide-react";
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
import { useWishlist } from "@/contexts/WishlistContext";
import { CartPreviewTooltip } from "@/components/shop/CartPreviewTooltip";
import { WishlistPreviewTooltip } from "@/components/shop/WishlistPreviewTooltip";
import { CartBounceIndicator } from "@/components/shop/FlyingCartAnimation";
import { ScrollProgress } from "./ScrollProgress";
import { prefetchRoute } from "@/lib/prefetch";
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
      { name: "Million Dollar Facial", href: "/million-dollar-facial-dagenham" },
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
      { name: "Advanced Peels", href: "/advanced-peels-dagenham" },
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
    name: "Removal Treatments",
    icon: Eraser,
    services: [
      { name: "Tattoo Removal", href: "/tattoo-removal-east-london" },
      { name: "Red Vein & Spider Vein Removal", href: "/vein-removal-east-london" },
      { name: "Skin Tag & Mole Removal", href: "/skin-tag-mole-removal-dagenham" },
    ],
  },
  {
    name: "More",
    icon: Gift,
    services: [
      { name: "Gift Vouchers", href: "/gift-vouchers" },
      { name: "Academy", href: "https://labttraining.com/", external: true },
    ],
  },
];

const navLinks = [
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Prices", href: "/prices", icon: PoundSterling },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "About", href: "/about", icon: Users },
];

// Routes with dark/teal hero backgrounds that need light text
// NOTE: About page has light overlay so it uses dark text (not in this list)
// Blog posts (/blog/:slug) have full-bleed hero images so they also need light text
// Contact and Prices pages now have light backgrounds so removed from this list
const darkHeroRoutes = ['/blog', '/academy', '/gift-vouchers', '/privacy-policy', '/terms'];

// Check if current route is a service page (these have light gradient backgrounds)
const isServicePage = (pathname: string) => {
  return serviceCategories.some(category =>
    category.services.some(service => pathname === service.href)
  );
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isCompact, setIsCompact] = useState(false);
  const { cartCount, setIsCartOpen, cartBounce } = useCart();
  const { wishlistCount, setIsWishlistOpen, wishlistBounce } = useWishlist();
  const location = useLocation();
  
  // Check if we're on the homepage
  const isHomepage = location.pathname === '/';

  // Check if current route has a dark hero background (NOT service pages - they have light gradients)
  // Include homepage in dark hero check for white text
  const hasDarkHero = (isHomepage || darkHeroRoutes.some(route => location.pathname.startsWith(route))) && 
    !isServicePage(location.pathname);

  // Determine text color based on scroll state and background
  const navTextColor = !isCompact && hasDarkHero ? "text-white" : "text-foreground";
  const navActiveColor = !isCompact && hasDarkHero ? "text-white font-semibold" : "text-accent font-medium";
  const navHoverColor = !isCompact && hasDarkHero ? "hover:text-white/80" : "hover:text-accent";

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
      <motion.header
        className="sticky top-0 z-50"
        initial={false}
        animate={{
          // Mobile menu uses solid white, no glass effect
          backgroundColor: mobileMenuOpen
            ? "rgba(255, 255, 255, 1)" // Mobile: solid white for clean look
            : isCompact
              ? "rgba(255, 255, 255, 0.95)" // Desktop: solid on scroll
              : isHomepage
                ? "rgba(0, 0, 0, 0)" // Homepage: transparent
                : "rgba(255, 255, 255, 0)", // Other pages: transparent
          backdropFilter: mobileMenuOpen ? "none" : (isCompact ? "blur(20px)" : "none"), // No blur on mobile menu
          boxShadow: isCompact && !mobileMenuOpen
            ? "0 4px 20px rgba(0,0,0,0.1)"
            : "none"
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <div className="container-custom">
          <motion.div 
            className="flex items-center justify-between"
            animate={{ height: isCompact ? 64 : 80 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Logo - apply brightness filter on dark backgrounds */}
            <a href="/" className="flex items-center">
              <motion.img 
                src={logo} 
                alt="Laser Light Skin Clinic"
                width={88}
                height={56}
                className={cn("w-auto h-14 origin-left", !isCompact && hasDarkHero && !mobileMenuOpen && "brightness-0 invert")}
                animate={{ scale: isCompact ? 0.714 : 1 }}
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
                    ? navActiveColor 
                    : cn(navTextColor, navHoverColor)
                )}>
                  <span className="relative">
                    Services
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ease-out",
                      !isCompact && hasDarkHero ? "bg-white" : "bg-accent",
                      isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] p-6 grid grid-cols-2 gap-x-10 gap-y-6 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150 bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(28,158,152,0.2),0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] rounded-2xl">
                  {serviceCategories.map((category, categoryIndex) => (
                    <motion.div 
                      key={category.name} 
                      className="space-y-1.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.03, duration: 0.2 }}
                    >
                      <DropdownMenuLabel className="text-accent font-heading text-sm pb-2 mb-2 border-b border-accent/20 flex items-center gap-2">
                        <category.icon className="h-4 w-4 text-accent" />
                        {category.name}
                      </DropdownMenuLabel>
                      {category.services.map((service) => (
                        <DropdownMenuItem key={service.href} asChild className="p-0 focus:bg-transparent data-[highlighted]:bg-transparent data-[highlighted]:text-accent">
                          {'external' in service && service.external ? (
                            <a
                              href={service.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer w-full text-sm py-2 px-3 -mx-2 rounded-lg transition-all duration-150 group/item relative text-foreground hover:text-accent hover:bg-white/60 hover:backdrop-blur-sm"
                            >
                              <span className="relative">
                                {service.name}
                                <span className="absolute -bottom-0.5 left-0 h-0.5 bg-accent rounded-full transition-all duration-200 ease-out w-0 group-hover/item:w-full" />
                              </span>
                            </a>
                          ) : (
                            <a
                              href={service.href}
                              onMouseEnter={() => prefetchRoute(service.href)}
                              onTouchStart={() => prefetchRoute(service.href)}
                              className={cn(
                                "cursor-pointer w-full text-sm py-2 px-3 -mx-2 rounded-lg transition-all duration-150 group/item relative",
                                location.pathname === service.href
                                  ? "text-accent font-medium bg-white/70 backdrop-blur-sm ring-1 ring-accent/30"
                                  : "text-foreground hover:text-accent hover:bg-white/60 hover:backdrop-blur-sm"
                              )}
                            >
                              <span className="relative">
                                {service.name}
                                <span className={cn(
                                  "absolute -bottom-0.5 left-0 h-0.5 bg-accent rounded-full transition-all duration-200 ease-out",
                                  location.pathname === service.href ? "w-full" : "w-0 group-hover/item:w-full"
                                )} />
                              </span>
                            </a>
                          )}
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
                  onMouseEnter={() => prefetchRoute(link.href)}
                  className={cn(
                    "font-body transition-colors relative py-1 group",
                    isActiveLink(link.href)
                      ? navActiveColor
                      : cn(navTextColor, navHoverColor)
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ease-out",
                    !isCompact && hasDarkHero ? "bg-white" : "bg-accent",
                    isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:02085981200" 
                className={cn(
                  "flex items-center gap-2 transition-colors relative group py-1",
                  navTextColor, navHoverColor
                )}
              >
                <Phone className="h-4 w-4" />
                <span className="font-body relative">
                  0208 598 1200
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ease-out w-0 group-hover:w-full",
                    !isCompact && hasDarkHero ? "bg-white" : "bg-accent"
                  )} />
                </span>
              </a>

              {/* Wishlist Icon with Preview Tooltip */}
              <WishlistPreviewTooltip>
                <button
                  onClick={() => setIsWishlistOpen(true)}
                  className={cn("relative p-2 transition-colors", navTextColor, navHoverColor)}
                  aria-label="Open wishlist"
                >
                  <motion.div
                    animate={wishlistBounce ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart className="h-5 w-5" />
                  </motion.div>
                  {wishlistCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      {wishlistCount > 9 ? "9+" : wishlistCount}
                    </motion.span>
                  )}
                </button>
              </WishlistPreviewTooltip>
              
              {/* Cart Icon with Preview Tooltip */}
              <CartPreviewTooltip>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className={cn("relative p-2 transition-colors", navTextColor, navHoverColor)}
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

            {/* Mobile Menu Button & Icons */}
            <div className="lg:hidden flex items-center gap-1">
              {/* Mobile Wishlist Icon */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className={cn("relative p-3 transition-colors touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center", mobileMenuOpen ? "text-foreground" : navTextColor, navHoverColor)}
                aria-label="Open wishlist"
              >
                <motion.div
                  animate={wishlistBounce ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="h-6 w-6" />
                </motion.div>
                {wishlistCount > 0 && (
                  <motion.span 
                    className="absolute top-1.5 right-1.5 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {wishlistCount > 9 ? "9+" : wishlistCount}
                  </motion.span>
                )}
              </button>
              
              {/* Mobile Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={cn("relative p-3 transition-colors touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center", mobileMenuOpen ? "text-foreground" : navTextColor, navHoverColor)}
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
                className={cn("p-3 touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center", mobileMenuOpen ? "text-foreground" : navTextColor)}
                onClick={() => {
                  if (mobileMenuOpen) {
                    setExpandedCategory(null);
                    setMobileServicesOpen(false);
                  }
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Mobile Navigation - Clean solid white background */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain bg-white">
              <nav className="flex flex-col gap-1">
                {/* Mobile Services Accordion - First */}
                <div className="py-2 px-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full font-body font-bold min-h-[48px] py-3 px-4 touch-manipulation transition-all duration-200",
                      mobileServicesOpen
                        ? "text-accent bg-accent/5"
                        : "text-gray-900 hover:bg-gray-50 active:scale-[0.98]"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-accent/70" />
                      Services
                    </span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 space-y-1 pb-2">
                          {serviceCategories.map((category, categoryIndex) => (
                            <motion.div 
                              key={category.name}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * categoryIndex, duration: 0.2, ease: "easeOut" }}
                            >
                              {/* Category Header - Clickable */}
                              <button
                                onClick={() => setExpandedCategory(
                                  expandedCategory === category.name ? null : category.name
                                )}
                                className={cn(
                                  "flex items-center justify-between w-full font-body font-semibold text-sm py-3 px-4 min-h-[44px] touch-manipulation transition-all duration-200",
                                  expandedCategory === category.name
                                    ? "text-accent bg-accent/5"
                                    : "text-accent hover:bg-gray-50 active:scale-[0.98]"
                                )}
                              >
                                <span className="flex items-center gap-2">
                                  <category.icon className="h-4 w-4" />
                                  {category.name}
                                </span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                                  expandedCategory === category.name ? 'rotate-180' : ''
                                }`} />
                              </button>
                              
                              {/* Services List - Only shown when category is expanded */}
                              <AnimatePresence>
                                {expandedCategory === category.name && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                                    className="overflow-hidden"
                                  >
                                    <div className="flex flex-col gap-0.5 pl-6 ml-2 border-l-2 border-accent/20">
                                      {category.services.map((service, serviceIndex) => (
                                        <motion.div
                                          key={service.href}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.03 * serviceIndex, duration: 0.15 }}
                                        >
                                          {'external' in service && service.external ? (
                                            <a
                                              href={service.href}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="font-body font-medium text-sm text-muted-foreground hover:text-accent py-2.5 px-3 min-h-[44px] flex items-center touch-manipulation transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {service.name}
                                            </a>
                                          ) : (
                                            <a
                                              href={service.href}
                                              onTouchStart={() => prefetchRoute(service.href)}
                                              className="font-body font-medium text-sm text-muted-foreground hover:text-accent py-2.5 px-3 min-h-[44px] flex items-center touch-manipulation transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {service.name}
                                            </a>
                                          )}
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>

                {/* Divider after Services */}
                <div className="mx-4 my-2 border-t border-gray-100" />

                {/* Main nav links with icons - staggered entrance, hover backgrounds */}
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onTouchStart={() => prefetchRoute(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * (index + 1), duration: 0.25, ease: "easeOut" }}
                    className={cn(
                      "flex items-center gap-3 font-body font-medium py-4 px-4 mx-2 rounded-lg min-h-[52px] touch-manipulation transition-all duration-200 group",
                      isActiveLink(link.href)
                        ? "text-accent bg-accent/5"
                        : "text-gray-800 hover:text-accent hover:bg-gray-50/80 active:bg-gray-100/80"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <link.icon className={cn(
                      "h-5 w-5 shrink-0 transition-colors",
                      isActiveLink(link.href) ? "text-accent" : "text-accent/70 group-hover:text-accent"
                    )} />
                    <span>{link.name}</span>
                  </motion.a>
                ))}

                {/* Divider before Contact */}
                <div className="mx-4 my-2 border-t border-gray-100" />

                {/* Contact Section */}
                <motion.div
                  className="pt-4 px-4 pb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.25, ease: "easeOut" }}
                >
                  <a
                    href="tel:02085981200"
                    className="flex items-center gap-3 text-gray-800 font-medium py-3 touch-manipulation group"
                  >
                    <Phone className="h-5 w-5 text-accent/70 group-hover:text-accent transition-colors" />
                    <span className="font-body font-bold">0208 598 1200</span>
                  </a>

                  <Button asChild className="w-full mt-3 h-14 text-base font-bold shadow-[0_4px_16px_rgba(28,158,152,0.3)] hover:shadow-[0_6px_20px_rgba(28,158,152,0.4)] active:scale-[0.98] touch-manipulation transition-all duration-200">
                    <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">Book an Appointment</a>
                  </Button>
                </motion.div>
              </nav>
            </div>
          )}
        </div>
      </motion.header>
    </>
  );
};
