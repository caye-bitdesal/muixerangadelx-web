import type { Locale } from '../../i18n/ui';
import { legal } from './texts/avis-legal';
import { cookies } from './texts/cookies';
import { privacy } from './texts/privacitat';
import type { LegalPageContent, LegalPageId } from './types';

export type { LegalPageContent, LegalPageId, LegalSection } from './types';

const lastUpdatedLabel = {
  va: 'Darrera actualització',
  es: 'Última actualización',
  en: 'Last updated',
} as const;

const pages = { legal, privacy, cookies } as const;

export function getLegalContent(page: LegalPageId, locale: Locale): LegalPageContent {
  return {
    ...pages[page][locale],
    lastUpdatedLabel: lastUpdatedLabel[locale],
  };
}
