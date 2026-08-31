export function fitActivityCardImage(img: HTMLImageElement): void {
  const media = img.closest('.activity-card__media') as HTMLElement | null;
  if (!media) return;

  const apply = () => {
    const cw = media.clientWidth;
    const ch = media.clientHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    if (!iw || !ih || !cw || !ch) return;

    const fitsNaturally = iw <= cw && ih <= ch;
    img.classList.toggle('activity-card__img--natural', fitsNaturally);
    img.classList.toggle('activity-card__img--cover', !fitsNaturally);
  };

  if (img.complete) apply();
  else img.addEventListener('load', apply, { once: true });
}

export function fitActivityCardImages(root: ParentNode = document): void {
  root.querySelectorAll('.activity-card__media img').forEach((img) => {
    fitActivityCardImage(img as HTMLImageElement);
  });
}
