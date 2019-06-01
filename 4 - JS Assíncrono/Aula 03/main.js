// Utilizando Axios
axios.get('https://api.github.com/users/allanzh')
    .then(function(response){
        console.log(response);
        // Axios já entende a response como javascript object, então podemos fazer:
        console.log(response.data.avatar_url);
        console.log(response.data.name);
    }) 
    .catch(function(error){
        console.warn(error);
    });