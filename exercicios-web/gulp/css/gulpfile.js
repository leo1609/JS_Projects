const gulp = require('gulp')
const sass = require('gulp-sass')
//uglifycss é diferente de uglify
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


gulp.task('default', ['copiarHtml'], () => {
    //dentro deste arquivo tem as referencia de todos os outros para
    //gerar o css de todos eles, nao precisando fazer um por um
    gulp.src('src/sass/index.scss')
    //
    .pipe(sass().on('error', sass.logError))
     //uglyComments": true - deixa os comentarios menores o possivel
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(concat('estilo.min.css'))
    //dentro da pasta css no terminal, eu executo 'gulp' e entao ele
    //cria a pasta build e outra pasta css dentro de build onde
    //sera gerado os arquivos css a partir do sass
    .pipe(gulp.dest('build/css'))

})

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
})