import React from 'react'

export default props => 
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control"
                        name="name" value={props.valueName}
                        onChange={props.onChangeName}
                        placeholder="Digite o nome..."/>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="text" className="form-control"
                        name="email" value={props.valueEmail}
                        onChange={props.onChangeEmail}
                        placeholder="Digite o email..."/>
                </div>
            </div>
        </div>

        <hr/>
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary"
                    onClick={props.onClickSalvar}>
                    Salvar
                </button>

                <button className="btn btn-secondary ml-2"
                    onClick={props.onClickCancelar}>
                    Cancelar
                </button>
            </div>
        </div>
    </div>    