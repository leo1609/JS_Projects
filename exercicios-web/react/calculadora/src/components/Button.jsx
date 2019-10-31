import React from 'react'
import './Button.css'

export default props =>
    //posso escrever uma template dentro da classe do react, desta forma.
    //'button${props.operation ? 'operation' : ''}' - se o valor do atributo
    //do botao no arquivo Calculator.jsx for 'button.operation' a template
    //executara button.operation, senao executara o valor button
    <button
       //quando eu clicar no botao ele retorna o label do botao pela funcao
       //click. Porem ainda a funcao nao foi implementada, entao a arrow abaixo
       //somente sera executada se a condicao abaixo for valida. Se 'props.click'
       //existe, entao executa a funcao, senao nao. 
        onClick={e => props.click && props.click(props.label)}
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
        {props.label}
    </button>