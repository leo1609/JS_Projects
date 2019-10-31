//opera em cima de valores
//diferente do foreach que opera emcima de indices

//na string ele pega a letra
for(let letra of "cod3r"){
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promise']
//no array o 'for in'  pega o indice
for(let i in assuntosEcma){
    console.log(i)
}
//aqui retorna os valores
for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

//faz o destruction
for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}
//faz a mesma coisa que acima
for(let [ch, vl] of assuntosMap){
    console.log(ch, vl)
}

const s = new Set([a = 'd', 'b', 'c'])

for(let letra of s){
    console.log(letra)
}

