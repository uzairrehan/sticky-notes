let todoInput = document.querySelectorAll(".new-todo")[0];
let todoListDiv = document.querySelectorAll(".output");
let errorPEl = document.querySelectorAll(".error-msg")[0];
let editTodoDiv = document.querySelectorAll("#edit-todo")[0];
let addTodoDiv = document.querySelectorAll("#add-new-todo")[0];
let editTodoInput = document.querySelectorAll(".edit-todo")[0];
let editIndex;
let allTodos = [];
let isEditing = false;

//  add function
function add() {
  let todoVal = todoInput.value;
  if (todoVal == "" ||todoVal == " ") {
    displayError("Can't save empty Note")
  } else {
    allTodos.push(todoVal);
    printAllTodos();
  }
  todoInput.value = "";
}

// print on page
function printAllTodos() {
  todoListDiv[0].innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    todoListDiv[0].innerHTML += `
              <div id="todo-${i}">
                    <p>
                      ${allTodos[i]}
                    </p>
                    <span>(${i + 1})
                       <button onclick="editTodo(${i}) "class="material-symbols-outlined button ">Edit</button>
                       <button onclick="deleteTodo(${i})"class="material-symbols-outlined button ">Delete</button>
                    </span>
              </div>
                `;
  }
}

// delete fun
function deleteTodo(index) {
  allTodos.splice(index, 1);
  printAllTodos();
}

// will edit
function editTodo(index) {
  if (isEditing) {
    displayError("Firstly Save it !");
  } else {
    editIndex = index;
    toggleTodoForm();
    editTodoInput.value = allTodos[index];
  }
}

// update function on page
function upadateTodo() {
  toggleTodoForm();
  allTodos.splice(editIndex, 1, editTodoInput.value);
  printAllTodos();
}

// this funs is hiding save div
function toggleTodoForm() {
  if (!isEditing) {
    editTodoDiv.className = "";
    addTodoDiv.className += " hide";
  } else {
    editTodoDiv.className += " hide";
    addTodoDiv.className = "";
  }
  isEditing = !isEditing;
}

// error function will show if not saved
function displayError(erMsg) {
  errorPEl.innerHTML = erMsg;
  setTimeout(function () {
    errorPEl.innerHTML = "";
  }, 2000);
}
