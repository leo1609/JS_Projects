// true, pois estou comparando valor nao o tipo
console.log('01 = ', '1' == 1)
//false, pois estou comparando o tipo 
//e nao o valor
console.log('02 = ', '1' === 1)
//string é diferente de number
//false, pois comparo o valor
console.log('03 =', '3' != 3)
//true, pois compara o tipo
console.log('04 = ', '3' !== 3)
console.log('05 = ', 3 < 2)
console.log('06 = ', 3 > 2)
console.log('07 = ', 3 <= 2)
console.log('08 = ', 3 >= 2)

const d1 = new Date(0)//data valor 0 significa o valor padra js que é 1/ 1 / 1970
const d2  = new Date(0)

console.log('09 = ', d1 === d2)
console.log('10 = ', d1 == d2)
//os dois exemplos dao falso, pois os valores de d1 e d2 são diferentes
//o tipo é igual porem o valor, que é o endereço de memoria, é diferente
// o valor aqui não é a data 0 pois o valor das variaveis d1 e d2 sao endereços de memoria

console.log('11 = ', d1.getTime() === d2.getTime())
//isto vai dar true pois o tipo é igual. O retorno é em number
//o retorno é os milisegundos em que as datas '0' foram criadas

console.log('11 = ', d1.getTime() == d2.getTime())
// da true, pois os dois valores são iguais
console.log('12 = ', undefined == null)//true pois sao valore iguas
console.log('13 = ', undefined === null)//false pois sao tipos diferentes

//via de regras sempre usar === para nao estar confundindo tipos 
//e nao causar efeitos colaterais
// sempre primar por comparar variaveis por tipos iguais
