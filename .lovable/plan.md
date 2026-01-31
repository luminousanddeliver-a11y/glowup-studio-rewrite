
# Fix Plan: Remove Promo Banner & Fix Footer Quick Links Scroll

This plan addresses removing the 25% discount banner and fixing the Quick Links navigation in the footer.

---

## Issue 1: Remove the Red 25% Promo Banner

**Problem:** A red promotional banner displaying "25% OFF FOR ALL NEW CLIENTS" appears at the top of pages. Per business policy, discount promotions have been removed.

**File:** `src/components/layout/Header.tsx`

**Fix:** Remove the PromoBanner import and component usage.

```text
Line 19: Remove import:
import { PromoBanner } from "./PromoBanner";

Line 153: Remove component:
<PromoBanner />
```

---

## Issue 2: Footer Quick Links Don't Scroll to Top

**Problem:** The Quick Links in the footer (Home, About Us, Services, etc.) use React Router's `<Link>` component which preserves scroll position - pages open at whatever scroll position you were at.

**File:** `src/components/layout/Footer.tsx`

**Fix:** Convert Quick Links from `<Link>` to `<a>` tags with scroll-to-top handlers.

```text
Lines 65-70: Change from:
<Link
  to={link.href}
  className="font-body text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1"
>
  {link.name}
</Link>

To:
<a
  href={link.href}
  onClick={() => window.scrollTo(0, 0)}
  className="font-body text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1"
>
  {link.name}
</a>
```

Also update the logo link (Line 33) to scroll to top:
```text
<Link to="/" className="inline-block mb-4">

To:
<a href="/" onClick={() => window.scrollTo(0, 0)} className="inline-block mb-4">
```

---

## Issue 3: Cross-Browser & Mobile Optimization

**Current Status:** The site is already well-optimized:
- Uses React with Vite (modern, efficient bundling)
- Tailwind CSS with responsive classes (`sm:`, `md:`, `lg:`)
- Standard HTML/CSS features compatible with Edge, Safari, Chrome
- Mobile-first responsive design throughout
- Touch-friendly button sizes (min 48px tap targets)
- Proper viewport meta tag in index.html

**No additional changes needed** - the technology stack is inherently cross-browser compatible.

---

## Summary of Changes

| File | Lines | Change |
|------|-------|--------|
| `Header.tsx` | 19, 153 | Remove PromoBanner import and usage |
| `Footer.tsx` | 3, 33, 65-70 | Remove Link import, convert to `<a>` with scroll-to-top |

---

## Expected Results

1. **Promo Banner:** The red 25% discount banner will no longer appear
2. **Quick Links:** All footer links will scroll to the top of the destination page
3. **Cross-Browser:** Site continues to work on all modern browsers (already compatible)
