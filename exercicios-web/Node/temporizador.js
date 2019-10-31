//para fazer o temporizador eu baixei na pasta exercicios.js
//no terminal npm i node-schedule@1.3.0 -E
const schedule = require('node-schedule')


// '*/5' executa de 5 em 5 segundos
// '*' ignora os minutos
// '17' apos as 17:00 horas se fosse '3' executaria apos as 3:00 horas
// '*' ignora o dia do mes
// '*' ignora o mes
// '2' executa na terca feira, se fosse '0' executaria no domingo
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 2', function(){
    //mostara os segundos de 5 em 5
    console.log('executando tarefa1', new Date().getSeconds())
})

//configurador padrao
setTimeout(() => {
    //forma de cancelar a atrefa em 20 segundos 20000
    tarefa1.cancel()
    console.log('cancelando tarefa1')
}, 20000)

//regra de recorrencia
//maneira de colocar regras na maneira que voce desejar 
//que horas sera executado
const regra = new schedule.RecurrenceRule()
//executa de segunda '1' a sexta '5'
regra.dayOfWeek = [new schedule.Range(1, 5)]
//executa na hora 17:00 
regra.hour = 17
//executa no segundo 30 
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('executando tarefa2', new Date().getSeconds())
})
