const gulp = require('gulp')
//minifica o js tambem se necessario
const babel = require('gulp-babel')
//minifica o js
const uglify = require('gulp-uglify')
//traduz o scss para css
const sass = require('gulp-sass')
//minifica o css
const uglifycss = require('gulp-uglifycss')
//concatena arquivos em um só arquivo
const concat = require('gulp-concat')
//minifica o html
const htmlmin = require('gulp-htmlmin')

//task chamada 'app' que dependera de outras dependencias executadas antes
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.imgs'])

gulp.task('app.html', () => {
    //pega todos os arquivos com extensao html na pasta src
    return gulp.src('src/**/*.html')
        //retira todos os espacos em branco que tenha na linha e minifica
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
})

gulp.task('app.css', () => {
    //index.scss tem todos os imports dos outros arquivos .scss 
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        //concatena todos os arquivos scss neste unico arquivo abaixo
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('app.js', () => {
    //pega todos os arquivos js dentro da pasta js em src 
    return gulp.src('src/assets/js/**/*.js')
        //'babel' 'env' -  minificara os arquivos em todas as versoes js automaticamente 
        .pipe(babel( {presets: ['env'] } ))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
})

gulp.task('app.imgs', () => {
    //pega todos os arquivos com todos os tipos de extensoes
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
})



