function rand ([ min = 0, max = 1000]){
    //se min maior que max entao max passa 
    //a ser min e min passa a ser max na
    //destructuring.

    //Esta sentença abaixo,se existir ou não,
    // não influirá no resultado 
    if (min > max) [min, max] = [max, min]
    //console.log(min,max)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand([50, 40, 60]))
console.log(rand([992, , 50]))//esse valor entra como o min e o max assume o valor de 1000
console.log(rand([, 10]))//desta forma passa o valor para o parametro max
console.log(rand([]))//array vazio assume o valor dos paramtros da funcao
//console.log(rand())//da erro pois isso nao é um array esim um undefined e nao pode ser lido pelo js
