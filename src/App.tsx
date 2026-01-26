import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { CompareProvider } from "@/contexts/CompareContext";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { WishlistDrawer } from "@/components/shop/WishlistDrawer";
import { CompareModal } from "@/components/shop/CompareModal";
import { FlyingCartAnimation } from "@/components/shop/FlyingCartAnimation";
import { AnimatedRoutes } from "@/components/layout/AnimatedRoutes";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WishlistProvider>
          <CompareProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <CartDrawer />
              <WishlistDrawer />
              <CompareModal />
              <FlyingCartAnimation />
              <BrowserRouter>
                <AnimatedRoutes />
              </BrowserRouter>
            </TooltipProvider>
          </CompareProvider>
        </WishlistProvider>
      </CartProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
