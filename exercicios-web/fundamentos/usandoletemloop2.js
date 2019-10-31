const funcs = []

for(let i = 0; i < 10; i++){
    //vai ser instanciada uma função para 
    //cada indice do array
    funcs.push(function(){
        console.log(i)
    })
    
}

//as linhas abaixo estão chamando a função que
//foi instanciada no array de indice 2 e 8
// com o i no momento da 
//instanciação valendo 2 e 8, portanto os 
//numeros que estao no console.log nao é i e 
//sim 2 e 8.
funcs[2]()
funcs[8]()

