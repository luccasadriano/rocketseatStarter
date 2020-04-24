//promise elas são codigos que não vão influenciar na linha do tempo do codigo
//funçoes q vão devolver valores de resultados sendo eles de sucesso ou erro só depois de um tempo

//basicamente a promise é um function/class que vai deixar nós utilizar o .then e .catch com o codégo assíncrono dentro do js

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()//inicia um ajax

        xhr.open('GET','https://api.github.com/users/luccasadriano')
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject("Erro na requisição")
                }
            }
        }

    })
}

minhaPromise()
.then(function(response){//retorno / chama o resolve
    console.log(response)
})
.catch(function(error){//chama o reject
    console.warn(error)
})
