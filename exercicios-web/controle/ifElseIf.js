//função associada a um numero
//o number em js tem varias funções associadas aos numeros para testar se um numero é inteiro, por exemplo
//para acessar o number tem que se usar o this
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim//retorna um valor boleano
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)){
        console.log('quadro de honra')
    }else if(nota.entre(7, 8.99)) {
        console.log('aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('recuperacao')
    }else if(nota.entre(0, 3.99)){
        console.log('reprovação')
    }else{
        console.log('nota invalida')
    }

    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
//imprimirResultado('e')
//se fizer a chamada acima, vai dar erro
//porque o valor passado não é um number
//então não tem como o parametro nota da função
//acima executar a função entre