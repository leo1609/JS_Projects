const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}
//pega todos os atributos do objeto
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//o foreach pega o elemento da posicao 0 e 1 de 
//cada atributo
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

console.log(`---------------------`)

//neste caso no foreach tem um destruction
//que pega os indices 0 e 1 coloca nomes neles
//de chave e valor, para cada indice de cada 
//atributo, pra ficar mais legivel
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});
//cria um novo atributo no objeto pessoa ecolocar ovalor no mesmo
Object.defineProperty(pessoa, 'dataNascimento', {
    //possibilita pegar as chaves do objeto
    //se mudar para false ele nao mostrara as chave
    //mesmo usando o metodo keys
    //o atributo continua existindo porem
    //nao é mostrado
    enumerable: true,
    //nao possibilita reescrever o atrbuto
    wirtable: false,
    value: '01/01/2019'
})
//nao da pra mudar o valor de datanascimento
//porque o wirtable esta false. Se true entao pode
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//concatena todos os atributos do objeto
//junta todos atributos dentro de dest
//o atributo 'a' sera sobescrito
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
