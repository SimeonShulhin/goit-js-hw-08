import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name=email]');
const textAreaEl = document.querySelector('textarea[name=message]');

const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
if (formValue) {
  inputEl.value = formValue.email;
  textAreaEl.value = formValue.message;
}

const setStorage = e => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: e.target.value, message: textAreaEl.value })
  );
};

inputEl.addEventListener('input', throttle(setStorage, 500));

formEl.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: inputEl.value, message: textAreaEl.value });
  inputEl.value = '';
  textAreaEl.value = '';
  localStorage.removeItem('feedback-form-state');
});
