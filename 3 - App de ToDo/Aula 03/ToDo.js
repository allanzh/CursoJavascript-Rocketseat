// Carregando a lista input e botão 
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Array de Tarefas
var toDos = [
    'Fazer Café',
    'Estudar JS',
    'Acessar a Comunidade Rocketseat'
];

// Função para renderizar na tela o array
function renderToDos() {
    // foreach
    for(toDo of toDos){
        
        // Criando dinamicamente o elemento
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        // Adicionando parentesco
        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement);
    }
}

renderToDos();