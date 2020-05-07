const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o App
const app = express()

//permitindo o envio de dados do tipo JSON
app.use(express.json())

//Liberar acesso a todos os dominios
app.use(cors())


// Iniciando o DB/Conectando
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    })
    .then(() => console.log('DB Conected') )
    .catch(err => console.log('DB Connection Error $ {err.message}'
    ))
    
//require automatico
requireDir('./src/models')




//Primeira rota - que esta no routes agora kkk

// Rotas
app.use('/api', require('./src/routes')) //use como se fosse white card (coringa) ele vai receber todo tipo de requisição

app.listen(3001)