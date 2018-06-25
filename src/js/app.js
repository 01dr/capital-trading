import NavScrollSpy from 'nav-scroll-spy';
import ScrollToElement from 'scroll-window-to-element';

const $ = (id) => document.querySelector(id);

const spy = new NavScrollSpy({ offset: 110 });
const scroll = new ScrollToElement({ offset: -100 });
spy.init();
scroll.init();

const topbarCL = $('.topbar').classList;

window.addEventListener('scroll', (event) => {
  if (window.pageYOffset === 0) topbarCL.toggle('topbar-alt-state', false);
  else topbarCL.toggle('topbar-alt-state', true);
});
