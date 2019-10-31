
//pessoa -> 123  -> {....}
const pessoa = {nome: 'joao'}
//posso mudar os atributos, incrementa los e deleta los
//porem nao posso atribir outro objeto no lugar de pessoa
//na linha 13 tem um exemplo
pessoa.nome = 'pedro'
console.log(pessoa)

//nao da pra atribuir para pessoa um novo objeto
//porque pessoa é uma constante
//pessoa -> 457 -> {....}
//pessoa = {nome: 'ana'}

//frezee congela o objeto e é impossivel
//mudar ele
Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua  abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaconstante =Object.freeze({nome:'joao'})

pessoaconstante.nome = 'maria'
console.log(pessoaconstante)
