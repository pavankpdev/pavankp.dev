
# Pavan Kumar Portfolio

Minimal dark Astro portfolio for a Full Stack AI Engineer profile. The site is intentionally small: hero, experience, writing, and contact links.

## Structure

- `/` shows the profile, top experience, and up to four recent writing links.
- `/blogs` lists every writing item returned by the external feed.
- Experience shows the first three roles, then previews the next role with a fade and expands without client JavaScript.

## Running

```sh
bun install
bun run dev
```

## Environment

```sh
PUBLIC_SITE_URL=https://pavankp.dev
PUBLIC_CONTACT_EMAIL=hello@example.com
PUBLIC_BLOG_RSS_URL=https://your-publication.substack.com/feed
PUBLIC_SUBSTACK_URL=https://your-publication.substack.com
```

Writing links are fetched at build time. The RSS parser handles normal RSS/Atom feeds and cache-busts Substack feeds; if a Substack RSS response is stale or empty, it falls back to Substack's archive API. Clicking a writing item opens the original publication; full posts are not rendered locally.

## Metadata

The layout includes canonical URLs, Open Graph tags, Twitter card tags, a theme-matched favicon, and an SVG social preview image. Set `PUBLIC_SITE_URL` correctly before deploying so canonical and preview URLs resolve to the production domain.

## Build

```sh
bun run build
bun run preview
```
