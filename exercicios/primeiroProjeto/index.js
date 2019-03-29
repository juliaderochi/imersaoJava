const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/imc', function executarIMC(req, resp){
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = peso / (altura*altura)

    resp.send(200, {
        peso,
        altura,
        imc
    })
})

const port = 8080
app.listen(port, function(){
    console.log(`Servidor Iniciado na porta ${port}`)
})