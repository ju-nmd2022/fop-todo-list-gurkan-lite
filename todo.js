//Select elements
const form = document.getElementById("todoform");
const todoInput = document.getElementById("boxT");

boxT;

//array
let todos = [];

//Form submit
form.addEventListener("submit", function (event) {
  //This prevents our form from refreshing our page
  event.preventDefault();
  saveTodo();
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
