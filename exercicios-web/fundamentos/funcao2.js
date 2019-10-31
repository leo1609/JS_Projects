//armazenando uma funcao em uma variavel
//funcao anonima
const imprimirsoma = function(a, b){
   console.log(a + b)
}

imprimirsoma(2, 3)

//armazenando uma funcao arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implicito não usa o comando return
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal')