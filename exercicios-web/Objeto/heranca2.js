//cadeia de prototipo (prototype chain)

Object.prototype.attr0 = '0'//evite esse tipo de manipulaçaõ
//porque manipula a vriavel global
const avo = {attr1: 'a'}
const pai = {__proto__:avo, attr2: 'b'}
const filho = {__proto__:pai, attr3: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velatual: 0,
    velmax: 200,
    aceleramais (delta){
        if(this.velatual + delta <= this.velmax){
            this.velatual += delta
        }else{
            this.velatual = this.velmax
        }
    },
    status (){
        return `${this.velatual}km/h de ${this.velmax}km/h`
    }
}

const ferrari = {
    __proto__: carro,
    modelo: 'f40',
    velmax: 324//shadowing
    //sombreia variaveis de escopo mais abrangente
}

const volvo = {
    modelo: 'v40',
    status(){
        //o super ira chamar o metodo status() do prototipo
        //que neste caso é o objeto carro
       return `${this.modelo}: ${super.status()}`

    }
}
//ferrari agora tem carro como prototipo
//ou seja heranca
//a setenca abaixo é o mesmo que fazer __proto__: carro
//como foi feito dentro de ferrari 
//Object.setPrototypeOf(ferrari, carro)

Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleramais(100)
console.log(volvo.status())

ferrari.aceleramais(300)
console.log(ferrari.status())
console.log(ferrari.velatual)
