const incBtn = document.getElementById('inc-btn');
const decBtn = document.getElementById('dec-btn');
const restBtn = document.getElementById('reset-btn');

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  document.getElementById('count').innerHTML = count;
})

decBtn.addEventListener("click", () => {
  if (count == 0) {
    count = 0;
  }
  else {
    count--;
    document.getElementById('count').innerHTML = count;
  }
})

restBtn.addEventListener("click", () => {
  count = 0
  document.getElementById('count').innerHTML = count;
})

