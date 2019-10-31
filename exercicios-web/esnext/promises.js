//a promisse foi inventada porque é melhor se programar
//chamadas de respostas do que com um monte de 
//callback aninhadas. A proxima aula evidencia isto

function falarDepoisDe(segundos, frase){
    //resolve é uma função que sera chamada quanda a
    //a promessa for atendida. Só aceita um parameter ou um objeto
    //reject é quando se rejeita quando houver erro
    return new Promise((resolve, reject) => {
        //este settimeout é um temporizador que ira simular
        //uma demora de resposta
        setTimeout(() => {
            resolve(frase)
            //se houver algum erro o reject é acionado
            reject(frase)
        }, segundos * 1000)
    })
}
//quando o retorno é uma promisse, ela tem a função then
//que é chamada para vc fazer alguma coisa que se deseja
//com ele
falarDepoisDe(3, 'que legal')
      .then(frase => frase.concat("???"))
      .then(outraFrase => console.log(outraFrase))
      .catch(e => console.log(e))
      //catch é somente usado com o reject