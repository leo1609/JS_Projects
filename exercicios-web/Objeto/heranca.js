function aula (nome, videohd) {
    this.nome = nome
    this.videohd = videohd
}

const aula1 = new aula('bem vindo', 123)
const aula2 = new aula('ate breve', 457)
console.log(aula1,  aula2)

//simulando o funcionamento do new
//...params - é um array que recebe todos os
//parametros possiveis 
function novo(f, ...params){
    const obj = {}
    //__proto__ - obj herda os atributos da função f
    obj.__proto__ = f.prototype
    //apply - passa os parametros para o objeto
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'bem vindo', 123)
const aula4 = novo(aula, 'ate breve', 457)

console.log(aula3, aula4)

