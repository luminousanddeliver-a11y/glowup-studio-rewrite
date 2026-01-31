
# Fix Plan: Blog Hero, Price Slider, Review Button, Mobile Nav, and Services Dropdown

This plan addresses 5 distinct issues across multiple components.

---

## Issue 1: Blog Hero Section Gap Between Navbar and Content

**Problem:** On BlogPost.tsx, there's a gap between the navbar and breadcrumb at certain screen sizes because the padding (`pt-[80px]`) is applied to the section but the image height starts below this padding.

**File:** `src/pages/BlogPost.tsx`

**Fix:**
- Remove `pt-[80px]` from the main section (line 197)
- The image container will extend to the very top behind the navbar
- Content overlay already has proper positioning to show breadcrumb below navbar

```text
Line 197: Change from:
<section className="relative -mt-[80px] pt-[80px]">

To:
<section className="relative -mt-[80px]">
```

---

## Issue 2: Price Range Slider Glitches

**Problem:** When dragging sliders to extreme positions, the price display shows duplicated values and animations cause visual chaos. The `key` prop on motion elements triggers re-renders on every value change.

**File:** `src/components/shop/PriceRangeFilter.tsx`

**Fixes:**
1. Remove `key={localRange[0]}` and `key={localRange[1]}` from motion divs (lines 93-94, 102-103)
2. Remove the `initial` animation that causes scale bouncing
3. Constrain slider values to prevent min exceeding max

```text
Lines 93-109: Replace with:
<div className="flex items-center justify-between text-sm">
  <div className="bg-muted px-3 py-1.5 rounded-md font-body font-medium min-w-[60px] text-center">
    £{Math.min(localRange[0], localRange[1])}
  </div>
  <span className="text-muted-foreground">to</span>
  <div className="bg-muted px-3 py-1.5 rounded-md font-body font-medium min-w-[60px] text-center">
    £{Math.max(localRange[0], localRange[1])}
  </div>
</div>
```

Also add value constraint in onChange:
```text
Line 87: Change from:
onValueChange={(value) => setLocalRange(value)}

To:
onValueChange={(value) => setLocalRange([Math.min(value[0], value[1]), Math.max(value[0], value[1])])}
```

---

## Issue 3: Tablet Mode - No Review Bubble Visible

**Problem:** The FloatingReviewButton uses `bottom-24` for mobile and `md:bottom-6` for tablet+, but on tablet sizes (768px-1023px), the button may be hidden behind elements or positioned incorrectly.

**File:** `src/components/common/FloatingReviewButton.tsx`

**Fix:** Adjust positioning to be visible at all breakpoints by using consistent positioning and ensuring proper z-index.

```text
Line 14: Change from:
className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 ..."

To:
className="fixed bottom-24 right-4 sm:bottom-8 sm:right-5 md:bottom-6 md:right-6 z-50 ..."
```

---

## Issue 4: Mobile Nav - Logo Not Visible When Menu Opens

**Problem:** On homepage and dark-hero pages, the logo uses `brightness-0 invert` filter making it white. When the mobile menu opens (with white background), the white logo becomes invisible. Additionally, on homepage with dark hero, the mobile menu icons use white color which is invisible against the white menu background.

**File:** `src/components/layout/Header.tsx`

**Fixes:**
1. When mobile menu is open, force normal logo display (remove invert filter)
2. Ensure mobile header background becomes white when menu is open to avoid the logo/text visibility issue

```text
Line 184: Change from:
className={cn("w-auto transition-all duration-300", !isCompact && hasDarkHero && "brightness-0 invert")}

To:
className={cn("w-auto transition-all duration-300", !isCompact && hasDarkHero && !mobileMenuOpen && "brightness-0 invert")}
```

Also update mobile menu button icons to have proper contrast:
```text
Line 398: Change from:
className={cn("p-3 touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center", navTextColor)}

To:
className={cn("p-3 touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center", mobileMenuOpen ? "text-foreground" : navTextColor)}
```

And update header background animation to show white when mobile menu is open:
```text
Line 161 (animate prop): Update backgroundColor condition to:
backgroundColor: isCompact || mobileMenuOpen
  ? "rgba(255, 255, 255, 0.95)"
  : isHomepage
    ? "rgba(0, 0, 0, 0)"
    : "rgba(255, 255, 255, 0)",
backdropFilter: isCompact || mobileMenuOpen ? "blur(12px)" : "none",
```

---

## Issue 5: Services Dropdown - Add Glass Effect Styling

**Problem:** The Services dropdown is plain white and doesn't match the premium feel of the website. Need glass morphism effect.

**File:** `src/components/layout/Header.tsx`

**Fix:** Update the DropdownMenuContent className to include glass effect with backdrop blur, subtle border, and shadow.

```text
Line 210: Change from:
<DropdownMenuContent className="w-[580px] p-5 grid grid-cols-2 gap-x-8 gap-y-5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">

To:
<DropdownMenuContent className="w-[580px] p-5 grid grid-cols-2 gap-x-8 gap-y-5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 bg-white/95 backdrop-blur-xl border border-border/50 shadow-2xl">
```

---

## Summary of Changes

| File | Lines | Change Description |
|------|-------|-------------------|
| `BlogPost.tsx` | 197 | Remove `pt-[80px]` from hero section |
| `PriceRangeFilter.tsx` | 87 | Add min/max constraint on slider change |
| `PriceRangeFilter.tsx` | 93-109 | Remove motion animations from price displays |
| `FloatingReviewButton.tsx` | 14 | Increase z-index and add sm breakpoint |
| `Header.tsx` | 161-166 | Make header white when mobile menu open |
| `Header.tsx` | 184 | Don't invert logo when mobile menu is open |
| `Header.tsx` | 351, 371, 398 | Force dark text for mobile icons when menu open |
| `Header.tsx` | 210 | Add glass effect to services dropdown |

---

## Expected Results

1. **Blog Hero:** No gap between navbar and hero image at any screen size
2. **Price Slider:** Smooth operation without duplicate prices or visual glitches
3. **Review Button:** Visible on tablet and all screen sizes
4. **Mobile Nav:** Logo and icons remain visible when menu opens on homepage
5. **Services Dropdown:** Premium glass morphism effect matching website aesthetic
