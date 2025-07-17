const passwordInput = document.getElementById('password-input');
const showHideIcon = document.getElementById('show-hide-icon');

showHideIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showHideIcon.src = "assets/eye-open.png"
  }
  else {
    passwordInput.type = "password";
    showHideIcon.src = "assets/eye-close.png"
  }
})
