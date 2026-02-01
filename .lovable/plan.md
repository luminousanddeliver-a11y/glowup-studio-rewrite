
# Performance Optimization & Mobile Nav Enhancement Plan

## Summary
Based on Lighthouse analysis, the site has significant performance issues, particularly on mobile. The main culprit is the **2.5MB hero image** causing a **16.6s LCP on mobile**. This plan addresses critical performance issues and adds subtle hover backgrounds to mobile nav links.

## Current Performance Scores (Mobile)
| Metric | Current | Target |
|--------|---------|--------|
| LCP | 16.6s (Poor) | < 2.5s (Good) |
| FCP | 2.2s (Moderate) | < 1.8s (Good) |
| CLS | 0.143 (Needs Work) | < 0.1 (Good) |
| TBT | 437ms (Moderate) | < 200ms (Good) |

---

## Phase 1: Critical LCP Fix (Biggest Impact)

### Problem
The hero image `hero-clinic-new.png` is:
- **2.5MB in size** (should be < 200KB)
- Loaded via CSS `background-image` (not optimal for LCP)
- Takes 10.2s to load on simulated mobile connection

### Solution
1. **Convert hero image to optimized WebP format** - ~90% size reduction
2. **Replace CSS background-image with `<img>` tag** for proper LCP optimization
3. **Add proper image attributes**:
   - `fetchpriority="high"` for priority loading
   - `loading="eager"` to prevent lazy loading
   - Explicit `width` and `height` to prevent CLS
4. **Add link preload** in index.html for the hero image

### Files to Modify
- `src/components/home/HeroSectionNew.tsx` - Refactor to use `<img>` tag
- `index.html` - Add preload link for hero image
- `src/assets/hero-clinic-new.png` - Note: Convert to WebP externally

---

## Phase 2: Fix Layout Shifts (CLS)

### Problem
CLS of 0.143 caused by:
- Logo images lacking explicit dimensions
- Web fonts loading and causing shifts

### Solution
1. **Add explicit width/height to logo images** in Header and Footer
2. **Add font-display: swap** to prevent invisible text during font load
3. **Reserve space for fonts** using system font fallbacks

### Files to Modify
- `src/components/layout/Header.tsx` - Add logo dimensions
- `src/components/layout/Footer.tsx` - Add logo dimensions
- `src/index.css` - Ensure font-display: swap

---

## Phase 3: Remove Unused Preconnects

### Problem
Lighthouse warnings about unused preconnects:
- fonts.googleapis.com (not used - using local fontsource)
- fonts.gstatic.com (not used)
- fresha.com (only used on button click)

### Solution
Remove unused preconnects from `index.html` to reduce connection overhead.

### Files to Modify
- `index.html` - Remove unused preconnects

---

## Phase 4: Mobile Nav Hover Backgrounds

### Requirement
Add subtle hover backgrounds to nav links in mobile menu.

### Solution
Add `hover:bg-gray-50` or `hover:bg-accent/5` classes to mobile nav items.

### Files to Modify
- `src/components/layout/Header.tsx` - Add hover states to mobile nav links

---

## Technical Implementation Details

### HeroSectionNew.tsx Changes

```text
Before (CSS background-image):
motion.div with style={{ backgroundImage: `url(${heroClinicNew})` }}

After (proper <img> tag):
- Absolute positioned <img> element
- fetchPriority="high" 
- loading="eager"
- Explicit width/height attributes
- object-fit: cover styling
```

### index.html Preload Addition
```html
<link rel="preload" as="image" href="/src/assets/hero-clinic-new.png" 
      type="image/png" fetchpriority="high" />
```

### Logo Dimension Fix
```html
<!-- Add explicit width/height -->
<img src={logo} width={88} height={56} ... />
```

### Mobile Nav Hover States
```typescript
// Add to className:
"hover:bg-gray-50/80 active:bg-gray-100/80"
```

---

## Expected Results After Implementation

| Metric | Before | After (Est.) | Improvement |
|--------|--------|--------------|-------------|
| LCP | 16.6s | < 3s | ~80% faster |
| FCP | 2.2s | < 1.8s | ~20% faster |
| CLS | 0.143 | < 0.1 | Fixed |
| TBT | 437ms | ~350ms | ~20% faster |

---

## Important Notes

1. **Image Conversion Required**: The hero image needs to be converted to WebP format. This should be done using an external tool (like Squoosh or ImageMagick) as Vite doesn't automatically convert images. For now, we'll optimize the loading pattern.

2. **Progressive Enhancement**: The hero will use the existing PNG but with proper loading attributes. When a WebP version is added, it can be swapped in.

3. **Mobile-First Priority**: All changes prioritize mobile performance since that's where the biggest issues are.
