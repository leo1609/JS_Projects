//     funcao   = função arrow (parametro,  retorno implicito, expressao relacional, operador ternario, se verdadeiro retorna, senâo  retorna
const resultado =                  nota            =>                nota >= 7               ?                'Aprovado'         :  'Reprovado'

/*função arrow com corpo
const resultado = nota => { 
    nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/

console.log(resultado(7.1))

console.log(resultado(6.7))

//operador ternario po ser usado em funcao
//como tambem em uma atribuicao abaixo
nota = 3
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log('status = ', status)

//operador ternario sao formados por tres partes
//1º parte é uma expressao logica
//2º parte é um retorno se a expressao for verdadeiro
//3º parte é um retorno se a expressao for falso