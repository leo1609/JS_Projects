// '../' sai de uma pasta, mais outro  '../' sai da outra
//colocando moduloA se acessa a mesma que esta na pasta node
//sem respeitar as letras maiusculas e minusculas
//funciona igual, porem deve se respeitar isso 
//pra nao dar problema durante a implementação do
//programa
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//neste caso não precisa colocar o caminho relativo '../'
//porque saudacao esta dentro de node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

//modulo interno do node nao precisa de caminho relativo
//o codigo fica executando, é preciso ir ao
//browser e colocar o caminho localhost:8080

//const http = require('http')
//http.createServer((req, res) => {
//      res.write('bom dia')
//      res.end()
//}).listen(8080)

//da pra importar tambem com o this
//veja index dentro da pastaC
const c = require('./pastaC/index')
console.log(c.ola2)
