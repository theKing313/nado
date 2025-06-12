import './css/main.css';
import initBurgerMenu from './js/modules/burgerMenu';
import initCookieNotice from './js/modules/cookie';
import initFormHandlers from './js/modules/form';
import initParallax from './js/modules/initParallax';
import initModal from './js/modules/modal';
window.onload = function () {
  initBurgerMenu();
  initParallax();
  initModal();
  initFormHandlers();
  initCookieNotice();
};
