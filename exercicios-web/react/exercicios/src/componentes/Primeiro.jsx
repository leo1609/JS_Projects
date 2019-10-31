
import React from 'react'


//posso importar esse arquivo por qualquer outro que 
//necessite
//export default é um export padrao
//export default function(){
    //para eu exportar uma tag eu preciso usar a sintaxe JSX, entao
    //preciso importar o react neste arquivo
//    return <h1>Primeiro</h1>
//}

//posso utilizar tambem funcao arrow e sem usar return porque o return
//em funcoes arrow é implicito
export default () => <h1>Primeiro</h1>