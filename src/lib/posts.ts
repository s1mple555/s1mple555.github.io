import { getCollection, type CollectionEntry } from 'astro:content';
import { asset } from '../config';

export interface PublishedPost {
  entry: CollectionEntry<'posts'>;
  slug: string;
  title: string;
  description: string;
  date?: Date;
  updated?: Date;
  tags: string[];
  searchText: string;
  hasLeadingTitle: boolean;
}
function plainText(value: string): string {
  return value.replace(/\x60{3}[\s\S]*?\x60{3}/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]*>/g, '').replace(/[#*_~>\x60]/g, '')
    .replace(/\s+/g, ' ').trim();
}
function excerpt(body: string): string {
  const text = body.replace(/\x60{3}[\s\S]*?\x60{3}/g, '').split(/\r?\n\s*\r?\n/)
    .find((paragraph) => paragraph.trim() && !/^#{1,6}\s|^!\[|^\s*[-|]/.test(paragraph.trim()));
  const characters = Array.from(plainText(text || ''));
  return characters.slice(0, 120).join('') + (characters.length > 120 ? '…' : '');
}
export function formatPostDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Shanghai' }).format(date);
}
export function postHref(slug: string): string {
  return asset('posts/' + slug.split('/').map(encodeURIComponent).join('/') + '/');
}
export async function getPublishedPosts(): Promise<PublishedPost[]> {
  const entries = await getCollection('posts', ({ data }) => !data.draft);
  return entries.map((entry) => {
    const body = entry.body || '';
    const firstHeading = body.match(/^#\s+(.+?)\s*#*\s*$/m)?.[1];
    const filename = entry.id.split('/').pop()?.replace(/[-_]/g, ' ') || entry.id;
    const title = entry.data.title?.trim() || plainText(firstHeading || filename);
    const description = entry.data.description?.trim() || excerpt(body);
    const leadingHeading = body.trimStart().match(/^#\s+(.+?)\s*#*\s*(?:\r?\n|$)/)?.[1];
    return { entry, slug: entry.id, title, description, date: entry.data.date,
      updated: entry.data.updated, tags: entry.data.tags,
      searchText: plainText([title, description, entry.data.tags.join(' '), body].join(' ')).toLocaleLowerCase(),
      hasLeadingTitle: Boolean(leadingHeading && plainText(leadingHeading) === title),
    };
  }).sort((left, right) => ((right.date?.getTime() || 0) - (left.date?.getTime() || 0)) || left.slug.localeCompare(right.slug, 'zh-CN'));
}
