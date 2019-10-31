function Pessoa(){
    this.idade = 0

    //como a funcao abaixo é arrow, o this equivale
    //ao this do escopo maior, que no caso é Pessoa
    //arrow não varia o this como as funções tradicionais
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa