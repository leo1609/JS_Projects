function getInteiroAleatorioEntre(min, max){
    //random da valores entre 0 e 1
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//retorna valor inteiro
}

//mesmo se a opcao for menos um, ele vai entrar e executar
//diferente da aula anterior que nao poderia comecar com -1
let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opcao foi ${opcao}`)
} while (opcao != -1)

console.log('ate a proxima')