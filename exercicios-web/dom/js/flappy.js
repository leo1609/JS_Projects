this.body = document.querySelector('body')  
const pontuacao = document.createElement('span')
      pontuacao.className = 'pontuacao'
      pontuacao.innerHTML = '0'
      body.appendChild(pontuacao)

//criei o passaro
this.passaro = document.createElement('img') 
     passaro.className = 'passaro'
     passaro.src = 'imgs/Angry Bird.ico'
     passaro.style.bottom = (innerHeight / 2) + 'px'
     body.appendChild(passaro)

function animarPassaro(){

    let getY = () => parseInt(this.passaro.style.bottom.split('px')[0])
    let setY = y => this.passaro.style.bottom = y + 'px' 

    //quando apertar a tecla o passaro vai voar
    window.onkeydown = e => this.voando = true
    window.onkeyup = e => voando = false
    
    //soma 4 ao eixo vertical 'y' se estiver voando,
    //porem tira -4 se estiver caindo 
    let novoY = getY() + (this.voando ? 4 : -4)
    //this.passaro.clientHeight - altura da imagem do passaro
    const alturaMaxima = innerHeight - this.passaro.clientHeight
    
    //os 'ifs' serve para o passaro nao sair da tela
    if(novoY <= 0) {
        setY(0)
    } else if (novoY >= alturaMaxima) {
        setY(alturaMaxima)
    } else {
        setY(novoY)
    }
}

function tamanhotubos(){
    const tubo1 = Math.random() * (innerHeight - this.tamanhoPassagem)
    const tubo2 = innerHeight - this.tamanhoPassagem - tubo1
    return {tubo1, tubo2}    
}

function criarColuna(tamanhoPassagem){
    this.tamanhoPassagem = tamanhoPassagem 
    const altura = tamanhotubos()

    divColuna = document.createElement('div')
    //divColuna.classList.add('coluna')
    //abaixo tambem adiciona classe
    divColuna.className = 'coluna'
        
    this.divTubo1 = document.createElement('div')
         divTubo1.classList.add('tubo')
         divTubo1.style.height = altura.tubo1 + 'px'

    this.divBoca1 = document.createElement('div')
         divBoca1.classList.add('boca')

    this.transparente = document.createElement('div')
         transparente.classList.add('transparente')
         transparente.style.height = tamanhoPassagem + 'px'

    this.divBoca2 = document.createElement('div')
         divBoca2.classList.add('boca')

    this.divTubo2 = document.createElement('div')
         divTubo2.classList.add('tubo')
         divTubo2.style.height = altura.tubo2 + 'px'

    divColuna.appendChild(divTubo1)
    divColuna.appendChild(divBoca1)
    divColuna.appendChild(transparente)
    divColuna.appendChild(divBoca2)
    divColuna.appendChild(divTubo2)

    this.body.appendChild(divColuna) 

    return divColuna
}


function iniciar(quantidadeColunas, tamanhoPassagem, velocidade){
    const tamanhoTela = (innerWidth + 120)
    const colunasEsuasDistancias = []

    for(let elemento = 0; elemento < quantidadeColunas; elemento++){
        const coluna = criarColuna(tamanhoPassagem) 
        const distanciaDaPrimeiraColuna = elemento * (tamanhoTela / quantidadeColunas)
        const passo = 0
        colunasEsuasDistancias.push({coluna, distanciaDaPrimeiraColuna, passo, velocidade})
    }

    movercoluna(colunasEsuasDistancias)
}

function estaoSobrepostos(passaro, tubo, boca){
    const p = passaro.getBoundingClientRect()
    const t = tubo.getBoundingClientRect()
    const b = boca.getBoundingClientRect()
 
    const horizontalTubo = p.left + p.width >= t.left
       && t.left + t.width >= p.left

    const verticalTubo = p.top + p.height >= t.top
       && t.top + t.height >= p.top

    const horizontalBoca = p.left + p.width >= b.left
       && b.left + b.width >= p.left

    const verticalBoca = p.top + p.height >= b.top
       && b.top + b.height >= p.top
       
    return (horizontalTubo && verticalTubo) || (horizontalBoca && verticalBoca)
} 

function colidiu(objetoColuna){
    const tubo1 = objetoColuna.coluna.children[0]
    const boca1 = objetoColuna.coluna.children[1]
    const boca2 = objetoColuna.coluna.children[3]
    const tubo2 = objetoColuna.coluna.children[4]

    let colidiu = estaoSobrepostos(this.passaro, tubo1, boca1)
               || estaoSobrepostos(this.passaro, tubo2, boca2)

    return colidiu
}

function pontuar(percursoPercorrido){
    const meio = innerWidth / 2
    if(percursoPercorrido <= meio && percursoPercorrido >= (meio - 5)){
        const ponto = document.querySelector('.pontuacao')
        let pontuacao = 1 + parseInt(ponto.innerHTML) 
        ponto.innerHTML = pontuacao.toString()
    }
}

function animar(objetoColuna){
    const percursoPercorrido = innerWidth + objetoColuna.distanciaDaPrimeiraColuna - objetoColuna.passo
    objetoColuna.coluna.style.left = percursoPercorrido + 'px'
    pontuar(percursoPercorrido)
    if(percursoPercorrido <= -120){
        const altura = tamanhotubos()
        //firstElementChild - refere-se a divTubo1
        objetoColuna.coluna.firstElementChild.style.height = altura.tubo1 + 'px'
        //lastElementChild - refere-se a divTubo2
        objetoColuna.coluna.lastElementChild.style.height = altura.tubo2 + 'px'
        objetoColuna.passo = objetoColuna.distanciaDaPrimeiraColuna   
    }
    objetoColuna.passo = objetoColuna.passo + 5
    return objetoColuna
}


function movercoluna(colunasEsuasDistancias){
    const velocidade = colunasEsuasDistancias[0].velocidade  

    colunasEsuasDistancias.forEach((objetoColuna, index) => {
        colunasEsuasDistancias[index] = animar(objetoColuna) 
       const bateu = colidiu(colunasEsuasDistancias[index]) 
       if(bateu){
            clearInterval(temporizador)
       }
    })

    //tenho que chamar animarPassaro de dentro de moverColuna, pois
    //aqui dentro desta função tem uma recursão infinita e cada vez
    //que que a recursão passa, animarPassaro é chamado 
    animarPassaro()

    const temporizador = setInterval(() => {
        clearInterval(temporizador)
        movercoluna(colunasEsuasDistancias)
    }, velocidade)   
}

// 1 - quantidade de colunas
// 2 - tamanho da passagem das colunas em pixel
// 3 - velocidade da tela (quanto mais proximo de '0', mais rapido)
iniciar(3, 200, 30)


