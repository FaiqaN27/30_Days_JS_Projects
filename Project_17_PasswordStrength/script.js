const password = document.getElementById('password');
const msg = document.getElementById('msg');
const strength = document.getElementById('strength');

password.addEventListener("input", () => {
  const value = password.value;
  const length = value.length;

  const hasUpper = /[A-Z]/.test(value);
  const hasLower = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecial = /[!@#$%^&*()_+{}:"|<>?/.,;-=]/.test(value);

  if (length === 0) {
    msg.style.display = "none";
    password.style.borderColor = "#ccc";
  }
  else {
    msg.style.display = "block";
    if (length >= 8 && hasLower && hasUpper && hasNumber && hasSpecial) {
      strength.innerHTML = `<strong>Strong</strong> - Great! Your password is secure.`;
      password.style.borderColor = "green";
      msg.style.color = "green";
    }
    else if (length < 6 || (!hasSpecial && !hasNumber)) {
      strength.innerHTML = `<strong>Weak</strong> - Try adding numbers, uppercase letters, or special characters.`;
      password.style.borderColor = "#ff5925";
      msg.style.color = "#ff5925";
    }
    else if (length >= 6 && ((hasUpper && hasLower) || (hasNumber && hasSpecial))) {
      strength.innerHTML = `<strong>Medium</strong> - Could be stronger. Add more variety like symbols or uppercase letters.`;
      password.style.borderColor = "yellow";
      msg.style.color = "yellow";
    }

  }

})