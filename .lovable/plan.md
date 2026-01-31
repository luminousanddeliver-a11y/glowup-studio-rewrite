

# Homepage and Footer Fix Plan

This plan addresses four issues with CSS-focused modifications:

---

## Issue 1: Homepage Navbar Transparency

**Current State:** The Header already has the correct logic for homepage transparency (rgba(0,0,0,0), no blur, no shadow when not scrolled). The implementation is already correct in Header.tsx lines 157-166.

**Verification:** The navbar is already fully transparent on the homepage. No changes needed here as it's already implemented correctly per your previous request.

---

## Issue 2: Desktop Trust Bar - "Only in East London" Box Size

**Problem:** The 5th box doesn't visually match the size of other boxes on desktop. Looking at the reference image, all 5 boxes should have consistent sizing.

**File:** `src/components/home/HeroSectionNew.tsx`

**Fix:** The "exclusive" variant currently has a border which makes it appear smaller/different. Remove the additional border styling and ensure consistent background opacity.

```
Line 183: Change from:
${item.variant === 'exclusive' ? 'bg-gold/15 hover:bg-gold/25 border border-gold/40' : ''}

To:
${item.variant === 'exclusive' ? 'bg-gold/20 hover:bg-gold/30' : ''}
```

This removes the border and uses the same opacity pattern (20%/30%) as other variants.

---

## Issue 3: Mobile Trust Bar - "4.9★ Rating" and "All Skin Types" Box Sizes

**Problem:** These boxes appear cramped on mobile with text getting squeezed.

**File:** `src/components/home/HeroSectionNew.tsx`

**Fix:** Increase the padding and ensure consistent min-height for mobile boxes.

```
Line 178: Change from:
flex items-center gap-2 px-3 py-2.5 rounded-xl backdrop-blur-sm

To:
flex items-center gap-2 px-3 py-3 md:py-2.5 rounded-xl backdrop-blur-sm min-h-[60px] md:min-h-0
```

This adds more vertical padding on mobile (py-3) and a minimum height to ensure boxes look consistent.

---

## Issue 4: Footer Agency Credit Hidden Behind "Leave a Review" Button

**Problem:** The "Website Created, Powered, and Managed by L&D Digital" text is still covered by the FloatingReviewButton even with `pb-32`.

**Analysis:**
- MobileStickyButton: ~80px height (fixed at bottom-0)
- FloatingReviewButton: positioned at `bottom-24` (96px) + button height ~48px = ~144px from bottom
- Current footer padding: `pb-32` = 128px - still not enough

**File:** `src/components/layout/Footer.tsx`

**Fix:** Increase the mobile bottom padding from `pb-32` to `pb-40` (160px).

```
Line 185: Change from:
<div className="container-custom py-6 pb-32 lg:pb-6">

To:
<div className="container-custom py-6 pb-40 lg:pb-6">
```

---

## Summary of Changes

| File | Line | Change |
|------|------|--------|
| `HeroSectionNew.tsx` | 183 | Remove border from "exclusive" variant, use consistent `bg-gold/20` |
| `HeroSectionNew.tsx` | 178 | Add `py-3 md:py-2.5 min-h-[60px] md:min-h-0` for mobile padding |
| `Footer.tsx` | 185 | Increase bottom padding: `pb-32` to `pb-40` |

---

## Expected Results

1. **Navbar:** Already correctly implemented - fully transparent on homepage
2. **Trust Bar (Desktop):** "Only in East London" box will blend seamlessly with other boxes (same styling pattern)
3. **Trust Bar (Mobile):** "4.9★ Rating" and "All Skin Types" will have more breathing room with consistent heights
4. **Footer:** Agency credit text will be fully visible above both the FloatingReviewButton and MobileStickyButton

