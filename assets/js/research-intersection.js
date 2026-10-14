(() => {
  const illustration = document.querySelector('.research-intersection');
  if (!illustration) return;
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let hasCompletelyLeft = false;
  let scheduled = false;
  const replay = () => {
    if (motionPreference.matches || scheduled) return;
    scheduled = true;
    illustration.classList.remove('is-animating');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      illustration.classList.add('is-animating');
      scheduled = false;
    }));
  };
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) {
      hasCompletelyLeft = true;
      return;
    }
    if (hasCompletelyLeft && entry.intersectionRatio >= 0.25) {
      hasCompletelyLeft = false;
      replay();
    }
  }, { threshold: [0, 0.25] });
  observer.observe(illustration);
})();
