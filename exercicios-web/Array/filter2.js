Array.prototype.filter2 = function(callback){
    const novoarray = []
    for(let i = 0; i < this.length; i++){
    //se a condição é verdadeira perante a
    //função callback
        if(callback(this[i], i, this)){
            novoarray.push(this[i])
        }  
    }
    return novoarray
}


const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))