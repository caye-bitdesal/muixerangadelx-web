import { defaultLocale, languages, type Locale } from '../i18n/ui';
import { eventDetailPath, switchLocalePath } from '../i18n/utils';
import { buildEventSlugIndex, eventSlug } from './event-slug';
import { eventImage, parseEventDate, type MuixerangaEvent } from './events';
import { CONTACT_ADDRESS, CONTACT_EMAIL, socialLinks } from './site';

export const SITE_NAME = "Muixeranga d'Elx";

/** Default share image (1200×800-ish photo; better preview than square logo). */
export const DEFAULT_OG_IMAGE = '/images/carousel/hero2.jpg';

export const TWITTER_SITE = '@muixerangadelx';

/** BCP 47 tags for hreflang (Valencian → Catalan/Valencian Spain). */
export const HREFLANG_BY_LOCALE: Record<Locale, string> = {
  va: 'ca-ES',
  es: 'es-ES',
  en: 'en',
};

export const OG_LOCALE_BY_LOCALE: Record<Locale, string> = {
  va: 'ca_ES',
  es: 'es_ES',
  en: 'en_GB',
};

export const HTML_LANG_BY_LOCALE: Record<Locale, string> = {
  va: 'ca',
  es: 'es',
  en: 'en',
};

export function organizationId(siteOrigin: string): string {
  return `${siteOrigin.replace(/\/$/, '')}/#organization`;
}

export function absoluteUrl(pathOrUrl: string, site: URL | string | undefined, requestUrl: URL): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  const base = site ? new URL(typeof site === 'string' ? site : site.href) : requestUrl;
  return new URL(pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`, base).href;
}

export function pageCanonicalUrl(pathname: string, site: URL | string | undefined, requestUrl: URL): string {
  const base = site ? new URL(typeof site === 'string' ? site : site.href) : requestUrl;
  const url = new URL(pathname, base);
  if (!url.pathname.endsWith('/')) {
    url.pathname = `${url.pathname}/`;
  }
  return url.href;
}

export function hreflangAlternates(
  currentUrl: URL,
  site: URL | string | undefined,
): { hreflang: string; href: string }[] {
  const locales = Object.keys(languages) as Locale[];
  const links = locales.map((locale) => ({
    hreflang: HREFLANG_BY_LOCALE[locale],
    href: pageCanonicalUrl(switchLocalePath(currentUrl, locale), site, currentUrl),
  }));
  links.push({
    hreflang: 'x-default',
    href: pageCanonicalUrl(switchLocalePath(currentUrl, defaultLocale), site, currentUrl),
  });
  return links;
}

export function organizationJsonLd(siteOrigin: string, logoUrl: string): Record<string, unknown> {
  const origin = siteOrigin.replace(/\/$/, '');
  return {
    '@type': 'Organization',
    '@id': organizationId(origin),
    name: SITE_NAME,
    url: `${origin}/`,
    logo: logoUrl,
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_ADDRESS,
      addressLocality: 'Elx',
      addressRegion: 'Alacant',
      addressCountry: 'ES',
    },
    sameAs: socialLinks.map((link) => link.href),
  };
}

function eventShareImage(event: MuixerangaEvent, site: URL | string | undefined, requestUrl: URL): string {
  const src = eventImage(event);
  if (src.endsWith('.svg')) {
    return absoluteUrl(DEFAULT_OG_IMAGE, site, requestUrl);
  }
  return absoluteUrl(src, site, requestUrl);
}

export function eventJsonLd(
  event: MuixerangaEvent,
  opts: {
    url: string;
    site: URL | string | undefined;
    requestUrl: URL;
    organizerId: string;
  },
): Record<string, unknown> | null {
  const start = parseEventDate(event.date);
  if (!start) return null;

  const location: Record<string, unknown> = {
    '@type': 'Place',
    name: event.address?.trim() || SITE_NAME,
    address: event.address?.trim() || CONTACT_ADDRESS,
  };
  if (event.location && Number.isFinite(event.location.latitude) && Number.isFinite(event.location.longitude)) {
    location.geo = {
      '@type': 'GeoCoordinates',
      latitude: event.location.latitude,
      longitude: event.location.longitude,
    };
  }

  const schemaType = event.type === 'actuacio' ? 'PerformingArtsEvent' : 'Event';

  const node: Record<string, unknown> = {
    '@type': schemaType,
    name: event.name,
    url: opts.url,
    startDate: start.toISOString(),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location,
    image: eventShareImage(event, opts.site, opts.requestUrl),
    organizer: { '@id': opts.organizerId },
    performer: { '@id': opts.organizerId },
  };

  const description = event.description?.trim();
  if (description) node.description = description;

  return node;
}

export function upcomingEventsJsonLd(
  events: MuixerangaEvent[],
  locale: Locale,
  site: URL | string | undefined,
  requestUrl: URL,
): Record<string, unknown>[] {
  const siteOrigin = typeof site === 'string' ? new URL(site).origin : (site ?? requestUrl).origin;
  const organizerId = organizationId(siteOrigin);
  const slugIndex = buildEventSlugIndex(events);
  return events
    .map((event) =>
      eventJsonLd(event, {
        url: pageCanonicalUrl(eventDetailPath(locale, eventSlug(event, slugIndex)), site, requestUrl),
        site,
        requestUrl,
        organizerId,
      }),
    )
    .filter((node): node is Record<string, unknown> => node != null);
}

export function jsonLdGraph(nodes: Record<string, unknown>[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes,
  });
}
