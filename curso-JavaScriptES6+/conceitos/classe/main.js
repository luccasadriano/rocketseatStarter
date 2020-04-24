//Classes
//Babel serve pra converter o ES6 para os navegadores pois javascriptEs atualiza mais rapido que os navegadores
class List{
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor(){
        super()

        this.usuario = 'Luccas'
    }

    mostrarUsuario(){
        console.log(this.usuario)
    }
}

var MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo')
}

MinhaLista.mostrarUsuario()

class Matematica{
    static soma(a, b){//metodo static ele recebe o paremetro e retorna o valor independente do restante do codigo
        return a + b
    }
}
console.log(Matematica.soma(1,2))