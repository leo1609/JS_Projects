 const color = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form:'#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){
        //se existir a tag return tag senao padrao
        //o this ja tem um for de verificação
        return this[tag] ? this[tag] : this.padrao
    }
 }

//como aparecer o nome da tag associada a cada caixa na tela
//peguei a box que esta marcado com a classe css .tag
document.querySelectorAll('.tag').forEach(box => {

    //'tagname é o nome da tag(se é uma div, p, span, ul, ol)
    //'tolowercase()' coloca todas as letras pra minusculas
    const tagname = box.tagName.toLowerCase()

    //apliquei uma cor na borda da box
    box.style.borderColor = color.get(tagname)

    //cada tag pode ter uma lista de classes.
    //Esta contido na lista de classes de cada elemento 'tag' 'box' o
    //nolabel ?, senao entra no if
    //Na tag 'p' eu coloquei um nolabel para exemplo. Percebe-se que 
    //ela nao tem um box
    if(!box.classList.contains('nolabel')){
        //estou criando um novo box ou tag chamado label, diretamente
        //pelo js
         const label = document.createElement('label')
         //coloquei cor no fundo desse novo box 'label'
         label.style.backgroundColor = color.get(tagname)
         //estou colocando o nome da tag box 'tagname' dentro da
         //nova box 'label'
         label.innerHTML = tagname
         //estou inserindo a box 'label' antes do primeiro elemento contido
         //na box que esta marcado com a classe '.tag'. Box dentro da box
         //se eu trocar o '0' pelo '1' ele fica na frente do elemento
         box.insertBefore(label, box.childNodes[0])
    }
})