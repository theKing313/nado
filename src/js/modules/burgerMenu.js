export default function initBurgerMenu() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    const menuIsOpen = menu.classList.contains('_active');
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
}
