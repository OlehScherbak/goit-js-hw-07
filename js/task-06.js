const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length === parseInt(textInput.dataset.length)) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
});
textInput.addEventListener('focus', () => {
  textInput.classList.remove('invalid');
  textInput.classList.remove('valid');
});
