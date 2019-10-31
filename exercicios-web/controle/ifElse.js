const imprimirResultado = function (nota){
    if(nota >= 7){//melhor colocar chaves
        console.log('aprovado')
    } else{
       console.log('reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
//problemas de linguagem fracamente tipadas
//nao da erro pois considera falso a expressao nota >= 7
//o parametro abaixo é uma string e náo um number 
//por isso é considerado false pelo programa
//portanto o reprovado é imprimido
imprimirResultado('epa')

