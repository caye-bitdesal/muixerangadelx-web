import { defaultLocale, languages, type Locale } from './ui';

/** Localized slugs for the “Join us” page (not a single path across locales). */
export const JOIN_US_SLUG: Record<Locale, string> = {
  va: '/apunta-t',
  es: '/unete',
  en: '/join-us',
};

const JOIN_SLUGS = new Set(Object.values(JOIN_US_SLUG).map((p) => p.replace(/^\//, '')));

export const HISTORIA_SLUG: Record<Locale, string> = {
  va: '/la-nostra-historia',
  es: '/nuestra-historia',
  en: '/our-history',
};

const HISTORIA_SLUGS = new Set(Object.values(HISTORIA_SLUG).map((p) => p.replace(/^\//, '')));

/** Localized segment for agenda list and event detail (e.g. /activitats, /es/eventos, /en/events). */
export const EVENTS_SEGMENT: Record<Locale, string> = {
  va: 'activitats',
  es: 'eventos',
  en: 'events',
};

const EVENTS_SEGMENTS = new Set(Object.values(EVENTS_SEGMENT));

export function activitatsPath(locale: Locale): string {
  return localizedPath(locale, `/${EVENTS_SEGMENT[locale]}`);
}

export function joinUsPath(locale: Locale): string {
  return localizedPath(locale, JOIN_US_SLUG[locale]);
}

export function historiaPath(locale: Locale): string {
  return localizedPath(locale, HISTORIA_SLUG[locale]);
}

export function contactJoinPath(locale: Locale): string {
  return `${localizedPath(locale, '/contacte')}?join=1`;
}

export function contactPerformancePath(locale: Locale): string {
  return `${localizedPath(locale, '/contacte')}?asunto=contratacion`;
}

export function activitatsAssaigFilterPath(locale: Locale): string {
  return `${activitatsPath(locale)}?filter=assaig`;
}

export function eventDetailPath(locale: Locale, slug: string): string {
  const segment = EVENTS_SEGMENT[locale];
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return localizedPath(locale, `/${segment}/${normalized}`);
}

function eventDetailSlugFromPathname(pathname: string, locale: Locale): string | null {
  const path = pathnameWithoutLocale(pathname, locale).replace(/\/+$/, '') || '/';
  const parts = path.replace(/^\//, '').split('/');
  if (parts.length !== 2) return null;
  const [segment, slug] = parts;
  if (!EVENTS_SEGMENTS.has(segment)) return null;
  return slug || null;
}

function isEventsListPathname(pathname: string, locale: Locale): boolean {
  const path = pathnameWithoutLocale(pathname, locale).replace(/\/+$/, '') || '/';
  const parts = path.replace(/^\//, '').split('/').filter(Boolean);
  return parts.length === 1 && EVENTS_SEGMENTS.has(parts[0]);
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
  const pathname = pathnameWithoutLocale(currentUrl.pathname, currentLocale).replace(/\/+$/, '') || '/';
  const slug = pathname.replace(/^\//, '');

  if (JOIN_SLUGS.has(slug)) {
    return joinUsPath(nextLocale);
  }

  if (HISTORIA_SLUGS.has(slug)) {
    return historiaPath(nextLocale);
  }

  if (isEventsListPathname(currentUrl.pathname, currentLocale)) {
    return activitatsPath(nextLocale);
  }

  const eventSlug = eventDetailSlugFromPathname(currentUrl.pathname, currentLocale);
  if (eventSlug) {
    return eventDetailPath(nextLocale, eventSlug);
  }

  return localizedPath(nextLocale, pathname);
}
