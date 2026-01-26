import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderCancelled from "./pages/OrderCancelled";
import LaserHairRemoval from "./pages/services/LaserHairRemoval";
import Hydrafacials from "./pages/services/Hydrafacials";
import TattooRemoval from "./pages/services/TattooRemoval";
import SkinRejuvenation from "./pages/services/SkinRejuvenation";
import SkinPenMicroneedling from "./pages/services/SkinPenMicroneedling";
import IVDrips from "./pages/services/IVDrips";
import ChemicalPeels from "./pages/services/ChemicalPeels";
import Electrolysis from "./pages/services/Electrolysis";
import ColdPlasma from "./pages/services/ColdPlasma";
import IntimateWhitening from "./pages/services/IntimateWhitening";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/order-cancelled" element={<OrderCancelled />} />
              <Route path="/laser-hair-removal-dagenham" element={<LaserHairRemoval />} />
              <Route path="/hydrafacial-east-london" element={<Hydrafacials />} />
              <Route path="/tattoo-removal-east-london" element={<TattooRemoval />} />
              <Route path="/skin-rejuvenation-dagenham" element={<SkinRejuvenation />} />
              <Route path="/skinpen-microneedling-dagenham" element={<SkinPenMicroneedling />} />
              <Route path="/iv-drips-infusions-east-london" element={<IVDrips />} />
              <Route path="/chemical-peels-dagenham" element={<ChemicalPeels />} />
              <Route path="/electrolysis-hair-removal-dagenham" element={<Electrolysis />} />
              <Route path="/cold-plasma-treatment-dagenham" element={<ColdPlasma />} />
              <Route path="/intimate-whitening-east-london" element={<IntimateWhitening />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
