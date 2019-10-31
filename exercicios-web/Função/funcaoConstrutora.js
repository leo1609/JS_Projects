function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        } 
    }

    //metodo publico
     this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }   
}

//2 objetos instanciados pela mesma classe Carro
//o uno pega a velocidade padrao do parametro da funcao carro
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//a ferrari eu envio outro valor de velocidade para o parametro
//da  funcao carro e ele acelerara de 20 em 20 a cada acelerada
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//carro é uma funçao que forma a classe
console.log(typeof Carro)
//ferrari é um objeto instanciado pela funcao Carro,
//que nada mais é uma classe
console.log(typeof ferrari)