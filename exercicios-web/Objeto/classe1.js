class Lancamento{
    //constructor transforma a classe em uma
    //funcao construtora
    constructor(nome = 'generico',valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class Ciclofinanceiro {
         constructor(mes, ano){
             this.mes = mes
             this.ano = ano
             this.lancamentos = []
         }  
         //este metodo preenche com lancamentos o 
         //array this.lancamentos
         //...lancamentos é um array de parametros
         addLancamentos(...lancamentos){
             lancamentos.forEach(l => this.lancamentos.push(l))
         }
         //calcula o quanto é que sobrou no fim
         //do mes de dentro do array
         //this.lancamentos. receitas menos despesas
         sumario(){
             let valorconsolidado = 0
             this.lancamentos.forEach(l => {
                 valorconsolidado += l.valor
             })
             return valorconsolidado
         }
}

const salario = new Lancamento('salario', 45000)
const contadeluz = new Lancamento('luz', -220)

const contas = new Ciclofinanceiro(5, 2018)
//o metodo adiciona todos os parametros deumavez no array
//this.lancamentos da classe ciclofinanceiro
contas.addLancamentos(salario, contadeluz)

console.log(contas.sumario())