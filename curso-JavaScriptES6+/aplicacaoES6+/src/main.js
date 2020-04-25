import api from './api'

class App{
    constructor(){
        this.repositories = []
        this.formEl = document.getElementById('repo-form')//pegando o id do elemente no html
        this.inputEl = document.querySelector('input [name=repository]')//selecionando a tag no html
        this.listEl = document.getElementById('repo-list')

        this.registerHandlers()
    }
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    setLoading(loading = true){
        if (loading === true){
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove()
        }
    }

    async addRepository(event){
        event.preventDefault()

        const repoInput = this.inputEl.value

        if (repoInput.length ===0)
        return//dentro de uma função, se há um return ela para

        this.setLoading()

        try{
            const response = await api.get(`/repos/${repoInput}`)
            console.log(response)

            const {name, description, html_url, owner: { avatar_url }} = response.data

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            })

            //this.inputEl.value = '';

            this.render()
        } catch(err){
            alert('O repositório não existe!')
        }
        this.setLoading(false)
    }
    render(){
        this.listEl.innerHTML = ''

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let lisItemEl = document.createElement('li')
            lisItemEl.appendChild(imgEl)
            lisItemEl.appendChild(titleEl)
            lisItemEl.appendChild(descriptionEl)
            lisItemEl.appendChild(linkEl)

            this.listEl.appendChild(lisItemEl)

        })
    }

}

new App()//instanciando a class