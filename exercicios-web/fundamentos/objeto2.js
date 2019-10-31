console.log(typeof Object)


//objeto criado apartir de uma função
console.log(typeof new Object())


//o efeito é o mesmo que acima
const cliente = function(){}
console.log(typeof cliente)
console.log(typeof new cliente)

//mesmo que acima, classe js é o mesmo que uma funçaõ
class produto{
}
console.log(typeof produto)
console.log(typeof new produto)
