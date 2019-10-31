//fs é  um modulo do node 'fireSistem'
const fs = require('fs')

//__dirname é uma constante que esta presente em 
//todos os modulos do none, que representa o diretorio
//onde esta o diretorio atual
//nao é preciso dessa forma passar todo o endereço absoluto
const caminho = __dirname + '/arquivo.json'

//sincrono
//o sistema fica parado ate ler o arquivo inteiramente
//readfileSinc() é uma função do modulo fs do node 
//que le arquivo de forma sincrona do caminho especificado
//mas retorna o arquivo lido em forma do utf-8
//no canto embaixo e a esquerda da tela  ve se a forma do encode
//que esta sendo usado para o node traduzir o que esta sendo 
//programado 
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
//(err, conteudo) são parametros padrões da callback da função readFile que irão receber
//o conteudo do arquivo e algum erro que houver 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    //a variavel config só funciona se receber um objeto
    //conteudo é uma string porque recebe um json
    //portanto devo transforma lo em um objeto
    //pelo json.parse
    const config = JSON.parse(conteudo)
    //aqui vai imprimir tanto o hosto quanto a porta do arquivo lido
    console.log(`${config.db.host}: ${config.db.port}`)
})

//forma simples de ler o arquivo de modo sincrono
const config = require('./arquivo.json')
console.log(config.db)

//percebe se que a função readFile vai ser lida depois
//da forma sincrono acima, porque ela é executada de forma assincrona
//ou seja, a função chamou o arquivo que começou a ser
//carregado e então continuou a execução do programa
//quando o arquivo terminou de ser carregado ele imprimiu o 
//resultado mais atraso que o primeiro. Por tras dessa
//execução assincrona existe uma thread do js imple-
//mentado no core principal do node chamado eventLoop
//é ele que garante a assincronicidade do sistema


//readdir()é usado para pegar todas as pastas que estao
//eu programei no node e estao salvas na coluna da direita da tela
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta ...')
    console.log(arquivos)
} )

