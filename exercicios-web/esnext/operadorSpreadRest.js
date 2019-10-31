//operador ...rest(juntar)/spread (espalhar)
//rest é somente usado como parametro de função

//spread a notação é a mesma de rest, porem quando usado
//em objeto ou array eletem a função de espalhar os 
//atributos ou elementos
const funcionario = { nome: 'maria', salario: 12348.99}
//...funcionarios espalha os atributos de funcionario 
//dentro de clone
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)