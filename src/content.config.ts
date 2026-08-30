import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.object({
  va: z.string(),
  es: z.string(),
  en: z.string(),
});

const localizedCategories = z.object({
  va: z.array(z.string()),
  es: z.array(z.string()),
  en: z.array(z.string()),
});

const contentBlock = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('text'),
    text: z.string(),
  }),
  z.object({
    type: z.literal('images'),
    images: z.array(z.string()).default([]),
  }),
]);

const localizedContent = z.object({
  va: z.array(contentBlock),
  es: z.array(contentBlock),
  en: z.array(contentBlock),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    categories: localizedCategories,
    title: localized,
    date: z.coerce.date(),
    author: z.string(),
    description: localized,
    coverImage: z.string(),
    content: localizedContent,
  }),
});

export const collections = { blog };

export type BlogContentBlock = z.infer<typeof contentBlock>;
