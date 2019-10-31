const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//erro historico do js. O var por algum motivo nao respeita os valores que foram instanciados.
//var nao tem escopo de funcao, nesse caso conforme o explicado no video
//portanto vai ser imprimido duas vezes o 10
funcs[2]()
funcs[8]()

