// NAVIGATION
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.navigation__menu');
const links = navMenu.querySelectorAll('li');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('nav-active');
  menuIcon.classList.toggle('close-icon');
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav-active');
    menuIcon.classList.toggle('close-icon');
  });
});

// CONTACT
const nameInput = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
const form = document.querySelector('form');
const formResult = document.querySelector('.form-result');
const formError = document.querySelector('.submit-error');

nameInput.addEventListener('change', function (event) {
  const value = event.target.value;
  if (value.length < 3) {
    nameError.innerHTML = 'Name must contain at least 3 characters';
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

  const nameIsValid = nameValue.length >= 3;
  const emailIsValid = emailValue.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  if (nameValue === '') {
    nameError.innerHTML = 'This field is required.';
  }
  if (emailValue === '') {
    emailError.innerHTML = 'This field is required.';
  }
  if (!nameIsValid || !emailIsValid) {
    formError.innerHTML = 'There was a problem with your submission.';
  } else {
    formError.innerHTML = '';
    formResult.classList.add('success');
    formResult.innerHTML = `Thank you <strong>${nameValue}</strong> for reaching out! We've received your response and will be in touch if there's a fitting opportunity.`;
    form.reset();

    setTimeout(function () {
      formResult.classList.remove('success');
      formResult.innerHTML = ``;
    }, 3000);
  }
});
