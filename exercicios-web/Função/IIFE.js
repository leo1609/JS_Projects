//IIFE - Imediately Invoked Function Expression

(function() {
    console.log('sera executado na hora!')
    console.log('foge do escopo mais abrangente do browser')
})()// <=estes parenteses são para invocar a funcao
//ou seja, eles ja estao chamando a função
//desta maneira ele foge do escopo global do browser
//tudo que for criado aqui dentro da IIFE nao sera confundido
//com  o escopo do browser