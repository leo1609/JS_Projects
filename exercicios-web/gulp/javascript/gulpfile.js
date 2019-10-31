const gulp = require('gulp')
//serve pra concatenar varios arquivos em um so
const concat = require('gulp-concat')
//compacta o arquivo tirando espacos em branco e mudando nome de varias se possivel
const uglify = require('gulp-uglify')
//
const babel = require('gulp-babel')

//por padrao é bom colocar o return mas nao é necessario
gulp.task('default', () => {
    //pega todos os arquivos com extensao .js e subpastas dentro da pasta src
     return gulp.src('src/**/*.js')
     //o filtro babel é uma funcao mais atiga do js que o uglify que faz a mesma coisa que o babel.
     // serve pra fazer traducao de um programa feito com uma versao js mais nova
     //pra ser suportado por browsers que somente suportam versoes js mais antigas 
     .pipe(babel({
         //tira os comentarios
         comments: false,
         //minimiza o programa como o uglify(), se estiver usando o uglify nao preciso usar essa propriedade
         //minified: true,
         //presets: ["env"] especifica automaticamente a versao js sem precisar fazer isso manualmente
         //neste caso ele pega todas as versoes sem a necessidade de elas serem escritas aqui
         presets: ["env"]
     }))
     //compacta ainda mais o codigo alem do babel e o torna quase ilegivel
     //é uma funcao mais nova do js portanto tem js antigo(como este que estou usando) que nao suporta ele.
     //para este uglify ser usado aqui tenho que usar o babel junto senao ele nao funciona
     .pipe(uglify())
     //emiti erro quando ele acontece. É importante porque esse 'error' traz informacoes sobre o erro, que 
     //de outra forma seria impossivel saber
     .on('error', function (err) {console.log(err)} )
     //concatena varios arquivos e cria arquivo novo com o programa compactado
     //'codigo.min.js' é o nome do arquivo. O 'min' mostra que o arquivo foi compactado
     .pipe(concat('codigo.min.js'))
     //cria a pasta build dentro da pasta que vc esta no terminal. Ele coloca o arquivo
     //gerado mimificado dentro desta build
     .pipe(gulp.dest('build'))
})