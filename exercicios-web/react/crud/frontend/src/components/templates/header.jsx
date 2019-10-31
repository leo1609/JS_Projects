import './header.css'
import React from 'react'

export default props =>
   //'d-none' - o header nao aparecera para celulares.
   //'d-sm-flex' - qualquer dispositivo maior que pequeno usara o flex
   //'flex-column' - colocara os atributos herdados da main um em cima do outro,
   //icon + title(tag h1), subtitle(p).
   <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
         {/*'props.icon' - é o home passado pela tag main em app.jsx, entao
         o icone utilizado do arquivo font-awesome é 'fa fa-home' */}
         <i className={`fa fa-${props.icon}`}></i>{props.title}
      </h1>
      <p className="lead text-muted">{props.subtitle}</p>
   </header>