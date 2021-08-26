// Selectors
const nav = document.querySelector('.hero__navigation');
const header = document.querySelector('.hero');
const sectionScroll = document.querySelector('.reuseable-container');
const reveal = document.querySelector('.reveal');

// sticky navigation
function stickyNav(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('hidden');
  } else {
    nav.classList.remove('hidden');
  }
}
const obsNav = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
obsNav.observe(header);
