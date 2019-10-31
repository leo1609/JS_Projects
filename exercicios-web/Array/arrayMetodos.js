const pilotos = ['vettel', ' alonso', 'raikonen', 'massa']
//deleta o ultimo elemento
pilotos.pop()//massa quebrou o carro
console.log(pilotos)
pilotos.push('verstapen')
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)
//adiciona na primeira posição
pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'botas', 'massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//massa quebrou denovo
console.log(pilotos)

//algunspilotos1 pega somente os elementos
//do indicedois em diante
const algunspilotos1 = pilotos.slice(2)
console.log(algunspilotos1)

//pega os pilotos do 1 ate o indice 3
//nao pega o 4
const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2)