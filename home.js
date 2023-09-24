const nameInput = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
const message = document.querySelector('#message');
const messageError = document.querySelector('.message-error');
const form = document.querySelector('form');
const formResult = document.querySelector('.form-result');
const formError = document.querySelector('.submit-error');

nameInput.addEventListener('change', function (event) {
  const value = event.target.value;
  if (value.length < 3) {
    nameError.innerHTML = 'Name must contain at least 3 characters';
    // } else if (!value.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    //   nameError.innerHTML = 'Write full name';
  } else {
    nameError.innerHTML = '';
  }
});
emailInput.addEventListener('change', function (event) {
  const value = event.target.value;
  if (
    !value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError.innerHTML = 'Please enter a valid email address.';
  } else {
    emailError.innerHTML = '';
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue !== '' && emailValue !== '') {
    formResult.classList.add('success');
    formResult.innerHTML = `
      Thank you <strong>${nameValue}</strong> for reaching out! We've received your response and will be in touch if there's a fitting opportunity.
    `;
  } else {
    nameError.innerHTML = 'This field is required.';
    emailError.innerHTML = 'This field is required.';
    formError.innerHTML = 'There was a problem with your submission.';
  }
  form.reset();
});
