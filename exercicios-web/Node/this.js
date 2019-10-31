console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === module)

function logThis(){
    console.log('dentro de uma função...')
    console.log(this === exports)
    //this aqui é da função
    console.log(this === module.exports)
    console.log(this === global)
    this.perigo = '...'

}

logThis()