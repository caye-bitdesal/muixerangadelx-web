import { defaultLocale, languages, type Locale } from './ui';

/** Localized slugs for the “Join us” page (not a single path across locales). */
export const JOIN_US_SLUG: Record<Locale, string> = {
  va: '/uneix-te',
  es: '/unete',
  en: '/join-us',
};

const JOIN_SLUGS = new Set(Object.values(JOIN_US_SLUG).map((p) => p.replace(/^\//, '')));

export function joinUsPath(locale: Locale): string {
  return localizedPath(locale, JOIN_US_SLUG[locale]);
}

export function contactJoinPath(locale: Locale): string {
  return `${localizedPath(locale, '/contacte')}?join=1`;
}

export function activitatsAssaigFilterPath(locale: Locale): string {
  return `${localizedPath(locale, '/activitats')}?filter=assaig`;
}

function pathnameWithoutLocale(pathname: string, locale: Locale): string {
  let path = pathname;
  if (locale !== defaultLocale) {
    path = path.replace(new RegExp(`^/${locale}`), '') || '/';
  }
  return path;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale && maybeLocale in languages) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized === '' ? '/' : normalized;
  }
  if (normalized === '/') {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function switchLocalePath(currentUrl: URL, nextLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(currentUrl);
  const pathname = pathnameWithoutLocale(currentUrl.pathname, currentLocale);
  const slug = pathname.replace(/^\//, '');

  if (JOIN_SLUGS.has(slug)) {
    return joinUsPath(nextLocale);
  }

  return localizedPath(nextLocale, pathname);
}
