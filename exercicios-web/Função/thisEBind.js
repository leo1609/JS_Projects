const pessoa = {
    saudacao:  'bom dia!',
    falar(){
        //se tirar o this vai dar erro
        console.log(this.saudacao)
        //console.log("tarde")
    }
}

pessoa.falar()

const falar = pessoa.falar
//a costante falar esta sem o atributo saudacao 
//por isso da erro quando chamo this.saudacao
falar()//conflito entre paradigmas funcional e O.O.


//o bind permiti acessar todos os atributos de pessoa 
//o bind resolve o problema do this
const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()

