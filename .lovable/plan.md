
# Plan: Nested Mobile Services Menu

---

## Current Behavior
When clicking "Services" on mobile, ALL categories and their services expand at once (lines 438-460), showing a very long list.

## Desired Behavior
1. Click "Services" → Shows only category headers (Laser & Hair Removal, Facials & Skin, etc.)
2. Click a category header → Expands to show services under that category
3. Only one category can be expanded at a time (optional, but better UX)

---

## Implementation

### 1. Add New State for Expanded Category

**File:** `src/components/layout/Header.tsx`

Add state to track which category is open (line ~110):
```typescript
const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
```

---

### 2. Modify Mobile Services Section

**File:** `src/components/layout/Header.tsx` (lines 438-460)

Replace the current category display with nested accordions:

```tsx
{mobileServicesOpen && (
  <div className="mt-2 space-y-1 pb-2">
    {serviceCategories.map((category) => (
      <div key={category.name}>
        {/* Category Header - Clickable */}
        <button
          onClick={() => setExpandedCategory(
            expandedCategory === category.name ? null : category.name
          )}
          className="flex items-center justify-between w-full font-body font-medium text-accent text-sm py-2.5 px-2 rounded hover:bg-accent/5 min-h-[44px] touch-manipulation"
        >
          <span className="flex items-center gap-2">
            <category.icon className="h-4 w-4" />
            {category.name}
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${
            expandedCategory === category.name ? 'rotate-180' : ''
          }`} />
        </button>
        
        {/* Services List - Only shown when category is expanded */}
        {expandedCategory === category.name && (
          <div className="flex flex-col gap-0.5 pl-6 ml-2 border-l-2 border-accent/20">
            {category.services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="font-body text-sm text-muted-foreground hover:text-accent py-2.5 px-2 rounded min-h-[44px] flex items-center touch-manipulation"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </a>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)}
```

---

### 3. Reset Category State When Menu Closes

Add cleanup when mobile menu closes (in the menu toggle handler):
```typescript
const handleMobileMenuToggle = () => {
  setMobileMenuOpen(!mobileMenuOpen);
  if (mobileMenuOpen) {
    setExpandedCategory(null);
    setMobileServicesOpen(false);
  }
};
```

---

## Files to Edit

| File | Changes |
|------|---------|
| `src/components/layout/Header.tsx` | Add `expandedCategory` state, refactor mobile services to nested accordion |

---

## Expected Result

**Before:**
- Click Services → All 6 categories + 25+ services appear at once

**After:**
- Click Services → Only 6 category headers appear
- Click "Laser & Hair Removal" → Shows 3 services under it
- Click "Facials & Skin" → Collapses Laser, shows 6 facial services
- Cleaner, more organized mobile navigation
