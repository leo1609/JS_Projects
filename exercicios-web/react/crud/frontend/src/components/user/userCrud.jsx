import React, {Component} from 'react'
import Axios from 'axios'

import Main from '../templates/main'
import Form from '../templates/form'
import Table from '../templates/table'
import Row from '../templates/row'

//este arquivo sera um componente que servira para fazer o crud da aplicação,
//portanto sera necessario utilizar do state of class, por este motivo
//sera necessario implementar classe de um componente aqui.

//objeto que tem as propriedades do cabeçalho de usuarios
const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar e Excluir!'
}

//url do backend
const baseUrl = 'http://localhost:3001/users'

//estado inicial do componente
const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
}

//UserCrud é um componente de classe
//a renderizacao da pagina comeca daqui
export default class UserCrud extends Component {

    state = {...initialState}

    //'componentWillMount()' - esta funcao do react é chamada toda vez que o cliente escolhe clicar na tag usuarios da tela.
    //Se o cliente trocar de pagina e voltar denovo pra usuarios a funcao sera chamada novamente.
    //Quando o cliente já estiver na tela de usuarios, esta funcao ira carregar o atributo this.state.list do front com os dados
    //cadastrados do back-end.
    componentWillMount(){
        //axios fara um get em cima do baseUrl
        Axios(baseUrl).then(resp => {
            //aqui os dados do backend sao passados para a list do front end.
            this.setState({list: resp.data})
        })
    }

    //limpara o formulario quando clicar na funcao cancelar
    clear(){
        //o user do state sera mudado para o user do initialState que
        //esta vazio
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user
        //se id existir faz o put, senao faz o post
        const method = user.id ? 'put' : 'post'
        //se existir o id a url recebe a 1º condicao senao a 2º
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        //axios[method] é a funcao com o metodo que foi passado put ou post.
        //o axios aqui esta salvando (post) ou atualizando (put) o user.
        //(url, user) é os parametros da funcao
        Axios[method](url, user)
            .then(resp => {
                //aqui estou inserindo o usuario retornado pelo json-server no list atraves do resp.data.
                //Faco isso para inserir os dados na tabela de usuarios.
                const list = this.getUpdatedList(resp.data)
                //apos salvar, esvazio o user do state e atualizo a lista no state
                this.setState({user: initialState.user, list})
            })
    }

    getUpdatedList(user, add = true){
        //crio uma lista apartir do state.list sem inserir nela o user passado no parametro
        const list = this.state.list.filter(u => u.id !== user.id)
        //apos criar uma lista clone sem o user e se o add for true, o unshift colocara o user na 1º 
        //posicao desta lista clone, para a lista ser usada na construcao da tabela.
        //if(user) é usado porque se for necessario fazer a remocao de um usuario do cadastro,
        //a funcao remove ira chamar esta funcao e passara o paramentro false no add para que o usuario
        //nao seja mais inserido na list de state e nao apareca mais na tela do browser. 
        if(add) list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        //event.target.name é o nome do input que esta na funcao renderForm() abaixo, este nome sera name ou email,
        //portando este metodo servira tanto para fazer update no name como no email.
        //event.target.value é o valor que esta dentro do campo de input.
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return (
            <Form valueName={this.state.user.name}
                  valueEmail={this.state.user.email}
                  onChangeName={e => this.updateField(e)}
                  onChangeEmail={e => this.updateField(e)}
                  onClickSalvar={e => this.save(e)}
                  onClickCancelar={e => this.clear(e)} />
        )
    }

    //esta funcao servira para carregar o usuario na tela quando for necessario
    //fazer alteracao no mesmo.
    load(user){
        this.setState({user})
    }

    remove(user){
        //Axios.delete esta removendo o usuario do backend
        Axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            //this.getUpdatedList(null) esta removendo o usuario do state.list
            //do front-end
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    renderTable(){
        return (
            <Table rows={this.renderRows()}/>
        )
    }

    renderRows(){
        //mapeando e retornando um array da lista de usario  
        return this.state.list.map(user => {
            return (
                <Row user={user} onClickLoad={() => this.load(user)} onClickRemove={() => this.remove(user)} />
                //sempre que for retornar um array jsx é necessario passar
                //a key para nao gerar advertencia.
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}