console.log('a=', a)
//houve um içamento (hoisting)da variavel. O js diz que a variavel existe mesmo sendo 
//declarada abaixo da impressao 
//a variavel existe mas ela tem valor undefined
//seria o mesmo que declarar a variavel na linha 1
//mas sem atribuir valor a ela
var a = 2
console.log('a=', a)

//quando se usa let o hoisting(içamento) nao funciona
//isso so vale para var
//console.log('b=', b)
let b = 2
console.log('b=', b)
