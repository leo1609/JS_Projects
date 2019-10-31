function teste1(num){
    //por isso é bom usar chaves para nao ter problema na manutenção
    if(num > 7) //somente uma senteca esta associada ao if
        console.log(num)
        console.log('final')
        //o 'final' esta fora do bloco do if
}

teste1(6)
teste1(8)


function teste2(num){
    //cuidado com o ';
    //nao usar com as estruturas de controle
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)