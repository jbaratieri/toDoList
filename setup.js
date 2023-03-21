var inputElement = document.querySelector("#nova_tarefa")
var btn = document.querySelector(".nova_tarefa_btn");
const lista = document.querySelector('.container__lista')
let i = 1

function validarInput() {

    if (inputElement.value.trim().length > 0) {
        return true;
    }
    return false;
}

var adicionarTarefa = () => {
    var inputIsValid = validarInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error")
    } else {
        insereTarefaNaLista()
    }
}

var modificarClasseError = () => {
    var inputIsValid = validarInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}

function insereTarefaNaLista() {
    var containerLista = document.querySelector('.container__lista');
    var li = document.createElement('li');
    li.classList = "checkRemove"
    li.id = `lista${i}`
    containerLista.appendChild(li);
    li.innerHTML = `<p>${inputElement.value}</p> <input type='checkbox' class="checkbox"><button class="deletar_btn">X</button></div>`
    i++
    inputElement.value = ""
    inputElement.focus()
}

function checkDeletar(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'checkbox') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'deletar_btn') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

function verificaTecla(e) {
    if (e.key == 'Enter') {
        adicionarTarefa()
    }
}

lista.addEventListener('click', checkDeletar)
btn.addEventListener('click', adicionarTarefa);
inputElement.addEventListener("change", modificarClasseError)
inputElement.addEventListener("keypress", verificaTecla)
