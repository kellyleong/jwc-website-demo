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

The confirmed implementation and subsequent user-approved changes take precedence over earlier references. The original images in `../references/original-demo-images/` establish the base visual direction. Supplementary renders in `../references/section-reference-renders/` clarify details but never override them. The reference palette is fixed; no generated palette may replace it. Design dials are `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 5`, and `VISUAL_DENSITY: 4`: asymmetric but controlled composition, purposeful choreography, and open corporate information density.

The Main page follows this exact visual sequence: Hero, Who We Are, What We Do, Highlighted Cases, Selected Clients, How We Deliver, integrated Repeat Clients, Client Feedback, and the Work With JWC conversion panel. The updated design is the canonical Main page; there is no separate version route or floating Motion review control. Contact remains a dedicated route. Dedicated Cases, case-detail, Join Us, and Contact routes reuse the same visual language. Desktop authority is 1600×900; review additionally at 1366×768, 1024, 768, and 390 pixels. Each multi-column composition declares a deliberate mobile reading order and no viewport may produce horizontal overflow.

**Key Characteristics:**

- Warm neutral principal canvas with deep construction navy and one engineering-red accent.
- Condensed uppercase display typography paired with a readable grotesk body face.
- Sharp geometry, clipped diagonals, sparse blueprint marks, thin rules, and nearly zero radius.
- Project imagery with controlled crops; the Client Feedback lounge is an illustrative asset, not evidence of a client project.
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

- **Style:** Case categories are flat text controls, not pills. The selected state uses a red underline and programmatic state.
- **Mobile:** Highlighted-case filters wrap onto multiple rows, with at least 44×44px targets and approximately 15px labels. Keep every option keyboard reachable and visibly focused.

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
- Preserve desktop headline grouping and reveal it by line. The measurement rule and eyebrow lead, followed by the headline, supporting copy, and CTA; red punctuation travels with its headline.
- Reception imagery reveals from the right through a mask, starting near 1.035 scale and settling to 1.0. Never exceed 1.04.
- Mobile stacks copy above image while retaining headline dominance and CTA visibility. Let the headline use the available width instead of forcing narrow desktop wraps; use 16px supporting copy with 1.5 line-height. Mobile entrances are shorter and omit the diagonal red sweep.

### Who We Are

- Desktop composition is approximately 76% editorial content and 24% navy statistics rail, with the commitment label between them.
- The commitment label keeps the reference's rotated bottom-to-top treatment in English. Traditional and Simplified Chinese use upright `vertical-rl` text that reads naturally from top to bottom; tablet and mobile retain the horizontal label.
- Four statistics count once only. Red Vision and Mission rules extend as measurement cues. The lower image uses a simple vertical mask.
- Mobile reading order is content, image, then statistics.

### Service Selector

- Upper composition is approximately 48% light copy and 52% active-case media with a pronounced diagonal media edge. The lower field is deep navy with three equal service controls.
- Use an accessible tab pattern: selected state, arrow keys, Home, End, and stable focus. Selecting a service updates the project image, project name, location, and year without navigation.
- Preload the linked images. Use a directional diagonal mask and narrow red sweep over 620ms, with a 380ms caption entrance delayed by 160ms. Reduced motion switches content immediately.
- Below 48rem, stack the intro and project image above three compact, equal-width tabs. All service names remain visible together; do not use a horizontal service rail or swipe-based selection. Tabs are at least 64px high with a red selected underline.
- On mobile, hide the desktop numbers, icons, and expanded copy inside the controls. Show only the selected service description and capability list in a navy panel below the tabs, using 16px copy and 1.5 line-height. Image and details update together. Tablet and desktop retain the full three-column service controls.

### Cases

- Cases are four columns at desktop, two at tablet, and one at mobile. The filter order is fixed by the content layer.
- Media frames preserve aspect ratio and subject placement. Hover may extend one rule and move one arrow; it never changes card proportions.
- Traditional and Simplified Chinese page and case-detail headlines use natural CJK wrapping and relaxed line height. All sector filters remain visible together on phones instead of requiring horizontal scrolling.

### Selected Clients

- Desktop composition is approximately 28% intro, 54% logo groups, and 18% metric/action rail. Logo groups form a 2×2 matrix; preserve empty space.
- Official logos are absent. Any interim wordmark treatment is an explicitly replaceable content record, not an official mark. Do not convert logos into cards, a marquee, or individually animated tiles.
- The secondary action is `Contact Us` and routes to the Contact page.
- On narrow phones (below 39rem), stack the sector groups vertically with compact logo grids; do not require horizontal swiping to discover another sector.

### Delivery Process

- Use four adjacent clipped media panels, a horizontal red process line, numbered circles, four captions, and one assurance row on desktop. Mobile becomes a vertical process with media beside each step.
- On viewports at least 64rem wide and 48rem high with a fine pointer, hover, and no reduced-motion preference, the process holds beneath the sticky header within a 190dvh track. Native scroll position advances the line and active/completed stages; no wheel or touch scrolling is intercepted.
- Phones, touch tablets, shorter viewports, and reduced-motion users receive the normal document flow. Keep all stage copy visible.

### Repeat Clients

- This interface is visually locked: introductory copy left and an integrated blueprint-style navy panel right containing the exact 3×2 relationship grid with literal periods and thin dividers. Do not add a separate lower relationship band.
- Preserve the desktop 3×2 relationship grid. On phones, reflow into two columns and three rows with approximately 14px names and 16px periods; retain the literal dates and structural dividers.
- The approved relationship headline is “交付一個項目，延續一份信任。” in Traditional Chinese and “交付一个项目，延续一份信任。” in Simplified Chinese.
- Only subtle entrance motion is allowed. No timeline, duration calculation, hover card, modal, filter, controls, extra metadata, or additional sections.

### Client Feedback

- Place this section after Repeat Clients and before Work With JWC. Its visual reference is `C:/Users/JW_IT/Documents/ChatGPT/Company-Website/design-demo/handoff/website-image-demo/redesign/client-feedback.png`.
- Desktop uses a lounge photograph on the left, a narrow diagonal red divider, and navy copy space on the right with subtle blueprint detail. Keep the heading “Trust earned in the work.”, quotation, attribution, and controls as editable HTML.
- Assets are `public/assets/site/client-feedback-lounge.png` and `public/assets/site/client-feedback-blueprint.svg`. The lounge is explicitly illustrative.
- Tablet preserves the diagonal split with smaller typography and controls below the attribution. Below 48rem, place the full-width photo above the navy content, replace the diagonal with a horizontal red edge, and align navigation below the attribution.
- Keep both previous and next arrows visible and working on desktop, tablet, and phone. Navigation wraps through the records manually, with a 340ms directional fade; there is no autoplay. Use accessible button names, visible focus, and polite announcements. Reduced motion removes the transition.
- Content lives in `src/data/clientFeedback.ts`. The review currently contains two distinct, explicitly marked placeholders, Client 1 and Client 2. Replace them with approved quotations and attributions when supplied; never present sample text as authentic client feedback.

### Contact Route

- This standalone route is visually locked: approximately 46% content and 54% reception image with a diagonal red boundary, followed by a full-width navy footer. It is not repeated on the Main page.
- Company contact and General Manager blocks remain visible. Name, Direct, and Email each display `TO BE CONFIRMED`. No form is permitted.
- Chinese contact headlines wrap naturally inside the content plane at every supported viewport and must never disappear beneath the diagonal image boundary.
- Mobile reading order is contact content, image, then footer.

### Motion

- Build: panels assemble from edges and diagonal image masks reveal content.
- Measure: red rules extend, crosshairs appear only where meaningful, and line icons draw into place.
- Focus: media settles from 1.025-1.035 scale to rest while supporting copy fades in.
- Progress: statistics count once and process lines extend in sequence.
- Base timing tokens are 180ms hover, 280ms control, 520ms content replacement, and 720ms section entrance. The homepage overrides these where specified: desktop hero image 1150ms, service replacement 620ms, and feedback transition 340ms. The primary ease is `cubic-bezier(.22, 1, .36, 1)`; exit ease is `cubic-bezier(.4, 0, 1, 1)`.
- Motion is enhancement only. Initial content remains visible, animations run once where specified, and `prefers-reduced-motion: reduce` removes transforms, counting, and scroll choreography.

## Do's and Don'ts

### Do:

- **Do** compare every section at 1600×900 against its matching original demo image before considering it finished.
- **Do** preserve the fixed background, navy fields, single red signal, sharp geometry, diagonal masks, thin rules, and reference layout ratios.
- **Do** use Barlow Condensed for display hierarchy and Barlow for readable copy, loaded from self-hosted Fontsource packages with swap-safe rendering.
- **Do** use the supplied semantic raster paths and descriptive alternative text; reserve dimensions to prevent layout shift.
- **Do** keep cases, clients, services, relationships, client feedback, delivery steps, and contact information in the typed content layer.
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

## Responsive Review Record

The mobile changes include wider hero text, compact service tabs with selected details, wrapping highlighted-case filters, single-column case cards, vertically stacked client sectors, and a two-column repeat-client grid. Feedback arrows remain available at every breakpoint.

The service update was reviewed at 390×844, 768×1024, and 1600×900. Phone selection was checked with E&M Engineering and Maintenance, with no horizontal page overflow. The Astro production build passed. These are browser viewport checks, not a claim of testing on physical devices. Further visual review notes are recorded in `design-qa.md`.
