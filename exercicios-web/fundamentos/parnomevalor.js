//par   nome   / valor
const saudacao = 'opa' // contexto lexico 1

function exec(){
    //se eu comentar a linha de baixo, 
    //a linguagem pega a constante global 
    //do programa
    const saudacao = 'falaaa' // constante lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome:"pedro",
    idade:32,
    peso:98,
    endereco:{
        logradouro:'rua muito legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
