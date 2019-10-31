import React from 'react'


//se o export nao for default eu preciso criar uma variavel 
const Boatarde = props => <h1>Boa Tarde {props.nome}!</h1>

const Boanoite = props => <h1>Boa Noite {props.nome}!</h1>

export {Boatarde, Boanoite}
//posso usar o Boatarde como default que ira funcionar
//export default Boatarde


export default {Boanoite}