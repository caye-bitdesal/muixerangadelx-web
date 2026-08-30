import { getCollection, getEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';
import type { BlogContentBlock } from '../content.config';

export type { BlogContentBlock };

export type BlogPostCard = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  categories: string[];
  coverImage: string;
};

export type BlogPost = BlogPostCard & {
  content: BlogContentBlock[];
};

function mapPostCard(post: Awaited<ReturnType<typeof getCollection<'blog'>>>[number], locale: Locale): BlogPostCard {
  return {
    id: post.id,
    slug: post.id,
    title: post.data.title[locale],
    description: post.data.description[locale],
    date: post.data.date.toISOString().slice(0, 10),
    author: post.data.author,
    categories: post.data.categories[locale],
    coverImage: post.data.coverImage,
  };
}

export async function getBlogPosts(locale: Locale): Promise<BlogPostCard[]> {
  const posts = await getCollection('blog');
  return posts
    .map((post) => mapPostCard(post, locale))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(slug: string, locale: Locale): Promise<BlogPost | null> {
  const entry = await getEntry('blog', slug);
  if (!entry) return null;

  return {
    ...mapPostCard(entry, locale),
    content: entry.data.content[locale],
  };
}

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getCollection('blog');
  return posts.map((post) => post.id);
}
