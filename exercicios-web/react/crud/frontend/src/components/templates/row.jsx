import React from 'react'

export default props =>
    <tr key={props.user.id}>
        <td>{props.user.id}</td>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td> 
        <td>
            <button className="btn btn-warning"
                onClick={props.onClickLoad}>
                <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2"
                onClick={props.onClickRemove}>
                <i className="fa fa-trash"></i>
            </button>
        </td>
    </tr>