export default function initModal() {
  const triggers = document.querySelectorAll('.button');
  const modal = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.overlay-close');

  if (!modal) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }
}
