let valor // nao inicializada
console.log(valor)//undefined
//console.log(valor2) //is not defined, nao foi definida


//nao aponta para nemhum objeto na memoria
valor = null//ausencia de valor
console.log(valor)
//o valor nulo serve para zerar uma variavel que aponta para um endereço
//entao se atribui nulo e ela nao aponta para nada


//erro. Nao da para acessar algo nulo
//console.log(valor.toString())


const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.4
console.log(produto)

produto.preco = undefined //evitar usar undefined como um valor nulo, 
//pois com o underfine o atributo continua tendo algum valor
console.log(!!produto.preco)//retorna false pois undefined é um bolean falso
console.log(produto)

//para retornar o produto vazio, nao se deve usar nem null nem undefined, usa se o delete
delete produto.preco
console.log(produto)

produto.preco = null//isto é um preco sem valor
console.log(!!produto.preco)
console.log(produto)
// o null é para ser usado pelo pogramador e o undefined é para ser usado pela linguagem




