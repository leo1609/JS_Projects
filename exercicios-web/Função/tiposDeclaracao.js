
//somente o tipo de function declaration é possivel
//chamar a funçao antes de ser executado a função
//porque o JS carrega primeiro as function declaration
//antes de executar o programa
console.log(soma(3, 4))
//console.log(sub(3, 4))
//se executar a linha acima da erro porque function
//expression e named function expression não são
//carregados pelo JS antes da execução
//somente a function declaration
//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){
    return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))



