function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50    = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    //!! converte as variaveis em boleanos e '^' é o ou exclusivo xor bitwise(bit a bit)
    //é preferivel fazer o exemplo abaixo
    const comprarTv32    = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    //nao a necessidade de criar 'chave: valor' no objeto
    //como comprarSorvete: comprarSorvete, pode ser somente comprarSorvete
    //isso é um recurso do ecma 2015
}

console.log('true, true = ', compras(true, true))
console.log('true, false = ', compras(true, false))
console.log('false, true = ', compras(false, true))
console.log('false, false = ', compras(false, false))
