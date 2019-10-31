//_ é referenciar biblioteca por padrao de programação
const _ = require('lodash')
//setinterval é uma função que executa de tempos em tempos
//neste caso 2 seg. Dentro de setinterval tem um função de 
//callback que chama a funcao random da biblioteca
//lodash '_' que escolhe um numero de 1 a 1000
setInterval( () => console.log(_.random(1, 1000)), 2000)

//eu instalei o nodemon de forma global na pasta global
//do js. npm i -g nodemon
//entrei na pasta node. cd node
//depois eu fiz o nodemon na pasta dentro da pasta 
//node. nodemon usandoModulosTerceiros.js
//desta  forma consegui usar o nodemon dentro 
//desta pasta. O nodemon é um modulo do node que é usado
//para o programador alterar o codigo mesmo com o 
//mesmo estando executando
//ele é executado no terminal e não no output
//feito isso eu tenho a disposição o nodemon para
//ser executado  no terminal
//se a alteração no programa der erro, é so usar 
// o comando 'rs'