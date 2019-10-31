Array.prototype.map2 = function(callback){
    const novoarray = []
    for(let i = 0; i < this.length; i++ ){
        novoarray.push(callback(this[i], i, this))
    }  
    return novoarray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

//retornar um array apenas com os precos
//json.parse transforma o json em objeto
const paraobjeto = carrinho.map2(json => JSON.parse(json) )
const somentepreco = e => `preco: R$ ${parseFloat(e.preco).toFixed(2).replace('.',',')}`

//callback
let resultado = paraobjeto.map2(somentepreco)
console.log(resultado)