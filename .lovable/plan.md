

## Problem
The white outer glow on the teal "Starts Here" text doesn't look good against the hero background. We need a different approach to improve contrast.

## Better Alternatives

Here are 3 options that will render cleanly:

1. **Dark text stroke/outline** — Add a subtle dark outline around the teal text using `-webkit-text-stroke` or a dark text-shadow instead of white. This creates definition without a glow effect.

2. **Semi-transparent dark pill/badge behind the text** — Wrap "Starts Here" in a small inline background (like `bg-black/40 px-3 py-1 rounded`) so the teal pops against a consistent dark backdrop regardless of the image behind it.

3. **Switch to white text with teal underline accent** — Make "Starts Here" white like the rest of the heading, but add a teal gradient underline or bottom border decoration beneath it. This avoids the contrast issue entirely while still highlighting the phrase.

**My recommendation:** Option 2 (dark pill) is the most reliable — it guarantees contrast regardless of what's behind it and looks modern/premium. Option 3 is the cleanest if you prefer no background shape.

## Implementation
- Remove the current `textShadow` style from the `<span>`
- Apply the chosen approach (just a CSS class change, no structural changes)
- Single file edit: `src/components/home/HeroSectionNew.tsx` line 79

