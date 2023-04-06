//Select elements
const form = document.getElementById("todoform");
const todoInput = document.getElementById("boxT");
const todosListEl = document.getElementById("list-todo");

//array
let todos = [];

//Form submit
form.addEventListener("submit", function (event) {
  //This prevents our form from refreshing our page
  event.preventDefault();
  saveTodo();
  renderTodos();
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
      checked: false,
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
    <p class="">${todo.value}</p>
      <p class="trash">Remove</p>
      </div>
    `;
  });
}
//lägg in senare så man liksom strycker över en grej om man gjort det, 26min i vid

// Click event listener for all todos
todosListEl.addEventListener("click", (event) => {
  const target = event.target;
  const parentElement = target.parentNode;

  const todo = parentElement;
  const todoId = todo.id;

  console.log(todoId);
});

// check a todo, first created as an if statement but then made cleaner
function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo, // will copy all the objects dvs value, just written shorter
    checked: index === todoId ? !todo.checked : todo.checked, // this is made not to repet myself to much
  }));

  renderTodos();
}
