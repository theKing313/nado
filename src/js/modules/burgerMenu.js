export default function initBurgerMenu() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const dataSpoller = document.querySelectorAll(`[data-spoller]`); //All
  console.log(dataSpoller);
  if (!burger || !menu || !dataSpoller) return;
  const logger = function (event) {
    // event.preventDefault();
    document.querySelectorAll('[data-spoller]').forEach((item) => {
      const subMenu = item.querySelector('[data-spollers]');

      item.addEventListener('mouseover', () => {
        subMenu?.classList.remove('_spoller-hidden');
      });

      item.addEventListener('mouseout', () => {
        subMenu?.classList.add('_spoller-hidden');
      });
    });
  };

  menu.addEventListener('mouseover', logger);
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
