import React from 'react'

//para exercicio 344
import Filho from './filho'

import {childrenWithProps} from '../uteis/uteis'

const pai1 = props =>
    <div>
        <hr/>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos - exercicio 344</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome} />
            {/*filho recebe todas propriedades do pai*/}
            <Filho {...props}/>
            {/*se colocar o nome carla antes de props so vai imprimir
            o nome do pai, por isso carla tem que vir depois de props */}
            <Filho {...props} nome="Carla" />
        </ul>
    </div>

const pai2 = props =>
    <React.Fragment>
        <hr/>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos - exercicio 345</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </React.Fragment>

export default {pai1, pai2}