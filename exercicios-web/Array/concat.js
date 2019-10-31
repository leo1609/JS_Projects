const filhas = ['valesca', 'cibalena']
const filhos = ['uoxiton', 'ueslei']

const todos = filhas.concat(filhos, 'fulano')
console.log(todos, filhos, filhas)

//os arrays originais não são mechidos
//é gerado um novo arraycomo resultado da operação
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[7,8]]))