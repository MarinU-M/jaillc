const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('nav__links--open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// close menu when a link is clicked
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('nav__links--open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// load third-party widgets (Instagram, Google reviews) only when their
// section is about to scroll into view
const lazyBlocks = document.querySelectorAll('[data-lazy-script]');

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadScript(entry.target.dataset.lazyScript);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '400px 0px' }
  );
  lazyBlocks.forEach((block) => observer.observe(block));
} else {
  lazyBlocks.forEach((block) => loadScript(block.dataset.lazyScript));
}
