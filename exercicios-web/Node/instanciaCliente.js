//o que o contadorA fizer o contadorB irá mudar porque
//eles acessam a mesma instancia
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//neste caso o que o contadorC fizer não mudara 
//o contadorD por que cada um acessa uma instancia 
//nova, porque a factory constroi uma nova instancia
//pra cada acesso
const contadorC = require('./instanciaNova')()
//() chama a função factory
//como inc() chama a função inc
const contadorD = require('./instanciaNova')()

contadorA.inc()//incrementa para 2
contadorA.inc()//incrementa pra 3
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
