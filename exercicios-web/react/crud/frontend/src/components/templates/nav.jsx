import './nav.css'
import Item from './navItems'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
           <Item adress="#/" icon="fa fa-home" title="Início"></Item>
           <Item adress="#/users" icon="fa fa-users" title="Usuários"></Item> 
        </nav>
    </aside>