//aqui foi criado uma função foreach dentro do objeto
// array do JS para sabermos como é o funcionamento
//do foreach com o callback
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        //muito interessante
        //aqui fica evidente a sequencia dos parametros
        //do foreach
        //1 o valor
        //2 o indice
        //3 o array 
        //4 em diante não existeé underfined 
        callback(this[i], i, this)
    }
}

const aprovados = ['agata', 'aldo', 'daniel', 'raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})