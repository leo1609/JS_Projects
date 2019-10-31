//array é um objeto 
//array em js é dinamico, cabe qualquer tipo 
//de dado tudo misturado. SEmpre é bom usar
//dados de mesmo tipo
console.log(typeof Array, typeof new Array, typeof[])
//se fosse uma const o array irá trabalharigual
//a diferença é que a const não modifica o apontamento
//para outro endereço de memória
let aprovados = new Array('bia','carlos', ' ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('abia')
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
//ordena em ordem alfabetica
aprovados.sort()
console.log(aprovados)

//quando se deleta um elemento o array nãoé
//reordenado. O indice continua existindo
//porem fica underfine
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
//remove e adiciona elementos
//primeiro elemento indica a altura do indice que
//vou trabalhar (carlos)
//o segundo elemento indica quantos elementos
//serão excluidos a partir do indice indicado
//neste caso carlos sera excluidos e
//serão adicionados os outros tres ou mais elementos
//no lugar dele, ana ainda fica no array
aprovados.splice(1, 1, 'elemento1', 'elemento2', 'elemento3')
console.log(aprovados)

