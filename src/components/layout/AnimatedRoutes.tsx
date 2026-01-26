import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";

// Pages
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import FAQ from "@/pages/FAQ";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import OrderCancelled from "@/pages/OrderCancelled";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Prices from "@/pages/Prices";
import GiftVouchers from "@/pages/GiftVouchers";
import Academy from "@/pages/Academy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";

// Services
import LaserHairRemoval from "@/pages/services/LaserHairRemoval";
import Hydrafacials from "@/pages/services/Hydrafacials";
import TattooRemoval from "@/pages/services/TattooRemoval";
import SkinRejuvenation from "@/pages/services/SkinRejuvenation";
import SkinPenMicroneedling from "@/pages/services/SkinPenMicroneedling";
import IVDrips from "@/pages/services/IVDrips";
import ChemicalPeels from "@/pages/services/ChemicalPeels";
import Electrolysis from "@/pages/services/Electrolysis";
import ColdPlasma from "@/pages/services/ColdPlasma";
import IntimateWhitening from "@/pages/services/IntimateWhitening";
import Injectables from "@/pages/services/Injectables";
import LaserResurfacing from "@/pages/services/LaserResurfacing";
import LEDLightTherapy from "@/pages/services/LEDLightTherapy";
import Facials from "@/pages/services/Facials";
import VeinRemoval from "@/pages/services/VeinRemoval";
import SkinTagMoleRemoval from "@/pages/services/SkinTagMoleRemoval";
import SkinAnalysis from "@/pages/services/SkinAnalysis";
import PigmentationTreatment from "@/pages/services/PigmentationTreatment";
import Piercing from "@/pages/services/Piercing";
import Massage from "@/pages/services/Massage";
import HopiEarCandling from "@/pages/services/HopiEarCandling";
import AdvancedElectrolysis from "@/pages/services/AdvancedElectrolysis";
import MillionDollarFacial from "@/pages/services/MillionDollarFacial";
import AdvancedPeels from "@/pages/services/AdvancedPeels";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/prices" element={<PageTransition><Prices /></PageTransition>} />
        <Route path="/gift-vouchers" element={<PageTransition><GiftVouchers /></PageTransition>} />
        <Route path="/academy" element={<PageTransition><Academy /></PageTransition>} />
        <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/shop/:slug" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
        <Route path="/order-confirmation" element={<PageTransition><OrderConfirmation /></PageTransition>} />
        <Route path="/order-cancelled" element={<PageTransition><OrderCancelled /></PageTransition>} />
        <Route path="/laser-hair-removal-dagenham" element={<PageTransition><LaserHairRemoval /></PageTransition>} />
        <Route path="/hydrafacial-east-london" element={<PageTransition><Hydrafacials /></PageTransition>} />
        <Route path="/tattoo-removal-east-london" element={<PageTransition><TattooRemoval /></PageTransition>} />
        <Route path="/skin-rejuvenation-dagenham" element={<PageTransition><SkinRejuvenation /></PageTransition>} />
        <Route path="/skinpen-microneedling-dagenham" element={<PageTransition><SkinPenMicroneedling /></PageTransition>} />
        <Route path="/iv-drips-infusions-east-london" element={<PageTransition><IVDrips /></PageTransition>} />
        <Route path="/chemical-peels-dagenham" element={<PageTransition><ChemicalPeels /></PageTransition>} />
        <Route path="/electrolysis-hair-removal-dagenham" element={<PageTransition><Electrolysis /></PageTransition>} />
        <Route path="/cold-plasma-treatment-dagenham" element={<PageTransition><ColdPlasma /></PageTransition>} />
        <Route path="/intimate-whitening-east-london" element={<PageTransition><IntimateWhitening /></PageTransition>} />
        <Route path="/injectables-dagenham" element={<PageTransition><Injectables /></PageTransition>} />
        <Route path="/laser-resurfacing-dagenham" element={<PageTransition><LaserResurfacing /></PageTransition>} />
        <Route path="/led-light-therapy-dagenham" element={<PageTransition><LEDLightTherapy /></PageTransition>} />
        <Route path="/facials-dagenham" element={<PageTransition><Facials /></PageTransition>} />
        <Route path="/vein-removal-east-london" element={<PageTransition><VeinRemoval /></PageTransition>} />
        <Route path="/skin-tag-mole-removal-dagenham" element={<PageTransition><SkinTagMoleRemoval /></PageTransition>} />
        <Route path="/skin-analysis-dagenham" element={<PageTransition><SkinAnalysis /></PageTransition>} />
        <Route path="/pigmentation-treatment-dagenham" element={<PageTransition><PigmentationTreatment /></PageTransition>} />
        <Route path="/ear-piercing-dagenham" element={<PageTransition><Piercing /></PageTransition>} />
        <Route path="/massage-dagenham" element={<PageTransition><Massage /></PageTransition>} />
        <Route path="/hopi-ear-candling-dagenham" element={<PageTransition><HopiEarCandling /></PageTransition>} />
        <Route path="/advanced-electrolysis-dagenham" element={<PageTransition><AdvancedElectrolysis /></PageTransition>} />
        <Route path="/million-dollar-facial-dagenham" element={<PageTransition><MillionDollarFacial /></PageTransition>} />
        <Route path="/advanced-peels-dagenham" element={<PageTransition><AdvancedPeels /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsAndConditions /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
