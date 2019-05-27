// Carregando a lista input e botão 
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Array de Tarefas
//var toDos = [
//    'Fazer Café',
//    'Estudar JS',
//    'Acessar a Comunidade Rocketseat'
//];

// Array de Tarefas consumindo o localStorage.
var toDos = JSON.parse(localStorage.getItem('list_ToDos')) || [];
// /\ importante notar que existe uma condição || que se o js não conseguir
// carregar o localstorage cria-se um array vazio.

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

        // Criando dinamicamente link para excluir a tarefa
        var linkElement = document.createElement('a');
        var linkTxt = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');

        // Salvando o index de cada item e criando o atributo onclick para 
        // chamar a função de exclusão passando a posição do item.
        var index = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo('+ index +')')

        linkElement.appendChild(linkTxt);


        // Adicionando parentesco
        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);
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

    // Persistencia de dados
    saveToStorage();
}

// Chamando função de add no clique do botão add
buttonElement.onclick = addToDo;

// Função para remover a tarefa 
function deleteToDo(position) {
    // splice é uma função que remove uma quantidade de itens de um array
    // a partir de uma determinada função, exemplo: splice(1,4) remove 4
    // itens do array a partir da posição 1
    toDos.splice(position, 1);
    
    // Atualizar a interface
    renderToDos();

    // Persistencia de dados
    saveToStorage(); 
}

function saveToStorage() {
    localStorage.setItem('list_ToDos', JSON.stringify(toDos));
}