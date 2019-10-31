import './main.css'
import React, {Fragment} from 'react'
import Header from './header'

export default props =>
    //usei o fragment pra nao dar sobreposicao de divs no browser,pode dar conflito
    //de espacamentos de divs estando uma dentro da outra
    <Fragment>
        {/*'...props' - pega todas os atributos que foram criados na tag main dentro
        do arquivo app.jsx e atribui-os a tag 'Header' abaixo.  */}
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {/*inseri os filhos que foram implementados no arquivo app.jsx */}
                {props.children}
            </div>
        </main>  
    </Fragment>