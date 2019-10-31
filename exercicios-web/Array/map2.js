//isto é um json
const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

//retornar um array apenas com os precos
//json.parse transforma o json em objeto
const paraobjeto = carrinho.map(json => { 
    recebido = JSON.parse(json)
    //prova que o parse transforma json em objeto
    console.log(recebido)
    return recebido 
})
//replace transforma ponto flutuante em virgula
//a função abaixo transforma cada objeto em uma template string
const somentepreco = e => `preco: R$ ${parseFloat(e.preco).toFixed(2).replace('.',',')}`

//callback
let resultado = paraobjeto.map(somentepreco)
console.log(resultado)