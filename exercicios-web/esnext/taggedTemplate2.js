function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        //se nao for valor numerico retorna valor
        //este ternario nao influi no resultado
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        console.log(partes[indice])
        resultado.push(partes[indice], valor)
    })
    //join - pega todos elementos do array e retorna uma string
    //onde houver virgula no array ele transformara no que estiver 
    //dentro do array
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)