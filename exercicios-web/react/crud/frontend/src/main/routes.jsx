import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/home'
import UserCrud from '../components/user/userCrud'

export default props =>
    //'switch' serve para abrigar as rotas e serve para escolher a tota
    <Switch>
        {/*'path='/'' - quando navegar para / sempre vai redezirar o componente home.
            'exact' - para identificar que o endereco deve ser exatamente o que 
            foi codificado */}
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        {/*se nao cair em nehuma rota anterior sera direcionado para o endereco de '/'. */}
        <Redirect from='*' to='/' />
    </Switch>