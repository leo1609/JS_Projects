import React, {Component} from 'react'

import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    //state é o clone do objeto criado fora da classe. Desta forma 
    //ela foi trazida pra dentro da classe
    state = {...initialState}

    constructor(props){
        super(props)
        this.setOperation = this.setOperation.bind(this)
    }
    clearMemory(){
        //quando quizer resetar a memoria eu mudo o estado do state
        //chamao a funcao setState e passando o objeto initialState
        //para zerar a memoria.
        this.setState({...initialState})
    }

    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            //se a condicao abaixo nao for o operador '=' entao a constante
            //currentOperation recebe o operation do state
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            //eval pode gerar efeito colateral entao usa-se o try
            //para que se der erro cai no catch e executa a operacao do catch
            try{
                //fazendo a execucao da operacao
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                //se for diferente de '=' limpa o display
                clearDisplay: !equals,
                values

            })
        }
    }

    addDigit(n){
        //se ja houver ponto no display, retorna nada
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        //display sera limpo quando for 0 ou quando o atributo clearDisplay
        //do state for true
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        
        //Se 'cleardisplay' for true 'currentValue' recebe vazio, senao recebe 'this.state.displayValue'.
        //se precisar limpar o display  valor corrente fica vazio, senao precisar o valor
        //corrente (currentValue) recebe o valor do state.
        const currentValue = clearDisplay ? '' : this.state.displayValue
        //o valor do display(displayValue) sera o valor corrente + o novo digito digitado
        const displayValue = currentValue + n
        
        //mudando para o novo valor de displayValue do state da aplicacao. O clearDisplay tem que ser
        //false, porque se for true o valor vai satisfazer a 3º condicao desta funcao e o valor nao
        //ira sair de ''.
        this.setState({displayValue, clearDisplay: false})
        
        //guardando 'displayValue' na memoria(array) para poder 
        //usar os operadores
        if(n !== '.'){
            //indice que sera usado no array 'values'
            //se i = 0 o newValue sera guardado no 1º indice do array
            const i = this.state.current
            //'parseFloat' - converte para numero real
            const newValue = parseFloat(displayValue)
            //clonei para um novo array o values do state
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }

    render(){
        //existe duas maneiras de garantir que o this seja do escopo desse
        //objeto: uma é pela funcao 'bind()' acima(é o correto) e a outra é atraves da funcao Arrow
        //abaixo. A constante recebe a funcao arrow onde se tem a chamada
        //da funcao com this. Desta forma associo o this correto que quero associar.
        //Outra forma é nao fazer nada, mas pode gerar erros, pois o this é global, como
        //o this da funcao 'clearMemory'. Fiz das tres formas para saber como fica implementadas.
        const addDigit = n => this.addDigit(n)

        return (
            //'className' é atributo para identificar uma classe 'css' no react.
            // É o mesmo que 'class' em JS.
            <div className="calculator">
                {/*display recebe o valor do atributo displayValue do state da aplicacao */}
                <Display value={this.state.displayValue}/>
                {/*como a funcao click foi implementada no arquivo 'Button.jsx', ela 
                retorna o label do botao. Desta forma, alem dela fazer isso, ela dispara
                as funcoes abaixo. Em React os atributos criados nao precisam de valor 
                como no caso dos atributos triple, operation e double*/}
                <Button label="AC" click={() => this.clearMemory()} triple/>
                <Button label="/"  click={this.setOperation} operation/>
                <Button label="7"  click={addDigit}/>
                <Button label="8"  click={addDigit}/>
                <Button label="9"  click={addDigit}/>
                <Button label="*"  click={this.setOperation} operation/>
                <Button label="4"  click={addDigit}/>
                <Button label="5"  click={addDigit}/>
                <Button label="6"  click={addDigit}/>
                <Button label="-"  click={this.setOperation} operation/>
                <Button label="1"  click={addDigit}/>
                <Button label="2"  click={addDigit}/>
                <Button label="3"  click={addDigit}/>
                <Button label="+"  click={this.setOperation} operation/>
                <Button label="0"  click={addDigit} double/>
                <Button label="."  click={addDigit}/>
                <Button label="="  click={this.setOperation} operation/>
            </div>
        )
    }
}

