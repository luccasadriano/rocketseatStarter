//operações array 

const arr = [1,3,4,5,6,9,7]

const newArr = arr.map(function(item, index){ //map server pra percorrer o vertor e retornar uma nova informação.
    return item + index//soma o valores do array com o índice
})
console.log(newArr)

const sum = arr.reduce(function(total, next){// reduce é uma forma de consumir o array e transformar em uma unica veriavel (geralmente um numero)
return total + next // total mais o valor
})
console.log(sum)

const filter = arr.filter(function(item){//filter retorno o valores true ou false
    return item & 2 === 0
})
console.log(filter)

const find = arr.find(function(item){// find é utilizando para verificar se exite informação dentro do array ou se consegue entrar essa informação.
    return item === 4//verifica se tem o numero 4 no array, nem precisava comentar isso kkkk
})
console.log(find)