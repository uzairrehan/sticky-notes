// CRUD : create read update delete

let input = document.querySelectorAll("input");
let todoListDiv = document.querySelectorAll(".output");
let allTodos = [];

function add() {
  let todoVal = input[0].value;
  if (todoVal=== "") {
    return;
  }
  allTodos.push(todoVal);
  printing();
  input[0].value = "";
}

function printing() {
  todoListDiv[0].innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    todoListDiv[0].innerHTML += `
            <p id="todo-${i}">
                ${allTodos[i]}
                <button onclick="editTodo(${i}) "class="material-symbols-outlined button ">Edit</button>
                <button onclick="deleteTodo(${i})"class="material-symbols-outlined button ">Delete</button>
            </p>
            <br>
        `;
  }
}

function deleteTodo(i) {
  allTodos.splice(i, 1);

  printing();
}

function editTodo(i) {

}
