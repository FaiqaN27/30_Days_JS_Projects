const passwordBox = document.getElementById('password-input');
const generateBtn = document.getElementById('generate-btn');
const copyPassword = document.getElementById('copy-password');

const len = 12;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*(){}:|<>?[];'\,./";

const allChars = UpperCase + LowerCase + Numbers + Symbols;

generateBtn.addEventListener("click", function () {
  let password = "";

  //first four values
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += Numbers[Math.floor(Math.random() * Numbers.length)];
  password += Symbols[Math.floor(Math.random() * Symbols.length)];

  //then from here until password length is 12
  while (len > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
})

copyPassword.addEventListener("click", function () {
  passwordBox.select();
  document.execCommand("copy");
})