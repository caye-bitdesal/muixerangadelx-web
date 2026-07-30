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

export const EVENTS_API =
  'https://europe-southwest1-tabala-4dece.cloudfunctions.net/listEvents';

export const CONTACT_API_URL = import.meta.env.PUBLIC_CONTACT_API_URL ?? '';

export const CONTACT_ADDRESS = 'C/ Sant Jordi, 2, Elx';
export const CONTACT_EMAIL = 'contacte@muixerangadelx.com';
export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Carrer%20Sant%20Jordi%202%2C%20Elx&t=&z=16&ie=UTF8&iwloc=&output=embed';
