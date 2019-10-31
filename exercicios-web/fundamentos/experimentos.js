//let e const nao vai para o global e fica no local , nao é exportado
let a = 3

//nao encontra em this 
console.log(this.a)

//global dentro do node equivale ao objeto window no browser
console.log(global.a)

//porem encontra se eu declarar as variaveis nestes objetos
//percebe-se que o a nao foi declarado nos globais e sim no local como do tipo let

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)

//um cara chamado mudule.exports é o mesmo que o this
console.log(module.exports.c)
console.log(module.exports)
console.log(this)
console.log(module.exports === this)

//criando uma variavel sem let ou var
abc = 3 // nao fazer isso, perigoso, efeitos colaterais grande
console.log(global.abc)//abc é criada como var no global
//por isso é perigosa

//importante da aula
//entender as diferencas entre run times onde programo
//e sempre fugir do escopo global