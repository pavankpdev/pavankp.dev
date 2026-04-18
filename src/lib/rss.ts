import { XMLParser } from "fast-xml-parser";

export interface ExternalPost {
  title: string;
  url: string;
  date: string;
  preview: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  cdataPropName: "cdata",
  textNodeName: "text",
});

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function text(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "object" && value && "cdata" in value) {
    return String((value as { cdata?: string }).cdata || "");
  }
  if (typeof value === "object" && value && "text" in value) {
    return String((value as { text?: string }).text || "");
  }
  return "";
}

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function postUrlFromSlug(origin: string, slug: unknown, fallback: unknown): string {
  const slugText = text(slug);
  if (slugText) return `${origin}/p/${slugText}`;
  return text(fallback);
}

async function getSubstackArchivePosts(feedUrl: string, limit?: number): Promise<ExternalPost[]> {
  const url = new URL(feedUrl);
  const endpoint = new URL("/api/v1/archive", url.origin);
  endpoint.searchParams.set("sort", "new");
  endpoint.searchParams.set("search", "");
  endpoint.searchParams.set("offset", "0");
  endpoint.searchParams.set("limit", String(limit ?? 100));

  const response = await fetch(endpoint);
  if (!response.ok) return [];

  const items = await response.json();
  if (!Array.isArray(items)) return [];

  return items.slice(0, limit ?? items.length).map((item: Record<string, unknown>) => ({
    title: text(item.title),
    url: postUrlFromSlug(url.origin, item.slug, item.canonical_url),
    date: formatDate(text(item.post_date) || text(item.updated_at)),
    preview: stripHtml(text(item.description) || text(item.truncated_body_text)).slice(0, 180),
  }));
}

function freshFeedUrl(feedUrl: string): string {
  const url = new URL(feedUrl);
  if (url.hostname.endsWith("substack.com")) {
    url.searchParams.set("portfolio_rss_bust", String(Date.now()));
  }
  return url.toString();
}

export async function getExternalPosts(limit?: number): Promise<ExternalPost[]> {
  const feedUrl = import.meta.env.PUBLIC_BLOG_RSS_URL || import.meta.env.PUBLIC_SUBSTACK_RSS_URL;
  if (!feedUrl) return [];

  try {
    const response = await fetch(freshFeedUrl(feedUrl), {
      headers: {
        accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
    });
    if (!response.ok) return [];

    const xml = await response.text();
    const parsed = parser.parse(xml);
    const rssItems = toArray(parsed?.rss?.channel?.item);
    const atomItems = toArray(parsed?.feed?.entry);
    const items = rssItems.length > 0 ? rssItems : atomItems;
    if (items.length === 0 && new URL(feedUrl).hostname.endsWith("substack.com")) {
      return getSubstackArchivePosts(feedUrl, limit);
    }

    return items.slice(0, limit ?? items.length).map((item: Record<string, unknown>) => {
      const href =
        text(item.link) ||
        text(toArray(item.link as Record<string, unknown>[] | Record<string, unknown>)[0]?.href);
      const description =
        text(item.description) ||
        text(item.summary) ||
        text(item["content:encoded"]) ||
        text(item.content);
      const date =
        text(item.pubDate) ||
        text(item.pubdate) ||
        text(item.published) ||
        text(item.updated);

      return {
        title: text(item.title),
        url: href,
        date: formatDate(date),
        preview: stripHtml(description).slice(0, 180),
      };
    });
  } catch {
    return [];
  }
}
