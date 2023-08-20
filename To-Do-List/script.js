const todoInput = document.getElementById("todo-input");

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    const todoList = document.getElementById("todo-list");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.innerText = todoInput.value;
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = "";
  }
};
