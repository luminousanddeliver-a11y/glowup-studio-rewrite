import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";
import { ServicePageSkeleton } from "@/components/ui/ServicePageSkeleton";

// Core pages - Index loaded immediately, others lazy loaded for optimal performance
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

// Core pages - lazy loaded
const FAQ = lazy(() => import("@/pages/FAQ"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Prices = lazy(() => import("@/pages/Prices"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));

// Shop pages - lazy loaded
const Shop = lazy(() => import("@/pages/Shop"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const OrderConfirmation = lazy(() => import("@/pages/OrderConfirmation"));
const OrderCancelled = lazy(() => import("@/pages/OrderCancelled"));
const GiftVouchers = lazy(() => import("@/pages/GiftVouchers"));
const Academy = lazy(() => import("@/pages/Academy"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));

// Service pages - lazy loaded for mobile performance
const LaserHairRemoval = lazy(() => import("@/pages/services/LaserHairRemoval"));
const Hydrafacials = lazy(() => import("@/pages/services/Hydrafacials"));
const TattooRemoval = lazy(() => import("@/pages/services/TattooRemoval"));
const SkinRejuvenation = lazy(() => import("@/pages/services/SkinRejuvenation"));
const SkinPenMicroneedling = lazy(() => import("@/pages/services/SkinPenMicroneedling"));
const IVDrips = lazy(() => import("@/pages/services/IVDrips"));
const ChemicalPeels = lazy(() => import("@/pages/services/ChemicalPeels"));
const Electrolysis = lazy(() => import("@/pages/services/Electrolysis"));
const ColdPlasma = lazy(() => import("@/pages/services/ColdPlasma"));
const IntimateWhitening = lazy(() => import("@/pages/services/IntimateWhitening"));
const Injectables = lazy(() => import("@/pages/services/Injectables"));
const LaserResurfacing = lazy(() => import("@/pages/services/LaserResurfacing"));
const LEDLightTherapy = lazy(() => import("@/pages/services/LEDLightTherapy"));
const Facials = lazy(() => import("@/pages/services/Facials"));
const VeinRemoval = lazy(() => import("@/pages/services/VeinRemoval"));
const SkinTagMoleRemoval = lazy(() => import("@/pages/services/SkinTagMoleRemoval"));
const SkinAnalysis = lazy(() => import("@/pages/services/SkinAnalysis"));
const PigmentationTreatment = lazy(() => import("@/pages/services/PigmentationTreatment"));
const Piercing = lazy(() => import("@/pages/services/Piercing"));
const Massage = lazy(() => import("@/pages/services/Massage"));
const HopiEarCandling = lazy(() => import("@/pages/services/HopiEarCandling"));
const AdvancedElectrolysis = lazy(() => import("@/pages/services/AdvancedElectrolysis"));
const MillionDollarFacial = lazy(() => import("@/pages/services/MillionDollarFacial"));
const AdvancedPeels = lazy(() => import("@/pages/services/AdvancedPeels"));
const LaserHairRemovalEastLondon = lazy(() => import("@/pages/services/LaserHairRemovalEastLondon"));
const LyntonMotusAYLaser = lazy(() => import("@/pages/services/LyntonMotusAYLaser"));

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core pages - Index loads immediately, others lazy loaded */}
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><About /></PageTransition></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Contact /></PageTransition></Suspense>} />
        <Route path="/prices" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Prices /></PageTransition></Suspense>} />
        <Route path="/privacy-policy" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><PrivacyPolicy /></PageTransition></Suspense>} />
        <Route path="/terms" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><TermsAndConditions /></PageTransition></Suspense>} />
        <Route path="/faq" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><FAQ /></PageTransition></Suspense>} />
        
        {/* Shop pages - with suspense */}
        <Route path="/gift-vouchers" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><GiftVouchers /></PageTransition></Suspense>} />
        <Route path="/academy" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Academy /></PageTransition></Suspense>} />
        <Route path="/shop" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Shop /></PageTransition></Suspense>} />
        <Route path="/shop/:slug" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><ProductDetail /></PageTransition></Suspense>} />
        <Route path="/checkout" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Checkout /></PageTransition></Suspense>} />
        <Route path="/order-confirmation" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><OrderConfirmation /></PageTransition></Suspense>} />
        <Route path="/order-cancelled" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><OrderCancelled /></PageTransition></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Blog /></PageTransition></Suspense>} />
        <Route path="/blog/:slug" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><BlogPost /></PageTransition></Suspense>} />
        
        {/* Service pages - with suspense for mobile performance */}
        <Route path="/laser-hair-removal-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><LaserHairRemoval /></PageTransition></Suspense>} />
        <Route path="/hydrafacial-east-london" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Hydrafacials /></PageTransition></Suspense>} />
        <Route path="/tattoo-removal-east-london" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><TattooRemoval /></PageTransition></Suspense>} />
        <Route path="/skin-rejuvenation-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><SkinRejuvenation /></PageTransition></Suspense>} />
        <Route path="/skinpen-microneedling-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><SkinPenMicroneedling /></PageTransition></Suspense>} />
        <Route path="/iv-drips-infusions-east-london" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><IVDrips /></PageTransition></Suspense>} />
        <Route path="/chemical-peels-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><ChemicalPeels /></PageTransition></Suspense>} />
        <Route path="/electrolysis-hair-removal-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Electrolysis /></PageTransition></Suspense>} />
        <Route path="/cold-plasma-treatment-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><ColdPlasma /></PageTransition></Suspense>} />
        <Route path="/intimate-whitening-east-london" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><IntimateWhitening /></PageTransition></Suspense>} />
        <Route path="/injectables-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Injectables /></PageTransition></Suspense>} />
        <Route path="/laser-resurfacing-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><LaserResurfacing /></PageTransition></Suspense>} />
        <Route path="/led-light-therapy-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><LEDLightTherapy /></PageTransition></Suspense>} />
        <Route path="/facials-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Facials /></PageTransition></Suspense>} />
        <Route path="/vein-removal-east-london" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><VeinRemoval /></PageTransition></Suspense>} />
        <Route path="/skin-tag-mole-removal-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><SkinTagMoleRemoval /></PageTransition></Suspense>} />
        <Route path="/skin-analysis-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><SkinAnalysis /></PageTransition></Suspense>} />
        <Route path="/pigmentation-treatment-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><PigmentationTreatment /></PageTransition></Suspense>} />
        <Route path="/ear-piercing-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Piercing /></PageTransition></Suspense>} />
        <Route path="/massage-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><Massage /></PageTransition></Suspense>} />
        <Route path="/hopi-ear-candling-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><HopiEarCandling /></PageTransition></Suspense>} />
        <Route path="/advanced-electrolysis-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><AdvancedElectrolysis /></PageTransition></Suspense>} />
        <Route path="/million-dollar-facial-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><MillionDollarFacial /></PageTransition></Suspense>} />
        <Route path="/advanced-peels-dagenham" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><AdvancedPeels /></PageTransition></Suspense>} />
        <Route path="/laser-hair-removal-east-london" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><LaserHairRemovalEastLondon /></PageTransition></Suspense>} />
        <Route path="/lynton-motus-ay-laser" element={<Suspense fallback={<ServicePageSkeleton />}><PageTransition><LyntonMotusAYLaser /></PageTransition></Suspense>} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};