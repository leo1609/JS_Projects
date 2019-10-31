import React from 'react'
import './logo.css'

import Logo from '../../assets/imgs/logo.png'

export default props =>
    <aside className="logo">
        <a href="/" className="Logo">
            <img src={Logo} alt="logo"/>
        </a>
    </aside>

