let num1 = 1
let num2 = 2

num1++//pos fixado
console.log(num1)

--num1//pre fixado, mais apressado, 
console.log(num1)

//exemplo abaixo da true, pois a igualdade
//compara o valor de num1 com num2
//e depois somente subtrai o valor de num2 
console.log(++num1 === num2--)
console.log(num1 === num2)
//percebe-se que num1 e num2 agora sao false
//porque foi processado a subtração do console antecessor
//fuja de condigos complexos
//imcremente a variavel fora do console e antes da comparação

