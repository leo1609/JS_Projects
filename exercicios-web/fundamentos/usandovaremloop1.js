for(var i=0; i < 10; i++){
    console.log(i)
}
//que merda usar var dentro de laço. no fim do laço o i vale 10 
//e pode ser imprimido, pois nao tem escopo de bloco, somente escopo global
//usar var deve gerar muitos bugs
console.log('i=', i)
