
# Plan: Improve Mobile Navigation UI/UX

---

## Current Issues

Looking at the mobile menu, I've identified these UX problems:
1. **Plain appearance** - Menu items lack visual distinction
2. **Missing icons** - Only Services has visual context, other links are text-only
3. **Cluttered layout** - Items blend together without clear separation
4. **Weak visual hierarchy** - All items look the same priority

---

## Proposed Improvements

### 1. Add Icons to All Navigation Links

Add recognizable icons to each nav item for quick scanning:

| Link | Icon |
|------|------|
| Shop | ShoppingBag |
| Prices | PoundSterling |
| Blog | BookOpen |
| Contact | Mail |
| About | Users |

### 2. Visual Section Separators

Add subtle dividers between menu sections:
- Navigation links section
- Contact section (phone + book button)

### 3. Improved Spacing & Typography

- Increase gap between nav items from `gap-1` to `gap-2`
- Add subtle background tint to each item for better touch target visibility
- Use slightly larger text for main nav links

### 4. Enhanced Visual Design

- Add subtle left border accent on hover
- Include small arrow/chevron icon to indicate links
- Better active state indicators
- Rounded card-style backgrounds for each section

### 5. Contact Section Styling

- Move phone and book button into a visually distinct "Contact" card
- Add a subtle gradient background to make CTA stand out

---

## Technical Changes

**File:** `src/components/layout/Header.tsx`

### Import Additional Icons
```typescript
import { ShoppingBag, BookOpen, Mail, Users, PoundSterling } from "lucide-react";
```

### Update navLinks Array (around line 83)
Add icons to each link object:
```typescript
const navLinks = [
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Prices", href: "/prices", icon: PoundSterling },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "About", href: "/about", icon: Users },
];
```

### Refactor Mobile Nav Section (lines 536-564)
```tsx
{/* Main nav links with icons */}
{navLinks.map((link) => (
  'external' in link && link.external ? (
    <a
      key={link.href}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 font-body font-medium py-3.5 px-4 rounded-2xl min-h-[52px] touch-manipulation transition-all duration-200 text-gray-800 hover:text-accent hover:bg-accent/5 active:scale-[0.98] group"
    >
      <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
        <link.icon className="h-5 w-5 text-accent" />
      </span>
      <span className="flex-1">{link.name}</span>
      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors" />
    </a>
  ) : (
    <a
      key={link.href}
      href={link.href}
      className={cn(
        "flex items-center gap-3 font-body font-medium py-3.5 px-4 rounded-2xl min-h-[52px] touch-manipulation transition-all duration-200 group",
        isActiveLink(link.href)
          ? "text-accent bg-accent/10"
          : "text-gray-800 hover:text-accent hover:bg-accent/5 active:scale-[0.98]"
      )}
      onClick={() => setMobileMenuOpen(false)}
    >
      <span className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
        isActiveLink(link.href) ? "bg-accent/20" : "bg-accent/10 group-hover:bg-accent/20"
      )}>
        <link.icon className="h-5 w-5 text-accent" />
      </span>
      <span className="flex-1">{link.name}</span>
      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors" />
    </a>
  )
))}

{/* Divider */}
<div className="my-3 mx-4 border-t border-gray-200/60" />

{/* Contact Section */}
<div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-4 mx-2">
  <a
    href="tel:02085981200"
    className="flex items-center gap-3 text-gray-800 font-medium py-2 touch-manipulation"
  >
    <span className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
      <Phone className="h-5 w-5 text-accent" />
    </span>
    <span className="font-body font-bold">0208 598 1200</span>
  </a>

  <Button asChild className="w-full mt-3 h-14 text-base font-bold">
    <a href="...">Book an Appointment</a>
  </Button>
</div>
```

---

## Files to Edit

| File | Changes |
|------|---------|
| `src/components/layout/Header.tsx` | Add icons import, update navLinks with icons, refactor mobile nav layout |

---

## Expected Result

**Before:**
- Plain text links without icons
- All items have same visual weight
- Contact section blends with nav links

**After:**
- Each nav link has a distinctive icon in a tinted circle
- Right chevron arrows indicate clickable links
- Active page is visually highlighted
- Contact section is separated with gradient background card
- Better visual hierarchy and scannability
- Larger touch targets with clear boundaries
