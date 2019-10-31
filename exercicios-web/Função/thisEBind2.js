function Pessoa(){
    this.idade = 0
    //setInterval tem um temporizador que dispara
    //a funcao no intervalo de cada 1000 milisegundo
    
    //desta forma posso colocar o this de pessoa dentr
    //de setInterval
    const self = this
    setInterval(function(){
        //para usar o bind eu terei que trocar o self
        //pelo this
        //this.idade++
        self.idade++
        //console.log(this.idade)
        console.log(self.idade)
    //se eu usar o bind abaixo,  o programa imprimira 
    //os numeros porque o this de dentro do setInterval
    //ira chamar o this de pessoa
    //}.bind(this), 1000)
    }/*.bind(this)*/, 1000)
}

new Pessoa