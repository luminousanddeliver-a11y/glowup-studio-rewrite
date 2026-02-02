// Service page prefetching utility
const prefetchedRoutes = new Set<string>();

// Map of routes to their lazy import functions
const routeImports: Record<string, () => Promise<unknown>> = {
  "/laser-hair-removal-dagenham": () => import("@/pages/services/LaserHairRemoval"),
  "/hydrafacial-east-london": () => import("@/pages/services/Hydrafacials"),
  "/tattoo-removal-east-london": () => import("@/pages/services/TattooRemoval"),
  "/skin-rejuvenation-dagenham": () => import("@/pages/services/SkinRejuvenation"),
  "/skinpen-microneedling-dagenham": () => import("@/pages/services/SkinPenMicroneedling"),
  "/iv-drips-infusions-east-london": () => import("@/pages/services/IVDrips"),
  "/chemical-peels-dagenham": () => import("@/pages/services/ChemicalPeels"),
  "/electrolysis-hair-removal-dagenham": () => import("@/pages/services/Electrolysis"),
  "/cold-plasma-treatment-dagenham": () => import("@/pages/services/ColdPlasma"),
  "/intimate-whitening-east-london": () => import("@/pages/services/IntimateWhitening"),
  "/injectables-dagenham": () => import("@/pages/services/Injectables"),
  "/laser-resurfacing-dagenham": () => import("@/pages/services/LaserResurfacing"),
  "/led-light-therapy-dagenham": () => import("@/pages/services/LEDLightTherapy"),
  "/facials-dagenham": () => import("@/pages/services/Facials"),
  "/vein-removal-east-london": () => import("@/pages/services/VeinRemoval"),
  "/skin-tag-mole-removal-dagenham": () => import("@/pages/services/SkinTagMoleRemoval"),
  "/skin-analysis-dagenham": () => import("@/pages/services/SkinAnalysis"),
  "/pigmentation-treatment-dagenham": () => import("@/pages/services/PigmentationTreatment"),
  "/ear-piercing-dagenham": () => import("@/pages/services/Piercing"),
  "/massage-dagenham": () => import("@/pages/services/Massage"),
  "/hopi-ear-candling-dagenham": () => import("@/pages/services/HopiEarCandling"),
  "/advanced-electrolysis-dagenham": () => import("@/pages/services/AdvancedElectrolysis"),
  "/million-dollar-facial-dagenham": () => import("@/pages/services/MillionDollarFacial"),
  "/advanced-peels-dagenham": () => import("@/pages/services/AdvancedPeels"),
  "/laser-hair-removal-east-london": () => import("@/pages/services/LaserHairRemovalEastLondon"),
  "/lynton-motus-ay-laser": () => import("@/pages/services/LyntonMotusAYLaser"),
  "/about": () => import("@/pages/About"),
  "/contact": () => import("@/pages/Contact"),
  "/prices": () => import("@/pages/Prices"),
  "/shop": () => import("@/pages/Shop"),
  "/blog": () => import("@/pages/Blog"),
};

// Most popular routes to prefetch on idle
const popularRoutes = [
  "/laser-hair-removal-dagenham",
  "/hydrafacial-east-london",
  "/tattoo-removal-east-london",
  "/prices",
];

export const prefetchRoute = (path: string) => {
  if (prefetchedRoutes.has(path)) return;
  
  const importFn = routeImports[path];
  if (importFn) {
    prefetchedRoutes.add(path);
    // Use requestIdleCallback for non-blocking prefetch
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => importFn(), { timeout: 2000 });
    } else {
      setTimeout(() => importFn(), 100);
    }
  }
};

// Prefetch popular routes after page loads
export const prefetchPopularRoutes = () => {
  if (typeof window === 'undefined') return;
  
  // Wait for page to be fully interactive
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      popularRoutes.forEach((route, index) => {
        setTimeout(() => prefetchRoute(route), index * 500);
      });
    }, { timeout: 5000 });
  } else {
    setTimeout(() => {
      popularRoutes.forEach((route, index) => {
        setTimeout(() => prefetchRoute(route), index * 500);
      });
    }, 3000);
  }
};

// Prefetch on hover/touch
export const createPrefetchHandlers = (path: string) => ({
  onMouseEnter: () => prefetchRoute(path),
  onTouchStart: () => prefetchRoute(path),
  onFocus: () => prefetchRoute(path),
});
