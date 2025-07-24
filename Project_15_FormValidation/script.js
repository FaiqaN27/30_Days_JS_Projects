let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let msgError = document.getElementById('msg-error');
let formError = document.getElementById('form-error');

function validateName() {
  let name = document.getElementById('input-name').value;

  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }

  nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}

function validatePhone() {
  let phone = document.getElementById('input-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = "phone no is required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "phone no should be 11 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "only digits please.";
    return false;
  }

  phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById('input-email').value;

  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.innerHTML = "invalid email";
    return false;
  }

  emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}

function validateMsg() {
  let msg = document.getElementById('input-msg').value;
  let required = 30;
  let left = required - msg.length;
  if (left > 0) {
    msgError.innerHTML = left + ' more characters required';
    return false;
  }
  msgError.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}

function formValidate() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
    formError.style.display = 'block';
    formError.innerHTML = 'Please fix error to submit';
    setTimeout(function () {
      formError.style.display = 'none';
    }, 3000)
    return false;
  }

  formError.style.display = 'block';
  formError.style.color = 'green';
  formError.innerHTML = 'Form submitted successfully!';
  setTimeout(() => {
    formError.style.display = 'none';
  }, 3000);

  document.querySelector("form").reset();

  nameError.innerHTML = "";
  phoneError.innerHTML = "";
  emailError.innerHTML = "";
  msgError.innerHTML = "";

  return true;
}

