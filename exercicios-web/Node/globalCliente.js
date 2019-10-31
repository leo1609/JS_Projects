require('./global')
//consigo acessar minhaapp porque ela é global
console.log(MinhaApp.saudacao())

//nome nao muda porque esta freeze()
MinhaApp.nome = 'eita'
console.log(MinhaApp.nome)
//cuidado em tocar o objeto global
//consequencias
//melhor trabalhar com sistemas de modulos
//que é a forma padrao de trabalhar com o node