let comparaComThis = function (param) {
    console.log(this === param)
}
//no browser o window é o global
//no node é global mesmo
comparaComThis(global)

const obj = {}
//abaixo o this aponta agora pro obj por causa do bind
comparaComThis = comparaComThis.bind(obj)
//da false porque o this não é mais global e 
//sim se refere ao objeto
comparaComThis(global)
//da true porque o this referencia o objeto 
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
//da false porque o this ainda referencia o obj acima
comparaComThisArrow(global)
//module.exports é mesmo que o proprio diz
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
//da false porque o arrow sempre pega o this global
//que no caso o this global se tornou o this do obj
comparaComThisArrow(obj)
//provando abaixo que o this global é agora o this do obj
comparaComThisArrow(module.exports)

