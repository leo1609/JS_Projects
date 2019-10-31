//destruturing criou uma variavel a que 
//recebeu o primeiro valor do array que é 10
const [a] = [10]
console.log(a)

//ele pula o numero que seria da variavel que esta invisivel depois do n1
const [n1 , ,n3 , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//caso dificil de entender dificil de ler, mas funciona
//ignora o 1º array e imprime o 2º somente o 2º elemento do array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
