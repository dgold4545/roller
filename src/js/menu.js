import { refs } from './refs';
export function openMenu() {
  refs.menuList.classList.toggle('is-open');
  refs.menuList.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'A') return;
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    closeMenu();
    targetSection.scrollIntoView({ block: 'start' });
  });
}
function closeMenu() {
  refs.menuList.classList.remove('is-open');
}
