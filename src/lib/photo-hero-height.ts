function measureAgendaHeroMin(root: Element): number {
  const header = document.getElementById('header');
  const shell = root.querySelector('.activities-cal-shell');
  if (!(shell instanceof HTMLElement)) return 0;

  const headerH = header instanceof HTMLElement ? header.offsetHeight : 0;
  const shellH = shell.offsetHeight;
  const fromParts = headerH + shellH;

  const content = root.querySelector('[data-agenda-hero-content]');
  if (content instanceof HTMLElement) {
    return Math.max(fromParts, content.scrollHeight);
  }

  return fromParts;
}

export function updatePhotoHeroHeight(root: Element): void {
  const img = root.querySelector<HTMLImageElement>('[data-photo-hero-img]');
  if (!img) return;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  if (!img.naturalWidth || !img.naturalHeight) return;

  const scaledHeight = viewportWidth * (img.naturalHeight / img.naturalWidth);
  let height = Math.min(viewportHeight, scaledHeight);

  if (root.hasAttribute('data-activities-calendar')) {
    const agendaMin = measureAgendaHeroMin(root);
    if (agendaMin > 0) height = Math.max(height, agendaMin);
  }

  (root as HTMLElement).style.height = `${height}px`;
}

export function bindPhotoHeroHeights(signal: AbortSignal): void {
  const roots = document.querySelectorAll('[data-photo-hero]');
  if (!roots.length) return;

  const bindHero = (root: Element) => {
    const img = root.querySelector<HTMLImageElement>('[data-photo-hero-img]');
    if (!img) return;

    const setHeight = () => updatePhotoHeroHeight(root);

    const whenReady = () =>
      new Promise<void>((resolve) => {
        if (img.complete) {
          resolve();
          return;
        }
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });

    whenReady().then(setHeight);

    if (root.hasAttribute('data-activities-calendar')) {
      const shell = root.querySelector('.activities-cal-shell');
      if (shell) {
        const ro = new ResizeObserver(() => setHeight());
        ro.observe(shell);
        signal.addEventListener('abort', () => ro.disconnect(), { once: true });
      }
    }
  };

  roots.forEach(bindHero);

  const onResize = () => roots.forEach((root) => updatePhotoHeroHeight(root));
  window.addEventListener('resize', onResize, { passive: true, signal });
  window.visualViewport?.addEventListener('resize', onResize, { passive: true, signal });
}
