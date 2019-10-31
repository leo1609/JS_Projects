const pai = {nome: 'pedro', corcabelo: 'preto'}

//cria o objeto filha tendocomo prototipo o pai
const filha1  = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corcabelo)
console.log(pai.nome)

const filha2 = Object.create(pai, {
    //writable false - congela o atributo
    //enumerable true - permiti listar o atributo
    nome:  {value: 'bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
//nao permite mudar o nome prque writable congelou
//o atributo
filha2.nome = 'carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corcabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    //a função abaixo retorna somente os 
    //atributos que são somente do objeto
    //e nao por heranca
    filha2.hasOwnProperty(key) ?
    //operador ternario
    console.log(key) : console.log(`por heranca: ${key}`)
}

