let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//esta função é usado somente quando se tem uma 
//unica linha. Tem return implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))


let ola = function(){
    return 'ola'
}

//preferivel usar arrow abaixo
ola = () => 'ola'

ola = _ => 'ola' //possui um parametro
//na hora de chamar a função pode se ignorar 
//passar o parametro
console.log(ola())

