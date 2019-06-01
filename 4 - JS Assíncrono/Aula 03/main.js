// Utilizando Axios
axios.get('https://api.github.com/users/allanzh')
    .then(function(response){
        console.log(response); // Resolve cai aqui
        // Axios já entende a response como javascript object, então podemos fazer:
        console.log(response.data.avatar_url);
        console.log(response.data.name);
    }) 
    .catch(function(error){
        console.warn(error); // Reject cai aqui
    });