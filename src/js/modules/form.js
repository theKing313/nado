import validateEmail from '../utils/checkEmail';
import frameImg from '../../img/Frame.png';
import spinner from '../../img/Spinner.gif';
export default function initFormHandlers() {
  const forms = document.querySelectorAll('form');
  const message = {
    loading: spinner,
    success: 'Thank you!',
    failure: 'sm went wrong...'
  };
  const phoneInput = document.querySelector('input[type="tel"]');
  const emailInput = document.querySelector('#signup-email');

  phoneInput.addEventListener('focus', () => {
    if (phoneInput.value.trim() === '') {
      phoneInput.value = '+7';
    }
  });
  phoneInput.addEventListener('input', (event) => {
    if (event.target.value.trim() === '') {
      event.target.value = '+7';
    }
  });
  phoneInput.addEventListener('blur', () => {
    if (phoneInput.value.trim() === '+7') {
      phoneInput.value = '';
    }
  });

  emailInput.addEventListener('input', () => {
    const value = emailInput.value.trim();
    const isValid = validateEmail(value);

    if (!isValid) {
      emailInput.classList.add('_error');
    } else {
      emailInput.classList.remove('_error');
    }
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const errors = validateForm(form);

      if (errors === 0) {
        const statusImg = document.createElement('img');
        statusImg.src = message.loading;
        statusImg.classList.add('loading-image');
        form.insertAdjacentElement('afterend', statusImg);

        setTimeout(() => {
          statusImg.remove();
          form.reset();
          showSuccessModal(message.success);
          clearErrors(form);
        }, 1000);
      } else {
        showErrors(form);
      }
    });
  });
}

function validateForm(form) {
  let error = 0;
  const fields = form.querySelectorAll('.__req');

  fields.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add('_error');
      error++;
    } else {
      input.classList.remove('_error');
    }
  });

  return error;
}

function showErrors(form) {
  form.classList.add('error');
  form.querySelectorAll('.filed_err').forEach((el) => {
    el.classList.add('show');
    el.classList.remove('hide');
  });
}

function clearErrors(form) {
  form.classList.remove('error');
  form.querySelectorAll('.filed_err').forEach((el) => {
    el.classList.remove('show');
    el.classList.add('hide');
  });
}

function showSuccessModal(text) {
  const prevModal = document.querySelector('.signup-form');
  const modal = document.querySelector('.overlay');
  prevModal.classList.add('hide');

  const thanks = document.createElement('form');
  thanks.classList.add('signup-form');
  thanks.innerHTML = `
    <div class="modal__content">
      <div class="modal__image"><img src="${frameImg}" ></div>
      <div class="modal__title">${text}</div>
      <div class="modal__text">We have received your application and will contact you soon!</div>
      <div class="modal__button">Super!</div>
    </div>
  `;

  document.querySelector('.overlay-content').append(thanks);

  setTimeout(() => {
    thanks.remove();
    prevModal.classList.remove('hide');
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }, 900000);
}
