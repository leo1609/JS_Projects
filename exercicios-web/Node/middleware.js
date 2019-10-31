//middleware pattern (cadeia de responsabilidade)
//ctx são dados que serão passados para o proximo passo
//next é uma função que fara a chamada do proximo passo
const passo1 = (ctx, next) => {
     ctx.valor1 = 'mid1'
     next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    //next() é a chamada da funcao execPasso(com indice tal)
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//...middlewares é um array com varias funções
const exec = (ctx, ...middlewares) => {
    //indice é o numero que representa a função dentro
    //do array de middlewares
    const execPasso = indice => {
        //se middlewares existir && o indice que eu enviei 
        //é menor que o array middlewares && o middleware
        //(ou seja, os passos ou fucoes que estao no array middlewares)
        //conseguir executar a função recursiva execPasso
        //a cadeia sera executada, senao ela para. 
        middlewares && (indice < middlewares.length) &&
        //execPasso é uma funcao recursiva que é o next dos passos
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    //indice que eu passei é o '0'
    execPasso(0)
}

//preciso declarar o ctx e seta lo como objeto
//pois ele recebera os valores dos objetos dos passos
const ctx = {}
exec(ctx, passo2, passo1,passo3)
//mostrar os conjutos chave valor do objeto ctx
console.log(ctx)