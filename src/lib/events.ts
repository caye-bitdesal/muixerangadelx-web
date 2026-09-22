import { EVENTS_API } from './site';

export const EVENT_TYPES = ['assaig', 'actuacio', 'altre'] as const;

export type EventType = (typeof EVENT_TYPES)[number];

const CALENDAR_DAY_PRIORITY: EventType[] = ['actuacio', 'assaig', 'altre'];

export function normalizeEventType(type?: string | null): EventType | undefined {
  return EVENT_TYPES.includes(type as EventType) ? (type as EventType) : undefined;
}

export function eventCalendarDayClass(type: EventType): string {
  switch (type) {
    case 'assaig':
      return 'bg-elx-blue text-white font-bold';
    case 'actuacio':
      return 'bg-elx-red text-white font-bold';
    case 'altre':
      return 'bg-elx-yellow text-elx-dark font-bold';
  }
}

export function resolveCalendarDayType(types: Array<EventType | undefined>): EventType | null {
  const present = new Set(types.filter((type): type is EventType => Boolean(type)));
  return CALENDAR_DAY_PRIORITY.find((type) => present.has(type)) ?? null;
}

export function resolveCalendarDayTypes(types: Array<EventType | undefined>): EventType[] {
  const present = new Set(types.filter((type): type is EventType => Boolean(type)));
  return CALENDAR_DAY_PRIORITY.filter((type) => present.has(type));
}

export function shouldSplitCalendarDay(types: Array<EventType | undefined>): boolean {
  const normalized = types.filter((type): type is EventType => Boolean(type));
  if (normalized.length < 2) return false;
  return resolveCalendarDayTypes(normalized).length >= 2;
}

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
  address?: string;
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

export function eventInMonth(input: EventDateInput, year: number, month: number): boolean {
  const date = parseEventDate(input);
  if (!date) return false;
  return date.getFullYear() === year && date.getMonth() === month;
}

export function compareEventDates(a: EventDateInput, b: EventDateInput): number {
  const dateA = parseEventDate(a);
  const dateB = parseEventDate(b);
  if (!dateA && !dateB) return 0;
  if (!dateA) return 1;
  if (!dateB) return -1;
  return dateB.getTime() - dateA.getTime();
}

export function compareEventDatesAsc(a: EventDateInput, b: EventDateInput): number {
  return -compareEventDates(a, b);
}

export function isUpcomingEvent(dateInput: EventDateInput, now = new Date()): boolean {
  const date = parseEventDate(dateInput);
  if (!date) return false;
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return date >= startOfToday;
}

export function getUpcomingEvents(events: MuixerangaEvent[], limit = 3): MuixerangaEvent[] {
  return events
    .filter((event) => isUpcomingEvent(event.date))
    .sort((a, b) => compareEventDatesAsc(a.date, b.date))
    .slice(0, limit);
}

function withDefaults(event: MuixerangaEvent, index: number): MuixerangaEvent {
  const parsed = parseEventDate(event.date);
  const fallback = new Date();
  fallback.setDate(fallback.getDate() + index * 3);

  return {
    ...event,
    date: (parsed ?? fallback).toISOString(),
    type: normalizeEventType(event.type),
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

    const existingIds = new Set(events.map((event) => event.id));
    const newEvents = page.events.filter((event) => !existingIds.has(event.id));
    if (!newEvents.length) break;

    events.push(...newEvents);
    const nextLastId = page.lastId ?? page.events[page.events.length - 1]?.id ?? null;
    if (!nextLastId || nextLastId === lastId || page.events.length < 50) {
      exhausted = true;
    } else {
      lastId = nextLastId;
    }
  }

  return events.sort((a, b) => compareEventDates(a.date, b.date));
}

export async function listUpcomingEvents(limit = 3): Promise<MuixerangaEvent[]> {
  const events = await listAllEvents();
  return getUpcomingEvents(events, limit);
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

export function eventMapEmbedUrl(address: string): string {
  const query = encodeURIComponent(address.trim());
  return `https://maps.google.com/maps?q=${query}&z=15&ie=UTF8&iwloc=&output=embed`;
}

export function eventMapLink(address: string): string {
  const query = encodeURIComponent(address.trim());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export async function getEventById(id: string): Promise<MuixerangaEvent | null> {
  const events = await listAllEvents();
  return events.find((event) => event.id === id) ?? null;
}

export { EVENTS_API };
