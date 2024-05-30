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
            <div id="todo-${i}">
                <p>
                ${allTodos[i]}
                </p>
                <span>(
                ${i + 1} )
                <button onclick="editTodo(${i}) "class="material-symbols-outlined button ">Edit</button>
                <button onclick="deleteTodo(${i})"class="material-symbols-outlined button ">Delete</button>
                </span>
                </div>
        `;
  }
}
function deleteTodo(i) {
  allTodos.splice(i, 1);
  printing();
}
function editTodo(i) {
  
  printing();
}