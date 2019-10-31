//module exports é padrao
//module.exports substitui o objeto vazio
//do this ou exports por um outro objeto
//Se eu criar um objeto a partir do this ou 
//exports esse mesmo nao sera reconhecido 
//por outro modulo que precisara acessa lo
module.exports = {
    bomdia: 'bom dia',
    boanoite(){
        return 'boa noite'
    }
}
//isso somente é acessado aqui
let a = 2