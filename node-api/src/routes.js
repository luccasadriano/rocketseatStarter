const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)//Listar
routes.get('/products/:id', ProductController.show)//Detalhes
routes.post('/products', ProductController.store)//Criar
routes.put('/products/:id', ProductController.update)//Alterar
routes.delete('/products/:id', ProductController.destroy)//Excluir

module.exports = routes