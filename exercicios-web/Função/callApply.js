function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    //devo definir a função getpreco como atributo para
    //poder chamar a funcão pelo objeto
    getPreco
}

global.preco = 20
global.desc = 0.1
//chamando o getpreco abaixo senao se definir
//primeiro um valor pra preco e desc ira
//retornar um valor NaN,porem se definir
//valores pela variavel global , o valor sera 
//diferente de NaN
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco:49990, desc: 0.20}

//call e apply chamam a função getpreco sem a 
//necessidade de da função transformar se em
//atributo dentro do objeto
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//com o call da pra passar parametros a função
//primeiro passa se o objeto e depois os parametros
console.log(getPreco.call(carro, 0.17, '$'))
//com o aplly tem que usar colchetes para passar
//parametros
console.log(getPreco.apply(carro, [0.17, '$']))
