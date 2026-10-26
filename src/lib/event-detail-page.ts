import type { Locale } from '../i18n/ui';
import { eventDetailPath } from '../i18n/utils';
import { eventImage, listAllEvents, type MuixerangaEvent } from './events';
import {
  buildEventSlugIndex,
  eventSlug,
  looksLikeLegacyEventId,
  resolveEventParam,
  type EventSlugIndex,
} from './event-slug';
import { DEFAULT_OG_IMAGE, eventJsonLd, organizationId, pageCanonicalUrl } from './seo';

export async function getEventDetailStaticPaths() {
  const events = await listAllEvents();
  if (!events.length) {
    return [{ params: { slug: 'placeholder' } }];
  }
  const index = buildEventSlugIndex(events);
  const slugs = [...new Set(index.byId.values())];
  return slugs.map((slug) => ({ params: { slug } }));
}

export type EventDetailPageModel = {
  event: MuixerangaEvent | null;
  redirectTo: string | null;
  pageTitle: string;
  pageDescription: string;
  shareImage: string;
  eventLd: Record<string, unknown> | null;
  eventId: string | null;
};

export async function loadEventDetailPage(
  slugParam: string | undefined,
  locale: Locale,
  site: URL | string | undefined,
  requestUrl: URL,
): Promise<EventDetailPageModel> {
  if (!slugParam || slugParam === 'placeholder') {
    return {
      event: null,
      redirectTo: null,
      pageTitle: '',
      pageDescription: '',
      shareImage: DEFAULT_OG_IMAGE,
      eventLd: null,
      eventId: null,
    };
  }

  const events = await listAllEvents();
  const index = buildEventSlugIndex(events);
  const event = resolveEventParam(slugParam, index, events);

  if (!event) {
    return {
      event: null,
      redirectTo: null,
      pageTitle: '',
      pageDescription: '',
      shareImage: DEFAULT_OG_IMAGE,
      eventLd: null,
      eventId: null,
    };
  }

  const canonicalSlug = eventSlug(event, index);
  if (slugParam !== canonicalSlug) {
    return {
      event,
      redirectTo: eventDetailPath(locale, canonicalSlug),
      pageTitle: '',
      pageDescription: '',
      shareImage: DEFAULT_OG_IMAGE,
      eventLd: null,
      eventId: event.id,
    };
  }

  const pageTitle = `${event.name} | Muixeranga d'Elx`;
  const pageDescription =
    event.description?.trim() || `${event.name} — Muixeranga d'Elx`;
  const shareImage = eventImage(event);
  const eventUrl = pageCanonicalUrl(requestUrl.pathname, site, requestUrl);
  const siteOrigin = (site ?? requestUrl).origin;
  const eventLd = eventJsonLd(event, {
    url: eventUrl,
    site,
    requestUrl,
    organizerId: organizationId(siteOrigin),
  });

  return {
    event,
    redirectTo: null,
    pageTitle,
    pageDescription,
    shareImage,
    eventLd,
    eventId: event.id,
  };
}

export async function loadEventSlugIndex(): Promise<EventSlugIndex> {
  return buildEventSlugIndex(await listAllEvents());
}
