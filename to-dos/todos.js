var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [//caso esse array precisa de mais informação, fazer um array de objeto. exemplo:
    //{text: 'Fazer Café', propriedade: 1, },
    'Fazer Café',
    'Estudar JS',
    'Acessar a comunidade da rocketseat'
]

function renderTodos(){

    listElement.innerHTML = ''

    for (todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('noclick', 'deleteTodo(' + pos + ')') 

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    renderTodos()

}

buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
}