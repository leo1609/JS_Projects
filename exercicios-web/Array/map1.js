const nums = [1, 2, 3, 4, 5]

//for com proposito
//map transforma cada elemento do array
//map gera um novo array e não transforma
//o atual
//callback
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
console.log(nums)

const soma10 = e => e + 10
const triplo = e => e * 3
//tofixed - 2 casas decimais
//replace - trocou o ponto por virgula
//parsefloat - nao sei
const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//callback
resultado = nums.map(soma10).map(triplo).map(paradinheiro)
console.log(resultado)