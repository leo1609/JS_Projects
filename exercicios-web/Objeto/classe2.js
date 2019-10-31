class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//extends é o mesmo que prototype, create
//ou  __proto__
class Pai extends Avo{
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('silva','marceneiro')
    }
}

const filho = new Filho
const pai = new Pai
const avo = new Avo
console.log(filho)
console.log(pai)
console.log(avo)