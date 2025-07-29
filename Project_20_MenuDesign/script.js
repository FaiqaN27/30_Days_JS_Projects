const selectField = document.getElementById('selectField');
const options = document.getElementsByClassName('options');
const selectText = document.getElementById('selectText');
const arrowIcon = document.getElementById('arrow-icon');
const list = document.getElementById('list');

selectField.onclick = function () {
  list.classList.toggle('hide');
  arrowIcon.classList.toggle('rotate');
}

for (let option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  }
}