//desta forma executando o comando no terminal 'npm start && node dist/main.js'
//o arquivo principal acessa os arquivos modulo A e B, porque estou importanto o 
//arquivo moduloA aqui, ou seja quando executo o webpack ele acessa o principal.js e imprimi bom dia !!!!,
//depois o pessoa.js, depois o moduloA, que imprimira 'ola eu sou o modulo BBBBB', que este entao acessa o moduloB  

import './modulos/moduloA'

//o node nao conhece esse sistema de modulos export defaut
//somente o 'module.export = class Pessoa',
//mas o webpack conhece
export default class Pessoa{
    cumprimentar(){
        return 'bom dia!!!!!!!!'
    }
}

