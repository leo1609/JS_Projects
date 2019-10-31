//object.preventExtensions
//criando objetos com esse comando não é 
//possivel colocar parametros novos no objeto 
//porem é possivel deletar 
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promção'
})
//isextensible - testa se o  objeto é extensivel
//ou seja se permiti colocar mais atributos
console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//object seal- sela
//seal() proibi a criação e exclusão de atributos
//porem permite modifica-los
const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 35
console.log(pessoa)

//object.freeze = selado + valores constantes
