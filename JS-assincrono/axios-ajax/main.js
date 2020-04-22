//axios é encapsulamento em volta do XMLHttpRequest
//axios nos ajudar a retornar o valor da chamada da api mais fácil

axios.get('https://api.github.com/users/luccasadriano')
.then(function(response){//retorno / chama o resolve
    console.log(response.data.avatar_url)
})
.catch(function(error){//chama o reject
    console.warn(error)
})
