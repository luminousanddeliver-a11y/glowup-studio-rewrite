
# Homepage and Footer Bug Fix Plan

This plan addresses four issues:
1. Mobile footer credit hidden behind "Leave a Review" button
2. Desktop trust bar "Only in East London" not blending
3. Mobile PremierSection button overflow
4. Homepage-only navbar transparency

---

## Issue 1: Footer Agency Credit Hidden

**Problem:** The "Website Created, Powered, and Managed by L&D Digital" text is obscured by the FloatingReviewButton on mobile.

**Root Cause:** 
- Footer has `pb-24` padding for the MobileStickyButton (~80px height)
- FloatingReviewButton is positioned at `bottom-24` (96px) on mobile
- Agency credit row sits at the bottom but gets covered

**File:** `src/components/layout/Footer.tsx`

**Fix:** Increase bottom padding to account for both sticky elements:
```
Line ~185: Change pb-24 to pb-32 (128px) on mobile
"py-6 pb-24 lg:pb-6" → "py-6 pb-32 lg:pb-6"
```

---

## Issue 2: Desktop Trust Bar - "Only in East London" Not Blending

**Problem:** The 5th trust bar item (exclusive variant) uses `bg-white/10` which appears washed out compared to other items using colored backgrounds.

**File:** `src/components/home/HeroSectionNew.tsx`

**Fix (Lines ~183):** Update the exclusive variant to use a tinted background that blends better:
```jsx
// Current
${item.variant === 'exclusive' ? 'bg-white/10 hover:bg-white/20 border border-gold/30' : ''}

// Fixed - Use gold-tinted background for better visual consistency
${item.variant === 'exclusive' ? 'bg-gold/15 hover:bg-gold/25 border border-gold/40' : ''}
```

Also update the icon container (line ~192):
```jsx
// Current
${item.variant === 'exclusive' ? 'bg-gold/20' : ''}

// Fixed - Stronger gold tint
${item.variant === 'exclusive' ? 'bg-gold/30' : ''}
```

---

## Issue 3: Mobile PremierSection Button Overflow

**Problem:** The "Book Your Free, No-Obligation Consultation" button text is too long and extends outside its container on mobile.

**File:** `src/components/home/PremierSection.tsx`

**Fix (Lines 67-76):** Allow text to wrap on mobile and reduce horizontal padding:
```jsx
// Current
<Button
  asChild
  size="lg"
  className="bg-card text-primary hover:bg-card/90 font-body min-h-[48px] px-6 text-base"
>

// Fixed - Allow text wrapping on mobile
<Button
  asChild
  size="lg"
  className="bg-card text-primary hover:bg-card/90 font-body min-h-[48px] px-4 md:px-6 text-sm md:text-base whitespace-normal text-center"
>
```

---

## Issue 4: Homepage-Only Navbar Transparency

**Problem:** User wants the navbar to be fully transparent (no background, shadow, blur) on the homepage only, with the hero extending behind it.

**File:** `src/components/layout/Header.tsx`

**Changes:**

1. **Add homepage detection (around line 116):**
```jsx
// Add this after the existing darkHeroRoutes check
const isHomepage = location.pathname === '/';
```

2. **Update the header animation (lines 150-165):**
```jsx
<motion.header 
  className="sticky top-0 z-50"
  initial={false}
  animate={{ 
    backgroundColor: isCompact 
      ? "rgba(255, 255, 255, 0.95)"
      : isHomepage 
        ? "rgba(0, 0, 0, 0)"  // Fully transparent on homepage
        : "rgba(255, 255, 255, 0)",
    backdropFilter: isCompact 
      ? "blur(12px)" 
      : "none",  // No blur when not compact
    boxShadow: isCompact 
      ? "0 4px 20px rgba(0,0,0,0.1)" 
      : "none"  // No shadow when not compact
  }}
  transition={{ 
    duration: 0.4, 
    ease: [0.4, 0, 0.2, 1]
  }}
>
```

3. **Update text color logic for homepage (around line 122):**
```jsx
// Current
const hasDarkHero = darkHeroRoutes.some(route => location.pathname.startsWith(route)) && 
  !isServicePage(location.pathname);

// Fixed - Include homepage in dark hero check
const hasDarkHero = (isHomepage || darkHeroRoutes.some(route => location.pathname.startsWith(route))) && 
  !isServicePage(location.pathname);
```

---

## Summary of Changes

| File | Change | Purpose |
|------|--------|---------|
| `Footer.tsx` | `pb-24` → `pb-32` | Prevent overlap with FloatingReviewButton |
| `HeroSectionNew.tsx` | `bg-white/10` → `bg-gold/15` | Better blending for "Exclusive" box |
| `PremierSection.tsx` | Add `whitespace-normal`, adjust padding | Fix button text overflow |
| `Header.tsx` | Add `isHomepage` check, modify animation | Fully transparent navbar on homepage |

---

## Expected Results

1. **Footer:** Agency credit fully visible above both MobileStickyButton and FloatingReviewButton
2. **Trust Bar:** "Only in East London" box has consistent gold-tinted background matching other items
3. **PremierSection:** Button text wraps properly on mobile, staying within bounds
4. **Navbar:** Homepage shows hero image extending fully behind a transparent navbar; navbar becomes opaque on scroll
