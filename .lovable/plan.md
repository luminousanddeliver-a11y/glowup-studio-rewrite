
# Homepage Hero & Footer Bug Fix Plan

This plan addresses four issues reported by the user:
1. "Book Free Consultation" button not visible on hover
2. Mobile trust bar - 5th box text is cut off/unreadable
3. Footer content hidden behind the MobileStickyButton
4. No animation on hero background image

---

## Issue 1: Book Free Consultation Button Hover State

**Problem:** The outline button has `text-white` by default and `hover:bg-white hover:text-foreground`. The button appears invisible because it has no visible background in its default state (just a border).

**File:** `src/components/home/HeroSectionNew.tsx`

**Fix (Line 101-110):**
```jsx
// Current
<Button 
  variant="outline"
  className="border-white/40 text-white hover:bg-white hover:text-foreground ..."
>

// Fixed - Add a semi-transparent background for visibility
<Button 
  variant="outline"
  className="border-white bg-white/10 text-white hover:bg-white hover:text-foreground ..."
>
```

This adds a subtle white background so the button is always visible, and on hover it becomes solid white.

---

## Issue 2: Mobile Trust Bar - Text Truncation

**Problem:** The 5-item trust bar uses a 2-column grid on mobile, causing the 5th item to appear alone and text gets truncated.

**File:** `src/components/home/HeroSectionNew.tsx`

**Fix (Multiple lines):**
1. Remove `truncate` from label text (line 200)
2. Remove `truncate block` from sublabel (line 209)
3. Allow text to wrap naturally with `flex-wrap` or smaller font sizes
4. Make the 5th item span full width on mobile for better readability

```jsx
// Trust bar grid - make 5th item full width on mobile
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
  {trustItems.map((item, index) => (
    <motion.div
      key={item.label}
      className={index === 4 ? "col-span-2 sm:col-span-1" : ""}  // 5th item spans 2 cols on mobile
    >
      ...
    </motion.div>
  ))}
</div>

// Also remove truncate classes and use text-wrap
<span className="font-heading text-xs md:text-sm font-medium text-white">
  {item.label}
</span>
<span className="text-[10px] md:text-xs text-white/60 block">
  {item.sublabel}
</span>
```

---

## Issue 3: Footer Hidden Behind MobileStickyButton

**Problem:** The MobileStickyButton is a fixed element at the bottom of the screen. The footer content gets hidden behind it on mobile.

**File:** `src/components/layout/Footer.tsx`

**Fix:** Add bottom padding to the footer's bottom bar section to account for the sticky button height (~80px).

```jsx
// Current (line 184-185)
<div className="border-t border-background/10">
  <div className="container-custom py-6">

// Fixed - Add mobile-only bottom padding
<div className="border-t border-background/10">
  <div className="container-custom py-6 pb-24 lg:pb-6">
```

This adds `pb-24` (96px) padding on mobile/tablet and resets to `pb-6` on desktop (lg breakpoint) where the sticky button isn't shown.

---

## Issue 4: No Hero Image Animation

**Problem:** The hero background image is static with no entrance animation.

**File:** `src/components/home/HeroSectionNew.tsx`

**Fix:** Convert the background image div to a motion.div with a subtle zoom animation.

```jsx
// Current (lines 45-55)
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroClinicNew})` }}
>
  ...
</div>

// Fixed - Add motion with subtle zoom/fade animation
<motion.div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroClinicNew})` }}
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  ...
</motion.div>
```

This creates a Ken Burns-style zoom out effect as the hero loads, making it more visually engaging.

---

## Summary of Changes

| File | Change | Lines Affected |
|------|--------|----------------|
| `HeroSectionNew.tsx` | Add `bg-white/10` to outline button | ~101-110 |
| `HeroSectionNew.tsx` | Remove text truncation, add `col-span-2` for 5th item | ~155-217 |
| `HeroSectionNew.tsx` | Add motion animation to background image | ~45-55 |
| `Footer.tsx` | Add `pb-24 lg:pb-6` to bottom bar | ~185 |

---

## Expected Results

1. **Button Fix:** "Book Free Consultation" button will have a subtle glass-like background and be visible at all times
2. **Trust Bar Fix:** All 5 items will be fully readable on mobile, with the 5th item centered at full width
3. **Footer Fix:** All footer content including agency credit will be visible above the sticky CTA buttons
4. **Animation Fix:** Hero background will have an elegant zoom-out entrance animation
