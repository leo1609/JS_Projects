//Neste caso o webpack vai procurar o jquery dentro de
//da pasta 'node_modules' e vai referencia-lo pela variavel '$'
import $ from 'jquery'

//definindo array onde sera inserido varias funcoes
const loadHtmlSuccessCallbacks = []

//esta funcao inserira as funcoes no array
//ela pode ser exportada e para um arquivo adiciona-la, é só
//fazer o import dela no arquivo, como por exemplo sera feito 
//no arquivo cityButtons.js
export function onLoadHtmlSuccess(callback){
    //se a funcao(callback) nao estiver no array(loadHtmlSuccessCallbacks)
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        //ensiro a callback no array
        loadHtmlSuccessCallbacks.push(callback)
    }
}


//funcao que vai pegar os atributos 'wm-include' do body
//da 'index.html'
function loadIncludes(parent){
    //se o parametro for vazio, o parametro recebe o 'body' todo
    if(!parent) parent = 'body'
    //senao, executa o codigo abaixo
    //aqui eu configurei o parent para usar a funcao find(de busca) do jquery
    //para buscar o atributo 'wm-include' dentro do parametro(parent)
    $(parent).find('[wm-include]').each(function(i, e){
        //apos pegar o wm-include(e) da lista de wm-include, eu pego
        //o valor do atributo e referencio na constante url
        const  url = $(e).attr('wm-include')
        //chamada da funcao ajax do jquery
        $.ajax({
            url,
            //se a chamada for bem sucedida
            success(data){
               //insiro os dados do arquivo(data) que a url indicou no html do wm-include(e)
               //que esta na pagina index.html
               $(e).html(data)
               //agora excluo o atributo para que nao aja nehuma nova 
               //interpretacao dela.
               //se caso eu clicar no botao da pagina e chamar novamente 
               //essa funcao o wm-include nao existira e entao nao sera chamada
               //novamente para abrir denovo na pagina, pois ja estara aberta
               $(e).removeAttr('wm-include')

               //Quando faco uma chamada ajax ele nao executa arquivos JS da pagina que
               //o ajax esta montando dentro do body. Portanto por exemplo, para que 
               // o arquivo cityButtons.js seja executado e para que os botoes sejam inseridos dentro
               //do arquivo galery.html, é preciso que a chamada de criacao dos botoes sejam
               //feitas dentro deste ajax, porque por padrao o ajax nao deixa um outro arquivo JS ser executado
               //pelo arquivo que o ajax esta querendo montar. Por este motivo que esta sendo feito a chamada
               //das funcoes(callback) abaixo.

               //Aqui estou passando como parametro os dados(data) pra todas as funcoes(callback)
               //que tem no array 'loadHtmlSuccessCallbacks' e fazendo a chamada delas.
               loadHtmlSuccessCallbacks.forEach(callback => callback(data))

               //faco a chamada recursiva, porque pode existir um wm-include dentro
               //dentro deste wm-include(e), entao passo ele como parametro pra funcao
               //para executar esse wm-include que esta dentro do outro
               loadIncludes(e)

            }
        })
    })
}
//faco a chamada da funcao sem parametro para que ele possa 
//procurar os wm-includes em todo o 'body'
loadIncludes()