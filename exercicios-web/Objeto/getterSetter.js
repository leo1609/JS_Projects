const sequencia = {
    _valor: 1,//o underline significa que o atributo
    //é privado.É uma convenção entre programadores para entenderem que
    //que o atributo é privado

    //JS nao suporta sobrecarga de metodos
    //ou seja, muitos metodoscom os mesmos nomes
    //para acessar um atributo privado é 
    //necessario usar os metodos get e set abaixo
    get valor(){ return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }    
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)