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

//recurso ES8
//objetivo de simplificar o uso de promisses
//async e await garante siincronicidade 
let obterAlunos = async () => {
    //em vez de usar o then,
    //como no arquivo usando Promises.js, eu posso fazer assim
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}//retorna um objeto AssyncFunction

obterAlunos()
   .then(alunos => alunos.map(a => `${a.turma}: ${a.nome}`))
   .then(nomes => console.log(nomes))
   .catch(e => console.log(e.message))