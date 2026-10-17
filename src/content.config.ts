import { defineCollection, z } from 'astro:content';
import { markdownPostsLoader } from './lib/markdown-posts-loader';

const posts = defineCollection({
  loader: markdownPostsLoader(),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
export const collections = { posts };
