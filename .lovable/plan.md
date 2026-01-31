
# Remove 25% Discount - Comprehensive Cleanup Plan

This plan removes all traces of the 25% discount promotion across the site while ensuring the UI remains visually appealing with alternative value propositions.

---

## Files Requiring Changes

| File | Change Type | Replacement Strategy |
|------|-------------|---------------------|
| `src/components/home/OfferBanner.tsx` | **Remove or Redesign** | Transform into "Free Consultation" or "Why Choose Us" banner |
| `src/components/home/HeroSection.tsx` | Edit | Replace "25% OFF" badge with "Free Patch Test" |
| `src/components/home/BookingFormWizard.tsx` | Edit | Replace discount badge with trust signal |
| `src/components/home/BookingForm.tsx` | Edit | Replace discount badge with trust signal |
| `src/pages/Prices.tsx` | Edit | Remove banner, update SEO description |
| `src/pages/FAQ.tsx` | Edit | Update FAQ answer about pricing |
| `src/pages/Index.tsx` | Edit | Update FAQ schema and remove OfferBanner |
| `src/pages/services/LaserHairRemovalEastLondon.tsx` | Edit | Remove all discount mentions |
| `src/pages/services/Hydrafacials.tsx` | Edit | Update disclaimer |
| `src/pages/services/ChemicalPeels.tsx` | Edit | Update disclaimer |
| `src/pages/services/SkinPenMicroneedling.tsx` | Edit | Update disclaimer |
| `src/pages/services/MillionDollarFacial.tsx` | Edit | Update disclaimer |

---

## Detailed Changes

### 1. Homepage (Index.tsx)

**Remove OfferBanner component from imports and usage**

The OfferBanner is entirely about the 25% discount. I'll remove it from the homepage and replace its position with either nothing or the existing content will flow better without it.

**Update FAQ Schema**
```text
Change: "New clients also receive 25% off their first treatment course."
To: "We offer transparent pricing and flexible payment options."
```

---

### 2. Hero Section (HeroSection.tsx)

**Current (line 91):**
```jsx
<span className="bg-gold text-gold-foreground text-xs font-bold px-2 py-0.5 rounded-full">25% OFF</span>
```

**Replace with:**
```jsx
<span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">Free Patch Test</span>
```

This maintains the visual badge but promotes a valuable, non-discount offering.

---

### 3. Booking Form Wizard (BookingFormWizard.tsx)

**Current (lines 259-272):**
```jsx
<motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent...">
  <span className="font-body font-bold text-lg">25% Off for New Clients!</span>
</motion.div>
```

**Replace with:**
```jsx
<motion.div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent...">
  <span className="font-body font-bold text-lg">Free Consultation & Patch Test</span>
</motion.div>
```

Keeps the eye-catching animated badge but promotes free consultation instead.

---

### 4. Booking Form (BookingForm.tsx)

**Same change as above** - Replace "25% Off for New Clients!" with "Free Consultation & Patch Test"

---

### 5. Prices Page (Prices.tsx)

**SEO Description:**
```text
Change: "25% off for new clients."
To: "Flexible payment options available."
```

**Remove the pulsing offer banner (lines 417-431)**
Replace with a static trust badge:
```jsx
<div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground rounded-lg px-6 py-3 font-body">
  <Shield className="w-5 h-5" />
  NHS Approved • Interest-Free Payment Plans Available
</div>
```

---

### 6. FAQ Page (FAQ.tsx)

**Update answer:**
```text
Change: "New clients also receive 25% off their first treatment course."
To: "We offer flexible payment options and interest-free plans."
```

---

### 7. Laser Hair Removal East London Page

**Multiple changes needed:**

1. **Schema (line 49):** Remove "25% off first treatment course for new clients"
2. **FAQ Schema (line 78):** Remove "25% off" mention
3. **FAQ answers (line 197):** Remove "New clients get 25% off"
4. **SEO description (line 246):** Remove "25% off new clients!"
5. **Hero badge (line 261):** Change from "25% Off First Course" to "Free Consultation"
6. **Pricing banner (lines 309-311):** Remove offer banner or replace with "Book Your Free Consultation"

---

### 8. Service Pages (Hydrafacials, ChemicalPeels, SkinPenMicroneedling, MillionDollarFacial)

**Update disclaimer text pattern:**
```text
Change: "New clients receive 25% off first treatment."
To: "Free consultation included. Interest-free payment options available."
```

---

## Visual Replacement Strategy

Instead of just removing elements, I'll replace with value propositions that don't involve discounts:

| Removed | Replacement |
|---------|-------------|
| "25% OFF" badge | "Free Patch Test" badge |
| "25% Off for New Clients!" | "Free Consultation & Patch Test" |
| Discount mention in FAQ | Flexible payment options |
| Offer banner on Prices page | NHS Approved trust signal |
| OfferBanner component | Remove from homepage (cleaner flow) |

---

## Implementation Order

1. **Update FAQ/Schema text** - Quick text changes
2. **Update hero and booking form badges** - Visual consistency
3. **Update service page disclaimers** - 5 files with similar changes
4. **Remove/redesign OfferBanner** - Remove from Index.tsx imports
5. **Update Prices page** - Replace pulsing banner with trust signal

---

## Expected Outcome

- All 25% discount references removed
- UI maintains visual appeal with alternative badges and trust signals
- Value propositions shift to: Free Consultation, Free Patch Test, NHS Approved, Interest-Free Payment Plans
- No broken layouts or empty spaces
