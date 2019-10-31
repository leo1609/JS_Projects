const nome = 'rebeca'
const concatenacao = 'ola ' + nome + '!'
const template = `
ola
  -------                  ${nome}!`


                    //templates da pra quebrar linhas
const template2 = `
ola ${nome}`

const tamplate3 = `-------------------------------------------------

`

console.log(tamplate3, concatenacao, template, template2)

//expressoes...
//para formar uma template sempre tem que usar crase. Nao esquecer disso
console.log(`1 + 1 = ${1 + 1}`)

//criar funcao
//  nome | parametro | função | corpo da função
const up =   texto       =>     texto.toUpperCase()

console.log(tamplate3, `ei... ${up('cuidado')}`)