/* =========================================================
   Abhinav Garg — Portfolio JavaScript
   main.js
   ========================================================= */

/* ─── SCROLL REVEAL ─── */
/**
 * Uses IntersectionObserver to add the `.in` class to any element
 * with the `.reveal` class once it enters the viewport.
 * A small staggered delay is applied per-element for a cascade effect.
 */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), i * 70);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ─── ACTIVE NAV HIGHLIGHT ─── */
/**
 * Highlights the nav link matching the section currently in view.
 */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function activateNav() {
  let current = '';
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
}

/* ─── BACK TO TOP ─── */
/**
 * Shows/hides the floating back-to-top button based on scroll position.
 */
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  if (backTop) {
    backTop.classList.toggle('show', window.scrollY > 400);
  }
  activateNav();
});

/* Run once on load to set initial active state */
activateNav();
