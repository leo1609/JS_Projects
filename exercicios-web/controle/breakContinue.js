const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//for in é estrutura dificil. Melhor usar outros for como o map, filter, reduce
for(let x in nums){
    if (x == 5){
        break//o break nao age sobre o if e sim sobre o laço de repetição
    } 
    console.log(`${x} = ${nums[x]}`)
}

for ( let y in nums){
    if (y == 5){
        continue//ele somente pula o indice 5 indicado pelo if
    }
    console.log(`indice ${y} = ${nums[y]}`)
}

//nao use esta estrutura abaixo, funciona mas é de dificil manutencao
//evite for dentro de for
//faça o laco chamar funcoes que tenham outro laço, é de facil manutencao
externo: for(let a in nums){
            for (let b in nums){
                if(a == 2 && b == 3){
                    break externo
                }
                console.log(`par = ${a},${b}`)
            }   
        }