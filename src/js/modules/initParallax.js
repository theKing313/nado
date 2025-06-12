export default function initParallax() {
  let x = window.innerWidth;

  function animate() {
    const w1 = document.querySelector('.work_img1');
    const w2 = document.querySelector('.work_img2');
    const w3 = document.querySelector('.work_img3');

    if (!w1 || !w2 || !w3) return;

    x--;
    w1.style.backgroundPositionX = `${x}px`;
    w2.style.backgroundPositionX = `${x * 0.6}px`;
    w3.style.backgroundPositionX = `${x * 0.8}px`;

    if (x < -window.innerWidth) x = window.innerWidth;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
