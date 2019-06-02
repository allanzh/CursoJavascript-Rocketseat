var container01Element = document.getElementById('Exs01');
var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

var txtElement = document.createElement('input');
txtElement.setAttribute('value', 'O usuário mora em ' + endereco.cidade + '/' + endereco.uf + ', no bairro ' + endereco.bairro + ', na ' + endereco.rua +  ' Nº ' + endereco.numero);
txtElement.style.width = 550;
container01Element.appendChild(txtElement);