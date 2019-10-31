const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
//callback - chama uma função sempre que um evento é disparado
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

