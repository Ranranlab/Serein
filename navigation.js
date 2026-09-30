(() => {
  const backToTop = document.querySelector('.floating-top');
  if (!backToTop) return;

  const update = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 360);
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('pageshow', update);
  update();

  const dial = document.querySelector('.cover-dial');
  const svg = dial?.querySelector('svg');
  if (!svg || !window.IntersectionObserver) return;

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  let started = false;
  svg.pauseAnimations();

  const syncMotion = () => {
    const running = visible && !document.hidden && !motionPreference.matches;
    dial.classList.toggle('is-running', running);
    if (!running) {
      svg.pauseAnimations();
      return;
    }
    if (!started) {
      svg.querySelectorAll('animateMotion').forEach(motion => {
        motion.parentElement.setAttribute('cx', '0');
        motion.parentElement.setAttribute('cy', '0');
        motion.beginElement();
      });
      started = true;
    }
    svg.unpauseAnimations();
  };

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncMotion();
  }).observe(dial);
  document.addEventListener('visibilitychange', syncMotion);
  motionPreference.addEventListener('change', syncMotion);
})();
