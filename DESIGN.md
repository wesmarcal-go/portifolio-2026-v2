---
name: Wes Marçal Portfolio
description: Copper Briefing Room — professional, not formal; type and spacing as primary design assets
colors:
  peach: "#E98154"
  cognac: "#944929"
  pine: "#304D53"
  ink: "#161110"
  linen: "#D8BFA0"
  taupe: "#9B7F58"
typography:
  display:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.625rem, 1.2rem + 1.8vw, 34px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Merriweather, Georgia, serif"
    fontSize: "clamp(1rem, 0.85rem + 0.6vw, 20px)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Heebo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Heebo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "28px"
    letterSpacing: "normal"
  nav:
    fontFamily: "Heebo, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "28px"
    letterSpacing: "-1px"
rounded:
  sm: "8px"
  md: "11px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "50px"
  xl: "76px"
  reel: "30px"
components:
  button-primary:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
    height: "44px"
  button-primary-active:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
    height: "44px"
  nav-item:
    textColor: "{colors.cognac}"
    typography: "{typography.nav}"
  nav-item-active:
    textColor: "{colors.peach}"
    typography: "{typography.nav}"
  card-reel:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.taupe}"
    rounded: "{rounded.md}"
    width: "318px"
  cases-gate-card:
    backgroundColor: "color-mix(in srgb, #161110 58%, transparent)"
    textColor: "{colors.linen}"
    rounded: "{rounded.md}"
    padding: "28px 28px 24px"
    width: "520px"
  link-social:
    textColor: "{colors.linen}"
    typography: "{typography.label}"
---

# Design System: Wes Marçal Portfolio

## Overview

**Creative North Star: "Copper Briefing Room"**

A night briefing room for senior product work: warm copper signal on deep ink, linen type, and cool pine as the quiet counterweight. The atmosphere is professional without formality — confident, direct, and human. Spacing and typography are treated as primary design assets: rhythm, measure, and type pairing carry as much meaning as color.

Depth comes from tonal layering (ink field, scrims, muted labels) rather than a shadow vocabulary. Interaction is tactile and confident — press scales, accent hovers, staggered entrances — always respecting reduced-motion and reduced-transparency preferences.

**Key Characteristics:**
- Warm copper accent on near-black ink; cool pine as secondary structural calm
- Merriweather (voice) + Heebo (interface) pairing
- Generous, intentional spacing scale; type size and tracking as hierarchy
- Flat/tonal by default; glass + rare shadow only on the cases gate
- Continuous marquee proof on home; locked confidentiality stage on cases

## Colors

Earthy, muted, and warm-led: copper and cognac against ink, cooled by pine.

### Primary
- **Peach** (`#E98154`): Active nav, eyebrows, email CTA, primary button fill, focus rings. The rare warm signal — use sparingly so it stays authoritative.
- **Cognac** (`#944929`): Inactive nav and resting accent states. Peach’s quieter sibling.

### Secondary
- **Pine** (`#304D53`): Cool teal counterweight to the warm palette. Structural calm — secondary surfaces, quiet contrast, or supporting chrome when warmth would dominate.

### Neutral
- **Ink** (`#161110`): Page background and dark field.
- **Linen** (`#D8BFA0`): Primary text and headlines.
- **Taupe** (`#9B7F58`): Muted labels (reel titles, inactive lang options, placeholders).

**The Copper Signal Rule.** Peach occupies a small fraction of any screen (active state, eyebrow, CTA, focus). If everything glows copper, nothing does.

**The Ink Field Rule.** Screens live on ink. Do not introduce large light panels, purple gradients, or cool-gray “AI default” backgrounds.

## Typography

**Display Font:** Merriweather (with Georgia, serif)
**Body Font:** Heebo (with system-ui, sans-serif)

**Character:** Serif carries positioning and persuasion; sans runs navigation, labels, and controls. Tracking tightens on nav (`-1px`) so interface type feels decisive, not decorative.

### Hierarchy
- **Display** (400, clamp to 34px, 1.2): Hero headlines across home / career / cases.
- **Headline** (400, ~22–28px, 1.25, tracking −0.02em): Cases gate card title.
- **Title** (400, clamp to 20px, 1.4): Eyebrows and CTA availability line (serif).
- **Body** (400, 16px, 1.5): Gate body copy and denser reading.
- **Label** (300, 14px, 28px line-height): Social links and email; light weight is intentional.
- **Nav** (700, 20px, 28px, tracking −1px): Header routes — bold Heebo only.

**The Type-as-Asset Rule.** Do not flatten hierarchy into one size/weight. Spacing between identity column and intro (~76px) and the 7px eyebrow→headline gap are part of the brand, not leftovers.

## Layout

Centered content frame max-width **1152px** (`.page-frame`). Horizontal page padding **50px** (`lg`), collapsing to **24px** at ≤480px; large structural gap **76px** (`xl`) → **40px** at ≤480px.

Hero pattern: identity column (222px) beside intro (max-width 645px), gap `xl`. Break to stacked column at **≤900px**. Home reserves a tall reels band (570px desktop); mobile lets it size to content.

**The Measure Rule.** Intro copy stays within ~645px. Do not stretch headlines full-bleed edge-to-edge.

## Elevation & Depth

Layered tonal system: ink field, blurred/scrimmed media, translucent gate card. Shadows are rare and structural, not decorative chrome.

### Shadow Vocabulary
- **Gate lift** (`box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45)`): Only on the cases access card, paired with `backdrop-filter: blur(28px) saturate(160%)`.

**The Scrim-Not-Shadow Rule.** Prefer ink scrims and blur to separate private proof from the UI. Do not invent card stacks with multi-layer drop shadows on home or career.

## Shapes

Gently softened rectangles (**11px** / `md`) on reel thumbs, cases cells, and the gate card. Form controls use **8px** (`sm`). Avatar is a full pill (**9999px**). Borders are hairline (1px) in linen at low opacity — never heavy chrome outlines.

**The Soft Rect Rule.** Default interactive and media surfaces use ~11px radius. Do not go fully squared or pill-shaped on cards/buttons (avatar excepted).

## Components

### Buttons
Tactile and confident.
- **Shape:** Soft rect (8px)
- **Primary:** Peach fill, ink text, min-height 44px, padding 10×18; `:active` scale(0.97)
- **Hover / Focus:** Accent border/focus ring in peach (`outline: 2px solid`, offset 3px) on focus-visible; no loud glow

### Cards / Containers
- **Reel card:** 318px wide; media radius 11px; label taupe, 16px, fixed 54px label band
- **Cases gate card:** max 520px; translucent ink mix + linen border at ~20% + glass blur; internal padding ~28px; enters at scale 0.95 → 1. Contains title, body, and contact via `link-social` (email + LinkedIn).
- **Border:** Hairline linen alpha, not solid cognac frames

### Navigation
- **Desktop:** Bold Heebo 20px; cognac default → peach active/hover; 16px arrow nudges 2px on hover/press
- **Lang switch:** `pt | en`; active bold linen, inactive taupe light; hover peach
- **Mobile ≤900px:** Full-page overlay menu; drawer ease; focus trap; Escape/link to close

### Identity (signature)
Avatar 71px circle + wordmark, column width 222px, gap 12px. Staggered enter (fade + 10px translateY). Same brand mark on every surface — never demote to nav-only chrome.

### Link Social
Light Heebo 14px (large variant 20px in mobile menu); linen → peach on hover; press scale 0.97.

### Reels Marquee (signature)
Full-bleed continuous track, 48s linear loop, 30px gaps; under `prefers-reduced-motion`, animation off and manual horizontal scroll.

## Do's and Don'ts

### Do:
- **Do** keep Peach rare and purposeful (active, eyebrow, CTA, focus).
- **Do** treat Merriweather + Heebo roles as fixed: serif for voice, sans for chrome.
- **Do** honor `prefers-reduced-motion` (fade-only enters; marquee → scroll) and `prefers-reduced-transparency` (solid gate, no blur).
- **Do** lead each surface with Identity + eyebrow + headline before secondary proof.
- **Do** keep cases locked visually: blur + scrim + gate; contact is the unlock path.

### Don't:
- **Don't** migrate the whole system to utility-class sprawl or invent a second palette.
- **Don't** add purple/cyan AI-slop gradients, glow stacks, or light dashboard cards on ink.
- **Don't** invent password unlock UI or fabricate case content in product.
- **Don't** center everything into a marketing card grid; the briefing room is asymmetric (identity column + measure-limited intro).
- **Don't** pause the home marquee for decorative controls unless product requirements change.
