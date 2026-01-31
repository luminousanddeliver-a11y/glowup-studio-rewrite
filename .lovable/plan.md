
# Homepage Optimization Plan: Inform, Convert & SEO

Based on your customer research, I've analyzed the current homepage against the target audience and customer journey. Here's what needs to change.

---

## Current Assessment

### What's Working Well
- Treatment Finder has all 5 top services (Laser, Tattoo, HydraFacial, Peels, Skin Tags)
- Premier Section targets Redbridge & Havering specifically
- Mobile sticky buttons for easy booking
- Trust signals (NHS-approved, 4.9 rating, pain-free)

### What's Missing or Broken
1. **SEO Schema**: Missing Newham, Essex, and Epping in `areaServed`
2. **Brand Name Error**: Trust Section says "Glow-Up Studio" instead of "Laser Light Skin Clinic"
3. **No Pricing Visible**: Customers come for pricing info but no prices shown on homepage
4. **Skin Tag NHS Pain Point**: Not highlighted that NHS doesn't cover this

---

## Changes Required

### 1. Fix SEO Schema - Add Missing Areas
**File:** `src/pages/Index.tsx`

Add Newham, Essex, and Epping to the `areaServed` array to improve local search rankings for these customer-heavy areas.

```text
Add to areaServed (lines 31-38):
- { "@type": "City", "name": "Newham" }
- { "@type": "City", "name": "Essex" }
- { "@type": "City", "name": "Epping" }
```

Also update the FAQ answer about location to include these areas.

---

### 2. Fix Brand Name in Trust Section
**File:** `src/components/home/TrustSection.tsx`

Line 69 currently says "Glow-Up Studio" - should be "Laser Light".

```text
Current: "Why East London & Essex Trust Glow-Up Studio"
Fix to: "Why East London & Essex Trust Laser Light"
```

---

### 3. Add Pricing to Treatment Finder Cards
**File:** `src/components/home/TreatmentFinder.tsx`

Customers visit to get pricing information. Add starting prices to each treatment card to satisfy this immediately.

```text
treatments array - add price field:
- Laser Hair Removal: "From £80"
- Tattoo Removal: "From £50"
- HydraFacial: "From £90"
- Chemical Peels: "From £75"
- Skin Tag Removal: "From £40"
```

Display the price below each treatment label in the card.

---

### 4. Add Skin Tag NHS Pain Point Section
**File:** `src/components/home/PainPointSection.tsx` (or new component)

Create a dedicated section highlighting that the NHS provide or cover cosmetic skin tag removal - position Laser Light as the solution/ we provide skin tag removal . This addresses a common customer pain point.

Key messaging:
- "NHS Won't Remove Your Skin Tags?"
- "Professional, same-day removal from £40"
- "No GP referral needed"

---

### 5. Update Constants with New Service Areas
**File:** `src/lib/constants.ts`

Add Newham, Essex, Epping to `CLINIC_INFO.areaServed` for site-wide consistency.

---

## Summary of Files to Edit

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Add Newham, Essex, Epping to SEO schema |
| `src/components/home/TrustSection.tsx` | Fix brand name to "Laser Light" |
| `src/components/home/TreatmentFinder.tsx` | Add "From £XX" pricing to each card |
| `src/lib/constants.ts` | Add new areas to areaServed |
| `src/components/home/PainPointSection.tsx` | Add Skin Tag NHS pain point OR create new section |

---

## Expected Outcomes

1. **Better Local SEO**: Newham, Essex, Epping customers will find the clinic in search results
2. **Higher Conversion**: Pricing visible immediately satisfies customer curiosity
3. **Skin Tag Bookings**: NHS pain point messaging will drive consultations
4. **Brand Consistency**: Correct clinic name throughout

---

## Technical Notes

- All changes maintain existing responsive/mobile-first design
- SEO schema changes improve Google rich snippets
- Pricing display uses same card styling for consistency
- No new dependencies required
