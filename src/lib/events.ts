import { EVENTS_API } from './site';

export type EventType = 'assajos' | 'actuacions' | 'trobades' | 'tallers';

export type MuixerangaEvent = {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  gallery?: string[];
  location?: { latitude: number; longitude: number };
  figures?: string[];
  date?: string;
  type?: EventType;
};

export type ListEventsResponse = {
  events: MuixerangaEvent[];
  lastId?: string | null;
};

const FALLBACK_TYPES: EventType[] = [
  'assajos',
  'actuacions',
  'trobades',
  'tallers',
];

function withDefaults(event: MuixerangaEvent, index: number): MuixerangaEvent {
  const baseDate = new Date();
  baseDate.setDate(baseDate.getDate() + index * 3);
  return {
    ...event,
    date: event.date ?? baseDate.toISOString().slice(0, 10),
    type: event.type ?? FALLBACK_TYPES[index % FALLBACK_TYPES.length],
    image:
      event.image && event.image.trim() !== '' && !event.image.includes('example.com')
        ? event.image
        : null,
  };
}

export async function listEvents(params?: {
  lastId?: string | null;
  limit?: number;
}): Promise<ListEventsResponse> {
  const url = new URL(EVENTS_API);
  if (params?.lastId) url.searchParams.set('lastId', params.lastId);
  if (params?.limit) url.searchParams.set('limit', String(params.limit));

  try {
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Events API ${res.status}`);
    const data = (await res.json()) as ListEventsResponse;
    const events = (data.events ?? []).map(withDefaults);
    return { events, lastId: data.lastId ?? null };
  } catch {
    return { events: [], lastId: null };
  }
}

export function eventImage(event: MuixerangaEvent): string {
  return event.image || '/images/placeholders/event.svg';
}

export function formatEventDate(dateStr: string | undefined, locale: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat(locale === 'va' ? 'ca-ES-valencia' : locale === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
