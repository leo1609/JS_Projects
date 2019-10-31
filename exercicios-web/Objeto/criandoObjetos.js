//usando a notaçao literal
const obj1 = {}
console.log(obj1)

//object em js
//new object é um objeto criado a partir de 
//uma função construtora do js
console.log(typeof Object, typeof new Object)
const obj2 = new  Object
console.log(obj2)

//funcoes  construtoras sua
function Produto(nome,preco,desc){
    //this é atributo publico
    this.nome = nome
    //atributo interno dentro da fução é privado
    //JS tem somente dois tipos de encapsulamento
    //publico e privado
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
 
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
//preco é privado dentro da funcao
//so pode ser vista se chamar a funcao 
//getprecodesconto dentro de produto
console.log(p1.preco)

//funcao factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /  30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome  = 'ana'
console.log(filha)

//funcao famosa que retorna um objeto 
const fromJSON = JSON.parse('{"info": "sou um json"}')
//JSON.parese transforma string em objeto e
//insere o objeto na const
console.log(fromJSON.info)