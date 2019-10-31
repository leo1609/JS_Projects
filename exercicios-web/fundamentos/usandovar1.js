//pode se enxergar a variavel mesmo dentro de varios blocos
//em outras linguagnes isso nao pode acontecer. Ela so é visivel dentro do bloco 
{{{{var sera = 'sera???'}}}}
console.log(sera)

function teste(){
    var local =123
    console.log(local)
}

teste()
//console.log(local)   nao da para acessar 'var' dentro de funcao, somente dentro de blocos
//fora de funcoes ela se torna sempre variavel global
