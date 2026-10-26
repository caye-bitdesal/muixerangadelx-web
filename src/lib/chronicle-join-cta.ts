import type { Locale } from '../i18n/ui';
import { joinUsPath } from '../i18n/utils';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Same markup as ChronicleJoinCta.astro (for client-rendered event chronicles). */
export function renderChronicleJoinCtaHtml(
  locale: Locale,
  lead: string,
  linkLabel: string,
  ariaLabel: string,
): string {
  const href = escapeHtml(joinUsPath(locale));
  return `<aside class="mt-10 border border-black/10 bg-elx-yellow/25 px-6 py-8 sm:px-8" aria-label="${escapeHtml(ariaLabel)}">
  <p class="text-lg sm:text-xl font-semibold leading-snug text-elx-dark">
    ${escapeHtml(lead)}<a href="${href}" class="text-elx-red underline-offset-2 hover:underline">${escapeHtml(linkLabel)}</a>
  </p>
</aside>`;
}
