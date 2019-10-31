const aprovados = ['agata', 'aldo', 'daniel', 'raquel']
//callback - funcao foreach chama a funcao
//de dentro para cada indice percorrido
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
//a função callback dentro do foreach sempre tem parametros na seguinte forma
//primeiro parametro é o nome
//o segundo parametro sempre é o indice no foreach
//o terceiro é o array inteiro que esta sendo chamado
//o quarto em diante é undefined
//funcao foreach chamando a função arrow - callback
aprovados.forEach((nome,indice, array, x) => {console.log(indice + ' - ' + nome)
                                              console.log(array, x)})

const exibiraprovados = aprovado  => console.log(aprovado)
aprovados.forEach(exibiraprovados)


