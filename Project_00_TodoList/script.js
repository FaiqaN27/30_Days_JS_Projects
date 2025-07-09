const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById("add-btn");
const todoContainer = document.getElementById("task-container");

addBtn.addEventListener("click", function () {
  if (todoInput.value === "") {
    alert("Input Value Is Required");
  }
  else {
    let todoList = document.createElement('li');
    todoList.innerHTML = todoInput.value;
    todoContainer.appendChild(todoList);

    let listSpan = document.createElement('span');
    listSpan.innerHTML = "\u00d7";
    todoList.appendChild(listSpan);
  }

  todoInput.value = "";
  saveTasks();
})

todoContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTasks();
  }

  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
  }
}, false)


function saveTasks() {
  localStorage.setItem("data", todoContainer.innerHTML);
}

function showTasks() {
  todoContainer.innerHTML = localStorage.getItem("data");
}

showTasks();