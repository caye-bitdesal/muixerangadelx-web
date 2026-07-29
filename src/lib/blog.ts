import { getCollection } from 'astro:content';
import type { Locale } from '../i18n/ui';

export async function getBlogPosts(locale: Locale) {
  const posts = await getCollection('blog');
  return posts
    .map((post) => ({
      id: post.id,
      title: post.data.title[locale],
      excerpt: post.data.excerpt[locale],
      date: post.data.date.toISOString().slice(0, 10),
      image: post.data.image,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
