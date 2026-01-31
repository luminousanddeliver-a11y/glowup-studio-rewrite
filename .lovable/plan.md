

# Homepage Navbar & Hero Blending Fix

This plan addresses making the homepage navbar appear on top of the hero image, with the hero extending visually behind the transparent navbar.

---

## Current Issue

The header is already configured to be fully transparent on the homepage (`rgba(0, 0, 0, 0)` when not scrolled). However, the hero section currently starts **below** the header in the DOM layout, creating a visual gap rather than having the hero extend behind the navbar.

---

## Solution

Apply the same pattern used on other pages (Shop, About, etc.) - use a negative top margin to pull the hero section up behind the sticky header, with compensating top padding for the content.

**File:** `src/components/home/HeroSectionNew.tsx`

**Change (Line 43):**
```text
Current:
<section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">

Updated:
<section className="-mt-[80px] pt-[80px] relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
```

This:
- `-mt-[80px]` pulls the hero section up by 80px (the header height) so it starts behind the navbar
- `pt-[80px]` adds padding to the section so the content doesn't get hidden behind the navbar
- The background image and overlays will now extend behind the transparent header

---

## Expected Result

The homepage hero image will extend visually behind the navbar (as shown in the reference image), with:
- Navbar fully transparent with white text/logo visible against the dark hero background
- Hero image seamlessly blending behind the navbar
- Content properly positioned below the navbar area
- On scroll, the navbar will become opaque white with blur as it currently does

