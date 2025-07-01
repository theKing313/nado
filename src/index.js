import './css/main.scss';
import initBurgerMenu from './js/modules/burgerMenu';
import initCookieNotice from './js/modules/cookie';
import initFormHandlers from './js/modules/form';
import initParallax from './js/modules/initParallax';
import initModal from './js/modules/modal';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
window.onload = function () {
  initBurgerMenu();
  initParallax();
  initModal();
  initFormHandlers();
  initCookieNotice();

  const swiper = new Swiper('.main-header__slider', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    effect: 'fade',
    speed: 800
  });
};
