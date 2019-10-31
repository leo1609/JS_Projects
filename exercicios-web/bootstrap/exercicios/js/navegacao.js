(function () {
    function navegarViaAjax(hash) {
        //se nao houver endereco retorna nada, se houver vai para proxima linha
        if (!hash) return
        console.log('hash: ', hash)
        const link = document.querySelector(`[wm-link='${hash}']`)
        console.log('link: ',link)
        if(!link) return

        const destino = document.querySelector('[wm-link-destino]')
        console.log('destino:',destino)
        //retiro o '#' do endereco
        const url = hash.substring(1)
        console.log('url: ',url)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                //pega o html da url e coloca na constante 'destino' que é a tag 'main' da 'index.html'
                destino.innerHTML = html
                //executa tudo o que estiver dentro da tag script da pagina que 
                //foi chamada.
                //Como algumas paginas html nao tem a tag script, ocorrera erro quando chamadas, 
                //portanto é necessario chamar a funcao eval somente se o resultado existir 
                //para nao ocasionar erro
                const resultado = html.match(/\<script\>([\s\S]*)\<\/script\>/)
                if(resultado && resultado.length >= 2){
                    eval(resultado[1])
                }  
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                //todos 'link.attributes['wm-link'].value' serao estanciados
                //nos atributos criados 'href' dentro das tags
                link.href = link.attributes['wm-link'].value
                console.log('link.href: ',link.href)
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            //'hash' é o endereco com tudo menos o que tem para tras do hash '#'
            navegarViaAjax(primeiroLink.hash)   
        }
    }
    //evento que identifica click, se houver click em icone a funcao dispara
    window.onhashchange = e =>{
        console.log('location: ', location.hash)
        navegarViaAjax(location.hash)
    } 
    
    configurarLinks()
    navegacaoInicial()
})()