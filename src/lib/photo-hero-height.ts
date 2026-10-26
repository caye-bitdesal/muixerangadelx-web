export function bindPhotoHeroHeights(signal: AbortSignal): void {
  const roots = document.querySelectorAll('[data-photo-hero]');
  if (!roots.length) return;

  const bindHero = (root: Element) => {
    const img = root.querySelector<HTMLImageElement>('[data-photo-hero-img]');
    if (!img) return;

    const setHeight = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      if (!img.naturalWidth || !img.naturalHeight) return;

      const scaledHeight = viewportWidth * (img.naturalHeight / img.naturalWidth);
      let height = Math.min(viewportHeight, scaledHeight);
      const minAttr = root.getAttribute('data-photo-hero-min-height');
      if (minAttr) {
        const minHeight = Number.parseInt(minAttr, 10);
        if (Number.isFinite(minHeight) && minHeight > 0) {
          height = Math.max(minHeight, height);
        }
      }
      (root as HTMLElement).style.height = `${height}px`;
    };

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
  };

  roots.forEach(bindHero);

  const onResize = () => roots.forEach(bindHero);
  window.addEventListener('resize', onResize, { passive: true, signal });
  window.visualViewport?.addEventListener('resize', onResize, { passive: true, signal });
}
