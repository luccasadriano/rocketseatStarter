const usuario = {
    nome: 'Diego',
    idade: 22,
    endereco: {
        cidade: 'Campinas',
        estado: 'SP',
    },
}
const {nome, idade, endereco:{ cidade } } = usuario
console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({nome, idade}){
    console.log(nome, idade)
}
mostraNome(usuario)