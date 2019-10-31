const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
//o axio é um cliente http, ele faz requisiçoes de 
//um servidor remoto
const axios = require('axios')
//pegar o menor salario de todas as mulheres da china
const chinesas = funcionario => funcionario.pais === 'China' && funcionario.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual 
}
//por enquanto o professor naõ explica isso
//mais pra frente ele explicara
//mas resumindo isso faz uma requisição em um
//servidor remoto do cod3r e recebe um json via web
axios.get(url).then(response  => {
    const funcionarios = response.data
    const func = funcionarios
    .filter(chinesas)
    .reduce(menorSalario)
    console.log(func)
})