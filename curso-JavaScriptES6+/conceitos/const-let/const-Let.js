const usuario ={nome: 'Jonas'}//const não pode ter seu valor retribuido
//mutação
usuario.nome = "Maria"
console.log(usuario)

//variavel de escopo
function teste(x){
    let y = 2

    if(x > 5){
        let y = 4//reatribuindo o valor do Y
        console.log(x, y)
    }
}

teste(10)