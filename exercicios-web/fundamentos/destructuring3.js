//o destructuring extraiu o min e o max do
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
//sem o max ele pega o valor padrao 1000 
//o destructuring pegou somente o min  do obj
console.log(rand({ min: 955 }))

//usara somente os valores padrao de 0 a 1000
console.log(rand({}))

//isso vai dar erro pois nao passa nenhum atributo retirado do objeto
//console.log(rand())
