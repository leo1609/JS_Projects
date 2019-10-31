//o node so conhece o const Pessoa = require('./pessoa')
//nao conhece o 'import' mas o webpack conhece
import Pessoa from './pessoa'
//importa o arquivo 'css'. Preciso cadastrar o loader no arquivo 'webpack.config.js'.
//Apos executar o webpack, pode-se verificar que o css foi importado ao 'principal.js' 
//da pasta 'public'. Para verificar isso é so fazer o comando 'control + F' na principal.js
//da public, que abrira o campo de procura de palavras, entao é só escrever 'background-color',
//que entao pode-se verificar onde o webpack escreveu o 'estilo.css' no arquivo 'principal.js' do 'public'.
//import './assets/css/estilo.css'

//desta forma o webpack acessa por padrao o arquivo que eu criei 'index.js' de assets. Nao preciso escrever ele aqui.
//No index tem os imports dos arquivos .css e .scss
import './assets'
const atendente = new Pessoa
console.log(atendente.cumprimentar())