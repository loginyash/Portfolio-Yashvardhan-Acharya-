---
name: Spider-Verse Editorial
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e6bdb9'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#ac8885'
  outline-variant: '#5c3f3d'
  surface-tint: '#ffb3ae'
  primary: '#ffb3ae'
  on-primary: '#68000b'
  primary-container: '#c0001d'
  on-primary-container: '#ffcdc9'
  inverse-primary: '#c0001d'
  secondary: '#bbc3ff'
  on-secondary: '#001b96'
  secondary-container: '#0032f7'
  on-secondary-container: '#bfc6ff'
  tertiary: '#c9c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#5f5e5e'
  on-tertiary-container: '#dbd8d7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930013'
  secondary-fixed: '#dfe0ff'
  secondary-fixed-dim: '#bbc3ff'
  on-secondary-fixed: '#000d5f'
  on-secondary-fixed-variant: '#0029d1'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.01em
  subheader:
    fontFamily: spaceGrotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-main:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  ui-label:
    fontFamily: spaceGrotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin: 64px
  container-max: 1440px
---

## Brand & Style

This design system establishes a high-fashion, technical aesthetic that bridges the gap between cinematic kinetic energy and elite editorial design. The style is a hybrid of **High-Contrast Bold** and **Brutalism**, refined through a luxury lens. It aims to evoke a sense of "Chromatic Precision"—where the grit of a comic book meets the cleanliness of a premium fashion house. 

The target audience is high-tier recruiters and creative directors who value both technical rigor and bold storytelling. The UI should feel intentional, expensive, and confident. Movement is suggested through geometric textures rather than literal illustrations, maintaining a professional portfolio atmosphere.

## Colors

The palette is anchored in a deep, layered darkness. The foundation is a matte black for the deepest planes, with charcoal used to define structural containers. 

**Crimson (#C0001D)** acts as the "Hero" accent, used for high-priority actions and brand-critical highlights. **Cobalt Blue (#1A3FFF)** is used as a "Glow" accent—reserved for interactive states, technical data visualizations, and subtle lighting effects that simulate a digital multiverse. Text is strictly monochromatic to maintain editorial legibility, utilizing off-white for primary content and a medium gray for metadata and supporting copy.

## Typography

The typographic hierarchy is built on extreme scale contrast. **Massive Display** headings (using Anton or a similar condensed heavy sans) should dominate the viewport, often breaking traditional margin constraints to create a sense of scale. 

**Space Grotesk** handles the technical "interface" layer, providing a futuristic, geometric feel for labels, subheaders, and navigation. **Inter** is utilized for body copy to ensure maximum readability and a professional, systematic tone. All UI labels should be uppercase with generous letter spacing to emphasize the technical, high-fashion vibe.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model within a maximum container width, but allows for "bleeding" elements that break the grid to create dynamic interest. A 12-column system is standard, with generous 64px outer margins to mimic the white space of a luxury magazine.

The spacing rhythm is strict, based on a 4px baseline. Use wide vertical padding between sections (160px+) to allow the portfolio pieces to breathe. Grid lines should occasionally be made visible (1px white at 12% opacity) to lean into the "technical wireframe" aesthetic of the Spider-Verse's digital glitch world.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

1.  **Base Layer:** Matte Black (#0A0A0A) with a subtle 5% opacity halftone dot pattern.
2.  **Surface Layer:** Charcoal (#111111) used for cards and sections.
3.  **Boundary:** Surfaces are defined by 1px white borders at 12% opacity.
4.  **Glitch Depth:** Geometric spider-web wireframes at 8% opacity are used in the background of primary sections to create a sense of architectural depth without adding visual noise.
5.  **Interactive Glow:** High-priority elements use a soft, 20px blur of Cobalt Blue or Crimson to "bleed" light onto the matte black surface when hovered.

## Shapes

The shape language is strictly **Sharp (0px)**. To maintain a sophisticated, technical, and slightly aggressive vibe, there are no rounded corners. Buttons, cards, and input fields must have hard 90-degree angles. 

Occasional diagonal "clipped corners" (45-degree cuts) may be used on primary action buttons or decorative frames to reference the angular nature of the Spider-Man mask and geometric webbing.

## Components

### Buttons
Primary buttons are solid Crimson (#C0001D) with White text, using the `ui-label` type style. Secondary buttons are outlined with a 1px white border at 20% opacity. All buttons feature a hard-edge "glitch" transition on hover, shifting the background color slightly or adding a 1px Cobalt Blue offset shadow.

### Cards & Project Tiles
Project cards use the Charcoal (#111111) background. Images within cards should have a slight grayscale filter that returns to full color on hover. The 1px border is mandatory. Use halftone patterns as a background fill for empty states or text-only cards.

### Navigation
The navigation bar is a fixed, top-aligned element. It is transparent with a background blur (Glassmorphism) but retains the 1px bottom border. Use `ui-label` for links.

### Input Fields
Underlined or fully boxed with a 1px border. The focus state replaces the white border with a Cobalt Blue (#1A3FFF) border and a faint outer glow.

### Chips & Tags
Small, sharp-edged rectangles. Use Cobalt Blue text on a transparent background with a 1px blue border to denote technical skills or categories.

### Decorative Accents
Small "coordinates" or "data timestamps" in `body-sm` (9A9A9A) should be placed near the corners of large sections to enhance the technical, sophisticated feel.