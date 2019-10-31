"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new produto_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
//pelo fato de tenho a propriedade  "noImplicitAny": true no arquivo
//'tsconfig.json' eu preciso tipificar os parametro desta funcao
//como 'number' ou 'any', senao da erro
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
