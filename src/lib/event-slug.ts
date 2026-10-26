import { parseEventDate, type MuixerangaEvent } from './events';

export type EventSlugIndex = {
  byId: Map<string, string>;
  bySlug: Map<string, MuixerangaEvent>;
};

/** ASCII slug for URLs (accents stripped, hyphens). */
export function slugifyEventTitle(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[''´`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);
}

function baseSlugForEvent(event: MuixerangaEvent): string {
  const fromApi = event.slug?.trim();
  if (fromApi) return slugifyEventTitle(fromApi) || fromApi;

  const name = event.name?.trim() || 'esdeveniment';
  let base = slugifyEventTitle(name) || 'esdeveniment';
  const year = parseEventDate(event.date)?.getFullYear();
  if (year && !base.includes(String(year))) {
    base = `${base}-${year}`;
  }
  return base;
}

export function buildEventSlugIndex(events: MuixerangaEvent[]): EventSlugIndex {
  const byId = new Map<string, string>();
  const bySlug = new Map<string, MuixerangaEvent>();
  const used = new Set<string>();

  for (const event of events) {
    let slug = baseSlugForEvent(event);
    if (used.has(slug)) {
      let n = 2;
      while (used.has(`${slug}-${n}`)) n += 1;
      slug = `${slug}-${n}`;
    }
    used.add(slug);
    byId.set(event.id, slug);
    bySlug.set(slug, event);
  }

  return { byId, bySlug };
}

export function eventSlug(event: MuixerangaEvent, index: EventSlugIndex): string {
  return index.byId.get(event.id) ?? baseSlugForEvent(event);
}

/** Firebase-style ids vs readable slugs. */
export function looksLikeLegacyEventId(param: string): boolean {
  return /^[A-Za-z0-9]{16,}$/.test(param) && !param.includes('-');
}

export function resolveEventParam(
  param: string,
  index: EventSlugIndex,
  events: MuixerangaEvent[],
): MuixerangaEvent | null {
  const bySlug = index.bySlug.get(param);
  if (bySlug) return bySlug;

  if (looksLikeLegacyEventId(param)) {
    return events.find((e) => e.id === param) ?? null;
  }

  return null;
}
