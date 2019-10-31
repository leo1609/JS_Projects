let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1
console.log(!isativo)
console.log(!!isativo)

// '!!' serve para testar se um valor é verdadeiro. Negação da negação
console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isativo = true))

console.log("os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo  = false))

console.log('pra finalizar')
//retorna false
console.log(!!('' || null || 0 || NaN || ''))
//retorna verdadeiro
console.log(!!('' || null || 0 || NaN || ' '))

let nome = ''
//quando o nome esta vazio significa que é false,mas o impressao é desconecido pois nao tem nada em nome
console.log(nome || 'desconhecido')
//serve para validar nome em um cadastro. Usado como padrao
nome = 'lucas'
console.log(nome || 'desconhecido')

