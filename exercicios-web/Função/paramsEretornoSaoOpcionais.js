function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor acima do permitido: ${area}m2.`)
        //return (`valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2, 2))//4
console.log(area(2))//NaN nao é maior que 20
console.log(area())//NaN
console.log(area(2, 3, 17, 22, 44))//retorna 6
console.log(area(5, 5))//o if nao tem retorno somente o else
//desta maneira o retorno do if vai ser o console e o reotrno undefined
//undefined é o que o js retorna quando nao se programa retorno
//para evitar isso seria necessario usar um return dentro do if

