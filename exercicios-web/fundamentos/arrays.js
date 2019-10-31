const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

//como o indice nao existe retorna undefined, 
//nao da erro
console.log(valores[4])

valores[4] = 10
console.log(valores)

//os itens do 5 ao 9 apareceriam vazios
valores[10] = 10
console.log(valores)

//mostra quantidade de elementos no array
console.log(valores.length)

//adiciona valores ao array do ultimo 
//elemento em diante
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//retira o ultimo elemento do array
console.log(valores.pop())

//o delete tambem exclui valores porem o
// indice que for desejado
delete valores[0]
console.log(valores)

//array é um tipo objeto
console.log(typeof valores)

