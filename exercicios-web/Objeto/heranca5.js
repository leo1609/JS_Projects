console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//posso criar uma funcao dentro de um prototipo da string
//neste caso o reverse()
String.prototype.reverse = function(){
    //split gera um array da string
    //reverse() existe na funcao array entao
    //ele ira inverter o array e retornar todos 
    //juntos em uma string pelo metodo join()
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b', 'c'].first())

//nao faça isso. vira uma zona. muito perigoso
//desta forma estou substituindo o metodo
//tostring()
String.prototype.toString = function(){
       return 'lascou tudo'
}

//gera efeitos colaterais porque mexi
//no metodo tostring()
console.log('Escola Cod3r'.reverse())

