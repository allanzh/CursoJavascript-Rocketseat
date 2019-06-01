var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/allanzh');
xhr.send(null);

xhr.onreadystatechange = function(){
    // State = 4 é requisição retornada
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}