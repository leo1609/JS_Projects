console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3
 
exports = null
console.log(module.exports)
console.log(exports)

exports = {
    nome: 'teste'
}
//o que vai ser realmente exportado para outra
//pasta é o module.exports. O this e o exports 
//irão sempre somente apontar para module.exports
//Por esse motivo que atribuindo se outro valor
//para exports o valor de module.exports naõ muda
console.log(module.exports)
//obrigatoriamente deve se usar o module.exports 
//porque é somente ele que ira passar os dados para outra pasta
