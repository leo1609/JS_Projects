var numero = 1
{
    var numero = 2
    console.log('dentro=', numero)
}
//fuja do escopo global, da problema, isto é um exemplo
//var tem escopo global
console.log('fora=', numero)
