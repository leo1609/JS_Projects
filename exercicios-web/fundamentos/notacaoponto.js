console.log(typeof console) 
//ceil= arredonda pra cima o valor
console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'bola'
//obj1['nome']='bola2 ', nao recomendado
console.log(obj1.nome)

function obj(nome){
    //torna o atributo publico o this
    this.nome = nome
    this.exec = function(){
        console.log('exec....')
    }
}

const obj2 = new obj('cadeira')

const obj3 = new obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)

//executa a funçao dentro da funcao
obj3.exec()