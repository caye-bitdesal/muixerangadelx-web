import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.object({
      va: z.string(),
      es: z.string(),
      en: z.string(),
    }),
    excerpt: z.object({
      va: z.string(),
      es: z.string(),
      en: z.string(),
    }),
    date: z.coerce.date(),
    image: z.string(),
  }),
});

export const collections = { blog };
