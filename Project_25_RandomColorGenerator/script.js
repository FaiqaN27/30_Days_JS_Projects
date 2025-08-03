// HEX Color
const hexBtn = document.getElementById("hexColorBtn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyColor = document.querySelector(".hex-copy-color");

hexBtn.addEventListener("click", createRandomHexColor);
hexCopyColor.addEventListener("click", copyHexColorToClipboard);
function createRandomHexColor() {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";
  for (let i = 0, characterSetLength = characterSet.length; i < 6; i++) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * characterSetLength)
    );
  }
  hexColorValue.innerText = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexColorBtn.style.color = `#${hexColorOutput}`;
}

//RGB Color
const rgbBtn = document.getElementById("rgbBtn");
const getRedInputRange = document.getElementById("red");
const getGreenInputRange = document.getElementById("green");
const getBlueInputRange = document.getElementById("blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyColor = document.querySelector(".rgb-copy-color");
const rgbColorValue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener("click", createRandomRgbColor);
function createRandomRgbColor() {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  let extractedRgbValue = `rgb( ${extractRedValue} , ${extractGreenValue},${extractBlueValue} )`;

  rgbColorValue.innerText = `${extractedRgbValue}`;
  rgbColorContainer.style.backgroundColor = `${extractedRgbValue}`;
}

rgbCopyColor.addEventListener("click", copyRgbColorToClipboard);

function copyHexColorToClipboard() {
  navigator.clipboard.writeText(hexColorValue.innerText);

  alert("HEX Color is copied to clipboard");
}

function copyRgbColorToClipboard() {
  navigator.clipboard.writeText(rgbColorValue.innerText);
  alert("RGB Color is copied to clipboard");
}
