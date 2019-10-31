const porta = 3003

//importo o express
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//aqui o app vai usar bodyparser para transformar o
//urlencoded que vem do browser (json) em uma função middleware
//que entao entregara um objeto
//isto é extendendido para todos os endereços que
//o servidor tem (true)
app.use(bodyParser.urlencoded({extended: true}))

//isto é um exemplo do professor que ele tirou depois 
//get tem um array onde são colocados as funções middlewares
//app.get('/produtos', (req, res, next) => {
//    console.log('middleware 1...')
//    next()
//})

//get é uma forma de requisicao onde passo como parametro
//o caminho e uma funçao middleware. esta função será
//a resposta para requisao
//          requisição, resposta, proximo
app.get('/produtos', (req, res, next) => {
    //'send' converte uma resposta para JSON 
    //neste caso este objeto abaixo
    //e envia para onde houve a requisição
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    //params é uma função que pega o id passado na url da requisicao
    //neste caso no postman
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        //passo um objeto com seus respectivos
        //atributos do corpo que vem da requisicao 
        nome: req.body.nome,
        preco: req.body.preco
    })
    //retorna para a web um JSON de produto
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})
//listen serve para iniciar o app
//passo a porta e chamo uma callback para somente mostrar
//o console log
app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`)
})
//para executar esse arquivo no terminal
//execute o comando dentro da pasta projeto
//node src/servidor.js
//para encerrar a execução te que se fazer 
//obrigatoriamente o comando 
//ctrl + alt + m

//para executar este arquivo agora é so usar o
//comando 'npm start' do nodemon. Porque dentro de
//pasta package.json eu coloquei no main o
//caminho src/servidor.js e dentro de scripts
//eu coloquei start: nodemon

//para executar isso no postman é so colocar no
//campo da url o comando http://localhost:3003/produtos e
//startar o programa ou no output ou no terminal
//que aparecera o produto na tela do postman

//o comando 'rs' desliga o servidor no terminal