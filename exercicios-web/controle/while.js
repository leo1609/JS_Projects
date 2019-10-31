function getInteiroAleatorioEntre(min, max){
    //random da valores entre 0 e 1
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//retorna valor inteiro
}

let opcao = 0
//while nao tem uma quantidade determinada de repetições
while (opcao != -1){//executa ate que essa expressao seja verdadeira
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opcao foi ${opcao}`)
}

console.log('ate a proxima')
