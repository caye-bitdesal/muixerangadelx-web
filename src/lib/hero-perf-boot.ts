import { onPageLoad } from './on-page-load';
import { reportHeroDomReady } from './hero-perf';

const HERO_SCOPES: [string, string][] = [
  ['carousel', '[data-hero-perf-scope="carousel"]'],
  ['historia-hero', '[data-hero-perf-scope="historia-hero"]'],
  ['page-hero', 'section[data-hero-perf-scope="page-hero"]'],
  ['join-us', '[data-hero-perf-scope="join-us"]'],
  ['agenda-hero', '[data-hero-perf-scope="agenda-hero"]'],
  ['blog-post', '[data-hero-perf-scope="blog-post"]'],
];

onPageLoad(() => {
  const path = window.location.pathname;
  for (const [name, selector] of HERO_SCOPES) {
    if (document.querySelector(selector)) {
      reportHeroDomReady(`${name}:${path}`);
    }
  }
});
