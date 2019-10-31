const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}
//json.stringify trasforma objeto no formato json
//com  esse formato eu posso manda lo persistir isso
//no disco
//percebe se que esse arquivo ira aparecer na coluna esquerda da tela
//com o nome 'arquivoGerado.json'
//ou seja ele foi persistido no disco.
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    // se der erro for verdadeiro imprime err se nao imprimi
    //arquivo salvo
    console.log(err || 'arquivo salvo')

})