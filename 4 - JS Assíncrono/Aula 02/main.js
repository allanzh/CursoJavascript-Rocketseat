// Utilizando Promises
var minhaPromise = function() {
    return new Promise(function(resolve , reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/allanzh');
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject('Erro de requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response); // Resolve cai aqui
    }) 
    .catch(function(error){
        console.warn(error); // Reject cai aqui
    });