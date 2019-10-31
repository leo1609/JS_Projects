const valor = 'global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFuncao()
}
//a execucao de programa nao imprimira a palavra 'local'
//porque o valor sera pego da variavel global 'valor' porque a funçao
//carrega somente o contexto que esta dentro do escopo dela
exec()