import './css/variables.scss';
import './css/main.scss';
import initBurgerMenu from './js/modules/burgerMenu';
import initParallax from './js/modules/initParallax';
import initModal from './js/modules/modal';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
window.onload = function () {
  initBurgerMenu();
  initParallax();
  initModal();
  const swiper = new Swiper('.main-header__slider', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoHeight: true,
    navigation: {},
    effect: 'fade',
    speed: 800
  });
};
