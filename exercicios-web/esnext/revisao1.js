//let e const
{
    var a = 2
    let b = 3
}

console.log(a)
//b nao executa porque é let
//tem escopo de bloco
//console.log(b)

//template string
const produto = 'ipad'
console.log(`${produto} 
é
caro`)

//destructuring
//string é um array entao o 'l' é o c
//o 'e' é o o
//o '...tras' é um array das ultimas letras
//neste caso ['d', 'e', 'r']
const [l, e, ...tras] = "cod3r"
console.log(l, e , tras)

const [x, , y] = [1, 2, 3]
console.log(x,y)

const {idade: i, nome} = {nome: 'ana', idade: 9}

console.log(i, nome)
