let numero  = 1 //com 'var' da o mesmo resultado
{
    let numero = 2
    console.log('dentro=', numero)
}
//let fica dentro do bloco se a variavel estiver dentro do bloco
//senao ele pega fora, se a variavel estiver fora
console.log('fora=', numero)
//var tem escopo global
//let tem escopo global, de funcao, de bloco


{
    let numero2 = 2
    console.log('dentro=', numero)
}
//evitar variavel global em front end. Gera muitos bugs


 
