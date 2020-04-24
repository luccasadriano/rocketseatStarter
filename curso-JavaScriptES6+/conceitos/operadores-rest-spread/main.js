//REST ->ele serve para pegar o restos das propriedades
//objeto
const usuario = {
    nome: 'Luccas',
    idade: 22,
    empresa: 'Rocketseat'
}
const {nome, ...resto} = usuario
console.log(nome)
console.log(resto)

//array
const arr = [1, 2, 3, 4, 5]
const [a, b, ...c] = arr
console.log(a)
console.log(b)
console.log(c)

//function
function soma(a, b, ...params){
    return params//.reduce((total, next) => total + next)
}
console.log(soma(1, 3, 4, 5))


//SPREAD -> ele faz distinta do REST, fazendo o papel de propagar, repassar as informção de objeto ou array
//array
const arr1 = [1, 2, 3]
const arr2 = [3, 2, 1]
const arr3 = [...arr1, ...arr1]
console.log(arr3)

//objeto
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}
const usuario2 = {...usuario1, nome: 'Luccas', idade: 22}
console.log(usuario2)