import { defaultLocale, languages, type Locale } from './ui';

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
  let pathname = currentUrl.pathname;

  if (currentLocale !== defaultLocale) {
    pathname = pathname.replace(new RegExp(`^/${currentLocale}`), '') || '/';
  }

  return localizedPath(nextLocale, pathname);
}
