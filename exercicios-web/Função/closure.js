//closure é o escopo criado quando uma função é  declarada
//esse escopo permite uma função interna acessar e manipular variáveis externas à função

//contexto léxico em ação

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())