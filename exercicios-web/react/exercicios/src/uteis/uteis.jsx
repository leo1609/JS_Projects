import React from 'react'

export function childrenWithProps(props){
    //React.Children.map faz um loop nos filhos do pai
    return React.Children.map(props.children, child => {
        //cloneElement reescreve o nome que sao filhos do pai
        return React.cloneElement(child, {
            /*primeiro coloco o props do pai e depois coloco o props dos
            filhos para esses sobrescrevero nome do pai mais utlizando o 
            sobrenome do pai */
            ...props, ...child.props
        })
    })
}