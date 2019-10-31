const escola = [{
    nome: 'turma m1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.3
    }]
}, {
    nome: 'turma m2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome: 'roberto',
        nota: 7.3
    }]
}]

const genotaaluno = aluno => aluno.nota
const getnotadaturma = turma => turma.alunos.map(genotaaluno)

const notas1 = escola.map(getnotadaturma)
console.log(notas1)

//flapmap nao existe- ele é criado pra facilitar e retornar
//uma array com todas as notas e nao arrays dentro do array
//Ele consegue fazer isso porque usa o concat
//o concat concatena tudo dentro de um unico array
Array.prototype.flapmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flapmap(getnotadaturma)
console.log(notas2)