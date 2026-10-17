export const POSTS_PER_PAGE = 20;
export const POST_CATEGORIES = ['随笔', '技术'] as const;
export type PostCategory = (typeof POST_CATEGORIES)[number];

export function postPageHref(page: number, base: string): string {
  return page > 1 ? `${base}page/${page}/` : base;
}

export function paginationItems(current: number, total: number): (number | null)[] {
  const pages = [...new Set([1, current - 1, current, current + 1, total])]
    .filter(page => page >= 1 && page <= total).sort((left, right) => left - right);
  const items: (number | null)[] = [];
  pages.forEach((page, index) => {
    const gap = page - (pages[index - 1] ?? page);
    if (gap === 2) items.push(page - 1);
    else if (gap > 2) items.push(null);
    items.push(page);
  });
  return items;
}
