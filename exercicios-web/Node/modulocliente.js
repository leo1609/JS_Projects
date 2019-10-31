//aqui eu importo o moduloA
//aqui eu recebo o que eu exportei do moduloA
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemvindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomdia)
console.log(moduloB.boanoite())
console.log(moduloB)
