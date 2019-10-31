import React, {Component} from 'react'

export default class Saudacao extends Component{
    
    constructor(props){
        super(props)
        //state é uma propriedade da classe que serve para mudar o nome da 
        //propriedade que tem no props, porque o props só serve como leitura
        this.state = {
            tipo: this.props.tipo,
            nome: this.props.nome
        }
        //'this.setTipo.bind(this)' - referencia que o this de setTipo é o this da classe
        //Saudacao e nao o do this global da aplicacao. Desta forma posso ficar sem
        //usar a funcao arrow dentro do evento onchange dentro do input, sem ocorrer erro algum.
        //Esta é a forma mais natural de se chamar o onchange.
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e){
        //'setState()' é uma funcao que faz a mudanca da propriedade sempre
        //se passando um objeto{} como parametro.
        // 'e.target.value' é o texto que esta sendo mudado no input
        //pela chamada da funcao 'setTipo()' dentro do evento 'onchange' no input
        this.setState({tipo: e.target.value})
    }
     
    setNome(e){
        this.setState({nome: e.target.value})
    }

    //render é para renderizar o componente
    render(){
        //'this' se refere ao objeto que foi gerado apartir dessa classe
        //'this.props' se refere as propriedades desse objeto
        //'{tipo, nome}' aqui uso o operador destruction para retirar as 
        //propriedades de dentro de props 
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>  
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)}/>       
            </div>
        )
    }
}