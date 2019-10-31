function soma(){
    let soma = 0
    //toda funcao em js tem um array chamado arguments
    //se nao existe parametro programado, pode-se usar o arguments
    //para passar parametros a funcao
    for(i in arguments){
        soma += arguments[i] 
    }
    return soma
}

console.log(soma())
console.log(1)
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 2.2, 'teste'))//retorno 0a2.2teste, o zero aparece porque soma é inicializado com 0 dentro da funcao
