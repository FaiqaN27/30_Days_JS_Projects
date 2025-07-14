const createBtn = document.getElementById('create-btn');
const notesContainer = document.getElementById('notes-container');
let notes = document.querySelectorAll('.notes-input');

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement('p');
  let delImg = document.createElement('img');
  inputBox.className = 'notes-input';
  inputBox.setAttribute("contenteditable", "true");
  delImg.src = "assets/delete.png";

  inputBox.appendChild(delImg);
  notesContainer.appendChild(inputBox);

  saveNotes();
})

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  }
  //for saving each note after updating 
  else if (e.target.tagName == "P") {
    notes = document.querySelectorAll('.notes-input');
    notes.forEach(note => {
      note.onkeyup = function () {
        saveNotes();
      }
    })
  }

})

function saveNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function getNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
})

getNotes(); 