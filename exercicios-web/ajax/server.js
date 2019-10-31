const bodyParser = require('body-parser')
const express = require('express')
//a const app foi instanciado pelo express
const app = express()

//esta função middleware ('static()') é usado para indicar ao js que todos os arquivos
//dentro da pasta ajax serão arquivos estaticos. Se eu comentar a linha abaixo
//ele nao executarta os outros arquivos desta pasta ajax
app.use(express.static('.'))
//este outro middleware ('urlencoded()') é responsavel por ler os dados e transformar
//algum formato de submit de um formulario em um objeto. Desta forma
//ira servir pra qualquer requisição que chegar no servidor, porem 
app.use(bodyParser.urlencoded({extended: true}))
//se vir ex: com '/teste', quer dizer que o middleware é exlusivo para 
//requisições com este endereço 
//app.use('/teste', bodyParser.urlencoded({extended: true}))
//este outro ('json()') serve pra quando chegar um json, ele transforma em um objeto 
app.use(bodyParser.json())
//todo middleware tem req - require(requisição) e res - response(resposta)
//neste middleware (get()) somente funcionara para este endereço e retornara
//como responsta um 'ok' - res.send('ok') 
//a linha abaixo é um exemplo d professor e nao sera usada neste servidor
//app.get('/teste', (req, res) => res.send('ok'))

//importando multer - serve para interpretar o formulario do arquivo do upload
const multer = require('multer')

//a funcao 'multer.diskStorage()' recebe um objeto que serve pra configurar tanto
//o nome da pasta que sera baixado o arquivo quanto o endereco
const storage = multer.diskStorage({
     
    destination: function(req, file, callback){
        //'./upload' - é um segundo parametro que significa que o arquivo sera armazenada nesta pasta.
        //preciso cria-la antes de envia-la
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        //aqui a callback recebe o nome original + a data atual
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

//a funcao upload ira receber o arquivo e envia-lo para o storage para armazenagem
const upload = multer({storage}).single('arquivo')

//rota que recebe uma requisicao do tipo post e executara a funcao upload enviando
//o arquivo para ser armazenado pela funcao 'storage'
app.post('/upload', (req, res) =>{
    upload(req, res, err => {
        if(err){
            return res.end('ocorreu um erro.')
        }
        res.end('concluido com sucesso.')
    })
})

//post do fetch 2 e axios 2 e jqueryAjax
app.post('/formulario', (req, res) => {
    //preciso estar com o bodyparser configurado para isso funcionar
    res.send({
        ...req.body,
        id: 1
    })
})

//get axios 2
app.get('/parOuImpar', (req, res) => {
    //formas de receber dados no front end pelo express
    //req.body
    //req.query
    //req.params
    const par  = parseInt(req.query.numero) % 2 === 0
        res.send({
            resultado: par ? 'par' : 'impar'
        })
})


//este  middleware (listen()) indica ao node pra ele ficar ouvindo na
//porta 8080. Para iniciar o node é so escrever no terminal 'npm start'
//Ele iniciara utilzando o 'nodemon' como foi declarado no arquivo package.json
app.listen(8080, () => console.log('Executando...'))

//o node esta ouvindo na porta 8080 e neste caso, a pagina carregada nesta porta
//é a do index.html, porque ela é o main da aplicação que esta escrito no
//package.json 

