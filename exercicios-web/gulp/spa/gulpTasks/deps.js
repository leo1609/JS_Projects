const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

//esse arquivo deps.js cria um arquivo das dependencias necessarias para a pasta 'build'
gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    //arquivo que sera importado para essa task
    //esta entre array porque sera talvez necessario importar 
    //mais arquivos aqui
    return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css'])
        //minifica o arquivo e seus comentarios, porem o arquivo ja esta
        //minificado entao se eu minifica-lo novamente pode gerar bug
        //.pipe ( uglifycss ( { "uglyComments" : true } ) )
        //cocatena os arquivos, se houver mais de um,
        // em uma so e grava no arquivo criado abaixo
        .pipe(concat('deps.min.css'))
        //cria essas pastas e envia  o arquivo gerado para ela todo concatenado
        //do node_modules para a build 
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    //pego todos arquivos de fonts
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
    .pipe(gulp.dest('build/assets/fonts'))
})





