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