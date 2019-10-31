//array function sao sempre anonimas
//sempre é preciso passar elas para um variavel
//quando nao se tem o corpo da funcao, implicitamente
//vai ter um return
const soma = (a, b) => a + b
console.log(soma(2, 3))

//arrow function (this)
//this de uma arrow sempre pertence ao arquivo do node
const lexico1 = () => console.log(this === exports)
//bind cria um novo objeto e diz para o lexico1 
//apontar tambem para o objeto em questao
const lexico2 = lexico1.bind({})
//desta forma percebe se que o this ainda aponta para exports
    lexico1()
    lexico2()

// se fosse uma funcao tradicional o this aponta para global
// e ele nao apontaria para exports, ou seja para o
//o modulo deste arquivo

//parametro default
function log(texto = 'node'){
    console.log(texto)
}

log()
log('sou mais forte')

//operador rest, estrutura de array
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))