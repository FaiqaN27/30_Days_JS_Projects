const lists = document.getElementsByClassName('list');
const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');

let selected = null;

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target; //store drag element
  })
}

rightBox.addEventListener("dragover", (e) => {
  e.preventDefault(); //allows dropping 
})
rightBox.addEventListener("drop", () => {
  // Actually places the item in the new location
  if (selected) {
    rightBox.appendChild(selected);
    selected = null;
  }
})

leftBox.addEventListener("dragover", (e) => {
  e.preventDefault();
})
leftBox.addEventListener("drop", () => {
  if (selected) {
    leftBox.appendChild(selected);
    selected = null;
  }
})
