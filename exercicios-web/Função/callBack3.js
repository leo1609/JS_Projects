//exemplo de callback no browser
//esta sentenca pega o corpo da tela
//se houvesse mais corpo na tela teriamos que
//aumentar o numero no array, como só tem 1
//então o indice é '0'
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu!!!')
}
