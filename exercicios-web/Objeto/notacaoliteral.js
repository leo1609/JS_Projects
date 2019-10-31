const a = 1
const b = 2 
const c = 3

//este permite mudar o nome do atributo
const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeattr = 'nota'
const valorattr = 7.87

const obj3 = {}
obj3[nomeattr] = valorattr
console.log(obj3)

const obj4 = {[nomeattr]: valorattr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //..........
    },
    funcao2(){
        //......
    }
}
console.log(obj5)