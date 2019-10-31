import $ from 'jquery'

//importou do arquivo 'includes.js' a funcao 'onLoadHtmlSuccess'
//que estava la no arquivo marcada com export
import {onLoadHtmlSuccess} from '../core/includes'

//duracao termporal das imagens
const duration = 300

function filterByCity(city){
    $('[wm-city]').each(function(i, e){
        //se city for nulo ou o valor de 'wm-city' for igual a city a
        //constante isTarget é true 
        const isTarget = $(this).attr('wm-city') === city
                         || city === null
        if(isTarget){
            //quando for exibir as imagens tenho que remover as classes
            //('d-none') do parente da imagem, que no caso é a div com
            //as colunas, para reorganizar o grid onde esta 
            //as imagens senao as imagens ficaram todas bagunçadas
            $(this).parent().removeClass('d-none')
            //exibi o elemento
            $(this).fadeIn(duration)
        }else{
            //esconde o elemento
            $(this).fadeOut(duration, () => {
                //retorna as classes de colunas para o parente 'div' da imagem
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function(){
    
    //'Set' - cria um array sem repeticao de elemento
    const cities = new Set

    $('[wm-city]').each(function(i, e){
        //é adiciona em cities os valores dos atributos sem repeti-los
        cities.add( $(e).attr('wm-city') )
    })

    //'Array.from(cities)' - converto o 'set' em 'array'
    //essa funcao criara os botoes
    const btns = Array.from(cities).map(city => {
        //criando a tag button com suas classes e o conteudo do botao sera
        //o nome da cidade que estou percorrendo(city)
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        //evento que sera disparado quando houver click no botao
        btn.click(e => filterByCity(city))
        return btn
    })
    //criando botao que ira que ira apresentar todas as cidades
    //'Todas' é o label do botao
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas')
    //evento que quando clicado chamara todas as fotos das cidades, por
    //isso passo como parametro o null
    btnAll.click(e => filterByCity(null))

    //inserindo 'btnAll' no array de botoes
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn', 'btn-group'])

    //insiro os botoes dentro da div 'btnGroup'
    btnGroup.append(btns)

    $(this).html(btnGroup)
}

//esta funcao 'onLoadHtmlSuccess' recebera a funcao que construira os botoes
onLoadHtmlSuccess(function(){
    // A funcao 'cityButtons' - recebe a div onde sera inserido os botoes
    $('[wm-city-buttons]').cityButtons()
})




