const ferrari = {
    modelo: 'f40',
    velmax: 324
}

const volvo = {
    modelo: 'v40',
    velmax: 200
}

//__proto__existe somente dentro de objetos
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//nao existe prototype do prototype dentro da função object
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
//prototype existe somente dentro de funções 
console.log(Object.prototype,'...', MeuObjeto.prototype)
