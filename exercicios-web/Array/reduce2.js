const alunos = [
    {nome: 'joao', nota: 7, bolsista: false},
    {nome: 'maria', nota: 9, bolsista: true},
    {nome: 'pedro', nota: 8, bolsista: false},
    {nome: 'ana', nota: 5, bolsista: true}
]

//desafio1: todos os alunos são bolsistas?

const todosSãoBolsistas = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    return resultado && bolsista
})
console.log(todosSãoBolsistas)
//algum aluno é bolsista?
const algumEBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista){
    return resultado || bolsista
})
console.log(algumEBolsista)