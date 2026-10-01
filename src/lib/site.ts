export const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/muixerangadelx/',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/muixeranga.delx.9',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    href: 'https://twitter.com/muixerangadelx',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@MuixerangadElx',
  },
] as const;

const EVENTS_FN_BASE =
  'https://europe-southwest1-tabala-4dece.cloudfunctions.net';

/** @deprecated Prefer {@link EVENTS_LIST_API_V1} for new code. */
export const EVENTS_API = `${EVENTS_FN_BASE}/listEvents`;

export const EVENTS_LIST_API_V1 = `${EVENTS_FN_BASE}/api/v1/events`;

export function eventDetailApiUrl(id: string): string {
  return `${EVENTS_FN_BASE}/api/v1/events/${encodeURIComponent(id)}`;
}

export const FORMSPREE_FORM_URL =
  import.meta.env.PUBLIC_FORMSPREE_FORM_URL ?? 'https://formspree.io/f/xppwdkyv';

export const CONTACT_ADDRESS = "Casal d'ACPV/Elx - Jaume I: C/ Sant Jordi, 2, Elx";
export const CONTACT_MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Casal+Jaume+I,+Carrer+Sant+Jordi+2,+Elx';
export const CONTACT_EMAIL = 'contacte@muixerangadelx.com';
export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Carrer%20Sant%20Jordi%202%2C%20Elx&t=&z=16&ie=UTF8&iwloc=&output=embed';

/** Vídeo de la portada (fitxer a public/videos/). */
export const HOME_VIDEO_URL = '/videos/correllengua_2025.mp4';
