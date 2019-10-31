const alunos = [
    {nome:'joao', nota: 7.9},
    {nome:'maria', nota: 9.2}
]

//imperativo
let total1 = 0
for(let i = 0; i <  alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//declarativo
//muito mais reusavel o codigo
const getnota = aluno => aluno.nota
const soma = (total, atual) => total + atual
//reduce pega o resultado da soma e acumula
const total2 = alunos.map(getnota).reduce(soma)
console.log(total2 / alunos.length)

//SQL é declarativo
//select codigo, nome, email from clientes where ativo = 1