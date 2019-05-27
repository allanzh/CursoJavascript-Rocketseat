var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var toDos = [
    'Fazer Café',
    'Estudar JS',
    'Acessar a Comunidade Rocketseat'
];

function renderToDos() {
    for(toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement);
    }
}

renderToDos();