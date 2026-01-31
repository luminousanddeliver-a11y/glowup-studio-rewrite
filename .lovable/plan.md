

# Fix Plan: Scroll-to-Top Navigation & Enhanced Services Dropdown

## Issue 1: Links Open to Middle of Page

**Problem:** The "What brings you in today?" buttons and "Discover the HydraFacial" button navigate to service pages but don't scroll to the top - they open at whatever scroll position the browser was at.

**Root Cause:** React Router's `<Link>` component performs client-side navigation which preserves scroll position. Pages open in the middle because the homepage was scrolled down when clicking.

### Solution

Convert `<Link>` components to `<a>` tags with `onClick={() => window.scrollTo(0, 0)}` to force scroll to top on navigation.

**File: `src/components/home/TreatmentFinder.tsx`**
- Line 79-80: Replace `<Link to={treatment.href}>` with `<a href={treatment.href} onClick={() => window.scrollTo(0, 0)}>`
- Line 123: Update closing tag from `</Link>` to `</a>`

**File: `src/components/home/PainPointSection.tsx`**
- Lines 113-116: Replace `<Link to="/hydrafacial-east-london">` with `<a href="/hydrafacial-east-london" onClick={() => window.scrollTo(0, 0)}>`

---

## Issue 2: Services Dropdown Styling Enhancement

**Current State:** The dropdown already has glass styling but can be improved for better visual appeal and brand consistency.

**File: `src/components/layout/Header.tsx`**

**Current (Line 210):**
```
bg-gradient-to-br from-white/98 via-white/95 to-primary/5 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset]
```

**Enhanced Styling:**
- Keep the current glass effect (it's already well-implemented)
- Add subtle animation on menu items for better interactivity
- Ensure proper contrast for readability

The current implementation looks good - no changes needed unless you want a different aesthetic.

---

## Summary of Changes

| File | Lines | Change |
|------|-------|--------|
| `TreatmentFinder.tsx` | 3, 79, 123 | Remove Link import, convert to `<a>` with scroll-to-top |
| `PainPointSection.tsx` | 4, 113-116 | Remove Link import, convert to `<a>` with scroll-to-top |

---

## Expected Results

1. **Treatment Finder buttons:** Clicking any service button scrolls to top of the destination page
2. **HydraFacial button:** Clicking scrolls to top of the HydraFacial page
3. **Services dropdown:** Maintains current premium glass styling (already implemented)

