//essa pagina ja existia quando apaguei todas as pastas do src.
//Portanto quando eu recriei a pasta index.js o react vai le-la 
//e reconhece-la e retirar o erro do browser, porem continuaremos 
//sem ver nada no browser porque nao tem nada programado ainda.

// para iniciar o react, temos que importa-lo neste arquivo
import React from 'react'
//react dom reinderiza elementos na pagina
import ReactDOM from 'react-dom'

//importo as funcoes que sao exportaveis do arquivo Primeiro.jsx
//o nome do import tem que se feito com 1º letra maiuscula, nao funciona
//com minuscula
import Blabla from './componentes/Primeiro'

import Bomdia from './componentes/bomDia'

import Multi, {Boatarde, Boanoite} from './componentes/multiplos.jsx'

import Saudacao from './componentes/Saudacao.jsx'

import Pai from './componentes/pai'
//para exercicio 345
import Filho from './componentes/filho'

//esse tipo de funcao abaixo render() onde recebe um elemento html(h1)
//nao é JS puro e sim uma sintaxe do react chamado 'jsx'(JS extendido - feito pelo 'react' importado),
//O elemento html escrito nao é na verdade um elemento html e sim JS e sera
//substituido por html na pagina index.html quando for feito o transpile(conversao)
//para ser entendido pelo node e renderizado no broswer como html(quem faz a renderizacao
//é o 'react-dom' importado). Serve pra facilitar
//a programacao. 
//inseri o '<h1>React</h1>' dentro do html.index onde tem a div
//com id=root (<div id="root"></div>)
//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))

//reinderizara no browser a funcao exportavel do arquivo Primeiro.jsx
ReactDOM.render(<Blabla />, document.getElementById('root'))

ReactDOM.render(<Bomdia nome="guilherme" idade={10}></Bomdia>, document.getElementById('root2'))

ReactDOM.render(
    <div>
        <Boatarde nome="Ana"></Boatarde>
        <Boanoite nome="Bia"/>
        <Multi.Boanoite nome="Pedro"/>
    </div>
, document.getElementById('root3'))

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom Dia" nome="João" />
    </div>
, document.getElementById('root4'))

ReactDOM.render(
    <div>
        <Pai.pai1 nome="Paulo" sobrenome="Batista" />
    </div>
, document.getElementById('root5'))

ReactDOM.render(
    <React.Fragment>
        <Pai.pai2 nome="Manuel" sobrenome="Da Nobrega" >
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai.pai2>
    </React.Fragment>
, document.getElementById('root6'))