---
name: JWC Company Website
description: A measured architectural brand system for accountable construction and engineering delivery.
colors:
  construction-red: "#e32017"
  construction-navy: "#062650"
  deep-navy: "#03203f"
  warm-background: "#eae6e3"
  light-surface: "#f5f2ef"
  raised-surface: "#fbf9f7"
  primary-copy: "#08244b"
  muted-copy: "#5f6269"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  section: "clamp(72px, 10vw, 144px)"
components:
  button-primary:
    backgroundColor: "{colors.construction-red}"
    textColor: "{colors.raised-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 28px"
  button-outline:
    backgroundColor: "#00000000"
    textColor: "{colors.construction-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "17px 27px"
  navigation:
    backgroundColor: "{colors.warm-background}"
    textColor: "{colors.primary-copy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "92px"
---

# Design System: JWC Company Website

## Overview

**Creative North Star: “The Measured Build”**

Reading this as a multi-page corporate brand site for commercial decision-makers, with a premium construction and architectural-editorial language built in native Astro and CSS. The design is stable, precise, deliberate, and image-led. It should feel like a construction drawing becoming a finished interior: structural grids establish order, diagonal masks create movement, red measurement rules signal precision, and deep navy surfaces anchor credibility.

The original images in `../references/original-demo-images/` are the visual authority. Supplementary renders in `../references/section-reference-renders/` clarify details but never override them. The reference palette is fixed; no generated palette may replace it. Design dials are `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 5`, and `VISUAL_DENSITY: 4`: asymmetric but controlled composition, purposeful choreography, and open corporate information density.

The Main page follows this exact visual sequence: Hero, Who We Are, What We Do, Highlighted Cases, Selected Clients, How We Deliver, integrated Repeat Clients, and the final Work With JWC conversion panel. Contact remains a dedicated route. Dedicated Cases, case-detail, Join Us, and Contact routes reuse the same visual language. Desktop authority is 1600×900; review additionally at 1366×768, 1024, 768, and 390 pixels. Each multi-column composition declares a deliberate mobile reading order and no viewport may produce horizontal overflow.

**Key Characteristics:**

- Warm neutral principal canvas with deep construction navy and one engineering-red accent.
- Condensed uppercase display typography paired with a readable grotesk body face.
- Sharp geometry, clipped diagonals, sparse blueprint marks, thin rules, and nearly zero radius.
- Real supplied raster imagery with controlled crops rather than decorative mockups.
- Four motion families only: Build, Measure, Focus, and Progress.
- Content remains visible and useful before animation; reduced motion removes choreography without hiding information.

## Colors

The palette balances a warm architectural canvas with deep blue structural fields and a precise red signal. Frontmatter color tokens are normative.

### Primary

- **Construction Red:** Reserved for measurement rules, active states, CTA fields, focus emphasis, and narrow diagonal edges. Its rarity makes it decisive.

### Secondary

- **Construction Navy:** Main brand ink, display copy, outline controls, and structural panels.
- **Deep Navy:** Full-width process, statistics, blueprint, and footer surfaces where stronger depth is required.

### Neutral

- **Warm Background:** Principal light page canvas and sticky header surface.
- **Light Surface:** Secondary light blocks that need separation without shadow.
- **Raised Surface:** High-clarity copy and image-adjacent surface.
- **Primary Copy:** Body and heading ink on light surfaces.
- **Muted Copy:** Supporting copy only after contrast has been checked against its exact surface.

**The Fixed Canvas Rule.** The principal light background is always the supplied warm-background token. Do not substitute white, beige variants, or generated neutrals.

**The One Signal Rule.** Construction Red is the only accent. Do not add purple, teal, gold, or section-specific accent colours.

**The Contrast Rule.** Never reduce supporting copy to decorative low contrast. Dark surfaces use the raised light surface colour or a tested high-contrast tint, not muted grey.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallback)

**Body Font:** Barlow (with Arial and sans-serif fallback)

**Replaceable Wordmark Fallbacks:** PMingLiU and Segoe Script are permitted only inside clearly marked placeholder client-logo treatments. They reproduce the supplied demo silhouettes until official vector marks are provided and must not be used for interface typography.

**Character:** Barlow Condensed provides the narrow, engineered headline silhouette visible in the reference without introducing a generic editorial serif. Barlow keeps long project, service, and contact copy highly readable while remaining visually related.

### Hierarchy

- **Display** (600, fluid 48-96px, 0.94 line-height): Hero and major section statements. Preserve intentional reference line breaks on desktop; reduce the fluid ceiling before allowing overflow on mobile.
- **Headline** (600, fluid 36-76px, 1.0 line-height): Section and route titles. Use balanced wrapping and keep letter spacing no tighter than -0.04em.
- **Title** (600, 20-30px, 1.1 line-height): Case names, service titles, relationship names, and delivery steps.
- **Body** (400, 16-18px, 1.6 line-height): Explanatory copy with a maximum readable measure of 65-75 characters.
- **Label** (600, 13px, 0.12em tracking): Navigation, short architectural labels, filter text, and compact metadata. Uppercase is reserved for these short functional roles.

**The Condensed Hierarchy Rule.** Headlines use the condensed family; paragraphs do not. Never use all-caps for body copy.

**The Reference Copy Rule.** Required names, punctuation, date periods, and fixed headline line breaks remain unchanged where the demos specify them. Typography adapts around the content rather than rewriting it.

## Elevation

The system is flat by default. Depth is communicated with tonal surfaces, image planes, clipping, overlap, and one-pixel architectural separators. Broad shadows, glossy overlays, and floating card treatments are prohibited. The sticky header may use restrained background blur only after scrolling and must retain a solid warm-background fallback.

**The Structural Depth Rule.** If separation can be expressed through spacing, a hairline, a colour field, or a crop boundary, do not add a shadow.

**The Sharp Plane Rule.** Corners are square. Any radius not present in the supplied visual references must be removed.

## Components

### Buttons

- **Shape:** Sharp rectangular field with no radius.
- **Primary:** Construction Red with high-contrast raised-surface text, one-line label, and right-aligned Phosphor arrow.
- **Hover:** A restrained darker-red directional sweep and approximately 6px arrow travel over 180ms. The label does not scale.
- **Focus:** A visible high-contrast outline separated from the red field. Focus must never rely on colour change alone.
- **Outline:** Transparent or light-surface field with a one-pixel navy boundary. Do not pair the boundary with a wide shadow.

### Chips

- **Style:** Case categories are flat text controls in one horizontal rail, not pills. The selected state uses a red underline and programmatic state.
- **State:** The mobile rail may scroll horizontally while every option remains keyboard reachable and visibly focused.

### Cards / Containers

- **Corner Style:** Square, with no decorative container radius.
- **Background:** Cases use fixed landscape media frames plus compact metadata below, separated through spacing and red/navy rules rather than card chrome.
- **Shadow Strategy:** None at rest.
- **Border:** Thin structural dividers only where the reference establishes a grid.
- **Internal Padding:** Use the shared spacing scale and preserve open whitespace.

### Inputs / Fields

The site has no contact form. Do not create input styling or invent fields. Contact information is rendered as direct, selectable links and text blocks.

### Navigation

- Desktop header begins at approximately 88-96px and may condense to 72-78px after scroll. Logo is left; Main, Cases, and Contact are centered-right; EN, 繁, and 简 keep stable reserved width at the right.
- The header remains sticky. Its scrolled surface is a lightly translucent warm background with restrained blur and a one-pixel pale separator.
- Active navigation uses one smoothly moving red underline. Desktop navigation remains on one line.
- Mobile navigation opens, closes, traps no focus, supports Escape, keyboard, and touch, and restores focus to its trigger.

### Hero

- Desktop composition is approximately 42% copy and 58% photography within the opening viewport including header.
- Preserve the three fixed headline lines and reveal them by line. The eyebrow rule arrives first; the red punctuation arrives last; supporting copy and CTA follow.
- Reception imagery reveals from the right through a mask, starting near 1.035 scale and settling to 1.0. Never exceed 1.04.
- Mobile stacks copy above image while retaining headline dominance and CTA visibility.

### Who We Are

- Desktop composition is approximately 76% editorial content and 24% navy statistics rail, with the commitment label between them.
- Four statistics count once only. Red Vision and Mission rules extend as measurement cues. The lower image uses a simple vertical mask.
- Mobile reading order is content, image, then statistics.

### Service Selector

- Upper composition is approximately 48% light copy and 52% active-case media with a pronounced diagonal media edge. The lower field is deep navy with three equal service controls.
- Use an accessible tab pattern: selected state, arrow keys, Home, End, and stable focus. Selecting 01, 02, or 03 updates image, name, category, location, year, scope, and destination without navigation or layout shift.
- Preload all linked images. Use a layered crossfade or diagonal mask over approximately 520ms with a tiny focus zoom.

### Cases

- Cases are four columns at desktop, two at tablet, and one at mobile. The filter order is fixed by the content layer.
- Media frames preserve aspect ratio and subject placement. Hover may extend one rule and move one arrow; it never changes card proportions.

### Selected Clients

- Desktop composition is approximately 28% intro, 54% logo groups, and 18% metric/action rail. Logo groups form a 2×2 matrix; preserve empty space.
- Official logos are absent. Any interim wordmark treatment is an explicitly replaceable content record, not an official mark. Do not convert logos into cards, a marquee, or individually animated tiles.
- The secondary action is `Meet Us` and routes to the Join Us page.

### Delivery Process

- Use four adjacent clipped media panels, a horizontal red process line, numbered circles, four captions, and one assurance row on desktop. Mobile becomes a vertical process with media beside each step.
- The line progresses once in content order. Entrances use a short stagger and never hijack scroll.

### Repeat Clients

- This interface is visually locked: introductory copy left and an integrated blueprint-style navy panel right containing the exact 3×2 relationship grid with literal periods and thin dividers. Do not add a separate lower relationship band.
- Only subtle entrance motion is allowed. No timeline, duration calculation, hover card, modal, filter, controls, extra metadata, or additional sections.

### Contact Route

- This standalone route is visually locked: approximately 46% content and 54% reception image with a diagonal red boundary, followed by a full-width navy footer. It is not repeated on the Main page.
- Company contact and General Manager blocks remain visible. Name, Direct, and Email each display `TO BE CONFIRMED`. No form is permitted.
- Mobile reading order is contact content, image, then footer.

### Motion

- Build: panels assemble from edges and diagonal image masks reveal content.
- Measure: red rules extend, crosshairs appear only where meaningful, and line icons draw into place.
- Focus: media settles from 1.025-1.035 scale to rest while supporting copy fades in.
- Progress: statistics count once and process lines extend in sequence.
- Timing tokens are 180ms hover, 280ms control, 520ms content replacement, and 720ms section entrance. The primary ease is `cubic-bezier(.22, 1, .36, 1)`; exit ease is `cubic-bezier(.4, 0, 1, 1)`.
- Motion is enhancement only. Initial content remains visible, animations run once where specified, and `prefers-reduced-motion: reduce` removes transforms, counting, and scroll choreography.

## Do's and Don'ts

### Do:

- **Do** compare every section at 1600×900 against its matching original demo image before considering it finished.
- **Do** preserve the fixed background, navy fields, single red signal, sharp geometry, diagonal masks, thin rules, and reference layout ratios.
- **Do** use Barlow Condensed for display hierarchy and Barlow for readable copy, loaded from self-hosted Fontsource packages with swap-safe rendering.
- **Do** use the supplied semantic raster paths and descriptive alternative text; reserve dimensions to prevent layout shift.
- **Do** keep cases, clients, services, relationships, delivery steps, and contact information in the typed content layer.
- **Do** verify desktop, laptop, tablet, and 390px mobile layouts with no horizontal overflow.
- **Do** preserve full keyboard operation, visible focus, reduced-motion behavior, and required reading order.

### Don't:

- **Don't** make the website resemble a generic software landing page, playful technology template, or card-heavy dashboard.
- **Don't** introduce rounded-card grids, pill-heavy controls, glossy gradients, decorative glassmorphism, large shadows, or unrelated accent colours.
- **Don't** replace official missing logos with marks presented as approved brand assets.
- **Don't** use continuous marquees, automatic carousels, typewriter headlines, bounce-heavy easing, aggressive zoom, perpetual floating, or scroll hijacking.
- **Don't** gate content visibility on JavaScript animation classes; the page must remain readable when scripts or transitions do not run.
- **Don't** add a timeline, calculated duration, hover card, modal, filter, controls, or extra metadata to Repeat Clients.
- **Don't** add a form to Contact or hide any General Manager placeholder.
- **Don't** invent permanent claims, addresses, project dates, client approvals, bilingual copy, or people.
