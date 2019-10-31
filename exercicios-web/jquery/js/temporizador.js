//este tipo de funcao serve pra proteger a variavel '$'
(function ($){
    $.fn.temporizador = function (opcoes){

        //valores padroes. Senao passar nehum parametro o
        //extend passa os valores abaixo como padrao
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!!!!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        //vira como padrao ou como parametro
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')

        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade,
            separadorMinuto, segundoDezena, segundoUnidade,  mensagem)
   
        //regex é grupo de captura. Extrair uma data no padrao abaixo
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        //pega a hora separando hora de minuto de segundo enfia em um array
        //0: "18:00:00"
        //1: "18"
        //2: "00"
        //3: "00"
        const horarioAlvo = regex.exec(opcoesFinais.horario)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            //transforma a hora que foi passado no atributo horario de string para
            //hora 'new Date()' em milisegundos 
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])
            //diferencaEmMili é o tempo que falta pra acabar no relogio da tela
            const diferencaEmMili = alvo.getTime() - agora.getTime()
            
            if(diferencaEmMili >= 0){
                //regex.exec trasnforma a data em mili pra tipo de data configurada mais acima
                //toISOString() serve para nao levar em consideracao o time zone
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                
                //peguei o 1º digito da hora.
                //(o indice 1º do array é as horas[1] e [0] é o 1º digito das horas)
                horaDezena.html(diferenca[1][0])
                //peguei o 2º digito da hora
                //(o indice 1º do array é as horas[1] e [1] é o 2º digito das horas)
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }else{
                //quando o tempo chegar em '0' o temporizador para
                //é isso que essa funcao faz 
                clearInterval(temporizador)
            }
        },1000)

        return this
    }
})(jQuery)