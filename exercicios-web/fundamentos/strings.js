const escola = "Cod3r"

console.log(escola.charAt(4))

//nao gera erro se passar do numero de caracteres da frase
// retorna vazio
console.log(escola.charAt(5))

//valor do numero 3 na tabela asc
console.log(escola.charCodeAt(3))

//retorna o indice do caractere na string
console.log('indexof: ' + escola.indexOf('d'))

//retorna a letra e tudo que esta a frente o indice desejado
console.log(escola.substring(1))

//retorna o que esta no primeiro indice ate o segundo indice, sem retornar o segundo indice
console.log(escola.substring(1,3))

//concatena caracteres a string
console.log("Escola ".concat(escola).concat("!")) 

//faz a mesma coisa que acima
console.log("Escola " + escola + "!")

//ira concatenar e nao somar. Operações de soma nao da para fazer com string e numero outras operações da
console.log("3 " + 2)

//troca o caracter do indice escolhido por e
console.log(escola.replace(3, 'e'))

//   '/\w/g' é uma expressao regular e serve para trocar todos os caracteres pela letra e
//curso de rejex acho eu para espressoes regulares
console.log(escola.replace(/\w/g, 'e'))

//substitui somente a primeira letra
console.log(escola.replace(/\w/, 'e'))

//substitui o primeiro digito pela letra escolhida
console.log(escola.replace(/\d/, 'e'))

//gera array com elementos separados por virgula
console.log('ana,maria,pedro'.split(','))

//separa todos os caracteres como elemento do array
console.log('ana,maria,pedro'.split(''))

//coloca todos os menbros como um elemento do array
console.log('ana,maria,pedro'.split(' '))

