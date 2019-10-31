//funcao sem retorno
function imprimirSomar(a, b){
    console.log(a+b)

}

imprimirSomar(2, 3)

//posso passar um unico valor, o outro sera undefined
//reptorna NaN not a number
imprimirSomar(2)

//funciona e so pega os dois primeiros valores
imprimirSomar(2, 3, 4, 5, 6, 7, 8)

//NaN
imprimirSomar()

//funçao com retorno
function soma(a, b = 1){
    return a + b
}
//preciso usar o console.log para imprimir o valor pois a funcao
//tem um retorno. No caso acima nao tem retorno
//entao nao a necessidade do console.log para imprimir o resultado
console.log(soma(2, 3))

//se b nao foi definido é usado o valor b no parametro
console.log(soma(2))
