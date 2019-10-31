//novo recurso do es2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro:'rua abc',
        numero: 1000
    }  
}

//destruturing, tira os atributos
// de dentro do objeto
const {nome, idade } = pessoa
console.log(nome, idade)

//tiro os atributos e troco os nomes
// das variaveis
const { nome: n, idade: i} = pessoa
console.log(n, i)

//variaveis que nao existem dentro de pessoa
//retorna undefined e true
const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada )

//extraindo de dentro do objeto do objeto
const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//vai dar erro pois nenhum desses existem dentro de pessoa
//tras valores nulos e undefined. Isso da erro
//const {conta:{ag, banco}} = pessoa
//console.log(ag, banco)

