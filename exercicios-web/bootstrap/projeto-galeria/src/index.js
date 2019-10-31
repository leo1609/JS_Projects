//arquivos SASS
import './scss/index.scss'
//executando o comando 'npm run build' no terminal dentro da pasta
//'projeto-galeria', o webpack criara a pasta build para
//a producao do software.
//Se for o comando 'npm start', ele somente chamara esta pasta para
//ser executada 

//dependencias
import 'jquery'
import 'bootstrap'

//Arquivos JS
//apos ler o webpack ler esse arquivo, ele ira ler os imports abaixo
import './js/core/includes.js'
import './js/plugins/cityButtons.js'