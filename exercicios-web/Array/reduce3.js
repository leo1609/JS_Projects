Array.prototype.reduce2 = function(callback, valorinicial){
    //let acumulador = this[0]
    const indiceinicial = valorinicial ? 0 : 1 //se tem valor inicial pega '0'
    let acumulador = valorinicial || this[0]
    for(let i = indiceinicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 7]
console.log(nums.reduce2(soma, 22))