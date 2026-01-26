
# Service Hero Redesign Plan

## Overview
Redesign the `ServiceHero` component across all service pages (excluding Gift Vouchers and Academy) to create a more visually impactful, split-layout design that better matches service-specific content with proper imagery and improved styling.

---

## Current Issues Identified

| Issue | Current State | Impact |
|-------|---------------|--------|
| Generic Background | Most pages use `consultationRoom` image | Doesn't showcase the specific treatment |
| Full-bleed Background | Image covers entire section as background | Reduces visual hierarchy and image focus |
| Right Column Empty | Content is left-aligned, right column unused | Wastes valuable screen real estate |
| No Visible Image | Image hidden behind heavy gradient overlay | Users can't see the treatment/equipment |
| Stats Placement | Stats floating on transparent background | Less polished than homepage design |

---

## New Design Concept

Based on the reference image and homepage `HeroSection` pattern, the redesigned service hero will feature:

```text
┌────────────────────────────────────────────────────────────┐
│  Header (transparent, blends in)                           │
├────────────────────────────────────────────────────────────┤
│  Breadcrumbs: Home > Services > Laser Hair Removal         │
├─────────────────────────────┬──────────────────────────────┤
│                             │                              │
│  [NHS Badge]                │   ┌──────────────────────┐   │
│                             │   │                      │   │
│  Pain-Free Laser Hair       │   │   Service-Specific   │   │
│  Removal in Dagenham        │   │   Device/Treatment   │   │
│                             │   │      Image           │   │
│  Subtitle text here...      │   │                      │   │
│  Description text...        │   │   (Rounded corners)  │   │
│                             │   └──────────────────────┘   │
│  [★ 25% Off Badge]          │                              │
│                             │   ┌──────────────────────┐   │
│  [Book Appointment] [View]  │   │  Floating NHS Badge  │   │
│                             │   │  or Trust Indicator  │   │
│  ─────────────────────      │   └──────────────────────┘   │
│  6-8     Pain-Free   All    │                              │
│  Sessions Guaranteed Skin   │                              │
│                             │                              │
└─────────────────────────────┴──────────────────────────────┘
```

---

## Technical Implementation

### Step 1: Redesign ServiceHero Component

**File**: `src/components/services/ServiceHero.tsx`

**Key Changes**:
1. **Split-Layout with Visible Image**: Replace background image with a dedicated image column (like homepage `HeroSection`)
2. **Add `heroImage` Prop**: New prop for the visible service image (separate from background)
3. **Rounded Image Container**: Match homepage style with rounded corners and shadow
4. **Floating Badge**: NHS/Trust badge floating over the image corner
5. **Better Stats Styling**: Bottom border with inline stats like homepage
6. **Parallax Effect**: Subtle scroll-based movement on the image
7. **Decorative Element**: Add the teal bar accent from homepage
8. **Light Background**: Use `bg-background` instead of overlaid background image

**New Props Interface**:
```typescript
interface ServiceHeroProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  description: string;
  badge?: string;                    // Offer badge (e.g., "25% Off")
  trustBadge?: string;               // Top badge (e.g., "NHS-Approved")
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCta?: SecondaryCTA;
  showPhoneCta?: boolean;
  heroImage: string;                 // NEW: Visible image on right side
  floatingBadge?: {                  // NEW: Badge that floats over image
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  stats?: HeroStat[];
  breadcrumbs?: BreadcrumbItemType[];
}
```

---

### Step 2: Update All Service Pages (22 Pages)

Each service page will be updated to use the new `heroImage` prop with appropriate device/treatment imagery.

**Image Mapping by Service**:

| Service Page | Current Image | New Hero Image |
|--------------|---------------|----------------|
| LaserHairRemoval | consultationRoom | laser-device.jpg |
| TattooRemoval | consultationRoom | tattoo-removal-device.jpg |
| Hydrafacials | consultationRoom | hydrafacial-device.jpg |
| ChemicalPeels | consultationRoom | chemical-peel-products.jpg |
| Facials | consultationRoom | facials-setup.jpg |
| LEDLightTherapy | consultationRoom | led-therapy-device.jpg |
| Microneedling | consultationRoom | microneedling-device.jpg |
| Injectables | consultationRoom | injectables-device.jpg |
| PigmentationTreatment | consultationRoom | pigmentation-device.jpg |
| VeinRemoval | consultationRoom | vein-removal-device.jpg |
| SkinTagMoleRemoval | consultationRoom | skin-tag-removal-device.jpg |
| Electrolysis | consultationRoom | electrolysis-device.jpg |
| AdvancedElectrolysis | consultationRoom | advanced-electrolysis-device.jpg |
| LaserResurfacing | consultationRoom | laser-resurfacing-device.jpg |
| SkinAnalysis | consultationRoom | skin-analysis-device.jpg |
| Massage | consultationRoom | massage-setup.jpg |
| Piercing | consultationRoom | piercing-setup.jpg |
| HopiEarCandling | consultationRoom | hopi-candles.jpg |
| IVDrips | ivDripSetup | iv-drip-setup.jpg (keep) |
| IntimateWhitening | intimateCareProducts | intimate-care-products.jpg (keep) |
| ColdPlasma | coldPlasmaDevice | cold-plasma-device.jpg (keep) |
| MillionDollarFacial | consultationRoom | microneedling-device.jpg |
| AdvancedPeels | consultationRoom | chemical-peel-products.jpg |
| SkinRejuvenation | consultationRoom | skin-texture.jpg |

---

### Step 3: Component Structure

```typescript
// New ServiceHero layout structure
<section className="bg-background py-16 md:py-20 lg:py-24 overflow-hidden">
  <div className="container-custom">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      {/* Left: Content (appears second on mobile) */}
      <div className="text-center lg:text-left order-2 lg:order-1">
        {/* Breadcrumbs */}
        {/* Decorative teal bar */}
        {/* Trust Badge */}
        {/* H1 Title with accent */}
        {/* Subtitle */}
        {/* Description */}
        {/* Offer Badge */}
        {/* CTA Buttons */}
        {/* Stats with top border */}
      </div>
      
      {/* Right: Image (appears first on mobile) */}
      <div className="relative order-1 lg:order-2">
        {/* Rounded image with shadow */}
        {/* Floating NHS/Trust badge */}
      </div>
      
    </div>
  </div>
</section>
```

---

## Visual Enhancements

### Animation System
- **Content slide-in**: Left content slides from left (-30px)
- **Image slide-in**: Image slides from right (+30px)
- **Staggered animations**: Elements animate in sequence (0.1s delays)
- **Parallax image**: Subtle vertical movement on scroll (-50px)
- **Badge pop-in**: Scale and fade animation with spring bounce

### Styling Improvements
- **Teal accent bar**: 48px wide, 4px tall decorative element
- **Rounded image**: 2xl border radius with shadow-lg
- **Floating badge**: Positioned at -bottom-8 right-4 with shadow-xl
- **Stats divider**: Top border with proper spacing
- **Background**: Clean white/light background instead of overlaid image

---

## Files to Modify

| File | Action |
|------|--------|
| `src/components/services/ServiceHero.tsx` | **Major rewrite** - new layout matching homepage |
| `src/pages/services/LaserHairRemoval.tsx` | Update to use new props |
| `src/pages/services/TattooRemoval.tsx` | Update to use new props |
| `src/pages/services/Hydrafacials.tsx` | Update to use new props |
| `src/pages/services/ChemicalPeels.tsx` | Update to use new props |
| `src/pages/services/Facials.tsx` | Update to use new props |
| `src/pages/services/LEDLightTherapy.tsx` | Update to use new props |
| `src/pages/services/SkinPenMicroneedling.tsx` | Update to use new props |
| `src/pages/services/Injectables.tsx` | Update to use new props |
| `src/pages/services/PigmentationTreatment.tsx` | Update to use new props |
| `src/pages/services/VeinRemoval.tsx` | Update to use new props |
| `src/pages/services/SkinTagMoleRemoval.tsx` | Update to use new props |
| `src/pages/services/Electrolysis.tsx` | Update to use new props |
| `src/pages/services/AdvancedElectrolysis.tsx` | Update to use new props |
| `src/pages/services/LaserResurfacing.tsx` | Update to use new props |
| `src/pages/services/SkinAnalysis.tsx` | Update to use new props |
| `src/pages/services/Massage.tsx` | Update to use new props |
| `src/pages/services/Piercing.tsx` | Update to use new props |
| `src/pages/services/HopiEarCandling.tsx` | Update to use new props |
| `src/pages/services/IVDrips.tsx` | Update to use new props |
| `src/pages/services/IntimateWhitening.tsx` | Update to use new props |
| `src/pages/services/ColdPlasma.tsx` | Update to use new props |
| `src/pages/services/MillionDollarFacial.tsx` | Update to use new props |
| `src/pages/services/AdvancedPeels.tsx` | Update to use new props |
| `src/pages/services/SkinRejuvenation.tsx` | Update to use new props |

---

## Expected Outcome

After implementation:
- Each service page will have a **visible, prominent image** showcasing the treatment device or setup
- **Consistent design language** with the homepage hero section
- **Better visual hierarchy** with split-layout content organization
- **Service-specific imagery** that helps users understand what treatment looks like
- **Improved mobile experience** with image appearing first, then content
- **Professional floating badges** for trust signals like "NHS Approved"
- **Smooth animations** for engaging user experience
