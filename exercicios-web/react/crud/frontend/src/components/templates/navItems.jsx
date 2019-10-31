import React from 'react'

export default props =>
    <a href={props.adress}>
        <i className={props.icon}></i>  {props.title}
    </a>