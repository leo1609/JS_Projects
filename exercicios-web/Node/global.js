//console.log(global)
//o node tem um objeto global chamado global
//no browser chama window

//objeto congelado impossivel muda lo
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'estou em todos os lugares'
    },
    nome: 'sistema legal'
})