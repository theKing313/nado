export default function initParallax() {
  const arrowBtn = document.querySelector('.main-header__arrow');
  const infoCards = document.querySelector('.info-cards');

  if (!arrowBtn) return;

  arrowBtn.addEventListener('click', (event) => {
    event.preventDefault();

    arrowBtn.classList.toggle('arrow__active');
    rotateArrow(arrowBtn);
    infoCards?.classList.toggle('_info-active');
  });

  function rotateArrow(target) {
    let angle = 0;

    function rotateStep() {
      if (angle === 180) return;

      angle += 20;
      target.style.transform = `translateX(-50%) rotate(${angle}deg)`;
      requestAnimationFrame(rotateStep);
    }

    rotateStep(); // запускаем
  }
}
