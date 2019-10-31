function Meuobjeto(){}
console.log(Meuobjeto.prototype)

//quando um objeto é criado a partir de uma 
//funçaõ construtora, esse objeto ira sempre
//apontar para o prototype  dessa função constutora
const obj1 = new Meuobjeto
const obj2 = new Meuobjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(Meuobjeto.prototype === obj1.__proto__)

Meuobjeto.prototype.nome = 'anonimo'
Meuobjeto.prototype.falar= function(){
    console.log(`bom dia! meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = Meuobjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

console.log((new Meuobjeto).__proto__ === Meuobjeto.prototype)
//meuobjeto é uma funcao e por padrao sempre
//aponta para function.prototype
console.log(Meuobjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
