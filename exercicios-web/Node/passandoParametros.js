//...nomes é o mesmo que um array de nomes
module.exports = function(...nomes){
    return nomes.map(nome => `boa semana ${nome}`)
}
