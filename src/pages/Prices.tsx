import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, CreditCard, Gift, Shield, Sparkles, Clock, BadgeCheck, Star, Zap, Crown, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PricesStickyButton } from "@/components/prices/PricesStickyButton";
import { ScrollReveal } from "@/components/home/ScrollReveal";

interface Treatment {
  name: string;
  single: string;
  course?: string;
  courseType?: string;
  savings?: string;
  popular?: boolean;
  note?: string;
}

interface PriceCategory {
  title: string;
  description: string;
  treatments: Treatment[];
  note?: string;
  courseLabel?: string;
}

const priceCategories: Record<string, PriceCategory> = {
  "laser-women": {
    title: "Laser Hair Removal - Women",
    description: "Pain-free permanent hair reduction with award-winning Lynton Motus AY technology",
    courseLabel: "Course of 6",
    treatments: [
      { name: "Upper Lip", single: "£40", course: "£180", savings: "Save £60", popular: true },
      { name: "Chin", single: "£45", course: "£200", savings: "Save £70" },
      { name: "Lip & Chin", single: "£65", course: "£290", savings: "Save £100", popular: true },
      { name: "Sideburns", single: "£45", course: "£200", savings: "Save £70" },
      { name: "Jawline", single: "£45", course: "£200", savings: "Save £70" },
      { name: "Full Face", single: "£85", course: "£380", savings: "Save £130", popular: true },
      { name: "Neck (Front)", single: "£50", course: "£225", savings: "Save £75" },
      { name: "Neck (Back)", single: "£50", course: "£225", savings: "Save £75" },
      { name: "Underarms", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Bikini Line", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Extended Bikini", single: "£75", course: "£340", savings: "Save £110" },
      { name: "Brazilian", single: "£95", course: "£430", savings: "Save £140", popular: true },
      { name: "Hollywood", single: "£110", course: "£495", savings: "Save £165" },
      { name: "Buttocks", single: "£80", course: "£360", savings: "Save £120" },
      { name: "Half Arms (Lower)", single: "£70", course: "£315", savings: "Save £105" },
      { name: "Half Arms (Upper)", single: "£70", course: "£315", savings: "Save £105" },
      { name: "Full Arms", single: "£100", course: "£450", savings: "Save £150" },
      { name: "Hands & Fingers", single: "£40", course: "£180", savings: "Save £60" },
      { name: "Half Legs (Lower)", single: "£120", course: "£540", savings: "Save £180" },
      { name: "Half Legs (Upper)", single: "£120", course: "£540", savings: "Save £180" },
      { name: "Full Legs", single: "£180", course: "£810", savings: "Save £270", popular: true },
      { name: "Feet & Toes", single: "£40", course: "£180", savings: "Save £60" },
      { name: "Stomach Line", single: "£45", course: "£200", savings: "Save £70" },
      { name: "Full Stomach", single: "£80", course: "£360", savings: "Save £120" },
      { name: "Lower Back", single: "£60", course: "£270", savings: "Save £90" },
      { name: "Chest", single: "£80", course: "£360", savings: "Save £120" },
      { name: "Nipples", single: "£40", course: "£180", savings: "Save £60" },
      { name: "Shoulders", single: "£60", course: "£270", savings: "Save £90" },
      { name: "Full Body", single: "£350", course: "£1575", savings: "Save £525", popular: true },
    ],
    note: "Patch test required before first treatment. Prices include consultation."
  },
  "laser-men": {
    title: "Laser Hair Removal - Men",
    description: "Effective hair removal for all skin types with the latest laser technology",
    courseLabel: "Course of 6",
    treatments: [
      { name: "Unibrow", single: "£35", course: "£160", savings: "Save £50" },
      { name: "Ears", single: "£35", course: "£160", savings: "Save £50" },
      { name: "Nose", single: "£35", course: "£160", savings: "Save £50" },
      { name: "Beard Line / Cheeks", single: "£55", course: "£250", savings: "Save £80", popular: true },
      { name: "Full Beard", single: "£85", course: "£380", savings: "Save £130" },
      { name: "Neck (Front)", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Neck (Back)", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Shoulders", single: "£80", course: "£360", savings: "Save £120" },
      { name: "Upper Back", single: "£90", course: "£405", savings: "Save £135" },
      { name: "Full Back", single: "£140", course: "£630", savings: "Save £210", popular: true },
      { name: "Chest", single: "£120", course: "£540", savings: "Save £180", popular: true },
      { name: "Stomach", single: "£100", course: "£450", savings: "Save £150" },
      { name: "Chest & Stomach", single: "£180", course: "£810", savings: "Save £270" },
      { name: "Half Arms (Lower)", single: "£70", course: "£315", savings: "Save £105" },
      { name: "Half Arms (Upper)", single: "£70", course: "£315", savings: "Save £105" },
      { name: "Full Arms", single: "£100", course: "£450", savings: "Save £150" },
      { name: "Hands & Fingers", single: "£40", course: "£180", savings: "Save £60" },
      { name: "Half Legs (Lower)", single: "£140", course: "£630", savings: "Save £210" },
      { name: "Half Legs (Upper)", single: "£140", course: "£630", savings: "Save £210" },
      { name: "Full Legs", single: "£200", course: "£900", savings: "Save £300" },
      { name: "Feet & Toes", single: "£40", course: "£180", savings: "Save £60" },
      { name: "Full Body", single: "£400", course: "£1800", savings: "Save £600", popular: true },
    ],
    note: "All treatments performed by qualified laser practitioners."
  },
  facials: {
    title: "Facials & HydraFacial",
    description: "Award-winning HydraFacial and bespoke facial treatments for glowing skin",
    courseLabel: "Course of 3",
    treatments: [
      { name: "HydraFacial Mini (30 mins)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "HydraFacial Signature (45 mins)", single: "£120", course: "£320", savings: "Save £40", popular: true },
      { name: "HydraFacial Deluxe (60 mins)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "HydraFacial Platinum (75 mins)", single: "£180", course: "£480", savings: "Save £60", popular: true },
      { name: "HydraFacial for Back", single: "£150", course: "£400", savings: "Save £50" },
      { name: "HydraFacial Keravive (Scalp)", single: "£200", course: "£540", savings: "Save £60" },
      { name: "Million Dollar Facial", single: "£180", course: "£480", savings: "Save £60", popular: true },
      { name: "Express Glow Facial (30 mins)", single: "£55", course: "£150", savings: "Save £15" },
      { name: "Deep Cleansing Facial (60 mins)", single: "£75", course: "£200", savings: "Save £25" },
      { name: "Anti-Ageing Facial (75 mins)", single: "£95", course: "£255", savings: "Save £30" },
      { name: "Oxygen Facial", single: "£85", course: "£230", savings: "Save £25" },
      { name: "Dermaplaning Facial", single: "£65", course: "£175", savings: "Save £20" },
    ],
    note: "All facials include skin analysis and aftercare advice."
  },
  peels: {
    title: "Chemical Peels & Microneedling",
    description: "Professional-grade peels and SkinPen treatments for skin renewal",
    courseLabel: "Course of 3",
    treatments: [
      { name: "Chemical Peel - Light (Glycolic)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "Chemical Peel - Medium (TCA)", single: "£120", course: "£320", savings: "Save £40", popular: true },
      { name: "Chemical Peel - Deep (Jessner)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Cosmelan Depigmentation Peel", single: "£650", popular: true },
      { name: "Dermamelan Peel", single: "£750" },
      { name: "SkinPen Microneedling (Face)", single: "£250", course: "£675", savings: "Save £75", popular: true },
      { name: "SkinPen Microneedling (Face & Neck)", single: "£300", course: "£810", savings: "Save £90" },
      { name: "SkinPen Microneedling (Stretch Marks)", single: "£200", course: "£540", savings: "Save £60" },
      { name: "SkinPen Microneedling (Acne Scars)", single: "£250", course: "£675", savings: "Save £75" },
      { name: "LED Light Therapy (Add-on)", single: "£40", course: "£100", savings: "Save £20" },
      { name: "LED Light Therapy (Standalone)", single: "£60", course: "£160", savings: "Save £20" },
    ],
    note: "Consultation required. Results visible after 4-6 weeks."
  },
  "skin-rejuvenation": {
    title: "Skin Rejuvenation & IPL",
    description: "Advanced IPL treatments for skin rejuvenation, pigmentation and redness",
    courseLabel: "Course of 6",
    treatments: [
      { name: "IPL Skin Rejuvenation - Half Face", single: "£135", course: "£546", savings: "30% off", popular: true },
      { name: "IPL Skin Rejuvenation - Full Face", single: "£175", course: "£714", savings: "32% off", popular: true },
      { name: "IPL Skin Rejuvenation - Full Face & Neck", single: "£200", course: "£810", savings: "32% off" },
      { name: "IPL Skin Rejuvenation - Full Face, Neck & Chest", single: "£250", course: "£1020", savings: "32% off" },
      { name: "IPL Skin Rejuvenation - Neck Only", single: "£125", course: "£504", savings: "33% off" },
      { name: "IPL Skin Rejuvenation - Chest Only", single: "£150", course: "£612", savings: "32% off" },
      { name: "IPL Skin Rejuvenation - Hands", single: "£100", course: "£405", savings: "32% off" },
      { name: "Cold Plasma (Face)", single: "£180", course: "£480", savings: "Save £60", popular: true },
      { name: "Cold Plasma (Neck)", single: "£120", course: "£320", savings: "Save £40" },
      { name: "Cold Plasma (Face & Neck)", single: "£250", course: "£675", savings: "Save £75" },
      { name: "Laser Skin Rejuvenation (Face)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Laser Resurfacing (Face)", single: "£250", course: "£675", savings: "Save £75" },
      { name: "Laser Resurfacing (Full Face)", single: "£350", course: "£945", savings: "Save £105" },
    ],
    note: "Multiple sessions recommended for optimal results. Free consultation included."
  },
  "lesions": {
    title: "Lesion & Vascular Treatments",
    description: "Advanced treatments for vascular lesions, pigmented lesions and skin concerns",
    courseLabel: "Per Session",
    treatments: [
      { name: "Vascular Lesions - 20 mins (Small Area)", single: "£220", popular: true },
      { name: "Vascular Lesions - 30 mins (Medium Area)", single: "£450" },
      { name: "Benign Pigmented Lesions (Full Face)", single: "£220", course: "£450", savings: "10% off" },
      { name: "Vein Removal (Small Area)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "Vein Removal (Medium Area)", single: "£120", course: "£320", savings: "Save £40", popular: true },
      { name: "Vein Removal (Large Area)", single: "£180", course: "£480", savings: "Save £60" },
      { name: "Thread Vein Removal (Legs - Small)", single: "£100", course: "£270", savings: "Save £30" },
      { name: "Thread Vein Removal (Legs - Medium)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Thread Vein Removal (Legs - Large)", single: "£200", course: "£540", savings: "Save £60" },
      { name: "Rosacea Treatment (Full Face)", single: "£175", course: "£470", savings: "Save £55" },
    ],
    note: "Consultation required to assess suitability. Multiple sessions may be needed."
  },
  "pigmentation": {
    title: "Pigmentation & Acne Treatments",
    description: "IPL treatments for pigmentation, sun damage and acne with visible results",
    courseLabel: "Course of 6",
    treatments: [
      { name: "Pigmentation - Single Lesion", single: "£75" },
      { name: "Pigmentation - Cheeks", single: "£100", popular: true },
      { name: "Pigmentation - Cheeks and Nose", single: "£150" },
      { name: "Pigmentation - Half Face", single: "£180" },
      { name: "Pigmentation - Full Face", single: "£200", popular: true },
      { name: "Pigmentation - Full Face and Neck", single: "£250" },
      { name: "Pigmentation - Full Face, Neck and Chest", single: "£300" },
      { name: "Pigmentation - Chest Only", single: "£180" },
      { name: "Pigmentation - Hands", single: "£150" },
      { name: "Acne Treatment IPL - Half Face", single: "£95", course: "£486", savings: "15% off" },
      { name: "Acne Treatment IPL - Full Face", single: "£150", course: "£765", savings: "15% off", popular: true },
      { name: "Acne Treatment IPL - Shoulders", single: "£150", course: "£765", savings: "15% off" },
      { name: "Acne Treatment IPL - Chest", single: "£150", course: "£765", savings: "15% off" },
      { name: "Acne Treatment IPL - Full Back", single: "£250", course: "£1275", savings: "15% off" },
      { name: "Milia Extraction (up to 4)", single: "£50" },
      { name: "Milia Extraction (5-10)", single: "£80" },
    ],
    note: "Patch test required. Results visible after 2-4 sessions."
  },
  injectables: {
    title: "Injectables & Aesthetics",
    description: "Botox, dermal fillers and aesthetic injectables by qualified practitioners",
    courseLabel: "—",
    treatments: [
      { name: "Botox - 1 Area", single: "£150", popular: true },
      { name: "Botox - 2 Areas", single: "£220" },
      { name: "Botox - 3 Areas", single: "£280", popular: true },
      { name: "Botox - Bunny Lines", single: "£100" },
      { name: "Botox - Gummy Smile", single: "£100" },
      { name: "Botox - Chin Dimpling", single: "£100" },
      { name: "Botox - Hyperhidrosis (Underarms)", single: "£350" },
      { name: "Lip Filler (0.5ml)", single: "£150" },
      { name: "Lip Filler (1ml)", single: "£220", popular: true },
      { name: "Cheek Filler (1ml)", single: "£280" },
      { name: "Chin Filler (1ml)", single: "£280" },
      { name: "Jawline Filler (2ml)", single: "£450" },
      { name: "Nasolabial Folds (1ml)", single: "£250" },
      { name: "Marionette Lines (1ml)", single: "£250" },
      { name: "Tear Trough (Under Eyes)", single: "£350", popular: true },
      { name: "Non-Surgical Rhinoplasty", single: "£350" },
      { name: "Lemon Bottle Fat Dissolving (per vial)", single: "£120", course: "£320", savings: "Save £40" },
      { name: "Lemon Bottle - Double Chin (2 vials)", single: "£220", course: "£580", savings: "Save £80" },
      { name: "Lumi Eyes (Under Eye)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Profhilo (2 Sessions)", single: "£500", popular: true },
      { name: "Skin Boosters", single: "£200", course: "£540", savings: "Save £60" },
      { name: "PRP Vampire Facial", single: "£300", course: "£810", savings: "Save £90" },
    ],
    note: "All injectables include consultation. Results last 3-12 months."
  },
  removal: {
    title: "Removal Treatments",
    description: "Tattoo removal with Quanta Thunder and permanent hair removal with electrolysis",
    courseLabel: "Course of 6",
    treatments: [
      { name: "Tattoo Removal - Extra Small (up to 2cm²)", single: "£60", course: "£270", savings: "Save £90" },
      { name: "Tattoo Removal - Small (2-5cm²)", single: "£80", course: "£360", savings: "Save £120", popular: true },
      { name: "Tattoo Removal - Medium (5-10cm²)", single: "£120", course: "£540", savings: "Save £180" },
      { name: "Tattoo Removal - Large (10-20cm²)", single: "£180", course: "£810", savings: "Save £270" },
      { name: "Tattoo Removal - Extra Large (20-30cm²)", single: "£250", course: "£1125", savings: "Save £375" },
      { name: "Tattoo Removal - Full Sleeve (Consultation)", single: "POA" },
      { name: "Skin Tag Removal (1 tag)", single: "£50" },
      { name: "Skin Tag Removal (2-5 tags)", single: "£80", popular: true },
      { name: "Skin Tag Removal (6-10 tags)", single: "£120" },
      { name: "Mole Removal (per mole)", single: "£100", popular: true },
      { name: "Mole Removal (2-3 moles)", single: "£180" },
      { name: "Wart Removal (per wart)", single: "£75" },
      { name: "Syringoma Removal (per session)", single: "£150" },
      { name: "Milia Removal (per milia)", single: "£30" },
      { name: "Xanthelasma Removal", single: "£200" },
      { name: "Electrolysis (15 mins)", single: "£25", course: "£120", savings: "Save £30" },
      { name: "Electrolysis (30 mins)", single: "£40", course: "£180", savings: "Save £60", popular: true },
      { name: "Electrolysis (45 mins)", single: "£55", course: "£250", savings: "Save £80" },
      { name: "Advanced Electrolysis (15 mins)", single: "£40", course: "£180", savings: "Save £60" },
      { name: "Advanced Electrolysis (30 mins)", single: "£55", course: "£250", savings: "Save £80" },
    ],
    note: "Tattoo removal sessions spaced 6-8 weeks apart. Free consultation."
  },
  wellness: {
    title: "Wellness & Body",
    description: "IV vitamin drips, massage therapy and holistic wellness treatments",
    courseLabel: "Course of 3",
    treatments: [
      { name: "IV Drip - Vitamin C Boost", single: "£150", course: "£400", savings: "Save £50", popular: true },
      { name: "IV Drip - Glutathione (Skin Brightening)", single: "£180", course: "£480", savings: "Save £60", popular: true },
      { name: "IV Drip - NAD+ (Anti-Ageing)", single: "£350", course: "£945", savings: "Save £105" },
      { name: "IV Drip - Myers Cocktail", single: "£200", course: "£540", savings: "Save £60", popular: true },
      { name: "IV Drip - Immunity Boost", single: "£180", course: "£480", savings: "Save £60" },
      { name: "IV Drip - Energy & Recovery", single: "£180", course: "£480", savings: "Save £60" },
      { name: "IV Drip - Hydration Therapy", single: "£120", course: "£320", savings: "Save £40" },
      { name: "IV Drip - Detox & Cleanse", single: "£180", course: "£480", savings: "Save £60" },
      { name: "IV Drip - Hair, Skin & Nails", single: "£200", course: "£540", savings: "Save £60" },
      { name: "Vitamin B12 Injection", single: "£35", course: "£90", savings: "Save £15" },
      { name: "Biotin Injection", single: "£40", course: "£100", savings: "Save £20" },
      { name: "Intimate V-Whitening (per session)", single: "£150", course: "£400", savings: "Save £50" },
      { name: "Intimate V-Whitening (Course of 6)", single: "£750", savings: "Save £150" },
      { name: "Swedish Massage (30 mins)", single: "£40", course: "£100", savings: "Save £20" },
      { name: "Swedish Massage (60 mins)", single: "£70", course: "£180", savings: "Save £30", popular: true },
      { name: "Deep Tissue Massage (60 mins)", single: "£80", course: "£215", savings: "Save £25" },
      { name: "Hot Stone Massage (60 mins)", single: "£85", course: "£230", savings: "Save £25" },
      { name: "Aromatherapy Massage (60 mins)", single: "£75", course: "£200", savings: "Save £25" },
      { name: "Hopi Ear Candling", single: "£35", course: "£90", savings: "Save £15" },
      { name: "Ear Piercing (including studs)", single: "£25" },
      { name: "Nose Piercing", single: "£30" },
      { name: "Skin Analysis Consultation", single: "£30", note: "Redeemable against treatment" },
    ],
    note: "IV drips administered by qualified medical professionals."
  },
};

const trustIndicators = [
  { icon: Shield, text: "NHS Approved" },
  { icon: BadgeCheck, text: "Fully Insured" },
  { icon: Clock, text: "Free Consultation" },
  { icon: Sparkles, text: "Award Winning" },
];

const categoryOrder = [
  "laser-women",
  "laser-men",
  "facials",
  "peels",
  "skin-rejuvenation",
  "lesions",
  "pigmentation",
  "injectables",
  "removal",
  "wellness",
];

const categoryLabels: Record<string, string> = {
  "laser-women": "Laser Women",
  "laser-men": "Laser Men",
  "facials": "Facials",
  "peels": "Peels",
  "skin-rejuvenation": "Rejuvenation",
  "lesions": "Lesions",
  "pigmentation": "Pigmentation",
  "injectables": "Injectables",
  "removal": "Removal",
  "wellness": "Wellness",
};

interface PopularPackage {
  name: string;
  description: string;
  originalPrice: string;
  packagePrice: string;
  savings: string;
  includes: string[];
  icon: typeof Star;
  badge?: string;
}

const popularPackages: PopularPackage[] = [
  {
    name: "Full Body Laser Package",
    description: "Complete hair-free transformation for women",
    originalPrice: "£2,100",
    packagePrice: "£1,575",
    savings: "Save £525",
    includes: ["Full Legs", "Full Arms", "Underarms", "Brazilian", "Full Face"],
    icon: Crown,
    badge: "Best Seller"
  },
  {
    name: "Bridal Glow Package",
    description: "Look radiant on your special day",
    originalPrice: "£580",
    packagePrice: "£450",
    savings: "Save £130",
    includes: ["HydraFacial Platinum", "LED Light Therapy", "Dermaplaning", "Underarm Laser"],
    icon: Heart,
    badge: "Most Popular"
  },
  {
    name: "Anti-Ageing Transformation",
    description: "Turn back the clock with our premium treatments",
    originalPrice: "£850",
    packagePrice: "£680",
    savings: "Save £170",
    includes: ["Profhilo (2 sessions)", "Cold Plasma Face", "SkinPen Microneedling"],
    icon: Sparkles
  },
  {
    name: "Men's Grooming Package",
    description: "Complete body grooming for men",
    originalPrice: "£1,440",
    packagePrice: "£1,080",
    savings: "Save £360",
    includes: ["Full Back (6 sessions)", "Chest & Stomach (6 sessions)", "Beard Line (6 sessions)"],
    icon: Zap
  }
];

const Prices = () => {
  const isMobile = useIsMobile();
  
  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Treatment Prices at Laser Light Skin Clinic",
    "description": "Complete price list for laser hair removal, facials, injectables and skin treatments in Dagenham, East London.",
    "url": "https://laserlightskinclinic.co.uk/prices"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Prices | Laser Hair Removal & Skin Treatment Costs | Dagenham"
        description="View our treatment prices for laser hair removal, HydraFacials, Botox, tattoo removal and more. 25% off for new clients. Transparent pricing at Laser Light Skin Clinic Dagenham, East London."
        canonicalUrl="https://laserlightskinclinic.co.uk/prices"
        structuredData={priceSchema}
      />
      
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground -mt-[80px] pt-[88px] lg:pt-[92px] pb-10 lg:pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <PageBreadcrumb 
                items={[{ label: "Prices" }]} 
                variant="dark"
                className="mb-4"
              />
              <h1 className="mb-4">Treatment Prices</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 font-body mb-6">
                Transparent, competitive pricing for all our treatments. No hidden fees.
              </p>
              
              {/* Offer Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-block"
              >
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-accent text-accent-foreground rounded-lg px-6 py-3 font-heading font-bold text-lg shadow-lg"
                >
                  🎉 25% OFF for All New Clients
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 lg:gap-8 mt-8"
            >
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <item.icon className="h-5 w-5" />
                  <span className="font-body text-sm lg:text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Most Popular Packages */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-foreground mb-3">Most Popular Packages</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Save more with our specially curated treatment bundles. Combine your favourite treatments at exclusive package prices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group relative"
                >
                  {pkg.badge && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full z-10">
                      {pkg.badge}
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="bg-primary p-5 text-primary-foreground">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-foreground/20 rounded-lg">
                        <pkg.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading font-bold text-lg leading-tight">{pkg.name}</h3>
                    </div>
                    <p className="text-primary-foreground/80 text-sm font-body">{pkg.description}</p>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-heading font-bold text-foreground">{pkg.packagePrice}</span>
                      <span className="text-muted-foreground line-through text-sm">{pkg.originalPrice}</span>
                      <span className="text-accent font-semibold text-sm">{pkg.savings}</span>
                    </div>
                    
                    {/* Includes */}
                    <div className="space-y-2 mb-5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Package includes:</p>
                      <ul className="space-y-1.5">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm font-body text-foreground">
                            <Star className="h-3 w-3 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      asChild 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    >
                      <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                        Book Package
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-muted-foreground text-sm font-body mt-8"
            >
              💡 Can't find what you need? Call us on <a href="tel:02085981200" className="text-accent hover:underline font-medium">0208 598 1200</a> for a custom package quote.
            </motion.p>
          </div>
        </section>

        {/* Price Tables */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <Tabs defaultValue="laser-women" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className={`${isMobile ? 'overflow-x-auto pb-2 -mx-4 px-4' : ''}`}>
                  <TabsList className={`${isMobile ? 'inline-flex w-max' : 'grid grid-cols-5 lg:grid-cols-10'} h-auto gap-1.5 bg-secondary p-2`}>
                    {categoryOrder.map((key) => (
                      <TabsTrigger 
                        key={key}
                        value={key} 
                        className="whitespace-nowrap px-3 py-2.5 text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                      >
                        {categoryLabels[key]}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </motion.div>

              {categoryOrder.map((key) => {
                const category = priceCategories[key];
                return (
                  <TabsContent key={key} value={key}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-card rounded-lg shadow-card overflow-hidden"
                    >
                      {/* Category Header */}
                      <div className="bg-primary p-6 text-primary-foreground">
                        <h2 className="text-2xl font-heading font-bold mb-2">{category.title}</h2>
                        <p className="font-body text-primary-foreground/80">{category.description}</p>
                      </div>

                      {/* Price Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-secondary">
                            <tr>
                              <th className="text-left p-4 font-heading font-semibold text-foreground">Treatment</th>
                              <th className="text-right p-4 font-heading font-semibold text-foreground">Single Session</th>
                              <th className="text-right p-4 font-heading font-semibold text-foreground">
                                {category.courseLabel || "Course"}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.treatments.map((treatment, index) => (
                              <motion.tr
                                key={treatment.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                className={`${index % 2 === 0 ? "bg-background" : "bg-secondary/30"} hover:bg-muted/50 transition-colors`}
                              >
                                <td className="p-4 font-body text-foreground">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span>{treatment.name}</span>
                                    {treatment.popular && (
                                      <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full font-medium">
                                        Popular
                                      </span>
                                    )}
                                    {treatment.note && (
                                      <span className="text-muted-foreground text-xs">
                                        ({treatment.note})
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="p-4 font-body text-foreground text-right font-medium">
                                  {treatment.single}
                                </td>
                                <td className="p-4 font-body text-right">
                                  {treatment.course ? (
                                    <div>
                                      <span className="text-foreground font-medium">{treatment.course}</span>
                                      {treatment.savings && (
                                        <span className="block text-accent text-sm font-medium">
                                          {treatment.savings}
                                        </span>
                                      )}
                                    </div>
                                  ) : treatment.savings ? (
                                    <span className="text-accent text-sm font-medium">
                                      {treatment.savings}
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground">—</span>
                                  )}
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Category Note */}
                      {category.note && (
                        <div className="p-4 bg-accent/10 border-t border-border">
                          <p className="text-accent font-body text-sm flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            {category.note}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-foreground mb-4">Flexible Payment Options</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                We make treatments accessible with various payment methods and finance options.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CreditCard, title: "All Cards Accepted", desc: "Visa, Mastercard, Amex" },
                { icon: Clock, title: "0% Finance Available", desc: "Spread over 6-12 months" },
                { icon: Gift, title: "Gift Vouchers", desc: "Perfect for any occasion" },
                { icon: Shield, title: "Price Match", desc: "We'll match local prices" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg text-center shadow-card"
                >
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="text-primary-foreground mb-4"
            >
              Ready to Book Your Treatment?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto mb-8"
            >
              Book your free consultation today. Our expert team will create a personalized treatment plan tailored to your needs and budget.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:02085981200">
                  <Phone className="h-4 w-4 mr-2" />
                  0208 598 1200
                </a>
              </Button>
            </motion.div>
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pt-8 border-t border-primary-foreground/20"
            >
              <p className="text-primary-foreground/70 font-body text-sm">
                📍 125 Becontree Avenue, Dagenham, Essex, RM8 2UJ
              </p>
              <p className="text-primary-foreground/70 font-body text-sm mt-1">
                📧 info@laserlightskinclinic.co.uk | 📱 07949 501 777
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Sticky Mobile Booking Button */}
      <PricesStickyButton />
    </div>
  );
};

export default Prices;
