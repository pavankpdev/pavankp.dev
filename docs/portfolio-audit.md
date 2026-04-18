# Portfolio Audit and Redesign Notes

## Initial Audit

- Architecture: Astro static site with React islands for navigation, hero, skills, experience, and blog listing. No backend. Blog content was local Markdown through Astro content collections.
- Performance: the old build emitted React runtime chunks, Motion, Lucide, card spotlight code, animated grid code, and client router code. Production JS included large React client chunks, with the largest around 136 KB raw.
- Blocking work: Google Fonts were loaded through a CSS `@import`, and animated grid/spotlight effects hydrated client-side for presentational UI.
- Responsiveness: the previous hero used a large cyberpunk two-column composition with decorative image treatment. Several sections depended on generous desktop spacing and heavy visual effects.
- UI/UX: visual language was cyberpunk/Web3-coded with cyan/magenta gradients, Orbitron headings, glow shadows, animated backgrounds, and mixed card styles.
- Complexity: Motion animations, animated SVG grid, card spotlight, share buttons, local full-post rendering, and image fallback React components added weight without improving recruiter scan speed.
- Accessibility: core semantic structure was serviceable, but hydration-heavy visual components increased interaction complexity. The mobile nav depended on client JavaScript for simple navigation.

## Refactoring Plan

1. Keep Astro SSG instead of migrating to Next.js, because the portfolio is mostly static content and Astro gives lower JavaScript by default.
2. Upgrade Astro and Tailwind to the latest available versions.
3. Remove React, Motion, Lucide, share buttons, custom animated UI utilities, and local Markdown blog routing.
4. Replace React islands with Astro components.
5. Replace Web3/cyberpunk positioning with Full Stack AI Engineer content.
6. Use a restrained neutral design system with serif display type, sans body type, 8px-based spacing, simple borders, and minimal transitions.
7. Fetch external writing from RSS at build time and link out to the original publication.
8. Verify production build output, desktop/mobile screenshots, and Lighthouse.

## Design System

- Colors: neutral white surface, black ink, soft gray lines, teal accent, red signal marker.
- Typography: `Iowan Old Style`/Palatino/Georgia for editorial display, `Avenir Next`/Segoe UI/Helvetica for body text, SF Mono/IBM Plex Mono/Cascadia Code for labels.
- Spacing: section padding uses 72px mobile and 104px desktop; cards and rows follow 8px increments.
- Motion: no page-load choreography, no animated background, no hover spotlight. Transitions are limited to color changes on links and buttons.

## After

- Architecture: Astro-only static pages with no client-side JavaScript emitted.
- Build output: 3 static pages, one CSS asset, total `dist` size around 56 KB.
- Lighthouse on local preview: Performance 100, Accessibility 100, Best Practices 100, SEO 100.
- Core timings: FCP 0.8s, LCP 0.9s, TBT 0ms, CLS 0.

## Deployment

Deploy as a static Astro site on Vercel, Netlify, Cloudflare Pages, or any static host. Set `PUBLIC_CONTACT_EMAIL`, `PUBLIC_BLOG_RSS_URL`, and `PUBLIC_SUBSTACK_URL` in the hosting environment.
