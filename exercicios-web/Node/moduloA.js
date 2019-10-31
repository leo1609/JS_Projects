
//formas de outros modulos acessarem este modulo
//todos exemplos abaixo fazem a mesma coisa
//todos esses atributos criados estarão disponiveis
//para fora do modulo
//eu os torno visiveis para outros modulos
this.ola = 'fala pessoal'
exports.bemvindo = 'bem vindo ao node'
module.exports.atelogo = 'ate o proximo exemplo'
//console.log(this.bemvindo)

//npm é o gerenciador de pacote do node
//se precisar baixar alguma biblioteca 
//da net é por aqui que se instala
//lodash é uma biblioteca e faz muita coisa
//e.x: npm i lodash .....