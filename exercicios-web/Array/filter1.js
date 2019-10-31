//site otimo para conhecer as funçoes
//mdn- developer.mozila.org muita documentacao sobre js
//entre array.prototype
const produtos = [
     {nome: 'notebook', preco: 2499, fragil: true},
     {nome: 'ipad pro', preco: 4199, fragil: true},
     {nome: 'copo de vidro', preco: 12.49, fragil: true},
     {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    //return true - mostra todos os objetos
    //return false - retornao array vazio
    //retorna produtos com preco maior que 20
    //desta forma tAMBEM DA para fazer
    //return p.preco > 13 && p.fragil === true
    return p.preco > 30
}).filter(function(p){
    return p.fragil === true
}))

//da pra fazer desta forma tambem
const caro = produto => produto.preco >= 500
//se true os objetos estaram aqui se false não
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

