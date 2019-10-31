//ES8: Object.valeus/ Object.entries
const obj = {a: 1, b: 2, c: 3}
//pega os valores
console.log(Object.values(obj))
//pega a chave e o valor
console.log(Object.entries(obj))

//melhorias na notaçao literal
const nome = 'carla'
const pessoa = {
    //antes era assim
    //nome: nome,
    //hoje nao precisa
    nome,
    //antes era assim
    //ola: function(){}
    //hoje nao precisa
    ola(){
        return 'oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class internamente é convertida para uma funçao
class animal {}
class cachorro extends animal{
    falar(){
        return 'au au'
    }
}
//para criar objetos a partir de uma classe
//ou função construtora eu uso
//a palavra reservada new
console.log(new cachorro().falar())
