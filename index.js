const textarea = document.querySelector('textarea')
const addBtn = document.getElementById('addBtn')
const todoContainer = document.querySelector('.todoContainer')

let todoList = []

function addTodo() {
    const todo = textarea.value.trim()
    if (!todo) return

    todoList.push(todo)
    textarea.value = ''
    updateUI()
}

function editTodo(index) {
    textarea.value = todoList[index]

    todoList = todoList.filter((element, elementIndex) => {
        return elementIndex !== index
    })

    updateUI()
}

function deleteTodo(index) {
    todoList = todoList.filter((element, elementIndex) => {
        return elementIndex !== index
    })

    updateUI()
}

function updateUI() {
    let newInnerHTML = ''

    todoList.forEach((todoElement, todoIndex) => {
        newInnerHTML += `
        <div class="todo">
            <p>${todoElement}</p>
            <div class="btnContainer">
                <button class="iconBtn" onclick="editTodo(${todoIndex})">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="iconBtn" onclick="deleteTodo(${todoIndex})">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
        `
    })

    todoContainer.innerHTML = newInnerHTML
}

addBtn.addEventListener('click', addTodo)
