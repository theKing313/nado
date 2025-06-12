export default function initCookieNotice() {
  const cookie = document.querySelector('.cookie');
  const acceptBtn = cookie?.querySelector('.cookie__button[type="accept"]');
  const declineBtn = cookie?.querySelector('.cookie__button[type="decline"]');

  if (!cookie || !acceptBtn) return;

  if (!localStorage.getItem('cookie')) {
    setTimeout(() => {
      cookie.classList.add('show');
      cookie.classList.remove('hide');
    }, 2600);
  }

  acceptBtn.addEventListener('click', () => {
    cookie.classList.add('hide');
    cookie.classList.remove('show');
    localStorage.setItem('cookie', 'true');
  });
  declineBtn.addEventListener('click', () => {
    cookie.classList.add('hide');
    cookie.classList.remove('show');
  });
}
