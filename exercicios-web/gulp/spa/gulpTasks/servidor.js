const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    //se houver mudanca em arquivos html, disparara a task 'app.html'
    //do arquivo app.js 
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('servidor', ['monitorarMudancas'], () =>{
    return gulp.src('build')
        .pipe(webserver({
            //fica dando reload na pagina
            livereload: true,
            port:8080,
            //quando executar o build e startar o servidor, ou seja executar
            //o comando 'npm start' ou 'gulp' na pasta 'spa' no terminal, 
            //ele abre o browser tambem
            open: true
          }))
})