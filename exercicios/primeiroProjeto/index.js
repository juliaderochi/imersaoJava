const express = require('express')
const app = express()

app.use(express.static('./public'))

app.listen(8080, function(){
    console.log('Servidor Iniciado na porta 8080')
})