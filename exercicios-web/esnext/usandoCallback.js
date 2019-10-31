//sem promisse...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //res é os dados do browser
    http.get(url, res =>{
        let resultado = ''
        //a 'res' chega de forma parcial
        //a cada dado parcial o evento 'on' é disparado
        //e concatenara os dados em resultados
        res.on('data', dados => {
            resultado = dados
        })
        //quando terminar os dados de serem enviados
        //outro evento é disparado
        //e o resultado completo é transformado de json em
        //objeto
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

//chamadas assincronas
let nomes = []
getTurma('A', alunos => {
    //nomes é um array que recebe templates strings
    nomes = alunos.map(a => `A: ${a.nome}`)
    console.log(nomes)
    getTurma('B', alunos => {
        //nomes.concat concatena um array com o outro
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log('agora eu')
    //    getTurma('C', alunos => {
    //        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
    //        console.log(nomes)
    //    })
    })
})

getTurma('B', alunos => {
    nomes = (alunos.map(a => `B: ${a.nome}`))
    console.log(nomes)
})