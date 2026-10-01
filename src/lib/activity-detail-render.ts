import {
  eventImage,
  eventMapEmbedUrl,
  eventMapLink,
  formatEventDateTime,
  type MuixerangaEvent,
} from './events';

export type ActivityDetailLabels = {
  date: string;
  location: string;
  openMap: string;
  figures: string;
  figuresEmpty: string;
  gallery: string;
  galleryEmpty: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

type DetailLocale = 'va' | 'es' | 'en';

export function renderActivityDetailBody(
  event: MuixerangaEvent,
  labels: ActivityDetailLabels,
  locale: DetailLocale,
): string {
  const gallery = (event.gallery ?? []).filter((url) => url && url.trim() !== '');
  const figures = (event.figures ?? []).filter((name) => name && name.trim() !== '');
  const address = event.address?.trim() ?? '';
  const hasAddress = address.length > 0;
  const name = escapeHtml(event.name);
  const img = escapeHtml(eventImage(event));
  const description = event.description?.trim()
    ? `<p class="mt-8 text-base sm:text-lg leading-relaxed whitespace-pre-line text-elx-dark">${escapeHtml(event.description)}</p>`
    : '';

  const dateBlock =
    event.date != null && event.date !== ''
      ? `<div>
          <h2 class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-elx-muted">
            <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-elx-red" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${escapeHtml(labels.date)}
          </h2>
          <p class="mt-2 text-base font-medium">${escapeHtml(formatEventDateTime(event.date, locale))}</p>
        </div>`
      : '';

  const addressBlock = hasAddress
    ? `<div>
        <h2 class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-elx-muted">
          <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-elx-red" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${escapeHtml(labels.location)}
        </h2>
        <p class="mt-2 text-base font-medium text-elx-dark">${escapeHtml(address)}</p>
        <a
          href="${escapeHtml(eventMapLink(address))}"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 block overflow-hidden border border-black/10 bg-neutral-100 h-44 cursor-pointer"
          aria-label="${escapeHtml(labels.openMap)}"
        >
          <iframe
            title="${escapeHtml(address)}"
            src="${escapeHtml(eventMapEmbedUrl(address))}"
            class="h-full w-full border-0 pointer-events-none select-none"
            loading="lazy"
            tabindex="-1"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </div>`
    : '';

  const figuresList =
    figures.length > 0
      ? `<ul class="mt-2 space-y-1">${figures.map((figure) => `<li class="text-base font-medium">${escapeHtml(figure)}</li>`).join('')}</ul>`
      : `<p class="mt-2 text-sm text-elx-muted">${escapeHtml(labels.figuresEmpty)}</p>`;

  const galleryBlock =
    gallery.length > 0
      ? `<div class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          ${gallery
            .map(
              (src) =>
                `<a href="${escapeHtml(src)}" target="_blank" rel="noopener noreferrer" class="block aspect-square overflow-hidden bg-neutral-100 border border-black/10">
                  <img src="${escapeHtml(src)}" alt="" class="h-full w-full object-cover" loading="lazy" />
                </a>`,
            )
            .join('')}
        </div>`
      : `<p class="mt-4 text-elx-muted">${escapeHtml(labels.galleryEmpty)}</p>`;

  return `<div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
    <div class="lg:col-span-2">
      <h1 class="text-3xl sm:text-4xl font-bold leading-tight">${name}</h1>
      <div class="mt-6 overflow-hidden bg-neutral-100 border border-black/10">
        <img
          src="${img}"
          alt="${name}"
          class="w-full h-auto max-h-[520px] object-contain mx-auto"
          loading="eager"
        />
      </div>
      ${description}
    </div>
    <aside class="lg:col-span-1 lg:mt-[70px]">
      <div class="border border-black/10 bg-neutral-50 p-6 space-y-6">
        ${dateBlock}
        ${addressBlock}
        <div>
          <h2 class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-elx-muted">
            <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-elx-red" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M12 2 2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            ${escapeHtml(labels.figures)}
          </h2>
          ${figuresList}
        </div>
      </div>
    </aside>
  </div>
  <section class="mt-14 pt-10 border-t border-black/10">
    <h2 class="flex items-center gap-2 text-2xl font-bold">
      <svg viewBox="0 0 24 24" class="h-6 w-6 shrink-0 text-elx-red" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <path d="m21 15-5-5L5 21"></path>
      </svg>
      ${escapeHtml(labels.gallery)}
    </h2>
    ${galleryBlock}
  </section>`;
}
