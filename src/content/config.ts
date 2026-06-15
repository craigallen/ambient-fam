import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    category: z.enum(['music', 'events', 'interviews', 'news']),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    artist: z.string().optional(),
    bandcampLink: z.string().optional(),
  }),
});

export const collections = { posts };
