//fragment é uma funcao do react que serve para colocar duas ou mais tags
//na mesma div do index.html. Eu importei ele aqui para nao precisar quando usa-lo
//escrever 'React.Fragment' e sim somente 'Fragment'
import React, {Fragment} from 'react'


//props - parametro de propriedade, pode ser 'x'
export default props => 
    <Fragment>
    <h1>Bom dia {props.nome} com {props.idade}!</h1>
    <h2>Até breve</h2>
    </Fragment>

//Posso usar assim tambem
//export default props => 
//  <React.Fragment>
//  <h1>Bom dia {props.nome} com {props.idade}!</h1>
//  <h2>Até breve</h2>
//  </React.Fragment>

//Posso fazer assim tambem
//export default props => [
//    <h1 key='h1'>Bom dia {props.nome} com {props.idade}!</h1>
//    <h2 key='h2'>Até breve</h2>
//]

//Posso usar assim tambem, o problema é que vai ficar uma div dentro 
//da outra div do index.html. Pode quebrar o layout. O fragment nao
//faz isso 
//export default props => 
//  <div>
//  <h1>Bom dia {props.nome} com {props.idade}!</h1>
//  <h2>Até breve</h2>
//  </div>
