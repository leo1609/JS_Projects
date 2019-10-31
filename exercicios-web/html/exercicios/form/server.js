//para saber mais como fazer o request 
//ver o arquivo na pasta node/projeto/src/servidor.js
const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//o 'urlencoded' transforma o body-parser 'json'
//para ser interpretado pelo servido e extendido 
//a todos os tipos de requisições get, post, put
//delete
app.use(bodyParser.urlencoded({extended: true}))

app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`)
})

//sempre usar o app.post porque o app.get é muito perigoso
//porque ele mostra os parametros do usuario na url e so
//pode ser usado uma vez dentro do servidor(nao pode 
//ter varios get aqui no server, o post pode)
app.post('/usuarios', (req, resp) => {
    //o urlencoded transformou para body quando uso app.post
    console.log(req.body)
    //os dados vem em uma query quando uso o app.get
    //console.log(req.query)
    resp.send('<h1>Parabens. Usuario Incluido</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario Alterado</h1>')
})