//a class tem um problema que quando executado
//no browser o this atrapalha a execução por causa
//do escopo do this , portanto não retornando o valor
//correto. Retorna underfine 
//this below is a class
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é  ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()


//a factory não usa this e portanto quando 
//a execução é no browser a factory retorna o valor certo
const criarPessoa = nome => {
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('joao')
p2.falar()