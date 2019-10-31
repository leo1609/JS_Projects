const gulp = require('gulp')

//a task default é aporta de entrada de um script feito em gulp
//'default' é o nome da task e o 2º paramentro e uma funcao que sera 
//executada quando se chamar a task 
gulp.task('default', () => {
    console.log('Ok!!!!!!!!!!')
    //chamada para execucao destas outras tasks(copiar e fim)
    gulp.start('copiar', 'fim')
})

//os parametros em array significa que a task copiar é dependente de outras tasks e
// somente sera iniciada
//apos a execucao de outras tasks(antes1 e antes2) terminar de ser executadas. 
gulp.task('copiar', ['antes1', 'antes2'], () => {
    //quais os arquivos que serao o insumo pra execucao do passo a passo pra execucao
    // da task. Pode ser um arquivo, um array de arquivo ou uma expressao de arquivo
    //abaixo é o mesmo que a linha mais abaixo
    //gulp.src('pastaA/*.txt')
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //abaixo pega o que esta dentro da pasta dentro de pastaA e os arquivos da pastaA
    gulp.src('pastaA/**/*.txt')
    //trasformacao é uma funcao que nao existe(é um exemplo)
    //neste caso serve pra mostra que os arquivos da pasta seleciona no src
    //podem ser transformados pela execucao da funcao pipe
    //.pipe(transformacao1())
    //.pipe(transformacao2())
    //aqui coloco os arquivos transformados na pasta escolhida e crio esta pasta
    .pipe(gulp.dest('pastaB'))

})

gulp.task('antes1', () => {
    console.log('Antes 1!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!')
})

//A task pode nao ter funcao dentro
gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim 1!')
})

gulp.task('fim2', () => {
    console.log('Fim 2!!')
})