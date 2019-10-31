//tageed templates - processa uma teplate dentro de 
//uma funçao
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return ' outra string'
}

const aluno = 'gui'
const situacao = 'aprovado'
//executando a função tag com parametros de template
//separara as parte da template em um array e
// os valores em outro array  
console.log(tag `${aluno} esta ${situacao}.`)
