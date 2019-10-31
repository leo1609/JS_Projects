const gulp = require('gulp')
//sera usado pra checar uma variavel de ambiente
const util = require('gulp-util')
const sequence = require('run-sequence')

//o build foi quebrado em mais tres arquivos pra ficar melhor entendivel
//portanto esta sendo feito a importacao deles aqui
//poderia fazer todos aqui, mas ficaria menos entendivel
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    //production é uma variavel de ambiente, ou seja é uma flag usada no terminal,
    //que foi criada no script do arquivo package.json, que se eu executar o comando
    //'gulp --production' ou 'npm run build' na pasta 'spa', a condicao abaixo sera executada, ou seja o processo de gulpificar
    //sera feito sem estartar o servidor. Porem se executar somente 'gulp' ou 'npm start', como feito nos exercicios anteriores, 
    //estartara o servidor
    if(util.env.production){
        //primeiro executo deps depois o arquivo app de forma sequencial.
        //Se houver problema com o start, pois ele executa de forma paralela,
        //usaremos o sequence.
        //Ocorreu sim um problema, pois a execucao foi em paralelo e o broser nao abriu certo,
        //entao é necessario usar o sequence para nao houver mistura de execucao de arquivos.
        sequence('deps', 'app')
        //gulp.start('deps', 'app')
    }else {
        sequence('deps', 'app', 'servidor')
        //gulp.start('deps', 'app', 'servidor')
    }
})





