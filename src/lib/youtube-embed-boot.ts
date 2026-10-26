import { onPageLoad } from './on-page-load';

function mountDeferredYoutubeIframes(root: ParentNode = document): void {
  root.querySelectorAll<HTMLIFrameElement>('iframe[data-youtube-embed-src]').forEach((iframe) => {
    const src = iframe.dataset.youtubeEmbedSrc;
    if (!src || iframe.dataset.youtubeEmbedLoaded === 'true') return;

    const load = () => {
      iframe.src = src;
      iframe.dataset.youtubeEmbedLoaded = 'true';
    };

    if (iframe.classList.contains('page-hero__youtube')) {
      load();
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: '100px' },
    );
    observer.observe(iframe);
  });
}

onPageLoad(() => mountDeferredYoutubeIframes());

document.addEventListener('astro:after-swap', () => {
  mountDeferredYoutubeIframes();
});
