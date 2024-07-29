import { postContacts } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('.input-form-work-together'),
  form: document.querySelector('.form-work-together'),
  inputComments: document.querySelector('.comments-form-work-together'),
  modal: document.querySelector('.modal-backdrop'),
  inputWrapper: document.querySelector('.input-wrapper'),
  commentsWrapper: document.querySelector('.comments-wrapper'),
  inputSuccess: document.querySelector('.input-success'),
  inputInvalid: document.querySelector('.input-invalid'),
  body: document.querySelector('body'),
};

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  refs.inputSuccess.classList.add('visually-hidden');
  refs.inputWrapper.classList.remove('valid');
  refs.commentsWrapper.classList.remove('filling');

  const { email, comments } = e.target.elements;
  const data = { email: email.value.trim(), comment: comments.value.trim() };

  try {
    const posted = await postContacts(data);
    if (!posted) {
      return;
    }
    refs.modal.classList.remove('visually-hidden');
    refs.body.classList.add('no-scroll');

    refs.form.reset();
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please, try again.',
      position: 'topCenter',
      backgroundColor: '#ed3b44',
      messageColor: '#fafafa',
      titleColor: '#fafafa',
    });
  }
});

refs.modal.addEventListener('click', e => {
  const { className } = e.target;
  if (className === 'modal-backdrop' || className === 'close-button') {
    refs.modal.classList.add('visually-hidden');
    refs.body.classList.remove('no-scroll');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    refs.modal.classList.add('visually-hidden');
    refs.body.classList.remove('no-scroll');
  }
});
// =============================
refs.input.addEventListener('input', () => {
  if (refs.input.validity.valid) {
    refs.inputSuccess.classList.remove('visually-hidden');
    refs.inputInvalid.classList.add('visually-hidden');
    refs.inputWrapper.classList.add('valid');
    refs.inputWrapper.classList.remove('invalid');
  } else {
    refs.inputSuccess.classList.add('visually-hidden');
    refs.inputInvalid.classList.remove('visually-hidden');
    refs.inputWrapper.classList.remove('valid');
    refs.inputWrapper.classList.add('invalid');
  }
});

refs.inputComments.addEventListener('input', () => {
  if (refs.inputComments.value.trim().length > 0) {
    refs.commentsWrapper.classList.add('filling');
  } else {
    refs.commentsWrapper.classList.remove('filling');
  }
});
