const quasearray = {0: 'rafael', 1:'ana', 2:'bia'}
console.log(quasearray)
//criando uma função dentro do array
//enumerable false é para a funcao nao aparecer
//na tela
//o objeto tostring tem a funcao que poderia ser criada dentro do array
//acima, porem ela iria aparecer na tela
//entao criando ela com o defineproperty
//da entao para usar o enumerable
Object.defineProperty(quasearray, 'tostring',{
    value: function(){return Object.values(this)},
    enumerable: false
})
//desta forma esta chamando o atributo '0' dentro do array
console.log(quasearray[0])
//o tostring nao aparece devido o enumerable false 
console.log(quasearray)
const meuarray = ['rafael', 'ana', 'bia']
//comparando os dois da pra entender que array
//é sim um objeto
console.log(quasearray.tostring(), meuarray)