const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const ts = require('gulp-typescript')

//aqui eu crio o projeto de interpretacao e indico a pasta onde esta
//escrito as configuracoes do projeto
const tsProject = ts.createProject('tsconfig.json')

gulp.task("default", () => {
    //start executa de forma assincrona
    gulp.start("concat");
  });

gulp.task("converter", () => {
    //nao preciso especificar os arquivos dentro de src porque ja foi feito
    //isso dentro de tsconfig.json
    return tsProject
        .src()
        //tsProject() vai compilar o ts pra js
        .pipe(tsProject())
        .pipe(gulp.dest("build"));
});

//tenho que encadear o 'converter' aqui depois do 'concat' para executar um apos o outro, porque
// se eu coloca-lo no 'start' junto com o 'concat' nao da certo, eles nao 
//executariam um apos o outro mesmo parecendo que sim
gulp.task("concat", ["converter"],  () => {
    return gulp
        .src("build/**/*.js")
        .pipe(
        babel({
            comments: true,
            presets: ["env"]
        })
        )
        .pipe(uglify())
        .on("erro", function(erro) {
        console.log(erro);
        })
        .pipe(concat("typescript.min.js"))
        .pipe(gulp.dest("build"));
});














