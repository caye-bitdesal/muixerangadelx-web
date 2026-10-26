export const CONTACT_SUBJECT_KEYS = [
  'join',
  'performance',
  'press',
  'sponsorship',
  'other',
] as const;

export type ContactSubjectKey = (typeof CONTACT_SUBJECT_KEYS)[number];

/** URL query value for «Contracta'ns» / performance booking from the homepage. */
export const CONTACT_ASUNTO_CONTRATACION = 'contratacion';

export function defaultSubjectKeyFromContactUrl(searchParams: URLSearchParams): ContactSubjectKey | undefined {
  if (searchParams.get('join') === '1') return 'join';
  if (searchParams.get('asunto') === CONTACT_ASUNTO_CONTRATACION) return 'performance';
  return undefined;
}
