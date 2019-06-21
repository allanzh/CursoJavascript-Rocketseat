// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                                          Desafio 1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var container01Element = document.getElementById('Exs01');
var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log('Desafio 1:');
console.log('O usuário mora em ' + endereco.cidade + '/' + endereco.uf + ', no bairro ' + endereco.bairro + ', na ' + endereco.rua +  ' Nº ' + endereco.numero);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                                          Desafio 2
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function pares(x,y){
    for (let i = x; i <= y; i++) {
        if ( (i % 2) === 0 ) {
            console.log(i);
        }        
    }
}

console.log('Desafio 2:');
pares(2,10);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                                          Desafio 3
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function temHabilidade(skills){
    for (let index = 0; index < skills.length; index++) {
        if (skills[index] === "Javascript") {
            return true;
        }
    }
    return false;
}

// Utilizando indexof ficaria assim:
function temHabilidadeV2(skills){
    var query = 'ReactJS';
    if(skills.indexOf(query) === -1){
        // Se o indexOf retornar -1 o valor de pesquisa não foi encontrado
        return false;
    }
    // Se o indexOf retornar qualquer outro valor, é o valor correspondente ao indice do elemento igual no array, logo ele encontrou uma ocorrência.
    return true;
}

var skills = ["Javascript", "C#", "ReactJS", "React Native"];

console.log('Desafio 3:');
// procurando por Javascript
console.log(temHabilidade(skills));
// procurando por ReactJS
console.log(temHabilidadeV2(skills));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                                          Desafio 4
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function nivel(anos){
    switch (anos) {
        case 0:
        case 1:
            console.log('Iniciante');
            break;
        case 2:
        case 3:
            console.log('Intermediário');
            break;
        case 4:
        case 5:
        case 6:
            console.log('Avançado');
            break;    

        default:
            if (anos >= 7 ) {
                console.log('Jedi Master');
            }
            break;
    }
}

console.log('Desafio 4:');
nivel(0);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                                          Desafio 5
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var usuarios = [
    {
        nome: "Allan",
        habilidades: ["C#", "SQL", "ASP.NET"]
    },
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function agruparString(usuarios){
    usuarios.forEach(element => {
        console.log('O ' + element.nome + ' possui as habilidades: ' + element.habilidades)
    });
}

console.log('Desafio 5: ');
agruparString(usuarios);
