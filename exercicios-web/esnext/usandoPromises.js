const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, res =>{
            let resultado = ''
            
            res.on('data', dados => {
                resultado = dados
            })
            
            res.on('end', () => {
                try{
                    turma = JSON.parse(resultado)
                    //aqui eu criei o atributo turma para cada objeto 'aluno' da lista de alunos
                    turma.map(aluno => aluno.turma = letra)
                    resolve(turma)
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

//chamada é assincrona
//sempre o promise deve ser acompanhado pelo catch
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => `${aluno.turma}: ${aluno.nome}`))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))


//como 'D' nao existe o catch vai retornar erro do reject
getTurma('D').catch(e => console.log(e.message))