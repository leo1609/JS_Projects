
//JS trata funçao como dado, portanto pode ser passado como parametro e 
// armazenado em variavel, diferente de linguagens mais antigas onde isso não é possivel
//isto se chama funcao de alta ordem
//js é multiparadigmas, suporta varios tipos de paradigmas entre eles o funcional
//procedural e orientado a objetos

//criar de forma literal
function fun1(){
    //toda funcao js retorna no minimo undefined
    //caso vc nao programe algum retorno
}//funcao tem sempre bloco

//armazenar em variavel
const fun2 = function(){
    //funcao anonima armazenada em uma variavel
    //chamar a variavel em um parametro como dado funciona
}

//armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]

console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'opa'}

console.log(obj.falar())

// passar uma funcao como parametro
function run(fun){
    fun()
}

run(function (){
    console.log("executando")
})

// uma funcao pode retornar/conter outra funcao
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
//soma é uma funçao que tem outra funcao
//entao passo o parametro da ultima funcao
//depois de passar os parametros da primeira funcao
soma(2, 3) (4)

//pode ser feito assim
const cincoMais = soma(2, 3) 
cincoMais(4)