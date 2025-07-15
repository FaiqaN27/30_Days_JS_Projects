const inputBox = document.getElementById('input-box');
const generateBtn = document.getElementById('generate-btn');
const qrContainer = document.getElementById('qr-container');
const qrImg = document.getElementById('qr-img');

generateBtn.addEventListener("click", () => {
  if (!inputBox.value) {
    inputBox.classList.add("error");
    setTimeout(() => {
      inputBox.classList.remove("error");
    }, 1000)
  }
  else {
    qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
    qrContainer.classList.add("show-img");
  }
})