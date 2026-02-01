
# Fix Plan: FAQ Schemas, Remove 25% Offers, Update Reviews & Mobile Performance

---

## Summary of Issues Found

| Issue | Files Affected |
|-------|----------------|
| Missing FAQ Schema | SkinTagMoleRemoval.tsx |
| 25% Off references | FAQSection.tsx, LaserHairRemoval.tsx, SkinRejuvenation.tsx, Facials.tsx, Prices.tsx |
| Review count 250+ | constants.ts + 9 UI components |
| Mobile performance | Service pages with heavy imports |

---

## 1. Add FAQ Schema to SkinTagMoleRemoval.tsx

**File:** `src/pages/services/SkinTagMoleRemoval.tsx`

The page has 8 FAQs defined (lines 240-273) but no FAQPage schema. Add:

```javascript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will removing a skin tag hurt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There's a brief stinging sensation during treatment, but it's very quick. For larger or more sensitive areas, we can apply numbing cream beforehand."
      }
    },
    {
      "@type": "Question",
      "name": "Will the skin tag grow back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A properly removed skin tag will not grow back. However, if you're prone to skin tags, new ones may develop in other areas over time."
      }
    },
    // ... (4 most important FAQs for schema)
  ]
}
```

Update SEOHead (line 281):
```javascript
structuredData={[structuredData, faqSchema, breadcrumbSchema]}
```

---

## 2. Remove All 25% Off References

### File: `src/components/home/FAQSection.tsx` (Line 22)
**Current:**
```
"Treatment costs vary by service and area. We offer transparent pricing and a free, no-obligation consultation where we provide a personalized quote. New clients also receive 25% off their first treatment course."
```
**Replace with:**
```
"Treatment costs vary by service and area. We offer transparent pricing, a free consultation, and flexible payment plans including 0% finance options."
```

### File: `src/pages/services/LaserHairRemoval.tsx`

**Line 345 - SEOHead description:**
```
Current: "25% off for new clients!"
Replace with: "Free consultation - Book today!"
```

**Line 360 - ServiceHero badge:**
```
Current: badge="25% Off First Course"
Replace with: badge="Free Consultation"
```

**Line 415 - offerBanner highlight:**
```
Current: highlight: "25% OFF ALL PACKAGES"
Replace with: highlight: "FREE CONSULTATION & PATCH TEST"
```

### File: `src/pages/services/SkinRejuvenation.tsx` (Line 338)
```
Current: "New clients receive 25% off their first treatment."
Replace with: "Free consultation available. Course packages offer the best value."
```

### File: `src/pages/services/Facials.tsx` (Line 321)
```
Current: highlight: "25% OFF FOR NEW CLIENTS"
Replace with: highlight: "FREE CONSULTATION AVAILABLE"
```

### File: `src/pages/Prices.tsx` (Line 391)
```
Current: "25% off for new clients."
Replace with: "Free consultation available."
```

---

## 3. Update Review Count from 250+ to 290+

### Primary Source: `src/lib/constants.ts` (Line 26)
```javascript
Current: reviewCount: "250+"
Replace: reviewCount: "290+"
```

### UI Components to Update (hardcoded values):

| File | Line | Change |
|------|------|--------|
| `src/pages/About.tsx` | 129, 267 | 250+ -> 290+ |
| `src/components/home/HeroSectionNew.tsx` | 17, 130 | 250+ -> 290+ |
| `src/components/home/HeroSection.tsx` | 53, 78, 155 | 250+ -> 290+ |
| `src/components/home/TrustBar.tsx` | 14 | 250+ -> 290+ |
| `src/components/services/ServiceTestimonial.tsx` | 107 | 250+ -> 290+ |
| `src/components/home/TrustSection.tsx` | 144 | 250+ -> 290+ |
| `src/components/home/Testimonials.tsx` | 66, 158 | 250+ -> 290+ |
| `src/pages/Contact.tsx` | 355 | 250+ -> 290+ |

---

## 4. Mobile Performance Optimization

**Issue:** Service pages like SkinTagMoleRemoval load slowly on first visit due to heavy imports.

**Solution:** Add React.lazy() for heavy service page components.

### File: `src/App.tsx` - Lazy load service pages

```javascript
// Change from direct imports to lazy imports
const SkinTagMoleRemoval = lazy(() => import("./pages/services/SkinTagMoleRemoval"));
const LaserHairRemoval = lazy(() => import("./pages/services/LaserHairRemoval"));
// etc.

// Wrap routes in Suspense with skeleton fallback
<Suspense fallback={<ServicePageSkeleton />}>
  <Route path="/skin-tag-mole-removal-dagenham" element={<SkinTagMoleRemoval />} />
</Suspense>
```

### Create: `src/components/ui/ServicePageSkeleton.tsx`
A lightweight loading skeleton that appears while the full page loads, improving perceived performance.

---

## Files to Edit Summary

| File | Changes |
|------|---------|
| `src/pages/services/SkinTagMoleRemoval.tsx` | Add FAQ schema |
| `src/components/home/FAQSection.tsx` | Remove 25% mention |
| `src/pages/services/LaserHairRemoval.tsx` | Remove 3x 25% mentions |
| `src/pages/services/SkinRejuvenation.tsx` | Remove 25% mention |
| `src/pages/services/Facials.tsx` | Remove 25% mention |
| `src/pages/Prices.tsx` | Remove 25% mention |
| `src/lib/constants.ts` | 250+ -> 290+ |
| `src/pages/About.tsx` | 250+ -> 290+ (2 places) |
| `src/components/home/HeroSectionNew.tsx` | 250+ -> 290+ (2 places) |
| `src/components/home/HeroSection.tsx` | 250+ -> 290+ (3 places) |
| `src/components/home/TrustBar.tsx` | 250+ -> 290+ |
| `src/components/services/ServiceTestimonial.tsx` | 250+ -> 290+ |
| `src/components/home/TrustSection.tsx` | 250+ -> 290+ |
| `src/components/home/Testimonials.tsx` | 250+ -> 290+ (2 places) |
| `src/pages/Contact.tsx` | 250+ -> 290+ |
| `src/App.tsx` | Add lazy loading |
| `src/components/ui/ServicePageSkeleton.tsx` | New file |

---

## Expected Results

1. **FAQ Rich Snippets**: SkinTagMoleRemoval will appear with Q&A in Google search results
2. **Policy Compliance**: All 25% discount references removed per business policy
3. **Accurate Social Proof**: Review count reflects actual 291 Google reviews
4. **Faster Mobile**: Service pages load progressively with skeleton UI

