//estrategia 1 para gerar valor padrao
function soma1(a, b, c){
    a = a || 1//a recebe a ou 1 se 'a' tiver valor falso
    b = b || 1//essa é a mais famosa, porem a menos apropriada
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0 + 0 + 0))

//estrategia 2, 3, 4 
function soma2(a, b, c){
    //se a diferente de undefined se sim 
    //retorna 'a', senao atribua valor 1
    //posso usar != para fazer diferenca de null e undefined
    //!== é extritamente para undefined
    //operador ternario
    a = a !== undefined ? a : 1
    //arguments é o parametro array implicito em toda funcao 
    //dentro de arguments existe valor no indice 1 se sim retorna b
    //senao retorna 1
    b = 1 in arguments ? b : 1
    //c é a estrategia mais segura, pois dessa forma nao tem como somar com outro
    //tipo de dado somente numero
    //c é NaN se sim retorna 1
    //senao retorna c
    c = isNaN(c) ? 1 : c 

    return a + b + c

}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrao do ec2015
//forma mais adequada. Fora essa melhor a estrategia 4
function soma3(a = 1, b = 1, c = 1 ){
    return a + b + c

}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
//se eu pedir pra somar qualquer coisa que não é number
//irá dar erro.