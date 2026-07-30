import { SUBSTACK_FEED } from './site';
import fallback from '../data/substack-fallback.json';

export interface Dispatch {
  title: string;
  link: string;
  description: string;
  /** RFC 2822 date string from the feed (or fallback snapshot). */
  pubDate: string;
}

const ENTITY_MAP: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

function decodeEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&([a-zA-Z]+);/g, (match, name: string) => ENTITY_MAP[name] ?? match);
}

function stripHtml(value: string): string {
  return decodeEntities(value)
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTag(block: string, tag: string): string {
  const cdata = new RegExp(`<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag}>`, 'i');
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const cdataMatch = block.match(cdata);
  if (cdataMatch?.[1] != null) return cdataMatch[1].trim();
  const plainMatch = block.match(plain);
  return plainMatch?.[1]?.trim() ?? '';
}

function parseFeed(xml: string): Dispatch[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
  return items
    .map((match) => {
      const block = match[1] ?? '';
      return {
        title: stripHtml(extractTag(block, 'title')),
        link: stripHtml(extractTag(block, 'link')),
        description: stripHtml(extractTag(block, 'description')),
        pubDate: stripHtml(extractTag(block, 'pubDate')),
      };
    })
    .filter((item) => item.title && item.link);
}

let cached: Promise<Dispatch[]> | null = null;

async function fetchDispatches(): Promise<Dispatch[]> {
  try {
    const response = await fetch(SUBSTACK_FEED, {
      signal: AbortSignal.timeout(5000),
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    });
    if (!response.ok) throw new Error(`Substack feed HTTP ${response.status}`);
    const xml = await response.text();
    const parsed = parseFeed(xml);
    if (!parsed.length) throw new Error('Substack feed returned no items');
    return parsed;
  } catch {
    return fallback as Dispatch[];
  }
}

/** Latest Substack posts for the home writing section. Memoized per build. */
export function getDispatches(limit = 3): Promise<Dispatch[]> {
  if (!cached) cached = fetchDispatches();
  return cached.then((items) => items.slice(0, limit));
}
