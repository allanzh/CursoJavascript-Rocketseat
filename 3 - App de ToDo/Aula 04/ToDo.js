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

    // Antes de Atualizar as tarefas é necessário remover o que já existe
    // dentro da lista para não ter tarefa duplicada;
    listElement.innerHTML = '';

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

// Função para add tarefas digitadas
function addToDo() {
    
    // Pegando valor digitado
    var toDoText = inputElement.value;

    // Atualizando array, Limpando elemento e chamando a função para atualizar a lista
    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
}

// Chamando função de add no clique do botão add
buttonElement.onclick = addToDo;