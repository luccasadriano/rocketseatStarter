const mongoose = require('mongoose')
const Product = mongoose.model('Product') //acesso ao product para inserir/atualizar valores

module.exports = {
//Listagem dos produtos
    async index(req, res){
        const { page = 1 } = req.query //desestruturação
        const products = await Product.paginate({ }, {page, limit: 10})//só execute a proxima linha depois q listar os produtos no DB / short sintaxe

        return res.json(products)
    },

//Detalhes
    async show(req, res){
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },


//Criação
    async store(req, res){

        const product = await Product.create(req.body)

        return res.json(product)
    },

//Alterar
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(product)
    },

//Deletar
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)//vai apagar portanto não precisa retornar

        return res.send()//resposta de sucesso sem conteudo
    }
}