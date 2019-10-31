//se estiver dentro da lista de argumentos -a 
//vai retornar true no terminal
//é preciso dentro da pasta node no terminal
//fazer o comando 'node entradaSaida.js -a'
//essa sentenca pega parametros escritos no terminal
//se o indexof for '-b' ele ira retornar false
//se '-a' retornara true
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    //quando eu executar o comando 'node entradaSaida.js -a'
    // ele imprime no console 'fala anonimo' e quebra a linha
    process.stdout.write('fala anonimo\n')
    //este exit serve para matar a conexao
    process.exit()
}else{
    process.stdout.write('informe seu nome:')
    //'stdin' é uma função para receber entrada
    //o 'on' é uma função para disparar o evento depois
    //de apertar enter
    //'data' sao os dados inseridos na entrada
    //dentro dos paraemtros de on tem uma função
    //que ira 
    process.stdin.on('data', data => {
        //o 'data' sera removido o \n e transformado em nada'' 
        //é necessario isso porque o \n sempre é feito depois do enter
        //const nome = data
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`fala ${nome}\n`)
        process.exit()
    })
}