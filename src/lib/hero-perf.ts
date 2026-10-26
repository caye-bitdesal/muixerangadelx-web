const PREFIX = '[hero-perf]';

function enabled(): boolean {
  return import.meta.env.DEV;
}

/** Inicio de una navegación con Client Router (no la carga inicial del documento). */
let clientNavigationStartMs = 0;

if (typeof document !== 'undefined') {
  document.addEventListener(
    'astro:before-preparation',
    () => {
      clientNavigationStartMs = performance.now();
    },
    true,
  );
}

function msUntilDomReady(): number {
  if (clientNavigationStartMs > 0) {
    const ms = Math.round(performance.now() - clientNavigationStartMs);
    clientNavigationStartMs = 0;
    return ms;
  }

  const nav = performance.getEntriesByType('navigation')[0] as
    | PerformanceNavigationTiming
    | undefined;

  if (nav && nav.domContentLoadedEventEnd > 0) {
    return Math.round(nav.domContentLoadedEventEnd - nav.fetchStart);
  }

  return Math.round(performance.now() - (nav?.fetchStart ?? 0));
}

/**
 * Consola: ms desde el inicio de la carga hasta que el DOM está listo.
 * - Recarga / primera visita: fetchStart → DOMContentLoaded (Navigation Timing).
 * - Client Router: astro:before-preparation → DOMContentLoaded del documento ya aplicado en astro:page-load.
 */
export function reportHeroDomReady(scope: string): void {
  if (!enabled()) return;

  const log = () => {
    console.log(PREFIX, 'dom-ready', scope, {
      msSinceLoadStart: msUntilDomReady(),
      readyState: document.readyState,
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', log, { once: true });
    return;
  }

  log();
}
