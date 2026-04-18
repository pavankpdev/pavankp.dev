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

export async function getExternalPosts(limit = 3): Promise<ExternalPost[]> {
  const feedUrl = import.meta.env.PUBLIC_BLOG_RSS_URL || import.meta.env.PUBLIC_SUBSTACK_RSS_URL;
  if (!feedUrl) return [];

  try {
    const response = await fetch(feedUrl);
    if (!response.ok) return [];

    const xml = await response.text();
    const parsed = parser.parse(xml);
    const rssItems = toArray(parsed?.rss?.channel?.item);
    const atomItems = toArray(parsed?.feed?.entry);
    const items = rssItems.length > 0 ? rssItems : atomItems;

    return items.slice(0, limit).map((item: Record<string, unknown>) => {
      const href =
        text(item.link) ||
        text(toArray(item.link as Record<string, unknown>[] | Record<string, unknown>)[0]?.href);
      const description = text(item.description) || text(item.summary) || text(item.content);
      const date = text(item.pubDate) || text(item.published) || text(item.updated);

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
