//no objeto a chave é uma string
//no map a chave pode ser uma função ou
// numeral ou string ou objeto
const tecnologias = new Map()

//parametros de set com chaves
tecnologias.set('react', {framework: false, cabeca: 2})
tecnologias.set('angular', {framework: true})

//map so funciona com set e get pra pegar ou atribuir
//atributos
console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

//map somente é preenchido dentro de um array
const chavesVariadas = new Map([
   [function() { }, 'funcao'],
   [{}, 'objeto'],
   [123, 'numero'],
])
//em map o foreach o 1 parametro é o valor e
//o segundo é a chave
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

//nao aceita valores iguais com chaves diferentes
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(457, 'b')
console.log(chavesVariadas)
