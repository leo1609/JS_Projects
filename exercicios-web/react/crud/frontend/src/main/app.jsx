import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import React from 'react'
//react-router-dom é uma forma forma mais especifica de trabalhar com toras
//para web, existe tambem outra forma mais especificas de rotas pra celulares,
//aqui sera necessario usar especifico pra web. No arquivo routes.jsx eu usei 
//react-router , que é uma forma mais generica de fazer rotas, Dele advem o react-router-dom e 
// o de rotas pra celulares. 
import { HashRouter } from 'react-router-dom'

import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Routes from './routes'
import Footer from '../components/templates/footer'

export default props =>
   <HashRouter>
      <div className="app">
         <Logo />
         <Nav />
         {/*Aqui substitui routes por main, porque sao as rotas que irao definir o que ira aparecer na tag main. */}
         <Routes />
         <Footer />
      </div>
   </HashRouter>
