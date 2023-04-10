//the following code was adapted from https://www.youtube.com/watch?v=i1pxPSl9ZHc&t=225s&ab_channel=CodeExplained

//DOM - selected elements
const form = document.getElementById("todoform");
const todoInput = document.getElementById("boxT");
const todosListEl = document.getElementById("list-todo");

//array - vars
let todos = JSON.parse(localStorage.getItem("todos"));

// 1st render
renderTodos();

//Form submit
form.addEventListener("submit", function (event) {
  //This prevents our form from refreshing our page
  event.preventDefault();

  saveTodo();
  renderTodos();
  localStorage.setItem("todos", JSON.stringify(todos));
});

//Save todo
function saveTodo() {
  const todoValue = todoInput.value;

  //if todo is empty a popup will show else it will add text to list
  const isEmpty = todoValue === "";

  if (isEmpty) {
    alert("Please write something<3");
  } else {
    todos.push({
      value: todoValue,
      checked: false, // add checked property with default value
    });
    todoInput.value = "";
    console.log(todos);
  }
}

//Render Todo - basicslly makes the items you write show on the screen
function renderTodos() {
  // clear elements before re-render
  todosListEl.innerHTML = "";

  // Render todos
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
      <div class="todo" id=${index}> 
      <p class="${todo.checked ? "checked-todo" : ""}">${todo.value}</p>
        <i class="trash" data-action="delete">✖️</i>
        <i class="${todo.checked ? "checked" : ""}" data-action="check">✔️</i>
        </div>
      `;
  });
}

// Click event listener for all todos - the following code and checkTodo was adapetd from chat gtp
todosListEl.addEventListener("click", (event) => {
  const target = event.target;
  const parentElement = target.parentNode;

  //todo id
  const todo = parentElement;
  const todoId = todo.id;

  //target action
  const action = target.dataset.action;

  if (action === "check") {
    checkTodo(todoId);
  } else if (action === "delete") {
    deleteTodo(todoId);
    renderTodos(); // re-render todos after deletion
    localStorage.setItem("todos", JSON.stringify(todos)); // save changes to local storage
  }
});
// check a todo, first created as an if statement but then made cleaner
function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo, // will copy all the objects dvs value, just written shorter
    checked: index == todoId ? !todo.checked : todo.checked, // this is made not to repet myself to much
  }));

  renderTodos();
  localStorage.setItem("todos", JSON.stringify(todos));

  // Select the <div> element of the clicked todo item
  const todoEl = document.getElementById(todoId);
}

// delete Todo
function deleteTodo(todoId) {
  todos.splice(todoId, 1);
}

//re-render
renderTodos();
localStorage.setItem("todos", JSON.stringify(todos));
