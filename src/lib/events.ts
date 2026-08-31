import { EVENTS_API } from './site';

export type EventType = 'assajos' | 'actuacions' | 'trobades' | 'tallers';

export type FirestoreTimestamp = {
  seconds?: number;
  _seconds?: number;
  nanoseconds?: number;
  _nanoseconds?: number;
};

export type EventDateInput = string | number | FirestoreTimestamp | null | undefined;

export type MuixerangaEvent = {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  gallery?: string[];
  location?: { latitude: number; longitude: number };
  figures?: string[];
  date?: EventDateInput;
  type?: EventType;
  link?: string;
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

export function parseEventDate(input: EventDateInput): Date | null {
  if (input == null) return null;

  if (typeof input === 'number') {
    const date = new Date(input);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (!trimmed) return null;
    const date = new Date(trimmed);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  if (typeof input === 'object') {
    const seconds = input.seconds ?? input._seconds;
    if (typeof seconds === 'number') {
      const nanos = input.nanoseconds ?? input._nanoseconds ?? 0;
      const date = new Date(seconds * 1000 + nanos / 1e6);
      return Number.isNaN(date.getTime()) ? null : date;
    }
  }

  return null;
}

export function eventDateKey(input: EventDateInput): string | null {
  const date = parseEventDate(input);
  if (!date) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function compareEventDates(a: EventDateInput, b: EventDateInput): number {
  const dateA = parseEventDate(a);
  const dateB = parseEventDate(b);
  if (!dateA && !dateB) return 0;
  if (!dateA) return 1;
  if (!dateB) return -1;
  return dateB.getTime() - dateA.getTime();
}

function withDefaults(event: MuixerangaEvent, index: number): MuixerangaEvent {
  const parsed = parseEventDate(event.date);
  const fallback = new Date();
  fallback.setDate(fallback.getDate() + index * 3);

  return {
    ...event,
    date: (parsed ?? fallback).toISOString(),
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
    const events = (data.events ?? []).map(withDefaults).sort((a, b) => compareEventDates(a.date, b.date));
    return { events, lastId: data.lastId ?? null };
  } catch {
    return { events: [], lastId: null };
  }
}

export async function listAllEvents(): Promise<MuixerangaEvent[]> {
  const events: MuixerangaEvent[] = [];
  let lastId: string | null = null;
  let exhausted = false;

  while (!exhausted) {
    const page = await listEvents({ lastId, limit: 50 });
    if (!page.events.length) break;

    events.push(...page.events);
    const nextLastId = page.lastId ?? page.events[page.events.length - 1]?.id ?? null;
    if (!nextLastId || nextLastId === lastId || page.events.length < 50) {
      exhausted = true;
    } else {
      lastId = nextLastId;
    }
  }

  return events.sort((a, b) => compareEventDates(a.date, b.date));
}

export function eventImage(event: MuixerangaEvent): string {
  return event.image || '/images/placeholders/event.svg';
}

export function formatEventDate(dateInput: EventDateInput, locale: string): string {
  const date = parseEventDate(dateInput);
  if (!date) return typeof dateInput === 'string' ? dateInput : '';
  return new Intl.DateTimeFormat(locale === 'va' ? 'ca-ES-valencia' : locale === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatEventDateTime(dateInput: EventDateInput, locale: string): string {
  const date = parseEventDate(dateInput);
  if (!date) return typeof dateInput === 'string' ? dateInput : '';
  return new Intl.DateTimeFormat(locale === 'va' ? 'ca-ES-valencia' : locale === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date);
}

export function eventMapLink(location: { latitude: number; longitude: number }): string {
  return `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
}

export async function getEventById(id: string): Promise<MuixerangaEvent | null> {
  const events = await listAllEvents();
  return events.find((event) => event.id === id) ?? null;
}

export { EVENTS_API };
