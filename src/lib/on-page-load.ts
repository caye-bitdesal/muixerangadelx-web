/** Run on first paint and after each Client Router navigation; return cleanup before the next run. */
export function onPageLoad(init: () => void | (() => void)): void {
  let teardown: (() => void) | undefined;

  const run = () => {
    teardown?.();
    teardown = undefined;
    const result = init();
    if (typeof result === 'function') teardown = result;
  };

  document.addEventListener('astro:page-load', run);
}
