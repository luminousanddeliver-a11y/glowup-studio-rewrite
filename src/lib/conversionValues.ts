// Starting prices (GBP) per service route — used as Google Ads conversion value
// when a user clicks a "Book Now" CTA from a service page.
export const SERVICE_CONVERSION_VALUES: Record<string, number> = {
  "laser-hair-removal": 80,
  "laser-hair-removal-east-london": 80,
  "laser-hair-removal-dagenham": 80,
  "laser-hair-removal-ilford": 80,
  "laser-hair-removal-redbridge": 80,
  "lynton-motus-ay-laser": 80,
  "million-dollar-facial": 350,
  "skinpen-microneedling": 200,
  "advanced-peels": 150,
  "chemical-peels": 80,
  "skin-rejuvenation": 100,
  "laser-resurfacing": 150,
  "pigmentation-treatment": 100,
  "tattoo-removal": 50,
  "vein-removal": 80,
  "skin-tag-mole-removal": 60,
  "advanced-electrolysis": 50,
  "electrolysis": 30,
  "intimate-v-whitening": 150,
  "intimate-whitening": 150,
  "cold-plasma": 120,
  "led-light-therapy": 45,
  "hydrafacials": 85,
  "facials": 45,
  "injectables": 150,
  "iv-drips": 100,
  "massage": 40,
  "hopi-ear-candling": 45,
  "skin-analysis": 30,
  "piercing": 25,
};

const DEFAULT_VALUE = 1.0;

export function getConversionValueForPath(pathname: string): number {
  const clean = (pathname || "/").replace(/^\/+|\/+$/g, "");
  if (!clean) return DEFAULT_VALUE;
  // Direct match
  if (SERVICE_CONVERSION_VALUES[clean] !== undefined) {
    return SERVICE_CONVERSION_VALUES[clean];
  }
  // Try last segment (e.g. /services/laser-hair-removal)
  const last = clean.split("/").pop() || "";
  if (last && SERVICE_CONVERSION_VALUES[last] !== undefined) {
    return SERVICE_CONVERSION_VALUES[last];
  }
  return DEFAULT_VALUE;
}
