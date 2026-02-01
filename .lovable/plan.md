
# Plan: FAQ Schemas, Social Links, Academy & Mobile Fix

---

## 1. FAQ Schemas Status

All 4 service pages **already have FAQ schemas implemented**:
- LaserHairRemoval.tsx - Lines 62-92 (3 FAQs)
- TattooRemoval.tsx - Lines 62-100+ (5 FAQs)
- Hydrafacials.tsx - Lines 61-100+ (5 FAQs)
- ChemicalPeels.tsx - Lines 60-97 (4 FAQs)

No changes needed for FAQ schemas.

---

## 2. Update Social Media Links

### Footer.tsx - Lines 140 & 151
**Current:**
```
href="https://facebook.com"
href="https://instagram.com"
```
**Update to:**
```
href="https://www.facebook.com/laserlightskinclinic"
href="https://www.instagram.com/laserlightskinclinic"
```

### ResultsShowcase.tsx - Line 107
**Current:**
```
instagramLink = "https://instagram.com/laserlightskinclinic"
```
**Update to:**
```
instagramLink = "https://www.instagram.com/laserlightskinclinic"
```

### Contact.tsx - Lines 92-95
**Current (missing Facebook):**
```javascript
"sameAs": [
  "https://www.google.com/...",
  "https://www.instagram.com/laserlightskinclinic"
]
```
**Update to:**
```javascript
"sameAs": [
  "https://www.google.com/...",
  "https://www.facebook.com/laserlightskinclinic",
  "https://www.instagram.com/laserlightskinclinic"
]
```

---

## 3. Academy Link to External Site

### Footer.tsx - Line 13
**Current:**
```javascript
{ name: "Academy", href: "/academy" }
```
**Update to external link logic** - The quickLinks array is rendered with internal navigation. Need to handle external link separately or modify the link rendering.

### Header.tsx - Line 83
**Current:**
```javascript
{ name: "Academy", href: "/academy" }
```
**Update to:**
```javascript
{ name: "Academy", href: "https://labttraining.com/", external: true }
```

Both files need logic to handle external links with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 4. LaserSpotlight Mobile Image Fix

### LaserSpotlight.tsx - Line 27
**Current:**
```jsx
<motion.div
  className="order-2 lg:order-1"
  ...
>
```
**Update to hide on mobile:**
```jsx
<motion.div
  className="hidden lg:block order-2 lg:order-1"
  ...
>
```

This removes the image on mobile where it looks out of place, showing only the text content and CTA.

---

## Summary of Files to Edit

| File | Changes |
|------|---------|
| `src/components/layout/Footer.tsx` | Update Facebook & Instagram URLs, make Academy external |
| `src/components/layout/Header.tsx` | Make Academy link external |
| `src/components/services/ResultsShowcase.tsx` | Fix Instagram URL format |
| `src/pages/Contact.tsx` | Add Facebook to sameAs schema |
| `src/components/home/LaserSpotlight.tsx` | Hide image on mobile |

---

## Expected Results

1. **Social Links**: All Facebook/Instagram links point to official clinic profiles
2. **Academy**: Opens labttraining.com in new tab from header & footer
3. **Mobile UX**: Laser spotlight section shows clean text-only layout on mobile
4. **SEO**: Contact page schema includes both social profiles
