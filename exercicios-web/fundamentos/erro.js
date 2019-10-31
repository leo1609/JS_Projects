function tratarErroELancar(erro){
    //a palavra throw é que lança o erro na 
    //tela

    //throw  new Error('atributo não identificado')
    //throw 10
    //throw true
    throw 'mensagem'
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
}

function imprimirNomeGritado(obj){
    try{//se deu erro cai no bloco catch
        //olhe para sentença abaixo e observe 
        //que tem um erro de escrita no atributo 
        //name que na verdade é nome
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
          tratarErroELancar(e)
    } finally{//sempre vai ser excutado 
        //se executado o try ou o catch
         console.log('final')
    }
}

//nao jogar um erro cru ou tratado pelo js na cara do usuario


const obj = { nome: 'roberto' }
imprimirNomeGritado(obj)