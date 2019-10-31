//é um objeto que tem uma função get que quando
//chamada sempre ira retornar um proximo id
const sequence = {
    _id: 1,
    //quando uso o metodo get eu nao preciso chamar
    //a funcao sequence.id() somente uso sequence.id
    get id(){ return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    //se produto nao tiver id ele recebe um novo id
    //se ele tiver ele recebe os novos parametros de produto
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    //isto retorna todos os valores de produtos
    return Object.values(produtos)
}

function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
//desta forma eu deixo visivel as funções deste modulo
//somente sequence é invisivel para outros modulos
module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos}