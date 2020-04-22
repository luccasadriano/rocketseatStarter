//Ajax basicamente é um requisição assincrona que a gente realiza em algum backend
//no JS da pra realizar requisição no backend sem precisar atualizar a pagina utilizando o AJAX

//Primeiro exemplo

var xhr = new XMLHttpRequest()//inicia um ajax

xhr.open('GET','https://api.github.com/users/luccasadriano')
xhr.send(null)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}