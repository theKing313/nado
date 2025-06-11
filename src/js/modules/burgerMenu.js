export default function initBurgerMenu() {
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('header__burger')) {
      e.preventDefault();
      document.querySelector('.header__burger').classList.toggle('_active');
      document.querySelector('.header__menu').classList.toggle('_active');
    }
  });
}
